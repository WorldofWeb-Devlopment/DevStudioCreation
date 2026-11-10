import React, { useEffect } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  CheckCircle2,
  ChevronRight,
  Clock,
} from 'lucide-react';
import {
  BLOG_LIST,
  BlogPostData,
  PREFERRED_DOMAIN,
  SERVICE_PAGES,
} from '../data/seoData';
import { updateDocumentSeo } from '../utils/seo';
import { trackPageView } from '../utils/analytics';
import { ContactSection } from './ContactSection';

interface BlogViewProps {
  activePost?: BlogPostData | null;
  onNavigate: (path: string) => void;
}

export const BlogView: React.FC<BlogViewProps> = ({
  activePost,
  onNavigate,
}) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });

    if (activePost) {
      const postUrl = `${PREFERRED_DOMAIN}/blog/${activePost.slug}`;
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
                name: 'Blog & Guides',
                item: `${PREFERRED_DOMAIN}/blog`,
              },
              {
                '@type': 'ListItem',
                position: 3,
                name: activePost.title,
                item: postUrl,
              },
            ],
          },
          {
            '@type': 'Article',
            headline: activePost.title,
            description: activePost.metaDescription,
            datePublished: activePost.publishedDate,
            dateModified: activePost.publishedDate,
            author: {
              '@id': `${PREFERRED_DOMAIN}/#organization`,
            },
            publisher: {
              '@id': `${PREFERRED_DOMAIN}/#organization`,
            },
            mainEntityOfPage: postUrl,
          },
        ],
      };

      updateDocumentSeo({
        title: activePost.seoTitle,
        description: activePost.metaDescription,
        canonicalPath: `/blog/${activePost.slug}`,
        jsonLd,
      });
      trackPageView(`/blog/${activePost.slug}`, activePost.seoTitle);
    } else {
      const jsonLd = {
        '@context': 'https://schema.org',
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
            name: 'Blog & Guides',
            item: `${PREFERRED_DOMAIN}/blog`,
          },
        ],
      };

      updateDocumentSeo({
        title: 'Web Design, Development & Branding Guides | DevStudioCreations Blog',
        description:
          'Practical guides and insights on website development costs in India, custom vs template websites, UI/UX design, video editing, and small business branding.',
        canonicalPath: '/blog',
        jsonLd,
      });
      trackPageView('/blog', 'DevStudioCreations Blog & Guides');
    }
  }, [activePost]);

  if (activePost) {
    const relatedService = SERVICE_PAGES[activePost.relatedServiceSlug];

    return (
      <div className="min-h-screen bg-[#FAF7F2] text-[#111113] pt-24 md:pt-28">
        <article className="max-w-3xl mx-auto px-4 md:px-8 pb-16">
          {/* Breadcrumbs */}
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
              href="/blog"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('/blog');
              }}
              className="hover:text-orange-600 transition-colors"
            >
              Guides & Insights
            </a>
            <ChevronRight className="w-3.5 h-3.5 text-neutral-400" />
            <span className="text-neutral-900 font-semibold truncate max-w-[240px] sm:max-w-xs">
              {activePost.title}
            </span>
          </nav>

          <div className="bg-white rounded-3xl p-7 sm:p-10 border border-[#E7E1D8] shadow-xs">
            <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-mono text-neutral-500 mb-4">
              <span className="px-3 py-1 rounded-full bg-orange-500/10 text-orange-700 font-bold">
                {activePost.category}
              </span>
              <span className="inline-flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                <span>{activePost.readTime}</span>
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#111113] tracking-tight leading-tight">
              {activePost.title}
            </h1>

            <p className="mt-4 text-base text-neutral-700 leading-relaxed font-medium">
              {activePost.summary}
            </p>

            <div className="mt-8 space-y-8 border-t border-neutral-100 pt-7">
              {activePost.sections.map((sec, idx) => (
                <section key={idx} className="space-y-3">
                  <h2 className="text-xl sm:text-2xl font-extrabold text-[#111113]">
                    {sec.heading}
                  </h2>
                  {sec.paragraphs.map((p, pIdx) => (
                    <p
                      key={pIdx}
                      className="text-sm sm:text-base text-neutral-600 leading-relaxed"
                    >
                      {p}
                    </p>
                  ))}
                  {sec.bullets && (
                    <ul className="mt-3 space-y-2 pl-1">
                      {sec.bullets.map((b, bIdx) => (
                        <li
                          key={bIdx}
                          className="flex items-start gap-2 text-sm text-neutral-700"
                        >
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </section>
              ))}
            </div>

            {relatedService && (
              <div className="mt-10 p-6 rounded-2xl bg-[#FAF7F2] border border-[#E7E1D8] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-orange-600 font-bold">
                    RELATED SERVICE
                  </span>
                  <h3 className="text-lg font-extrabold text-[#111113] mt-0.5">
                    Explore {relatedService.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-600 mt-1">
                    {relatedService.subtitle}
                  </p>
                </div>
                <a
                  href={`/${relatedService.slug}`}
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate(`/${relatedService.slug}`);
                  }}
                  className="shrink-0 px-5 py-2.5 rounded-full bg-orange-500 hover:bg-orange-600 text-white text-xs font-bold inline-flex items-center gap-1.5 transition-all"
                >
                  <span>View Service</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            )}

            <div className="mt-8 pt-6 border-t border-neutral-100 flex items-center justify-between">
              <a
                href="/blog"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate('/blog');
                }}
                className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-neutral-700 hover:text-orange-600"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>All Guides & Articles</span>
              </a>
            </div>
          </div>
        </article>

        <ContactSection onNavigate={onNavigate} />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#111113] pt-24 md:pt-28">
      <div className="max-w-5xl mx-auto px-4 md:px-8 pb-16">
        <nav
          aria-label="Breadcrumb"
          className="flex items-center gap-1.5 text-xs font-mono text-neutral-500 mb-6"
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
          <span className="text-neutral-900 font-semibold">
            Guides & Insights
          </span>
        </nav>

        <div className="mb-10">
          <div className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-widest text-orange-600 font-bold mb-2">
            <BookOpen className="w-3.5 h-3.5" />
            <span>DIGITAL STRATEGY & WEB INSIGHTS</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#111113] tracking-tight">
            Guides for Growing Your Brand Online
          </h1>
          <p className="mt-3 text-sm sm:text-base text-neutral-600 max-w-2xl leading-relaxed">
            Practical, straightforward resources on website development, UI/UX design, branding, and video storytelling for businesses across India.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {BLOG_LIST.map((post) => (
            <a
              key={post.slug}
              href={`/blog/${post.slug}`}
              onClick={(e) => {
                e.preventDefault();
                onNavigate(`/blog/${post.slug}`);
              }}
              className="group bg-white rounded-3xl p-6 sm:p-8 border border-[#E7E1D8] hover:border-orange-500/60 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-neutral-500 mb-3">
                  <span className="text-orange-600 font-bold">
                    {post.category}
                  </span>
                  <span>{post.readTime}</span>
                </div>
                <h2 className="text-xl sm:text-2xl font-extrabold text-[#111113] group-hover:text-orange-600 transition-colors leading-snug">
                  {post.title}
                </h2>
                <p className="mt-2.5 text-xs sm:text-sm text-neutral-600 leading-relaxed">
                  {post.summary}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-neutral-100 flex items-center justify-between text-xs font-bold text-neutral-800 group-hover:text-orange-600">
                <span>Read Full Guide</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </a>
          ))}
        </div>
      </div>

      <ContactSection onNavigate={onNavigate} />
    </div>
  );
};
