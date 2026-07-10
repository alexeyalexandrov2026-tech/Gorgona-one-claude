"use client";

import { useEffect, useState } from 'react';
import { SUPPORTED_LANGUAGES, detectBrowserLanguage } from '../../lib/languages';
import { useLocaleController, useTranslations } from './LocaleProvider';

export function LanguageSelectionModal() {
  const controller = useLocaleController();
  const t = useTranslations();
  const [selected, setSelected] = useState('en');
  // Devices with a coarse/touch pointer (phones, and tablets like iPad
  // Safari) get a compact popover instead of the full-screen modal, even
  // though an iPad's viewport width can be as wide as a small laptop's -
  // pointer type is a better signal here than a CSS width breakpoint.
  // Starts true (the original, always-full-modal markup) so client
  // hydration matches the server render, then corrects itself on mount.
  const [isDesktop, setIsDesktop] = useState(true);

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

  useEffect(() => {
    const mediaQuery = window.matchMedia('(hover: hover) and (pointer: fine)');
    const update = () => setIsDesktop(mediaQuery.matches);
    update();
    mediaQuery.addEventListener('change', update);
    return () => mediaQuery.removeEventListener('change', update);
  }, []);

  if (!controller || !isOpen) {
    return null;
  }

  function handleLanguageClick(code) {
    setSelected(code);
    // On the compact mobile/tablet popover, tapping a language is itself the
    // confirmation - there's no secondary "Continue" step to scroll down to.
    if (!isDesktop) {
      controller.setLocale(code);
    }
  }

  return (
    <div
      className={
        isDesktop
          ? 'fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-4 py-8'
          : 'fixed inset-0 z-50 flex items-start justify-center bg-black/30 px-4 pt-20'
      }
    >
      <div
        className={
          isDesktop
            ? 'market-shell w-full max-w-2xl rounded-[2rem] border-brand-gold/20 bg-black/95 p-8 shadow-premium'
            : 'market-shell flex max-h-[300px] w-full max-w-[280px] flex-col overflow-hidden rounded-2xl border-brand-gold/20 bg-black/95 shadow-premium'
        }
      >
        <div className={isDesktop ? '' : 'p-4 pb-2'}>
          <p className={isDesktop ? 'market-pill' : 'market-pill text-[10px]'}>
            {isFirstVisit ? t.languageModal.welcome : t.languageModal.language}
          </p>
          <h2 className={isDesktop ? 'market-title mt-4 text-2xl sm:text-3xl' : 'market-title mt-2 text-lg'}>
            {t.languageModal.title}
          </h2>
          {isDesktop && <p className="market-subtitle">{t.languageModal.subtitle}</p>}
        </div>

        <div className={isDesktop ? '' : 'flex-1 overflow-y-auto px-4'}>
          <div
            className={
              isDesktop ? 'mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3' : 'grid gap-2'
            }
          >
            {SUPPORTED_LANGUAGES.map((language) => (
              <button
                key={language.code}
                type="button"
                onClick={() => handleLanguageClick(language.code)}
                className={`rounded-2xl border px-4 py-3 text-left text-sm transition ${
                  selected === language.code
                    ? 'border-brand-gold bg-brand-gold/10 text-brand-gold'
                    : 'border-white/10 bg-white/5 text-zinc-300 hover:border-brand-gold hover:text-brand-gold'
                }`}
              >
                <span className="block font-semibold">
                  <span aria-hidden="true">{language.flag}</span> {language.nativeLabel}
                </span>
                <span className="block text-xs text-zinc-500">{language.label}</span>
              </button>
            ))}
          </div>
        </div>

        {isDesktop && (
          <div className="mt-8 flex flex-wrap gap-3">
            <button type="button" onClick={() => controller.setLocale(selected)} className="market-button">
              {t.languageModal.continueButton}
            </button>
            {!isFirstVisit && (
              <button type="button" onClick={controller.closeModal} className="market-button-secondary">
                {t.languageModal.cancelButton}
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
