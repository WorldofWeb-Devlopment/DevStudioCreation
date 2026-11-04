/**
 * Google Analytics 4 (GA4) & Event Tracking Utility
 * Safe, type-checked event dispatcher that works with or without gtag.js loaded.
 */

declare global {
  interface Window {
    dataLayer?: any[];
    gtag?: (...args: any[]) => void;
  }
}

export interface AnalyticsEventParams {
  category?: string;
  label?: string;
  value?: number;
  [key: string]: any;
}

/**
 * Dispatches an event to Google Analytics 4 if available
 */
export function trackEvent(eventName: string, params: AnalyticsEventParams = {}): void {
  if (typeof window === 'undefined') return;

  if (typeof window.gtag === 'function') {
    window.gtag('event', eventName, params);
  }

  // Safe dataLayer push fallback
  if (Array.isArray(window.dataLayer)) {
    window.dataLayer.push({
      event: eventName,
      ...params,
    });
  }
}

/**
 * Tracks CTA button clicks (e.g. "Start a Project", "View Our Work")
 */
export function trackCtaClick(buttonName: string, location: string): void {
  trackEvent('cta_click', {
    button_name: buttonName,
    location,
    event_category: 'engagement',
  });
}

/**
 * Tracks social and messaging channel clicks
 */
export function trackSocialClick(channel: 'whatsapp' | 'instagram' | 'facebook'): void {
  trackEvent('social_channel_click', {
    channel,
    event_category: 'contact',
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
