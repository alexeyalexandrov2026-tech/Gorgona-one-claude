"use client";

import { useEffect, useMemo, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import {
  CONSTELLATIONS,
  discoveryCategories
} from '../../../lib/discoveryCategories';
import { greeting } from '../../../lib/ai/language';
import { useAITheme } from '../ThemeProvider';
import { useLocale } from '../LocaleProvider';
import { useAI } from './AIProvider';
import { useVoice } from './useVoice';
import { getTranslation } from '../../../lib/i18n';
import { getSpeechLang } from '../../../lib/languages';
import { postChat } from './chatTransport';

// The ecosystem provider (dynamic index + intent + language) is imported lazily
// on first interaction so the data-heavy index never weighs down initial load.
let providerPromise = null;
function loadProvider() {
  if (!providerPromise) providerPromise = import('../../../lib/ai/provider');
  return providerPromise;
}

// ===========================================================================
// GORGONA ONE AI — the ecosystem intelligence surface (V2 foundation).
//
// A volumetric Canvas-2D particle field (three depth shells, glow sprites, a
// pulsing "thinking core", intent filaments) with the Gorgona One AI console at
// its heart. V2 technology is identical in both themes — only palette, lighting
// and blend mode change:
//   Dark  -> warm-graphite ground, additive gold glow (V2 language)
//   Light -> ivory ground, soft champagne bloom (V1 language)
//
// Phase 1 is visual + interaction only. The mic/voice and "AI intent" are
// simulated client-side; typed queries route by keyword match (matchCategories)
// to routes that already exist. The dynamic ecosystem index + real intelligence
// arrive in Phase 2; persistence + Discovery Room in Phase 3.
// ===========================================================================

// Per-theme visual language. Structure (shells, core, filaments, motion) is
// shared; only these values differ.
function palette(theme) {
  if (theme === 'light') {
    return {
      blend: 'source-over',
      coreAlpha: 0.16,
      coreColor: '210,170,110',
      labelBright: [140, 104, 52],
      particleAlphaMul: 0.9,
      // slightly deeper champagne so glow reads on ivory
      tint: (g) => [Math.round(g[0] * 0.82), Math.round(g[1] * 0.72), Math.round(g[2] * 0.5)]
    };
  }
  return {
    blend: 'lighter',
    coreAlpha: 0.3,
    coreColor: '255,226,158',
    labelBright: null, // use each cluster's bright glow color
    particleAlphaMul: 1,
    tint: (g) => g
  };
}

export default function GorgonaOneAI() {
  const router = useRouter();
  const { theme, isDark, toggle } = useAITheme();
  const locale = useLocale();
  const t = getTranslation(locale);
  const EXAMPLE_PROMPTS = t.ai.examplePrompts;
  const ai = useAI();
  const canvasRef = useRef(null);
  const wrapRef = useRef(null);
  const engineRef = useRef(null);
  const themeRef = useRef(theme);
  themeRef.current = theme;
  // Read fresh each animation frame (like themeRef) so the canvas-drawn
  // constellation labels stay in the current language without rebuilding
  // the particle field on every locale change.
  const labelRef = useRef(null);
  labelRef.current = (id) => t.ai.constellations[id]?.short || CONSTELLATIONS.find((c) => c.id === id)?.name || '';

  const [query, setQuery] = useState('');
  const [phase, setPhase] = useState('resting'); // resting | listening | intent
  const [matches, setMatches] = useState([]); // ecosystem entities
  const [activeCluster, setActiveCluster] = useState(null);
  const [openCluster, setOpenCluster] = useState(null);
  const [placeholder, setPlaceholder] = useState(EXAMPLE_PROMPTS[0]);
  const [greetingText, setGreetingText] = useState(() => greeting('en'));
  const voice = useVoice();
  const reqId = useRef(0); // guards against out-of-order async results

  // --- Real conversation state (the concierge chat lives on the homepage). ---
  // Restored from sessionStorage so the thread survives client-side navigation
  // and reloads within the visit; the /api/chat backend holds no session, the
  // full message list is sent each turn, so context is preserved end-to-end.
  const [messages, setMessages] = useState([]);
  const [sending, setSending] = useState(false);
  // Streaming draft: the assistant reply as it arrives token by token.
  // `null` = no draft (dots show while sending); '' = retracted/starting.
  const [draft, setDraft] = useState(null);
  const [suggestions, setSuggestions] = useState([]);
  const [speakReplies, setSpeakReplies] = useState(false);
  const chatRef = useRef(null);
  const inputRef = useRef(null);
  const chatReqId = useRef(0);

  useEffect(() => {
    try {
      const raw = sessionStorage.getItem('gorgona-home-chat');
      if (raw) {
        const data = JSON.parse(raw);
        if (Array.isArray(data.messages)) setMessages(data.messages);
        if (Array.isArray(data.suggestions)) setSuggestions(data.suggestions);
      }
      const spk = localStorage.getItem('gorgona-home-speak');
      if (spk === '1') setSpeakReplies(true);
    } catch { /* blocked storage - chat still works, just not persisted */ }
  }, []);

  useEffect(() => {
    try {
      sessionStorage.setItem('gorgona-home-chat', JSON.stringify({ messages, suggestions }));
    } catch { /* non-fatal */ }
  }, [messages, suggestions]);

  // Keep the newest message in view.
  useEffect(() => {
    const el = chatRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [messages, sending, draft]);

  function toggleSpeak() {
    setSpeakReplies((v) => {
      const next = !v;
      try { localStorage.setItem('gorgona-home-speak', next ? '1' : '0'); } catch { /* non-fatal */ }
      if (!next) voice.stopSpeaking();
      return next;
    });
  }

  // Send a message to the real concierge backend (/api/chat - OpenRouter).
  // `viaVoice` marks queries that arrived by microphone: those replies are
  // spoken aloud even when the always-speak toggle is off.
  async function sendMessage(text, { viaVoice = false } = {}) {
    const content = (text || '').trim();
    if (!content || sending) return;
    const id = ++chatReqId.current;
    const nextMessages = [...messages, { role: 'user', content }];
    setMessages(nextMessages);
    setQuery('');
    setSending(true);
    setSuggestions([]);
    runQuery(content); // light the matching constellation while we think
    try {
      const data = await postChat({
        messages: nextMessages.slice(-12),
        locale,
        onDelta: (chunk) => {
          if (id !== chatReqId.current) return;
          if (chunk === null) setDraft(''); // server retracted - reset draft
          else setDraft((prev) => (prev || '') + chunk);
        }
      });
      if (id !== chatReqId.current) return; // superseded by a newer send
      const reply = data?.reply || t.ai.aiNoReply;
      setMessages((prev) => [...prev, { role: 'assistant', content: reply }]);
      setSuggestions(Array.isArray(data?.suggestions) ? data.suggestions.slice(0, 3) : []);
      ai.recordQuery({ query: content, world: activeCluster, results: matches, selected: null });
      if ((speakReplies || viaVoice) && voice.synthesisSupported) {
        voice.speak(reply, getSpeechLang(locale));
      }
    } catch {
      if (id !== chatReqId.current) return;
      setMessages((prev) => [...prev, { role: 'assistant', content: t.ai.aiUnavailable }]);
    } finally {
      if (id === chatReqId.current) {
        setSending(false);
        setDraft(null);
      }
    }
  }

  function clearChat() {
    chatReqId.current++;
    voice.stopSpeaking();
    setMessages([]);
    setSuggestions([]);
    setSending(false);
    setDraft(null);
  }

  // Greet in the user's language (updated after mount to avoid hydration drift).
  useEffect(() => {
    setGreetingText(greeting(locale));
  }, [locale]);

  const reduceMotion = usePrefersReducedMotion();

  // Rotating placeholder prompts (paused while typing / not resting). Reset
  // immediately on a language switch so a stale prompt from the previous
  // language never lingers until the next rotation tick.
  useEffect(() => {
    if (query || phase !== 'resting') return;
    let i = 0;
    setPlaceholder(EXAMPLE_PROMPTS[0]);
    const id = setInterval(() => {
      i = (i + 1) % EXAMPLE_PROMPTS.length;
      setPlaceholder(EXAMPLE_PROMPTS[i]);
    }, 3600);
    return () => clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query, phase, locale]);

  // Particle engine lifecycle.
  useEffect(() => {
    const canvas = canvasRef.current;
    const wrap = wrapRef.current;
    if (!canvas || !wrap) return;

    const engine = createField(canvas, wrap, {
      reduceMotion,
      getTheme: () => themeRef.current,
      getLabel: (id) => labelRef.current(id)
    });
    engineRef.current = engine;

    const io = new IntersectionObserver(
      (entries) => engine.setVisible(entries[0].isIntersecting),
      { threshold: 0.05 }
    );
    io.observe(wrap);

    return () => {
      io.disconnect();
      engine.destroy();
      engineRef.current = null;
    };
  }, [reduceMotion]);

  // Repaint immediately on theme change (matters when reduced-motion is on).
  useEffect(() => {
    engineRef.current && engineRef.current.repaint();
  }, [theme]);

  // Push interaction state into the engine.
  useEffect(() => {
    engineRef.current && engineRef.current.setState({ phase, activeClusterId: activeCluster });
  }, [phase, activeCluster]);

  // Intent-first discovery over the dynamic ecosystem index (via the provider
  // seam). Async because the provider is lazy-loaded and models a future backend.
  async function runQuery(value) {
    const id = ++reqId.current;
    const { askEcosystem } = await loadProvider();
    const res = await askEcosystem({ query: value, locale });
    if (id !== reqId.current) return; // a newer query superseded this one
    setMatches(res.results);
    if (res.results.length) {
      setPhase('intent');
      setActiveCluster(res.world);
    } else {
      setPhase('resting');
      setActiveCluster(null);
    }
  }

  function onChange(e) {
    const v = e.target.value;
    setQuery(v);
    if (phase === 'listening') return;
    if (v.trim()) {
      runQuery(v);
    } else {
      reqId.current++; // cancel any in-flight query
      setMatches([]);
      setPhase('resting');
      setActiveCluster(null);
    }
  }

  // Submitting talks to the concierge. The previous behavior - router.push()
  // to the first index match - yanked the guest to another page on their very
  // first message, which is what kept breaking navigation/session flow.
  function onSubmit(e) {
    e.preventDefault();
    sendMessage(query);
  }

  // Selecting a surfaced result records the search + choice into the shared AI
  // session (visible later in the Discovery Room), then navigates.
  function selectResult(item) {
    ai.recordQuery({ query, world: activeCluster, results: matches, selected: item });
    router.push(item.href);
  }

  // Real microphone input via the same shared voice service used by the
  // Discovery Room / AI Dock concierge (app/components/ai/useVoice.js) - one
  // speech-recognition implementation, one permission flow, one fallback
  // behavior for both AI surfaces on the site.
  function toggleMic() {
    if (phase === 'listening') {
      voice.stopListening();
      setPhase(query.trim() ? 'intent' : 'resting');
      return;
    }
    if (!voice.recognitionSupported) return;
    setPhase('listening');
    setActiveCluster(null);
    setMatches([]);
    // Recognize speech as the site's current language, not always English.
    voice.startListening((text) => {
      setQuery(text);
      // A spoken question goes straight to the concierge and the reply is
      // spoken back - the full voice loop, not just transcription.
      sendMessage(text, { viaVoice: true });
    }, getSpeechLang(locale));
  }

  // If recognition ends on its own (silence, a recognized phrase, permission
  // denied, or a browser/network error) while we're still showing the
  // listening state, fall back out of it - runQuery() above already moves the
  // phase forward the moment a result arrives, so this only fires for the
  // "nothing came back" cases (no speech, denied, error).
  useEffect(() => {
    if (phase === 'listening' && !voice.isListening) {
      setPhase(query.trim() ? 'intent' : 'resting');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [voice.isListening]);

  const categoriesByCluster = useMemo(() => {
    const map = {};
    for (const cat of discoveryCategories) (map[cat.cluster] = map[cat.cluster] || []).push(cat);
    return map;
  }, []);

  const stateLine =
    sending
      ? '· · ·'
      : phase === 'listening'
      ? t.ai.listening
      : phase === 'intent' && matches.length
      ? `${t.ai.surfacing} · ${constellationName(activeCluster, t)}`
      : greetingText;

  const inChat = messages.length > 0;

  return (
    <div ref={wrapRef} id="gorgona-one-ai" className="gai" data-ai-theme={theme}>
      <canvas ref={canvasRef} className="gai__canvas" aria-hidden="true" />

      {/* Surface controls — theme + voice replies, scoped to the AI surface */}
      <div className="gai__controls">
        <button
          type="button"
          className={`gai__theme ${speakReplies ? 'is-on' : ''}`}
          onClick={toggleSpeak}
          aria-pressed={speakReplies}
          aria-label="Toggle spoken replies"
          title={voice.synthesisSupported ? undefined : t.ai.micUnsupported}
        >
          <SpeakerIcon />
          <span>Voice</span>
        </button>
        {speakReplies && voice.synthesisSupported && (
          <button
            type="button"
            className="gai__theme"
            onClick={() => voice.setVoiceGender(voice.voiceGender === 'male' ? 'female' : 'male')}
            aria-label={`Voice: ${voice.voiceGender === 'male' ? t.ai.genderMale : t.ai.genderFemale}`}
            title={`Voice: ${voice.voiceGender === 'male' ? t.ai.genderMale : t.ai.genderFemale}`}
          >
            <span>{voice.voiceGender === 'male' ? t.ai.genderMale : t.ai.genderFemale}</span>
          </button>
        )}
        <button
          type="button"
          className="gai__theme"
          onClick={toggle}
          aria-label={isDark ? t.ai.switchToLight : t.ai.switchToDark}
        >
          {isDark ? <SunIcon /> : <MoonIcon />}
          <span>{isDark ? t.ai.themeLight : t.ai.themeDark}</span>
        </button>
      </div>

      {/* Console core */}
      <div className={`gai__core ${inChat ? 'is-chat' : ''} ${sending ? 'is-thinking' : ''} ${phase === 'listening' ? 'is-listening' : ''} ${phase === 'intent' ? 'is-intent' : ''}`}>
        <p className="gai__eyebrow">Gorgona One AI</p>

        {inChat && (
          <div className="gai__chat" ref={chatRef} aria-live="polite">
            {messages.map((m, i) => (
              <div key={i} className={`gai__msg ${m.role === 'user' ? 'gai__msg--user' : 'gai__msg--ai'}`}>
                {m.content}
              </div>
            ))}
            {sending && draft && (
              <div className="gai__msg gai__msg--ai">{draft}</div>
            )}
            {sending && !draft && (
              <div className="gai__msg gai__msg--ai gai__msg--typing" aria-label="Thinking">
                <span /><span /><span />
              </div>
            )}
            {!sending && suggestions.length > 0 && (
              <div className="gai__suggest">
                {suggestions.map((s) => (
                  <button key={s.href} type="button" className="gai__chip" onClick={() => router.push(s.href)}>
                    {s.label} →
                  </button>
                ))}
              </div>
            )}
          </div>
        )}
        <form className="gai__bar" onSubmit={onSubmit} role="search">
          <input
            ref={inputRef}
            className="gai__input"
            type="text"
            value={query}
            onChange={onChange}
            placeholder={placeholder}
            aria-label={t.ai.askAria}
            autoComplete="off"
          />
          {inChat && (
            <button type="button" className="gai__clear" onClick={clearChat} aria-label="New conversation" title="New conversation">
              <PlusIcon />
            </button>
          )}
          <button
            type="button"
            className="gai__mic"
            onClick={toggleMic}
            aria-pressed={phase === 'listening'}
            aria-disabled={!voice.recognitionSupported}
            aria-label={phase === 'listening' ? t.ai.micStop : t.ai.micSpeak}
            title={voice.recognitionSupported ? undefined : t.ai.micUnsupported}
          >
            <span className="gai__halo" aria-hidden="true" />
            <MicIcon />
          </button>
        </form>
        <p className="gai__state" aria-live="polite">
          {stateLine}
        </p>

        {phase === 'intent' && matches.length > 0 && (
          <div className="gai__matches">
            {matches.slice(0, 5).map((item) => (
              <button
                key={item.id}
                type="button"
                className="gai__chip gai__chip--match"
                title={item.subtitle ? `${item.title} — ${item.subtitle}` : item.title}
                onClick={() => selectResult(item)}
              >
                <span className="gai__chipType">{t.ai.entityTypes[item.type] || item.type}</span>
                {item.title}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Constellation legend — every one of the 19 entry points stays reachable */}
      <div className="gai__legend">
        {CONSTELLATIONS.map((c) => {
          const isOpen = openCluster === c.id;
          return (
            <div key={c.id} className={`gai__group ${isOpen ? 'is-open' : ''}`}>
              <button
                type="button"
                className="gai__legendName"
                onClick={() => setOpenCluster(isOpen ? null : c.id)}
                onMouseEnter={() => setActiveCluster(c.id)}
                onMouseLeave={() => phase !== 'intent' && setActiveCluster(null)}
                aria-expanded={isOpen}
                style={{ '--c': `rgb(${c.color.join(',')})` }}
              >
                <span className="gai__dot" />
                {t.ai.constellations[c.id]?.full || c.name}
              </button>
              {isOpen && (
                <div className="gai__items">
                  {(categoriesByCluster[c.id] || []).map((cat) => (
                    <button
                      key={cat.label + cat.href}
                      type="button"
                      className="gai__chip"
                      onClick={() => router.push(cat.href)}
                    >
                      {t.ai.categories[cat.id] || cat.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>

      <style jsx>{styles}</style>
    </div>
  );
}

function constellationName(id, t) {
  return t.ai.constellations[id]?.full || CONSTELLATIONS.find((x) => x.id === id)?.name || '';
}

function MicIcon() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="#2a2013" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
      <path d="M12 3a3 3 0 0 0-3 3v6a3 3 0 0 0 6 0V6a3 3 0 0 0-3-3z" />
      <path d="M5 11a7 7 0 0 0 14 0M12 18v3" />
    </svg>
  );
}
function SunIcon() {
  return (
    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" aria-hidden="true">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
    </svg>
  );
}
function MoonIcon() {
  return (
    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" aria-hidden="true">
      <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
    </svg>
  );
}
function SpeakerIcon() {
  return (
    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M11 5 6 9H2v6h4l5 4V5z" />
      <path d="M15.5 8.5a5 5 0 0 1 0 7M18.5 5.5a9 9 0 0 1 0 13" />
    </svg>
  );
}
function PlusIcon() {
  return (
    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
      <path d="M12 5v14M5 12h14" />
    </svg>
  );
}

function usePrefersReducedMotion() {
  const [reduce, setReduce] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const on = () => setReduce(mq.matches);
    on();
    mq.addEventListener('change', on);
    return () => mq.removeEventListener('change', on);
  }, []);
  return reduce;
}

// ===========================================================================
// Canvas-2D volumetric field. Framework-agnostic closure; reads the live theme
// each frame via getTheme() so a theme switch never rebuilds the field.
// ===========================================================================
function createField(canvas, wrap, { reduceMotion, getTheme, getLabel }) {
  const ctx = canvas.getContext('2d');
  const finePointer = window.matchMedia('(pointer: fine)').matches;
  let DPR = Math.min(window.devicePixelRatio || 1, 2);

  let W = 0, H = 0, cx = 0, cy = 0, R = 0, count = 0;
  let pts = [];
  let nodes = [];
  let rot = 0, tSec = 0, raf = 0, visible = true, last = performance.now();
  let fpsAccum = 0, fpsFrames = 0;

  const state = { phase: 'resting', activeClusterId: null };
  const mouse = { x: 0, y: 0, on: false };

  const particlePool = [];
  for (let i = 0; i < 2200; i++) {
    particlePool.push({ p: null, sx: 0, sy: 0, depth: 0 });
  }


  // Pre-render one radial glow sprite per constellation (bright glow color).
  const sprites = {};
  CONSTELLATIONS.forEach((c) => (sprites[c.id] = makeSprite(c.glow || c.color)));
  function makeSprite(rgb) {
    const s = 64;
    const cv = document.createElement('canvas');
    cv.width = cv.height = s;
    const x = cv.getContext('2d');
    const g = x.createRadialGradient(s / 2, s / 2, 0, s / 2, s / 2, s / 2);
    g.addColorStop(0, `rgba(${rgb[0]},${rgb[1]},${rgb[2]},1)`);
    g.addColorStop(0.25, `rgba(${rgb[0]},${rgb[1]},${rgb[2]},0.6)`);
    g.addColorStop(1, `rgba(${rgb[0]},${rgb[1]},${rgb[2]},0)`);
    x.fillStyle = g;
    x.fillRect(0, 0, s, s);
    return cv;
  }

  function pickCount() {
    const area = W * H;
    const base = area < 150000 ? 1500 : area < 340000 ? 2200 : 3000;
    return reduceMotion ? Math.round(base * 0.4) : base;
  }
  function resize() {
    const r = wrap.getBoundingClientRect();
    W = r.width; H = r.height;
    canvas.width = Math.round(W * DPR);
    canvas.height = Math.round(H * DPR);
    ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
    cx = W / 2; cy = H * 0.46; R = Math.min(W, H) * 0.34;
    const target = pickCount();
    if (target !== count) build(target);
  }
  function build(target) {
    count = target; pts = [];
    while (particlePool.length < count) {
      particlePool.push({ p: null, sx: 0, sy: 0, depth: 0 });
    }
    const ids = CONSTELLATIONS.map((c) => c.id);
    for (let i = 0; i < count; i++) {
      const u = (i + 0.5) / count;
      const shell = i % 3;
      pts.push({
        phi: Math.acos(1 - 2 * u),
        theta: Math.PI * (1 + Math.sqrt(5)) * i,
        shell,
        r: [0.7, 0.9, 1.12][shell] + Math.random() * 0.12,
        drift: Math.random() * 6.28,
        spd: 0.4 + Math.random() * 0.9,
        amp: 0.02 + Math.random() * 0.06,
        cl: ids[Math.floor(Math.random() * ids.length)]
      });
    }
    nodes = CONSTELLATIONS.map((c, i) => {
      const u = (i + 0.5) / CONSTELLATIONS.length;
      return {
        id: c.id,
        name: c.name,
        color: c.color,
        glow: c.glow || c.color,
        phi: Math.acos(1 - 2 * u),
        theta: Math.PI * (1 + Math.sqrt(5)) * i * 3.1
      };
    });
  }
  function proj(phi, theta, r) {
    const st = Math.sin(phi);
    return { x: r * st * Math.cos(theta), y: r * Math.cos(phi), z: r * st * Math.sin(theta) };
  }

  function frame(dt) {
    const P = palette(getTheme());
    rot += dt * 0.05;
    tSec += dt;

    const breathe = 1 + Math.sin(rot * 0.9) * 0.03;
    const intent = state.phase === 'intent';
    const listening = state.phase === 'listening';
    const restActive = state.phase === 'resting' ? CONSTELLATIONS[Math.abs(Math.floor(tSec / 3.6)) % CONSTELLATIONS.length].id : null;
    const hot = intent ? state.activeClusterId : state.activeClusterId || restActive;
    const pull = listening ? 0.72 : 1;

    ctx.clearRect(0, 0, W, H);

    // luminous thinking core
    const pulse = 0.5 + 0.5 * Math.sin(tSec * 1.6);
    const coreR = R * (0.5 + 0.06 * pulse);
    ctx.globalCompositeOperation = P.blend;
    const cg = ctx.createRadialGradient(cx, cy, 0, cx, cy, coreR);
    const ca = (intent ? P.coreAlpha * 1.4 : P.coreAlpha) + 0.08 * pulse;
    cg.addColorStop(0, `rgba(${P.coreColor},${ca.toFixed(3)})`);
    cg.addColorStop(0.5, `rgba(${P.coreColor},${(ca * 0.4).toFixed(3)})`);
    cg.addColorStop(1, `rgba(${P.coreColor},0)`);
    ctx.fillStyle = cg;
    ctx.beginPath();
    ctx.arc(cx, cy, coreR, 0, 6.283);
    ctx.fill();

    // particles (depth-sorted)
    for (let i = 0; i < count; i++) {
      const p = pts[i];
      let rr = p.r * breathe * pull;
      if (intent && p.cl === hot) rr *= 0.9 + 0.12 * Math.sin(tSec * 2 + p.drift);
      const th = p.theta + rot + Math.sin(rot * p.spd + p.drift) * p.amp;
      const pr = proj(p.phi, th, rr);
      const persp = 1 / (1.9 - pr.z * 0.5);
      let sx = cx + pr.x * R * persp;
      let sy = cy + pr.y * R * persp;
      if (mouse.on && finePointer) {
        const dx = sx - mouse.x, dy = sy - mouse.y, d = Math.hypot(dx, dy);
        if (d < 100) { const f = ((100 - d) / 100) * 0.22; sx -= dx * f; sy -= dy * f; }
      }
      const item = particlePool[i];
      item.p = p;
      item.sx = sx;
      item.sy = sy;
      item.depth = (pr.z + 1) / 2;
    }
    for (let i = count; i < particlePool.length; i++) {
      particlePool[i].depth = 999999;
    }
    particlePool.sort((a, b) => a.depth - b.depth);

    ctx.globalCompositeOperation = P.blend;
    for (let k = 0; k < count; k++) {
      const b = particlePool[k], p = b.p, depth = b.depth;
      let a, sz;
      if (intent) {
        const on = p.cl === hot;
        a = on ? 0.35 + depth * 0.6 : 0.04 + depth * 0.06;
        sz = (2 + depth * 7) * (on ? 1.25 : 0.8);
      } else {
        a = 0.12 + depth * 0.5;
        sz = 1.6 + depth * 6.5;
        if (p.cl === hot) a *= 1.4;
      }
      a *= P.particleAlphaMul;
      if (W < 300) sz *= 0.85;
      ctx.globalAlpha = Math.min(1, a);
      ctx.drawImage(sprites[p.cl], b.sx - sz, b.sy - sz, sz * 2, sz * 2);
    }
    ctx.globalAlpha = 1;

    // intent filaments: core -> matched category nodes
    if (intent) {
      ctx.globalCompositeOperation = P.blend;
      for (let n = 0; n < nodes.length; n++) {
        const nd = nodes[n];
        if (nd.id !== hot) continue;
        const npr = proj(nd.phi, nd.theta + rot, 1.06);
        const npersp = 1 / (1.9 - npr.z * 0.5);
        const lx = cx + npr.x * R * npersp, ly = cy + npr.y * R * npersp;
        const grad = ctx.createLinearGradient(cx, cy, lx, ly);
        grad.addColorStop(0, `rgba(${P.coreColor},0.5)`);
        grad.addColorStop(1, `rgba(${P.coreColor},0)`);
        ctx.strokeStyle = grad;
        ctx.lineWidth = 1.1;
        ctx.beginPath();
        ctx.moveTo(cx, cy);
        const mx = (cx + lx) / 2 + Math.sin(tSec * 2) * 8;
        const my = (cy + ly) / 2 + Math.cos(tSec * 1.7) * 8;
        ctx.quadraticCurveTo(mx, my, lx, ly);
        ctx.stroke();
        ctx.globalAlpha = 0.9;
        ctx.drawImage(sprites[nd.id], lx - 10, ly - 10, 20, 20);
        ctx.globalAlpha = 1;
      }
    }

    ctx.globalCompositeOperation = 'source-over';

    // constellation labels (front-facing, clear of the core band)
    ctx.font = `600 ${W < 300 ? 8 : 10}px "Space Mono", ui-monospace, monospace`;
    ctx.textAlign = 'center';
    for (let m = 0; m < nodes.length; m++) {
      const q = nodes[m];
      const qpr = proj(q.phi, q.theta + rot, 1.06);
      if (qpr.z < -0.1) continue;
      const qpersp = 1 / (1.9 - qpr.z * 0.5);
      const qx = cx + qpr.x * R * qpersp, qy = cy + qpr.y * R * qpersp;
      const front = (qpr.z + 1) / 2;
      let la;
      if (intent) la = q.id === hot ? 0.95 : 0.05;
      else la = q.id === hot ? 0.22 + 0.6 * front : 0.08 * front;
      if (Math.abs(qy - cy) < R * 0.5 && Math.abs(qx - cx) < R * 0.85) continue;
      const col = P.labelBright ? P.labelBright : q.glow;
      ctx.fillStyle = `rgba(${col[0]},${col[1]},${col[2]},${la.toFixed(3)})`;
      ctx.fillText(getLabel ? getLabel(q.id) : q.name.replace('World of ', ''), qx, qy);
    }
  }

  function loop(now) {
    const dt = Math.min((now - last) / 1000, 0.05);
    last = now;
    fpsAccum += dt; fpsFrames++;
    if (fpsAccum >= 1) {
      const fps = fpsFrames / fpsAccum;
      if (fps < 45 && count > 700) build(Math.round(count * 0.8));
      fpsAccum = 0; fpsFrames = 0;
    }
    frame(dt);
    if (visible && !reduceMotion) raf = requestAnimationFrame(loop);
  }
  function start() {
    if (raf || reduceMotion) return;
    last = performance.now();
    raf = requestAnimationFrame(loop);
  }
  function stop() {
    if (raf) cancelAnimationFrame(raf);
    raf = 0;
  }

  const onMove = (e) => {
    const rect = canvas.getBoundingClientRect();
    mouse.x = e.clientX - rect.left;
    mouse.y = e.clientY - rect.top;
    mouse.on = true;
  };
  const onLeave = () => { mouse.on = false; };
  const onResize = () => { DPR = Math.min(window.devicePixelRatio || 1, 2); resize(); };

  if (finePointer) {
    canvas.addEventListener('pointermove', onMove);
    canvas.addEventListener('pointerleave', onLeave);
  }
  window.addEventListener('resize', onResize);

  resize();
  if (reduceMotion) frame(0);
  else start();

  return {
    setState(next) { Object.assign(state, next); if (reduceMotion) frame(0); },
    setVisible(v) { visible = v; if (v) start(); else stop(); },
    repaint() { if (reduceMotion) frame(0); },
    destroy() {
      stop();
      window.removeEventListener('resize', onResize);
      if (finePointer) {
        canvas.removeEventListener('pointermove', onMove);
        canvas.removeEventListener('pointerleave', onLeave);
      }
    }
  };
}

// ===========================================================================
// Scoped, theme-aware styles. Light = V1 (ivory/champagne); Dark = V2
// (graphite/gold glow). Structure and layout are identical across themes.
// ===========================================================================
const styles = `
  .gai {
    position: relative;
    width: 100%;
    min-height: 560px;
    height: 78vh;
    max-height: 780px;
    border-radius: 32px;
    overflow: hidden;
    transition: background 0.5s ease;
  }
  .gai[data-ai-theme="dark"] {
    background: radial-gradient(120% 92% at 50% 34%, #37301f 0%, #211a11 54%, #100d08 100%);
    border: 1px solid rgba(216, 180, 120, 0.16);
  }
  .gai[data-ai-theme="light"] {
    background: radial-gradient(120% 90% at 50% 24%, #faf5ec 0%, #f1e7d3 52%, #e7d8bd 100%);
    border: 1px solid rgba(198, 160, 94, 0.2);
  }
  .gai__canvas { position: absolute; inset: 0; width: 100%; height: 100%; display: block; }

  /* Hairline gradient ring + inner vignette: the jewellery-case finish that
     makes the surface read as a built object rather than a flat panel. */
  .gai::before {
    content: ''; position: absolute; inset: 0; border-radius: inherit; pointer-events: none; z-index: 2;
    padding: 1px;
    background: linear-gradient(160deg, rgba(255,236,190,0.5) 0%, rgba(216,180,120,0.12) 28%, rgba(216,180,120,0.05) 55%, rgba(255,226,158,0.35) 100%);
    -webkit-mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
    -webkit-mask-composite: xor; mask-composite: exclude;
  }
  .gai[data-ai-theme="light"]::before {
    background: linear-gradient(160deg, rgba(255,255,255,0.9) 0%, rgba(198,160,94,0.25) 30%, rgba(198,160,94,0.1) 60%, rgba(255,247,230,0.8) 100%);
  }
  .gai::after {
    content: ''; position: absolute; inset: 0; border-radius: inherit; pointer-events: none; z-index: 1;
    box-shadow: inset 0 1px 0 rgba(255,240,205,0.1), inset 0 -40px 80px -40px rgba(0,0,0,0.55);
  }
  .gai[data-ai-theme="light"]::after {
    box-shadow: inset 0 1px 0 rgba(255,255,255,0.85), inset 0 -40px 80px -50px rgba(96,72,28,0.28);
  }

  .gai__controls {
    position: absolute; top: 16px; right: 16px; z-index: 6;
    display: flex; gap: 8px;
  }
  .gai__theme {
    display: inline-flex; align-items: center; gap: 6px;
    font-family: "Space Mono", ui-monospace, monospace;
    font-size: 10px; letter-spacing: 0.14em; text-transform: uppercase;
    padding: 7px 12px; border-radius: 999px; cursor: pointer;
    transition: color 0.2s ease, border-color 0.2s ease, background 0.2s ease;
  }
  .gai[data-ai-theme="dark"] .gai__theme {
    color: #c9b892; background: rgba(255, 240, 205, 0.06); border: 1px solid rgba(216, 180, 120, 0.28);
  }
  .gai[data-ai-theme="light"] .gai__theme {
    color: #6b6252; background: rgba(255, 253, 248, 0.6); border: 1px solid rgba(198, 160, 94, 0.32);
  }
  .gai__theme:hover { color: #d8b478; border-color: #d8b478; }
  .gai__theme:focus-visible { outline: 2px solid #c6a05e; outline-offset: 3px; }
  .gai__theme.is-on { color: #2a2013; background: linear-gradient(180deg, #ffe9b8, #d8b478); border-color: #e9cd93; box-shadow: 0 4px 14px -6px rgba(216,180,120,0.7); }

  .gai__core {
    position: absolute; left: 50%; top: 46%; transform: translate(-50%, -50%);
    width: min(88%, 460px); text-align: center; z-index: 3;
    transition: width 0.45s cubic-bezier(0.22, 1, 0.36, 1), top 0.45s cubic-bezier(0.22, 1, 0.36, 1);
  }
  .gai__core.is-chat { width: min(94%, 640px); top: 50%; }

  /* ---- Conversation panel: glass over the particle field ---- */
  .gai__chat {
    max-height: min(46vh, 330px); overflow-y: auto; overscroll-behavior: contain;
    margin: 0 0 14px; padding: 14px; border-radius: 20px; text-align: left;
    display: flex; flex-direction: column; gap: 10px;
    backdrop-filter: blur(14px); -webkit-backdrop-filter: blur(14px);
    scrollbar-width: thin;
  }
  .gai[data-ai-theme="dark"] .gai__chat {
    background: rgba(16, 13, 8, 0.55); border: 1px solid rgba(216, 180, 120, 0.22);
    box-shadow: inset 0 1px 0 rgba(255,240,205,0.08), 0 24px 50px -30px rgba(0,0,0,0.8);
    scrollbar-color: rgba(216,180,120,0.4) transparent;
  }
  .gai[data-ai-theme="light"] .gai__chat {
    background: rgba(255, 252, 245, 0.62); border: 1px solid rgba(198, 160, 94, 0.28);
    box-shadow: inset 0 1px 0 rgba(255,255,255,0.7), 0 24px 50px -32px rgba(96,72,28,0.45);
    scrollbar-color: rgba(198,160,94,0.45) transparent;
  }
  .gai__msg {
    max-width: 86%; padding: 10px 14px; border-radius: 16px;
    font-size: 13.5px; line-height: 1.55; white-space: pre-wrap; word-break: break-word;
    animation: gaiMsgIn 0.35s cubic-bezier(0.22, 1, 0.36, 1);
  }
  @keyframes gaiMsgIn { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: none; } }
  .gai__msg--user {
    align-self: flex-end; border-bottom-right-radius: 6px; color: #2a2013;
    background: linear-gradient(180deg, #fff7e4 0%, #eecf92 60%, #dec088 100%);
    border: 1px solid rgba(198, 160, 94, 0.55);
    box-shadow: 0 6px 16px -8px rgba(60, 45, 12, 0.55), inset 0 1px 0 rgba(255,255,255,0.65);
  }
  .gai__msg--ai { align-self: flex-start; border-bottom-left-radius: 6px; }
  .gai[data-ai-theme="dark"] .gai__msg--ai {
    color: #f0e8d5; background: rgba(255, 240, 205, 0.07);
    border: 1px solid rgba(216, 180, 120, 0.24);
    box-shadow: inset 0 1px 0 rgba(255,240,205,0.07);
  }
  .gai[data-ai-theme="light"] .gai__msg--ai {
    color: #33291a; background: rgba(255, 255, 255, 0.75);
    border: 1px solid rgba(198, 160, 94, 0.3);
    box-shadow: inset 0 1px 0 rgba(255,255,255,0.9), 0 4px 12px -8px rgba(96,72,28,0.35);
  }
  .gai__msg--typing { display: inline-flex; gap: 5px; align-items: center; padding: 13px 16px; }
  .gai__msg--typing span {
    width: 5px; height: 5px; border-radius: 50%; background: #d8b478;
    animation: gaiDot 1.2s ease-in-out infinite;
  }
  .gai__msg--typing span:nth-child(2) { animation-delay: 0.18s; }
  .gai__msg--typing span:nth-child(3) { animation-delay: 0.36s; }
  @keyframes gaiDot { 0%, 60%, 100% { opacity: 0.25; transform: translateY(0); } 30% { opacity: 1; transform: translateY(-3px); } }
  .gai__suggest { display: flex; flex-wrap: wrap; gap: 7px; padding-top: 2px; }

  .gai__clear {
    flex: none; width: 34px; height: 34px; border-radius: 50%; cursor: pointer;
    display: flex; align-items: center; justify-content: center;
    background: transparent; transition: color 0.2s ease, border-color 0.2s ease, transform 0.2s ease;
  }
  .gai[data-ai-theme="dark"] .gai__clear { color: #c9b892; border: 1px solid rgba(216,180,120,0.35); }
  .gai[data-ai-theme="light"] .gai__clear { color: #6b6252; border: 1px solid rgba(198,160,94,0.4); }
  .gai__clear:hover { color: #d8b478; border-color: #d8b478; transform: rotate(90deg); }
  .gai__eyebrow {
    font-family: "Space Mono", ui-monospace, monospace;
    font-size: 9px; letter-spacing: 0.3em; text-transform: uppercase; margin: 0 0 10px;
  }
  .gai[data-ai-theme="dark"] .gai__eyebrow { color: #f0d49a; text-shadow: 0 1px 10px rgba(16, 13, 8, 0.8), 0 0 3px rgba(16, 13, 8, 0.9); }
  .gai[data-ai-theme="light"] .gai__eyebrow { color: #a9823f; }

  .gai__bar {
    display: flex; align-items: center; gap: 8px; padding: 8px 8px 8px 18px; border-radius: 999px;
    transition: box-shadow 0.4s ease, background 0.4s ease;
  }
  .gai[data-ai-theme="dark"] .gai__bar {
    background: rgba(26, 22, 15, 0.5); border: 1px solid rgba(216, 180, 120, 0.5);
    backdrop-filter: blur(8px); -webkit-backdrop-filter: blur(8px);
    box-shadow: 0 18px 40px -18px rgba(0, 0, 0, 0.6), inset 0 1px 0 rgba(255, 240, 205, 0.14), 0 0 26px rgba(216, 180, 120, 0.12);
  }
  .gai[data-ai-theme="light"] .gai__bar {
    background: rgba(255, 253, 248, 0.74); border: 1px solid rgba(198, 160, 94, 0.42);
    backdrop-filter: blur(10px); -webkit-backdrop-filter: blur(10px);
    box-shadow: 0 18px 40px -20px rgba(60, 45, 12, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.6);
  }
  .gai__core.is-intent .gai__bar { box-shadow: 0 18px 40px -18px rgba(0, 0, 0, 0.5), 0 0 34px rgba(255, 214, 150, 0.4); }

  .gai__input { flex: 1; min-width: 0; border: none; background: transparent; outline: none; font-size: 15px; font-family: inherit; }
  .gai[data-ai-theme="dark"] .gai__input { color: #f3ead7; }
  .gai[data-ai-theme="dark"] .gai__input::placeholder { color: #b3a17f; }
  .gai[data-ai-theme="light"] .gai__input { color: #2e2a22; }
  .gai[data-ai-theme="light"] .gai__input::placeholder { color: #8a7f6c; }

  .gai__mic {
    flex: none; position: relative; width: 40px; height: 40px; border-radius: 50%; cursor: pointer;
    display: flex; align-items: center; justify-content: center;
    border: 1px solid rgba(255, 255, 255, 0.5);
    background: radial-gradient(circle at 34% 28%, #fffdf6 0%, #c6a05e 58%, #8a6528 100%);
    box-shadow: 0 6px 14px -4px rgba(138, 101, 40, 0.6), inset 0 0 0 1px rgba(255, 255, 255, 0.5);
    transition: transform 0.2s ease;
  }
  .gai__mic:hover { transform: scale(1.05); }
  .gai__mic:focus-visible { outline: 2px solid #c6a05e; outline-offset: 3px; }
  .gai__halo { position: absolute; inset: -6px; border-radius: 50%; border: 1.5px solid #c6a05e; opacity: 0; pointer-events: none; }
  .is-listening .gai__halo { animation: gaiHalo 1.6s ease-out infinite; }
  @keyframes gaiHalo { 0% { opacity: 0.6; transform: scale(0.85); } 100% { opacity: 0; transform: scale(1.8); } }

  .gai__state {
    margin: 11px 0 0; font-family: "Space Mono", ui-monospace, monospace;
    font-size: 9.5px; letter-spacing: 0.14em; text-transform: uppercase; min-height: 12px;
  }
  .gai[data-ai-theme="dark"] .gai__state { color: #d4c6a2; text-shadow: 0 1px 8px rgba(16, 13, 8, 0.75); }
  .gai[data-ai-theme="light"] .gai__state { color: #6b6252; }
  .gai__transcript { color: #d8b478; text-transform: none; letter-spacing: 0.02em; font-size: 12px; }

  .gai__matches { margin-top: 14px; display: flex; flex-wrap: wrap; gap: 8px; justify-content: center; }

  .gai__chip {
    font-family: inherit; font-size: 12px; padding: 7px 14px; border-radius: 999px; cursor: pointer;
    transition: background 0.2s ease, color 0.2s ease, border-color 0.2s ease;
  }
  .gai[data-ai-theme="dark"] .gai__chip { background: rgba(216, 180, 120, 0.14); border: 1px solid rgba(216, 180, 120, 0.5); color: #f6ecd6; }
  .gai[data-ai-theme="light"] .gai__chip { background: rgba(255, 253, 248, 0.6); border: 1px solid rgba(198, 160, 94, 0.4); color: #5b544a; }
  .gai__chip:hover { border-color: #c6a05e; }
  .gai__chip--match {
    display: inline-flex; align-items: center; gap: 7px; max-width: min(80vw, 320px);
    white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
  }
  /* Theme-scoped so these win over the base themed chip and stay opaque over the
     glow (results read as solid gold tokens surfacing from the field). */
  .gai[data-ai-theme="dark"] .gai__chip--match,
  .gai[data-ai-theme="light"] .gai__chip--match {
    background: linear-gradient(180deg, #fffef9 0%, #eecf92 55%, #dec088 100%);
    border: 1px solid #c6a05e; color: #2a2013;
    box-shadow: 0 8px 20px -8px rgba(0, 0, 0, 0.55), 0 2px 8px rgba(60, 45, 12, 0.4);
  }
  .gai[data-ai-theme="dark"] .gai__chip--match:hover,
  .gai[data-ai-theme="light"] .gai__chip--match:hover { border-color: #8a6528; }
  .gai__chipType {
    flex: none; font-family: "Space Mono", ui-monospace, monospace; font-size: 8px;
    letter-spacing: 0.1em; text-transform: uppercase; color: #6d4f1a;
    border: 1px solid rgba(109, 79, 26, 0.4); border-radius: 5px; padding: 2px 5px;
    background: rgba(255, 255, 255, 0.35);
  }

  .gai__legend {
    position: absolute; left: 0; right: 0; bottom: 18px; z-index: 3;
    display: flex; flex-wrap: wrap; justify-content: center; gap: 8px 10px; padding: 0 16px;
  }
  .gai__group { position: relative; }
  .gai__legendName {
    display: inline-flex; align-items: center; gap: 7px;
    font-family: "Space Mono", ui-monospace, monospace;
    font-size: 10px; letter-spacing: 0.12em; text-transform: uppercase;
    border-radius: 999px; padding: 7px 13px; cursor: pointer;
    transition: color 0.2s ease, border-color 0.2s ease;
  }
  .gai[data-ai-theme="dark"] .gai__legendName { color: #c9b892; background: rgba(255, 240, 205, 0.05); border: 1px solid rgba(216, 180, 120, 0.24); }
  .gai[data-ai-theme="light"] .gai__legendName { color: #6b6252; background: rgba(255, 253, 248, 0.55); border: 1px solid rgba(198, 160, 94, 0.28); }
  .gai__legendName:hover, .is-open .gai__legendName { color: var(--c, #c6a05e); border-color: var(--c, #c6a05e); }
  .gai__dot { width: 8px; height: 8px; border-radius: 50%; background: var(--c, #c6a05e); }

  .gai__items {
    position: absolute; bottom: calc(100% + 8px); left: 50%; transform: translateX(-50%);
    display: flex; flex-wrap: wrap; gap: 6px; justify-content: center; width: max-content; max-width: 68vw;
    padding: 10px; border-radius: 16px;
    backdrop-filter: blur(10px); -webkit-backdrop-filter: blur(10px);
    box-shadow: 0 18px 40px -20px rgba(0, 0, 0, 0.5);
  }
  .gai[data-ai-theme="dark"] .gai__items { background: rgba(26, 22, 15, 0.92); border: 1px solid rgba(216, 180, 120, 0.3); }
  .gai[data-ai-theme="light"] .gai__items { background: rgba(252, 249, 242, 0.94); border: 1px solid rgba(198, 160, 94, 0.32); }

  @media (min-width: 768px) {
    .gai { height: 660px; max-height: 740px; }
    .gai__core { width: min(70%, 440px); }
  }
  @media (prefers-reduced-motion: reduce) {
    .is-listening .gai__halo { animation: none; opacity: 0.4; }
    .gai, .gai__bar { transition: none; }
  }
`;
