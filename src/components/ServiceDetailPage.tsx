import React, { useEffect } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  ExternalLink,
  HelpCircle,
  Sparkles,
} from 'lucide-react';
import {
  PREFERRED_DOMAIN,
  SERVICE_PAGES,
  ServicePageData,
} from '../data/seoData';
import { updateDocumentSeo } from '../utils/seo';
import { trackCtaClick, trackPageView } from '../utils/analytics';
import { ContactSection } from './ContactSection';

interface ServiceDetailPageProps {
  service: ServicePageData;
  onNavigate: (path: string) => void;
}

export const ServiceDetailPage: React.FC<ServiceDetailPageProps> = ({
  service,
  onNavigate,
}) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });

    const pageUrl = `${PREFERRED_DOMAIN}/${service.slug}`;
    const jsonLd = {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'BreadcrumbList',
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              name: 'Home',
              item: `${PREFERRED_DOMAIN}/`,
            },
            {
              '@type': 'ListItem',
              position: 2,
              name: 'Services',
              item: `${PREFERRED_DOMAIN}/#services`,
            },
            {
              '@type': 'ListItem',
              position: 3,
              name: service.title,
              item: pageUrl,
            },
          ],
        },
        {
          '@type': 'Service',
          '@id': `${pageUrl}#service`,
          name: service.h1,
          serviceType: service.title,
          url: pageUrl,
          description: service.metaDescription,
          provider: {
            '@id': `${PREFERRED_DOMAIN}/#organization`,
          },
          areaServed: {
            '@type': 'Country',
            name: 'India',
          },
        },
        {
          '@type': 'FAQPage',
          mainEntity: service.faqs.map((faq) => ({
            '@type': 'Question',
            name: faq.question,
            acceptedAnswer: {
              '@type': 'Answer',
              text: faq.answer,
            },
          })),
        },
      ],
    };

    updateDocumentSeo({
      title: service.seoTitle,
      description: service.metaDescription,
      canonicalPath: `/${service.slug}`,
      jsonLd,
    });

    trackPageView(`/${service.slug}`, service.seoTitle);
  }, [service]);

  const scrollToEnquiry = () => {
    trackCtaClick(`Enquire ${service.title}`, `service_page_${service.slug}`);
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#111113] pt-24 md:pt-28">
      {/* Breadcrumb Navigation */}
      <div className="max-w-5xl mx-auto px-4 md:px-8">
        <nav
          aria-label="Breadcrumb"
          className="flex flex-wrap items-center gap-1.5 text-xs font-mono text-neutral-500 mb-6"
        >
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              onNavigate('/');
            }}
            className="hover:text-orange-600 transition-colors"
          >
            Home
          </a>
          <ChevronRight className="w-3.5 h-3.5 text-neutral-400" />
          <a
            href="/#services"
            onClick={(e) => {
              e.preventDefault();
              onNavigate('/#services');
            }}
            className="hover:text-orange-600 transition-colors"
          >
            Services
          </a>
          <ChevronRight className="w-3.5 h-3.5 text-neutral-400" />
          <span className="text-neutral-900 font-semibold" aria-current="page">
            {service.title}
          </span>
        </nav>

        {/* Hero Header */}
        <div className="bg-white rounded-3xl p-7 sm:p-10 md:p-12 border border-[#E7E1D8] shadow-xs">
          <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
            <span
              className={`inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-[11px] font-mono font-bold tracking-wider uppercase ${
                service.status === 'AVAILABLE NOW'
                  ? 'bg-emerald-600 text-white'
                  : 'bg-[#F8F5EF] text-[#FF7900] border border-[#FF7900]'
              }`}
            >
              <Sparkles className="w-3 h-3" />
              <span>{service.badgeText}</span>
            </span>

            <a
              href="/"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('/');
              }}
              className="inline-flex items-center gap-1.5 text-xs font-mono text-neutral-600 hover:text-orange-600 transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Homepage</span>
            </a>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#111113] tracking-tight leading-tight">
            {service.h1}
          </h1>

          <p className="mt-4 text-base sm:text-lg text-neutral-700 max-w-3xl leading-relaxed font-medium">
            {service.subtitle}
          </p>

          <div className="mt-6 space-y-3 text-sm sm:text-base text-neutral-600 leading-relaxed max-w-3xl">
            {service.overview.map((para, idx) => (
              <p key={idx}>{para}</p>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <button
              onClick={scrollToEnquiry}
              className="px-7 py-3.5 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-bold text-xs sm:text-sm uppercase tracking-wider shadow-lg shadow-orange-500/25 transition-all cursor-pointer flex items-center gap-2 active:scale-95"
            >
              <span>Start Your Enquiry</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href="https://wa.me/919360108256?text=Hi%20DevStudioCreations,%20I'd%20like%20to%20enquire%20about%20your%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-full bg-[#FAF7F2] hover:bg-neutral-200/70 text-neutral-900 font-semibold text-xs sm:text-sm border border-[#E7E1D8] transition-all cursor-pointer"
            >
              Chat on WhatsApp (+91 9360108256)
            </a>
          </div>
        </div>

        {/* Key Benefits */}
        <section className="mt-14 md:mt-16">
          <p className="text-xs font-bold tracking-[0.22em] text-orange-600 uppercase font-mono mb-2">
            WHY CHOOSE DEVSTUDIOCREATIONS
          </p>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111113] tracking-tight">
            Key Benefits of Our {service.title}
          </h2>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-5">
            {service.benefits.map((benefit, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 border border-[#E7E1D8] shadow-2xs"
              >
                <h3 className="text-lg font-extrabold text-[#111113]">
                  {benefit.title}
                </h3>
                <p className="mt-2 text-sm text-neutral-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Process & Workflow */}
        <section className="mt-14 md:mt-16">
          <p className="text-xs font-bold tracking-[0.22em] text-orange-600 uppercase font-mono mb-2">
            OUR PROCESS & WORKFLOW
          </p>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111113] tracking-tight">
            How We Deliver Your Project Across India
          </h2>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {service.workflow.map((item) => (
              <div
                key={item.step}
                className="bg-[#111113] text-white rounded-2xl p-6 border border-white/10 flex flex-col justify-between"
              >
                <div>
                  <span className="text-xs font-mono font-bold text-orange-400">
                    STEP {item.step}
                  </span>
                  <h3 className="mt-2 text-lg font-extrabold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-neutral-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Deliverables & Featured Live Portfolio Example */}
        <section className="mt-14 md:mt-16 grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          <div className="lg:col-span-6 bg-white rounded-3xl p-6 sm:p-8 border border-[#E7E1D8] flex flex-col justify-between">
            <div>
              <p className="text-xs font-bold tracking-[0.2em] text-orange-600 uppercase font-mono mb-2">
                WHAT'S INCLUDED
              </p>
              <h2 className="text-2xl font-extrabold text-[#111113] tracking-tight">
                Core Deliverables
              </h2>
              <ul className="mt-5 space-y-3">
                {service.deliverables.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2.5 text-sm text-neutral-700"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6 pt-5 border-t border-neutral-100 flex items-center justify-between text-xs text-neutral-500">
              <span>Serving Clients Across All States in India</span>
              <span className="font-mono text-orange-600 font-semibold">
                Studio HQ: Dindigul, TN
              </span>
            </div>
          </div>

          <div className="lg:col-span-6 bg-white rounded-3xl p-6 sm:p-8 border border-[#E7E1D8] flex flex-col justify-between">
            <div>
              <p className="text-xs font-bold tracking-[0.2em] text-emerald-700 uppercase font-mono mb-2">
                LIVE PRODUCTION SHOWCASE
              </p>
              <h2 className="text-2xl font-extrabold text-[#111113] tracking-tight">
                Featured Build: My Sketchbook
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-neutral-600 leading-relaxed">
                Explore our live artist portfolio and storytelling platform built with responsive paper textures, custom illustrations, and edge deployment.
              </p>

              <div className="mt-4 w-full h-44 rounded-2xl overflow-hidden bg-[#E4CAA6] border border-[#d8be9a] flex items-center justify-center p-2">
                <picture className="h-full flex items-center justify-center">
                  <source
                    srcSet="/assets/projects/sketchbook-hero.webp"
                    type="image/webp"
                  />
                  <img
                    src="/assets/projects/sketchbook-hero.png"
                    alt="My Sketchbook – Custom Portfolio Website Development by DevStudioCreations"
                    className="h-full w-auto object-contain"
                    loading="lazy"
                    decoding="async"
                    width="640"
                    height="640"
                  />
                </picture>
              </div>
            </div>

            <div className="mt-4 pt-4 border-t border-neutral-100 flex items-center justify-between gap-3">
              <a
                href="https://mysketchbook-amber.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-orange-600 hover:text-orange-700 underline underline-offset-2"
              >
                <span>Visit Live Project (mysketchbook-amber.vercel.app)</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </section>

        {/* Frequently Asked Questions */}
        <section className="mt-14 md:mt-16">
          <div className="flex items-center gap-2 mb-2">
            <HelpCircle className="w-4 h-4 text-orange-600" />
            <p className="text-xs font-bold tracking-[0.22em] text-orange-600 uppercase font-mono">
              FREQUENTLY ASKED QUESTIONS
            </p>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111113] tracking-tight">
            Common Questions About {service.title}
          </h2>

          <div className="mt-6 space-y-4">
            {service.faqs.map((faq, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 border border-[#E7E1D8]"
              >
                <h3 className="text-base sm:text-lg font-extrabold text-[#111113]">
                  {faq.question}
                </h3>
                <p className="mt-2 text-sm text-neutral-600 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Related Services Internal Linking */}
        <section className="mt-14 md:mt-16 pb-12">
          <p className="text-xs font-bold tracking-[0.22em] text-neutral-500 uppercase font-mono mb-2">
            EXPLORE RELATED SERVICES
          </p>
          <h2 className="text-xl sm:text-2xl font-extrabold text-[#111113] tracking-tight">
            Other Creative & Web Solutions
          </h2>

          <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {service.relatedSlugs.map((relSlug) => {
              const relService = SERVICE_PAGES[relSlug];
              if (!relService) return null;
              return (
                <a
                  key={relSlug}
                  href={`/${relService.slug}`}
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate(`/${relService.slug}`);
                  }}
                  className="group bg-white rounded-2xl p-5 border border-[#E7E1D8] hover:border-orange-500/60 hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-orange-600 font-semibold">
                      {relService.status}
                    </span>
                    <h3 className="mt-1 text-base font-extrabold text-[#111113] group-hover:text-orange-600 transition-colors">
                      {relService.title}
                    </h3>
                  </div>
                  <span className="mt-4 inline-flex items-center gap-1 text-xs font-bold text-neutral-700 group-hover:text-orange-600">
                    <span>Learn More</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </span>
                </a>
              );
            })}
          </div>
        </section>
      </div>

      {/* Contact / Enquiry Form Section */}
      <ContactSection onNavigate={onNavigate} />
    </div>
  );
};
