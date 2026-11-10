import { PREFERRED_DOMAIN } from '../data/seoData';

export interface RouteSeoConfig {
  title: string;
  description: string;
  canonicalPath: string;
  robots?: string;
  jsonLd?: Record<string, any> | Record<string, any>[];
}

export function updateDocumentSeo(config: RouteSeoConfig): void {
  if (typeof document === 'undefined') return;

  const fullUrl =
    config.canonicalPath === '/'
      ? `${PREFERRED_DOMAIN}/`
      : `${PREFERRED_DOMAIN}${config.canonicalPath.startsWith('/') ? config.canonicalPath : `/${config.canonicalPath}`}`;

  // 1. Update Title
  document.title = config.title;

  // 2. Helper to update or create meta tags
  const setMeta = (selector: string, attrName: 'name' | 'property', attrValue: string, content: string) => {
    let el = document.querySelector<HTMLMetaElement>(selector);
    if (!el) {
      el = document.createElement('meta');
      el.setAttribute(attrName, attrValue);
      document.head.appendChild(el);
    }
    el.setAttribute('content', content);
  };

  setMeta('meta[name="description"]', 'name', 'description', config.description);
  setMeta(
    'meta[name="robots"]',
    'name',
    'robots',
    config.robots || 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'
  );

  // Open Graph
  setMeta('meta[property="og:title"]', 'property', 'og:title', config.title);
  setMeta('meta[property="og:description"]', 'property', 'og:description', config.description);
  setMeta('meta[property="og:url"]', 'property', 'og:url', fullUrl);

  // Twitter Card
  setMeta('meta[name="twitter:title"]', 'name', 'twitter:title', config.title);
  setMeta('meta[name="twitter:description"]', 'name', 'twitter:description', config.description);

  // 3. Update Canonical Link
  let canonicalEl = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!canonicalEl) {
    canonicalEl = document.createElement('link');
    canonicalEl.setAttribute('rel', 'canonical');
    document.head.appendChild(canonicalEl);
  }
  canonicalEl.setAttribute('href', fullUrl);

  // 4. Update route-specific JSON-LD script
  const dynamicScriptId = 'dynamic-route-jsonld';
  const existingScript = document.getElementById(dynamicScriptId);
  if (config.jsonLd) {
    const scriptEl = existingScript || document.createElement('script');
    scriptEl.id = dynamicScriptId;
    scriptEl.setAttribute('type', 'application/ld+json');
    scriptEl.textContent = JSON.stringify(config.jsonLd);
    if (!existingScript) {
      document.head.appendChild(scriptEl);
    }
  } else if (existingScript) {
    existingScript.remove();
  }
}
