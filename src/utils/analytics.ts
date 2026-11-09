/**
 * Google Analytics 4 (GA4) & Event Tracking Utility
 * Safe, type-checked event dispatcher and dynamic loader that works seamlessly
 * with or without gtag.js loaded.
 */

declare global {
  interface Window {
    dataLayer?: any[];
    gtag?: (...args: any[]) => void;
    GA_MEASUREMENT_ID?: string;
  }
}

export interface AnalyticsEventParams {
  category?: string;
  label?: string;
  value?: number;
  [key: string]: any;
}

// Configurable Measurement ID from Vite environment or window override, defaulting to production ID
export const DEFAULT_MEASUREMENT_ID =
  (typeof import.meta !== 'undefined' && import.meta.env?.VITE_GA_MEASUREMENT_ID) ||
  (typeof window !== 'undefined' && window.GA_MEASUREMENT_ID) ||
  'G-PYLR2PW4DS';

/**
 * Dynamically initializes GA4 script tag if not already loaded
 */
export function initGA4(measurementId?: string): void {
  if (typeof window === 'undefined') return;

  const id = measurementId || DEFAULT_MEASUREMENT_ID;
  if (!id || id === 'G-XXXXXXXXXX') {
    return;
  }

  // Prevent duplicate script injection
  const scriptId = 'google-analytics-script';
  if (!document.getElementById(scriptId)) {
    const script = document.createElement('script');
    script.id = scriptId;
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${id}`;
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    function gtag(...args: any[]) {
      window.dataLayer?.push(arguments);
    }
    window.gtag = gtag as any;
    gtag('js', new Date());
    gtag('config', id, {
      send_page_view: true,
      cookie_flags: 'SameSite=None;Secure',
    });
  }
}

/**
 * Dispatches a standard or custom event to Google Analytics 4
 */
export function trackEvent(eventName: string, params: AnalyticsEventParams = {}): void {
  if (typeof window === 'undefined') return;

  if (typeof window.gtag === 'function') {
    window.gtag('event', eventName, params);
  }

  // Fallback dataLayer push
  if (Array.isArray(window.dataLayer)) {
    window.dataLayer.push({
      event: eventName,
      ...params,
    });
  }
}

/**
 * Tracks page views (e.g. on navigation or initial load)
 */
export function trackPageView(pagePath?: string, pageTitle?: string): void {
  if (typeof window === 'undefined') return;
  const path = pagePath || window.location.pathname;
  const title = pageTitle || document.title;

  trackEvent('page_view', {
    page_path: path,
    page_title: title,
    page_location: window.location.href,
  });
}

/**
 * Tracks CTA button clicks (e.g. "Start a Project", "View Our Work", "Let's Work Together")
 */
export function trackCtaClick(buttonName: string, location: string): void {
  trackEvent('cta_click', {
    button_name: buttonName,
    location,
    event_category: 'engagement',
  });
}

/**
 * Tracks navigation clicks
 */
export function trackNavClick(destination: string): void {
  trackEvent('navigation_click', {
    destination,
    event_category: 'navigation',
  });
}

/**
 * Tracks social and messaging channel clicks (WhatsApp, Instagram, Facebook)
 */
export function trackSocialClick(channel: 'whatsapp' | 'instagram' | 'facebook'): void {
  trackEvent('social_channel_click', {
    channel,
    event_category: 'contact',
    event_label: channel === 'whatsapp' ? '+91 9360108256' : channel,
  });
}

/**
 * Tracks phone call attempts / click-to-call
 */
export function trackPhoneCall(phoneNumber: string): void {
  trackEvent('contact_phone_call', {
    phone_number: phoneNumber,
    event_category: 'contact',
    event_label: 'Direct Phone Dial',
  });
}

/**
 * Tracks email mailto clicks
 */
export function trackEmailClick(email: string): void {
  trackEvent('contact_email_click', {
    email,
    event_category: 'contact',
    event_label: 'Direct Email Click',
  });
}

/**
 * Tracks contact enquiry form submissions
 */
export function trackEnquirySubmission(details?: { nameLength?: number; hasMobile?: boolean }): void {
  trackEvent('generate_lead', {
    event_category: 'conversion',
    event_label: 'Website Enquiry Form',
    ...details,
  });
}

/**
 * Tracks portfolio project card clicks & modal previews
 */
export function trackProjectView(projectName: string): void {
  trackEvent('view_item', {
    item_name: projectName,
    item_category: 'Website Development Portfolio',
    event_category: 'portfolio',
  });
}
