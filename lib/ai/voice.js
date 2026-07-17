// ===========================================================================
// Gorgona One — premium TTS interface (server-only).
//
// The voice twin of lib/ai/brain.js: one place that knows which speech
// provider (if any) is configured. Feature-flagged and fail-safe by design:
//   TTS_PROVIDER  'off' (default) | 'elevenlabs' | 'openai'
//   ELEVENLABS_API_KEY / ELEVENLABS_VOICE_ID   (elevenlabs)
//   OPENAI_API_KEY / TTS_VOICE                 (openai; voice e.g. 'alloy')
//
// When unset (the default), /api/tts reports unavailable and clients keep
// using the browser's built-in speechSynthesis - the concierge voice always
// works, premium audio is a pure upgrade. Providers here must never throw
// into callers: every failure returns { ok: false } and the client falls
// back silently.
// ===========================================================================

const MAX_TTS_CHARS = 1200;
const TTS_TIMEOUT_MS = 15_000;

export function getTtsConfig() {
  const provider = String(process.env.TTS_PROVIDER || 'off').toLowerCase();
  if (provider === 'elevenlabs' && process.env.ELEVENLABS_API_KEY) {
    return {
      provider,
      apiKey: process.env.ELEVENLABS_API_KEY,
      voiceId: process.env.ELEVENLABS_VOICE_ID || 'EXAVITQu4vr4xnSDxMaL'
    };
  }
  if (provider === 'openai' && process.env.OPENAI_API_KEY) {
    return { provider, apiKey: process.env.OPENAI_API_KEY, voice: process.env.TTS_VOICE || 'alloy' };
  }
  return { provider: 'off' };
}

export function isTtsAvailable() {
  return getTtsConfig().provider !== 'off';
}

/**
 * @returns {Promise<{ ok: true, audio: ArrayBuffer, mime: string } | { ok: false }>}
 */
export async function synthesizeSpeech(text) {
  const config = getTtsConfig();
  const input = String(text || '').trim().slice(0, MAX_TTS_CHARS);
  if (config.provider === 'off' || !input) return { ok: false };

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), TTS_TIMEOUT_MS);
  try {
    let response;
    if (config.provider === 'elevenlabs') {
      response = await fetch(`https://api.elevenlabs.io/v1/text-to-speech/${config.voiceId}`, {
        method: 'POST',
        headers: { 'xi-api-key': config.apiKey, 'Content-Type': 'application/json' },
        body: JSON.stringify({
          text: input,
          // Multilingual model: the concierge speaks 16 locales.
          model_id: 'eleven_multilingual_v2'
        }),
        signal: controller.signal
      });
    } else {
      response = await fetch('https://api.openai.com/v1/audio/speech', {
        method: 'POST',
        headers: { Authorization: `Bearer ${config.apiKey}`, 'Content-Type': 'application/json' },
        body: JSON.stringify({ model: 'gpt-4o-mini-tts', voice: config.voice, input }),
        signal: controller.signal
      });
    }

    if (!response.ok) {
      console.error('TTS provider error', config.provider, response.status, (await response.text()).slice(0, 200));
      return { ok: false };
    }
    return { ok: true, audio: await response.arrayBuffer(), mime: 'audio/mpeg' };
  } catch (error) {
    console.error('TTS synthesis failed', error?.name || error);
    return { ok: false };
  } finally {
    clearTimeout(timeout);
  }
}
