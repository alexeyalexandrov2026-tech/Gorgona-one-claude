"use client";

import { useEffect, useState } from 'react';
import { SUPPORTED_LANGUAGES, detectBrowserLanguage } from '../../lib/languages';
import { useLocaleController } from './LocaleProvider';

export function LanguageSelectionModal() {
  const controller = useLocaleController();
  const [selected, setSelected] = useState('en');

  const isFirstVisit = controller ? !controller.hasSavedChoice : false;
  const isOpen = controller ? !controller.hasSavedChoice || controller.isModalOpen : false;

  useEffect(() => {
    if (!controller) return;
    if (isFirstVisit) {
      setSelected(detectBrowserLanguage());
    } else if (controller.isModalOpen) {
      setSelected(controller.locale);
    }
    // Re-run whenever the modal transitions to open, so it always reflects
    // the right starting selection (detected language on first visit,
    // current language when reopened via "Change Language").
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isFirstVisit, controller?.isModalOpen]);

  if (!controller || !isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-4 py-8">
      <div className="market-shell w-full max-w-2xl rounded-[2rem] border-brand-gold/20 bg-black/95 p-8 shadow-premium">
        <p className="market-pill">{isFirstVisit ? 'Welcome' : 'Language'}</p>
        <h2 className="market-title mt-4 text-2xl sm:text-3xl">Choose your language</h2>
        <p className="market-subtitle">Select the language you would like to use across GORGONA ONE. You can change this anytime.</p>

        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {SUPPORTED_LANGUAGES.map((language) => (
            <button
              key={language.code}
              type="button"
              onClick={() => setSelected(language.code)}
              className={`rounded-2xl border px-4 py-3 text-left text-sm transition ${
                selected === language.code
                  ? 'border-brand-gold bg-brand-gold/10 text-brand-gold'
                  : 'border-white/10 bg-white/5 text-zinc-300 hover:border-brand-gold hover:text-brand-gold'
              }`}
            >
              <span className="block font-semibold">{language.nativeLabel}</span>
              <span className="block text-xs text-zinc-500">{language.label}</span>
            </button>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <button type="button" onClick={() => controller.setLocale(selected)} className="market-button">
            Continue
          </button>
          {!isFirstVisit && (
            <button type="button" onClick={controller.closeModal} className="market-button-secondary">
              Cancel
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
