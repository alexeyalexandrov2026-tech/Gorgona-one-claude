import AIExperience from './AIExperience';

// Standalone Gorgona One AI entry point (Phase 4 — product seam).
//
// This route lets the AI be launched and installed as its own experience,
// independent of the website, while sharing the same ecosystem data. Its
// `manifest` points at /ai.webmanifest (start_url "/ai"), so "Add Gorgona One AI
// to Home Screen" installs a separate icon that opens directly into the AI —
// alongside the website's own installable manifest. Full app separation is
// deferred; the architecture is prepared here.
export const metadata = {
  title: 'Gorgona One AI — Ecosystem Intelligence',
  description: 'Ask by intent, in any language. Discover the entire Gorgona One ecosystem by voice or text.',
  manifest: '/ai.webmanifest'
};

export default function AIPage() {
  return <AIExperience />;
}
