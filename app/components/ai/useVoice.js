"use client";

import { useCallback, useEffect, useRef, useState } from 'react';

// Web Speech API has no standard "gender" field on a voice, so gender
// selection is a best-effort heuristic matched against common voice names
// shipped by Chrome/Edge/Safari/iOS across platforms.
const FEMALE_VOICE_HINTS = [
  'female', 'samantha', 'victoria', 'zira', 'susan', 'karen', 'moira', 'tessa',
  'fiona', 'aria', 'jenny', 'salli', 'joanna', 'google us english', 'google uk english female'
];
const MALE_VOICE_HINTS = [
  'male', 'daniel', 'david', 'alex', 'fred', 'george', 'mark', 'guy', 'ryan',
  'google uk english male'
];

function scoreVoice(voice, hints) {
  const name = voice.name.toLowerCase();
  return hints.some((hint) => name.includes(hint)) ? 1 : 0;
}

function pickVoice(voices, gender) {
  if (!voices.length) return null;
  const englishVoices = voices.filter((v) => v.lang?.toLowerCase().startsWith('en'));
  const pool = englishVoices.length ? englishVoices : voices;
  const hints = gender === 'male' ? MALE_VOICE_HINTS : FEMALE_VOICE_HINTS;
  const ranked = [...pool].sort((a, b) => scoreVoice(b, hints) - scoreVoice(a, hints));
  return ranked[0] || pool[0];
}

function detectStandalone() {
  if (typeof window === 'undefined') return false;
  return Boolean(window.matchMedia?.('(display-mode: standalone)').matches || window.navigator.standalone);
}

export function useVoice() {
  const [isListening, setIsListening] = useState(false);
  const [isStandalone, setIsStandalone] = useState(false);
  const [voiceGender, setVoiceGenderState] = useState('female');
  const recognitionRef = useRef(null);
  const voicesRef = useRef([]);

  const recognitionSupported =
    typeof window !== 'undefined' && Boolean(window.SpeechRecognition || window.webkitSpeechRecognition);
  const synthesisSupported = typeof window !== 'undefined' && 'speechSynthesis' in window;

  useEffect(() => {
    setIsStandalone(detectStandalone());
    const stored = window.localStorage.getItem('gorgona-voice-gender');
    if (stored === 'male' || stored === 'female') setVoiceGenderState(stored);
  }, []);

  useEffect(() => {
    if (!synthesisSupported) return undefined;
    const loadVoices = () => {
      voicesRef.current = window.speechSynthesis.getVoices();
    };
    loadVoices();
    window.speechSynthesis.addEventListener('voiceschanged', loadVoices);
    return () => window.speechSynthesis.removeEventListener('voiceschanged', loadVoices);
  }, [synthesisSupported]);

  const setVoiceGender = useCallback(
    (gender) => {
      if (!isStandalone) return;
      setVoiceGenderState(gender);
      window.localStorage.setItem('gorgona-voice-gender', gender);
    },
    [isStandalone]
  );

  const startListening = useCallback(
    (onResult) => {
      if (!recognitionSupported) return;
      const SpeechRecognitionImpl = window.SpeechRecognition || window.webkitSpeechRecognition;
      const recognition = new SpeechRecognitionImpl();
      recognition.lang = 'en-US';
      recognition.interimResults = false;
      recognition.maxAlternatives = 1;
      recognition.onresult = (event) => {
        const text = event.results[0][0].transcript;
        onResult?.(text);
      };
      recognition.onend = () => setIsListening(false);
      recognition.onerror = () => setIsListening(false);
      recognitionRef.current = recognition;
      setIsListening(true);
      recognition.start();
    },
    [recognitionSupported]
  );

  const stopListening = useCallback(() => {
    recognitionRef.current?.stop();
    setIsListening(false);
  }, []);

  const speak = useCallback(
    (text) => {
      if (!synthesisSupported || !text) return;
      window.speechSynthesis.cancel();
      const utterance = new window.SpeechSynthesisUtterance(text);
      const voice = pickVoice(voicesRef.current, voiceGender);
      if (voice) utterance.voice = voice;
      utterance.pitch = voiceGender === 'male' ? 0.95 : 1.05;
      utterance.rate = 1;
      window.speechSynthesis.speak(utterance);
    },
    [synthesisSupported, voiceGender]
  );

  const stopSpeaking = useCallback(() => {
    if (synthesisSupported) window.speechSynthesis.cancel();
  }, [synthesisSupported]);

  return {
    recognitionSupported,
    synthesisSupported,
    isListening,
    startListening,
    stopListening,
    speak,
    stopSpeaking,
    isStandalone,
    voiceGender,
    setVoiceGender
  };
}
