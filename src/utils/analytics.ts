const GA_ID = 'G-S2NR6RXKR7';

declare global {
  interface Window { gtag?: (...args: any[]) => void; }
}

export const isConsentAccepted = () => {
  try { return localStorage.getItem('celestifan_consent_choice') === 'accepted'; } catch { return false; }
};

export const sendPageview = (path: string, title?: string) => {
  if (typeof window === 'undefined' || !window.gtag) return;
  if (!isConsentAccepted()) return;
  try {
    window.gtag('config', GA_ID, {
      page_path: path,
      page_title: title || document.title,
      page_location: window.location.href,
    });
  } catch (e) {
    // noop
  }
};

export default { isConsentAccepted, sendPageview };
