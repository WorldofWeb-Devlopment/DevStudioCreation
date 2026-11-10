export interface ServicePageData {
  slug: string;
  title: string;
  seoTitle: string;
  metaDescription: string;
  h1: string;
  subtitle: string;
  status: 'AVAILABLE NOW' | 'COMING SOON';
  badgeText: string;
  overview: string[];
  benefits: {
    title: string;
    description: string;
  }[];
  workflow: {
    step: string;
    title: string;
    description: string;
  }[];
  deliverables: string[];
  faqs: {
    question: string;
    answer: string;
  }[];
  relatedSlugs: string[];
}

export interface BlogPostData {
  slug: string;
  title: string;
  seoTitle: string;
  metaDescription: string;
  category: string;
  readTime: string;
  publishedDate: string;
  summary: string;
  sections: {
    heading: string;
    paragraphs: string[];
    bullets?: string[];
  }[];
  relatedServiceSlug: string;
}

export const PREFERRED_DOMAIN = 'https://www.devstudiocreations.in';

export const SERVICE_PAGES: Record<string, ServicePageData> = {
  'website-development': {
    slug: 'website-development',
    title: 'Website Development',
    seoTitle: 'Website Development Services in India | DevStudioCreations',
    metaDescription:
      'Custom website development services in India by DevStudioCreations. We build fast, mobile-responsive, SEO-ready websites for businesses, startups, and creators.',
    h1: 'Custom Website Development Services in India',
    subtitle:
      'Fast, mobile-responsive, and conversion-focused websites engineered for businesses, startups, schools, and creators across India.',
    status: 'AVAILABLE NOW',
    badgeText: 'AVAILABLE NOW · ACCEPTING PROJECTS',
    overview: [
      'Your website is the digital headquarters of your business. At DevStudioCreations, we design and engineer modern websites that combine clean visual storytelling with fast loading speeds, mobile responsiveness, and search engine visibility for clients across India.',
      'Whether you are launching a new business website, upgrading an outdated platform, or building an interactive web experience, our engineering workflow focuses on clean architecture, Core Web Vitals performance, and clear user journeys that turn visitors into genuine enquiries.',
    ],
    benefits: [
      {
        title: 'Engineered for Speed & Core Web Vitals',
        description:
          'Built with modern frontend tooling, optimized WebP assets, and clean code so pages load rapidly on both mobile data and broadband networks across India.',
      },
      {
        title: 'Mobile-First Responsive Layouts',
        description:
          'Every layout adapts seamlessly across smartphones, tablets, laptops, and large desktop monitors without horizontal scrolling or visual breakage.',
      },
      {
        title: 'Technical SEO Built In from Day One',
        description:
          'Semantic HTML5 heading hierarchy, clean URL structures, Schema.org structured data, Open Graph tags, and XML sitemaps configured out of the box.',
      },
      {
        title: 'Conversion-Focused User Journey',
        description:
          'Clear call-to-action placement, frictionless enquiry forms, and direct WhatsApp integration to help your business capture qualified leads.',
      },
    ],
    workflow: [
      {
        step: '01',
        title: 'Discovery & Architecture',
        description:
          'We understand your business goals, target audience, and required pages to map out a clear site structure and content hierarchy.',
      },
      {
        step: '02',
        title: 'UI/UX & Responsive Design',
        description:
          'We craft custom visual layouts, typography scales, and interactive states tailored to your brand identity.',
      },
      {
        step: '03',
        title: 'Clean Development & SEO Setup',
        description:
          'We develop the website using modern React, Vite, and Tailwind CSS standards, integrating contact workflows, analytics, and technical SEO.',
      },
      {
        step: '04',
        title: 'Testing, Launch & Support',
        description:
          'After cross-device testing and performance verification, we deploy your site on high-speed global edge hosting and support you post-launch.',
      },
    ],
    deliverables: [
      'Custom responsive website tailored to your brand',
      'Mobile, tablet, and desktop optimization',
      'Direct enquiry form & WhatsApp click-to-chat integration',
      'On-page Technical SEO, Meta Tags & Schema.org JSON-LD',
      'Google Analytics 4 (GA4) & Search Console readiness',
      'Fast edge deployment with SSL security (HTTPS)',
    ],
    faqs: [
      {
        question: 'Do you work with businesses outside Dindigul and Tamil Nadu?',
        answer:
          'Yes. While our studio is based in Dindigul, Tamil Nadu, we work remotely with businesses, startups, and professionals across all states in India through structured online milestones and regular live previews.',
      },
      {
        question: 'Will my website work smoothly on mobile phones?',
        answer:
          'Absolutely. Every website we build follows a mobile-first responsive approach and is tested across popular Android and iOS screen sizes.',
      },
      {
        question: 'Is basic SEO included in website development?',
        answer:
          'Yes. Every website includes semantic heading structure (H1–H3), custom title and meta descriptions, canonical URLs, Open Graph tags, XML sitemap, and Schema.org structured data.',
      },
      {
        question: 'How can visitors contact me through the website?',
        answer:
          'We integrate custom enquiry forms that deliver leads directly to your email, alongside one-click WhatsApp chat and phone/social links.',
      },
    ],
    relatedSlugs: [
      'business-website-development',
      'landing-page-development',
      'portfolio-website-development',
      'website-redesign',
    ],
  },
  'business-website-development': {
    slug: 'business-website-development',
    title: 'Business Website Development',
    seoTitle: 'Business Website Development in India | DevStudioCreations',
    metaDescription:
      'Professional business website development services in India. Establish brand credibility, showcase your services, and generate customer enquiries online.',
    h1: 'Business Website Development Services in India',
    subtitle:
      'Build lasting digital credibility with a professional corporate or small-business website designed to showcase your services and generate enquiries.',
    status: 'AVAILABLE NOW',
    badgeText: 'AVAILABLE NOW · BUSINESS & CORPORATE SITES',
    overview: [
      'When potential customers search for your company or services online, your website shapes their very first impression. A slow, confusing, or outdated site costs you trust before a conversation even begins.',
      'DevStudioCreations builds structured, high-clarity business websites for companies, educational institutions, clinics, service providers, and growing enterprises across India. We focus on clear service presentation, authentic brand storytelling, and straightforward lead generation.',
    ],
    benefits: [
      {
        title: 'Professional Brand Credibility',
        description:
          'Present your company profile, core services, and contact information with a polished layout that builds immediate customer confidence.',
      },
      {
        title: 'Structured Service & Product Showcases',
        description:
          'Organize your offerings clearly so prospective clients immediately understand how your business solves their needs.',
      },
      {
        title: 'Local & National Search Visibility',
        description:
          'Structured metadata and Schema.org markup help search engines understand your business category, service areas, and contact channels.',
      },
      {
        title: 'Direct Lead Capture',
        description:
          'Turn website traffic into actionable business enquiries via integrated forms and instant WhatsApp communication.',
      },
    ],
    workflow: [
      {
        step: '01',
        title: 'Business Profile & Content Planning',
        description:
          'We organize your company overview, service offerings, and value propositions into a logical page flow.',
      },
      {
        step: '02',
        title: 'Brand-Aligned Visual Design',
        description:
          'We design clean, trustworthy interfaces that reflect your industry and company identity.',
      },
      {
        step: '03',
        title: 'Responsive Engineering & Lead Integration',
        description:
          'We build fast-loading pages connected to your enquiry email, WhatsApp, and Google Analytics 4.',
      },
      {
        step: '04',
        title: 'Quality Assurance & Production Go-Live',
        description:
          'We verify mobile usability, form delivery, and SEO tags before launching on your custom domain.',
      },
    ],
    deliverables: [
      'Complete business website architecture',
      'Dedicated sections for About, Services, Work/Projects & Contact',
      'Custom enquiry form with mobile number and email capture',
      'LocalBusiness / ProfessionalService JSON-LD structured data',
      'Responsive design across mobile, tablet, and desktop',
      'Analytics event tracking for buttons and lead submissions',
    ],
    faqs: [
      {
        question: 'What types of businesses do you build websites for?',
        answer:
          'We build websites for small and medium businesses, startups, schools and educational institutions, agencies, consultants, and local service providers across India.',
      },
      {
        question: 'Can you connect my existing custom domain (like .in or .com)?',
        answer:
          'Yes. We configure your custom domain with HTTPS SSL certificates, canonical WWW routing, and permanent redirects.',
      },
      {
        question: 'What information do I need to provide to start?',
        answer:
          'Simply share your business name, a brief overview of the services you offer, any existing logo or photos, and your preferred contact details.',
      },
    ],
    relatedSlugs: [
      'website-development',
      'landing-page-development',
      'website-redesign',
      'logo-design',
    ],
  },
  'landing-page-development': {
    slug: 'landing-page-development',
    title: 'Landing Page Development',
    seoTitle: 'Landing Page Design & Development Services in India | DevStudioCreations',
    metaDescription:
      'High-converting landing page design and development services in India. Built for product launches, ad campaigns, and lead generation with fast load times.',
    h1: 'High-Converting Landing Page Development in India',
    subtitle:
      'Focused, fast-loading single-page experiences engineered for product launches, marketing campaigns, and high-intent lead generation.',
    status: 'AVAILABLE NOW',
    badgeText: 'AVAILABLE NOW · CAMPAIGN & PRODUCT PAGES',
    overview: [
      'Unlike multi-purpose websites, a landing page has one focused mission: guiding visitors toward a specific action—whether that is submitting an enquiry, booking a consultation, or exploring a new product launch.',
      'At DevStudioCreations, we design and build high-speed landing pages for Indian startups, creators, and businesses. Every section—from the above-the-fold headline to the call-to-action form—is structured to hold attention and minimize drop-offs on mobile and desktop.',
    ],
    benefits: [
      {
        title: 'Single-Goal Conversion Architecture',
        description:
          'Clear visual hierarchy that guides visitors naturally from headline hook to value proposition, proof, and action.',
      },
      {
        title: 'Instant Mobile Loading',
        description:
          'Ad-click visitors leave if a page takes too long to load. We optimize assets and code splitting for sub-second perceived rendering.',
      },
      {
        title: 'Built-In GA4 Conversion Tracking',
        description:
          'Track CTA button clicks, WhatsApp taps, and form submissions accurately in Google Analytics 4.',
      },
      {
        title: 'Engaging Micro-Interactions',
        description:
          'Tasteful animations and interactive cards that elevate brand perception without slowing down page performance.',
      },
    ],
    workflow: [
      {
        step: '01',
        title: 'Offer & Audience Alignment',
        description:
          'We define the core user action, target audience questions, and primary call-to-action.',
      },
      {
        step: '02',
        title: 'Wireframing & Visual Storytelling',
        description:
          'We craft a persuasive section flow with bold typography, clear feature highlights, and interactive elements.',
      },
      {
        step: '03',
        title: 'High-Speed Frontend Build',
        description:
          'We code the landing page with clean React & Tailwind CSS, ensuring zero layout shifts (CLS) and smooth responsiveness.',
      },
      {
        step: '04',
        title: 'Analytics Hookup & Launch',
        description:
          'We connect lead delivery, verify GA4 events, and deploy to your domain or campaign URL.',
      },
    ],
    deliverables: [
      'Custom responsive landing page design & code',
      'Above-the-fold hero section with clear CTA',
      'Lead capture enquiry form + WhatsApp instant chat button',
      'GA4 event tracking for CTA clicks and form submissions',
      'Optimized WebP imagery and Core Web Vitals tuning',
    ],
    faqs: [
      {
        question: 'How is a landing page different from a full website?',
        answer:
          'A landing page is a streamlined, focused page designed around a single campaign, product, or service offer to maximize enquiries, whereas a full website covers multiple company departments and resources.',
      },
      {
        question: 'Can the landing page be expanded into a full website later?',
        answer:
          'Yes. Because we build with modular React and Tailwind CSS components, your landing page can smoothly expand with additional pages as your business grows.',
      },
      {
        question: 'Do you configure Google Analytics tracking on the landing page?',
        answer:
          'Yes, we set up GA4 event tracking for CTA clicks, form submissions, and social/WhatsApp clicks so you can measure campaign performance.',
      },
    ],
    relatedSlugs: [
      'website-development',
      'business-website-development',
      'portfolio-website-development',
      'website-redesign',
    ],
  },
  'portfolio-website-development': {
    slug: 'portfolio-website-development',
    title: 'Portfolio Website Development',
    seoTitle: 'Portfolio Website Development Services in India | DevStudioCreations',
    metaDescription:
      'Custom portfolio website development in India for artists, designers, photographers, developers, and freelancers. Showcase your work with a memorable digital presence.',
    h1: 'Custom Portfolio Website Development in India',
    subtitle:
      'Bespoke portfolio websites for artists, creators, architects, freelancers, and studios who want their work presented in an unforgettable way.',
    status: 'AVAILABLE NOW',
    badgeText: 'AVAILABLE NOW · CREATOR & STUDIO PORTFOLIOS',
    overview: [
      'Generic link trees and social media feeds compress your best work into a uniform grid. A dedicated portfolio website gives you complete creative control over how clients and collaborators experience your craft.',
      'As demonstrated in our live production build "My Sketchbook" (mysketchbook-amber.vercel.app), DevStudioCreations specializes in expressive, character-rich portfolio websites that pair artistic personality with rock-solid responsive engineering.',
    ],
    benefits: [
      {
        title: 'Tailored to Your Creative Style',
        description:
          'Whether you prefer a minimalist editorial gallery, a textured sketchbook aesthetic, or a bold interactive showcase, we design around your art.',
      },
      {
        title: 'High-Resolution Visual Presentation',
        description:
          'Show off illustrations, photography, case studies, and project breakdowns using crisp WebP imagery and interactive preview modals.',
      },
      {
        title: 'Own Your Search Presence',
        description:
          'Rank for your own name and creative specialty on Google with dedicated metadata and structured portfolio markup.',
      },
      {
        title: 'Direct Client Commission & Enquiry Flow',
        description:
          'Make it effortless for clients, agencies, or recruiters to reach out for commissions and collaborations.',
      },
    ],
    workflow: [
      {
        step: '01',
        title: 'Curating Your Best Work',
        description:
          'We organize your projects, case studies, and personal story into an engaging narrative.',
      },
      {
        step: '02',
        title: 'Bespoke Visual & Interaction Design',
        description:
          'We design custom galleries, project modals, and signature visual details that match your creative identity.',
      },
      {
        step: '03',
        title: 'Responsive Build & Image Optimization',
        description:
          'We optimize every artwork for fast loading without sacrificing visual sharpness across devices.',
      },
      {
        step: '04',
        title: 'Custom Domain Launch',
        description:
          'We launch your portfolio with complete SEO tags, social sharing cards, and contact integration.',
      },
    ],
    deliverables: [
      'Custom-designed creator or professional portfolio website',
      'Interactive project gallery with detail preview modals',
      'Integrated blog / notes or case study layout',
      'Optimized high-DPI image delivery (WebP + lazy loading)',
      'Direct commission / contact form & social links',
    ],
    faqs: [
      {
        question: 'Can I see a live example of a portfolio website you built?',
        answer:
          'Yes! You can explore "My Sketchbook" (https://mysketchbook-amber.vercel.app/) directly from our Work section—a live artist portfolio and blog engineered and deployed by DevStudioCreations.',
      },
      {
        question: 'Will my artwork or photos load quickly without losing quality?',
        answer:
          'Yes. We use modern WebP compression, responsive image sizing, and lazy loading so your visuals look sharp while loading rapidly.',
      },
      {
        question: 'Can you include a blog or storytelling section in my portfolio?',
        answer:
          'Certainly. We can include dedicated sections for project stories, creative notes, or articles alongside your main gallery.',
      },
    ],
    relatedSlugs: [
      'website-development',
      'landing-page-development',
      'website-redesign',
      'graphic-design',
    ],
  },
  'website-redesign': {
    slug: 'website-redesign',
    title: 'Website Redesign Services',
    seoTitle: 'Website Redesign Services in India | Modernize Your Site | DevStudioCreations',
    metaDescription:
      'Professional website redesign services in India. Upgrade outdated layouts, fix mobile usability issues, improve Core Web Vitals speed, and preserve SEO equity.',
    h1: 'Website Redesign & Performance Modernization Services',
    subtitle:
      'Transform slow, outdated, or non-responsive websites into fast, modern, mobile-friendly digital experiences while protecting your search visibility.',
    status: 'AVAILABLE NOW',
    badgeText: 'AVAILABLE NOW · UI/UX & PERFORMANCE REVAMP',
    overview: [
      'If your existing website looks dated, breaks on mobile screens, loads slowly, or fails to generate enquiries, a strategic website redesign can revitalize how customers perceive your brand.',
      'At DevStudioCreations, we approach website redesigns with both visual design and technical SEO care. We modernize your UI/UX, rebuild slow legacy pages with fast React and Tailwind CSS architecture, and implement proper canonical tags and 301/308 redirects so you never lose existing search traffic.',
    ],
    benefits: [
      {
        title: 'Modernized UI & Brand Refresh',
        description:
          'Replace cluttered, outdated templates with clean typography, balanced spacing, and contemporary interactive components.',
      },
      {
        title: 'Core Web Vitals & Speed Upgrade',
        description:
          'Eliminate bloated scripts, unoptimized images, and layout shifts (CLS) for a noticeably faster user experience.',
      },
      {
        title: 'SEO-Safe Migration & Redirects',
        description:
          'We audit your current URLs, canonical tags, and sitemap to ensure clean redirects and zero broken links during the transition.',
      },
      {
        title: 'Improved Mobile Conversion Flow',
        description:
          'Redesigned navigation, clear call-to-action buttons, and simplified contact forms that work effortlessly on smartphones.',
      },
    ],
    workflow: [
      {
        step: '01',
        title: 'Current Site & SEO Audit',
        description:
          'We inspect your existing website structure, mobile usability bottlenecks, loading performance, and indexed URLs.',
      },
      {
        step: '02',
        title: 'UX Restructuring & Visual Redesign',
        description:
          'We craft a fresh, modern layout that highlights your core services and simplifies customer navigation.',
      },
      {
        step: '03',
        title: 'Clean Rebuild & Content Migration',
        description:
          'We rebuild the frontend for speed, migrate and refine your content, and set up structured data.',
      },
      {
        step: '04',
        title: 'Redirect Mapping & Seamless Switch',
        description:
          'We configure canonical URLs, domain redirects, and updated XML sitemaps for a smooth launch.',
      },
    ],
    deliverables: [
      'Comprehensive UI/UX and technical SEO audit of your current site',
      'Complete responsive frontend redesign and rebuild',
      'Image compression (WebP) and asset speed optimization',
      '301/308 redirect mapping to preserve existing SEO links',
      'Updated XML sitemap, robots.txt, and Schema.org JSON-LD',
    ],
    faqs: [
      {
        question: 'Will redesigning my website hurt my current Google Search Console indexing?',
        answer:
          'When done properly with canonical URL alignment, clean sitemap updates, and permanent redirects for changed URLs, a redesign resolves technical indexing errors and improves user engagement signals.',
      },
      {
        question: 'Can I keep my existing domain name and email?',
        answer:
          'Yes. Your domain name and business email remain completely yours—we simply deploy the upgraded website to your domain.',
      },
      {
        question: 'Can you rewrite or improve our existing website copy during the redesign?',
        answer:
          'Yes. We help refine headings, service descriptions, and call-to-action copy so it reads naturally and clearly communicates your value.',
      },
    ],
    relatedSlugs: [
      'website-development',
      'business-website-development',
      'landing-page-development',
      'portfolio-website-development',
    ],
  },
  'graphic-design': {
    slug: 'graphic-design',
    title: 'Graphic Design Services',
    seoTitle: 'Graphic Design Services in India | Branding & Visuals | DevStudioCreations',
    metaDescription:
      'Creative graphic design services in India by DevStudioCreations. Brand identity systems, marketing posters, social media creatives, and visual assets.',
    h1: 'Creative Graphic Design Services in India',
    subtitle:
      'Cohesive brand visuals, marketing posters, and social media creatives crafted to make your business memorable across digital and print channels.',
    status: 'COMING SOON',
    badgeText: 'COMING SOON · EARLY ENQUIRIES OPEN',
    overview: [
      'Strong visual communication sets memorable brands apart from the noise. Every color choice, typographic pairing, and layout grid shapes how customers feel about your business.',
      'DevStudioCreations is expanding our creative studio division to offer dedicated graphic design services across India—covering brand identity systems, promotional posters, social media creative kits, and digital marketing graphics that align seamlessly with your website.',
    ],
    benefits: [
      {
        title: 'Consistent Visual Identity',
        description:
          'Maintain a unified look across your website, social media channels, and marketing collateral.',
      },
      {
        title: 'Scroll-Stopping Social Media Creatives',
        description:
          'Purpose-built graphics for Instagram, LinkedIn, Facebook, and digital campaigns designed for readability and impact.',
      },
      {
        title: 'Print & Digital Ready Assets',
        description:
          'High-resolution exports formatted accurately for both web displays and physical print materials.',
      },
      {
        title: 'Seamless Web + Brand Integration',
        description:
          'Work with one creative studio for both your website development and your visual branding assets.',
      },
    ],
    workflow: [
      {
        step: '01',
        title: 'Creative Brief & Moodboard',
        description:
          'We align on your brand personality, target audience, color preferences, and visual direction.',
      },
      {
        step: '02',
        title: 'Concept Exploration',
        description:
          'Our designers develop original layout concepts, typography pairings, and visual compositions.',
      },
      {
        step: '03',
        title: 'Refinement & Polish',
        description:
          'We fine-tune details based on your feedback to ensure every visual element is crisp and balanced.',
      },
      {
        step: '04',
        title: 'Final Asset Delivery',
        description:
          'Receive organized, production-ready files optimized for web, social media, and print use.',
      },
    ],
    deliverables: [
      'Brand visual guidelines (color palette & typography)',
      'Social media poster and banner templates',
      'Promotional & event poster designs',
      'Web-optimized graphics and illustrations',
    ],
    faqs: [
      {
        question: 'Is the Graphic Design service currently open for standalone bookings?',
        answer:
          'Our standalone Graphic Design division is currently marked as Coming Soon as we finalize our production pipeline, but we welcome early enquiries and bundled requests alongside website development projects.',
      },
      {
        question: 'Can you design graphics that match the new website you build for us?',
        answer:
          'Yes! Coordinating your website design and brand graphics together ensures 100% visual consistency across all customer touchpoints.',
      },
    ],
    relatedSlugs: [
      'logo-design',
      'video-editing',
      'website-development',
      'portfolio-website-development',
    ],
  },
  'logo-design': {
    slug: 'logo-design',
    title: 'Logo Design Services',
    seoTitle: 'Logo Design Services in India | Custom Brand Identity | DevStudioCreations',
    metaDescription:
      'Custom logo design services in India by DevStudioCreations. Timeless, versatile brand marks and visual identities crafted for startups and businesses.',
    h1: 'Custom Logo Design & Brand Identity Services in India',
    subtitle:
      'Distinctive, scalable logos and visual marks designed to anchor your brand across websites, mobile icons, packaging, and signage.',
    status: 'COMING SOON',
    badgeText: 'COMING SOON · EARLY ENQUIRIES OPEN',
    overview: [
      'A great logo is simple enough to be recognized at a glance, versatile enough to work as a tiny browser favicon or a large storefront sign, and distinctive enough to represent your company for years.',
      'As part of DevStudioCreations’ upcoming Graphic Design & Branding suite, our custom logo design service focuses on original concept development, clean vector geometry, and practical brand identity guidelines for Indian startups and businesses.',
    ],
    benefits: [
      {
        title: 'Original Vector Craftsmanship',
        description:
          'Built from scratch with clean geometry so your logo scales infinitely without pixelation.',
      },
      {
        title: 'Multi-Format Versatility',
        description:
          'Designed to look sharp in full color, monochrome, dark mode, and small social profile avatars.',
      },
      {
        title: 'Cohesive Color & Type Pairing',
        description:
          'Paired with a harmonious color palette and typography recommendations ready for your website.',
      },
      {
        title: 'Web-Ready Favicon & SVG Delivery',
        description:
          'Optimized SVG and PNG exports that integrate directly into modern web and mobile interfaces.',
      },
    ],
    workflow: [
      {
        step: '01',
        title: 'Brand Discovery',
        description:
          'We research your industry, brand values, and visual preferences to establish a clear creative direction.',
      },
      {
        step: '02',
        title: 'Sketching & Vector Concepts',
        description:
          'We explore distinct symbol, wordmark, and combination mark concepts.',
      },
      {
        step: '03',
        title: 'Iteration & Color Testing',
        description:
          'We test the selected mark across light and dark backgrounds and refine proportions.',
      },
      {
        step: '04',
        title: 'Final Brand Kit Handover',
        description:
          'We deliver master vector files, web-ready SVGs, PNGs, and usage guidelines.',
      },
    ],
    deliverables: [
      'Primary custom logo mark & wordmark variations',
      'Light mode, dark mode, and monochrome versions',
      'Scalable SVG, high-res PNG, and vector files',
      'Website favicon and social profile icon set',
    ],
    faqs: [
      {
        question: 'When will standalone Logo Design packages launch?',
        answer:
          'Standalone Logo Design packages are launching soon alongside our Graphic Design division. You can submit an enquiry today if you are planning an upcoming brand + website launch.',
      },
      {
        question: 'Will I receive scalable SVG files for my website?',
        answer:
          'Yes, all logo deliveries include crisp SVG and high-resolution PNG formats ideal for fast, sharp rendering on modern websites.',
      },
    ],
    relatedSlugs: [
      'graphic-design',
      'website-development',
      'business-website-development',
      'website-redesign',
    ],
  },
  'video-editing': {
    slug: 'video-editing',
    title: 'Video Editing Services',
    seoTitle: 'Video Editing Services in India | Reels, YouTube & Promos | DevStudioCreations',
    metaDescription:
      'Professional video editing services in India by DevStudioCreations. Engaging Reels, YouTube videos, promotional brand edits, color grading, and motion graphics.',
    h1: 'Professional Video Editing Services in India',
    subtitle:
      'High-retention video editing, color grading, and motion graphics crafted for brand promos, YouTube creators, and social media Reels across India.',
    status: 'COMING SOON',
    badgeText: 'COMING SOON · EARLY ENQUIRIES OPEN',
    overview: [
      'Video is the most powerful medium for capturing attention and explaining complex stories in seconds. Great editing transforms raw footage into a cohesive narrative through pacing, sound design, color grading, and motion graphics.',
      'DevStudioCreations is preparing to launch our dedicated Video Editing studio line for brands, creators, and businesses across India—supporting promotional brand videos, YouTube storytelling, and high-impact short-form Reels.',
    ],
    benefits: [
      {
        title: 'Story-Driven Pacing & Retention',
        description:
          'Tightly paced cuts, visual hooks, and dynamic transitions engineered to keep viewers watching.',
      },
      {
        title: 'Cinematic Color Grading & Audio Polish',
        description:
          'Balanced color tones and crisp audio leveling that give your videos a professional studio finish.',
      },
      {
        title: 'Custom Motion Graphics & Captions',
        description:
          'Clean lower thirds, animated titles, and readable on-screen captions tailored for mobile viewing.',
      },
      {
        title: 'Multi-Platform Aspect Ratios',
        description:
          'Optimized exports for 16:9 widescreen (YouTube/Web) and 9:16 vertical (Instagram Reels & YouTube Shorts).',
      },
    ],
    workflow: [
      {
        step: '01',
        title: 'Footage Review & Storyboard',
        description:
          'We review your raw footage, script, or reference style to lock in the pacing and narrative arc.',
      },
      {
        step: '02',
        title: 'Rough Cut & Narrative Assembly',
        description:
          'We assemble the primary storyline, selecting the strongest takes and establishing rhythm.',
      },
      {
        step: '03',
        title: 'Motion Graphics, Color & Sound',
        description:
          'We layer in titles, visual effects, color grading, background music, and sound design.',
      },
      {
        step: '04',
        title: 'Review & High-Bitrate Delivery',
        description:
          'After final feedback, we render crisp, platform-optimized 1080p/4K video masters.',
      },
    ],
    deliverables: [
      'Edited promotional videos, YouTube episodes, or Reels',
      'Color grading and audio cleanup',
      'Custom animated titles, captions, and lower thirds',
      'Platform-ready exports (4K / 1080p, 16:9 & 9:16)',
    ],
    faqs: [
      {
        question: 'When will Video Editing services be available?',
        answer:
          'Our Video Editing division is currently marked as Coming Soon while we complete studio setup. Feel free to send an enquiry through our contact form to register early interest.',
      },
      {
        question: 'What types of videos will you edit?',
        answer:
          'We focus on brand promotional videos, product showcases, YouTube content, and short-form social Reels with custom motion graphics.',
      },
    ],
    relatedSlugs: [
      'graphic-design',
      'website-development',
      'landing-page-development',
      'portfolio-website-development',
    ],
  },
};

export const SERVICE_LIST: ServicePageData[] = Object.values(SERVICE_PAGES);

export const BLOG_POSTS: Record<string, BlogPostData> = {
  'why-every-business-needs-a-professional-website': {
    slug: 'why-every-business-needs-a-professional-website',
    title: 'Why Every Business in India Needs a Professional Website',
    seoTitle: 'Why Every Business Needs a Professional Website in India | DevStudioCreations',
    metaDescription:
      'Discover why having a professional, mobile-responsive website is essential for Indian businesses to build credibility, rank on Google, and capture customer enquiries.',
    category: 'Business Growth',
    readTime: '4 min read',
    publishedDate: '2026-11-10',
    summary:
      'Social media profiles alone are no longer enough. Learn how a dedicated, fast-loading business website builds lasting trust and generates qualified enquiries 24/7.',
    relatedServiceSlug: 'business-website-development',
    sections: [
      {
        heading: '1. First Impressions Happen on Google Search',
        paragraphs: [
          'Before a customer calls a business or visits a store, their first instinct is to look up the company online. Whether you run a service firm, a school, a retail brand, or a startup in India, a professional website acts as your 24/7 digital headquarters.',
          'Without an official website, prospective clients often question whether a business is established or active. A clean, modern website immediately communicates professionalism and reliability.',
        ],
      },
      {
        heading: '2. Full Control Over Your Brand Story (Unlike Social Media)',
        paragraphs: [
          'While Instagram, Facebook, and WhatsApp are valuable channels for engagement, you do not own those platforms. Algorithm changes can reduce your reach overnight, and social feeds scatter your key service details across dozens of posts.',
          'On your own website, you control the exact structure: visitors can read about your company, compare your services, view real project examples, and submit an enquiry without distractions.',
        ],
      },
      {
        heading: '3. Capturing High-Intent Search Traffic',
        paragraphs: [
          'People scrolling social media are usually looking for entertainment, whereas people typing a service query into Google have genuine buying intent.',
        ],
        bullets: [
          'Rank for your brand name and core service categories',
          'Showcase clear answers to common customer questions',
          'Convert visitors directly with embedded enquiry forms and one-click WhatsApp links',
        ],
      },
    ],
  },
  'website-development-cost-in-india': {
    slug: 'website-development-cost-in-india',
    title: 'Website Development Cost in India: Key Factors That Shape Pricing',
    seoTitle: 'Website Development Cost in India – What Determines Pricing? | DevStudioCreations',
    metaDescription:
      'Understand the real factors that determine website development cost in India—from page count and custom UI design to responsive performance and SEO setup.',
    category: 'Planning & Strategy',
    readTime: '5 min read',
    publishedDate: '2026-11-10',
    summary:
      'Why do website quotes vary so widely? Here is a transparent breakdown of the scope, design, and engineering factors that influence website development costs in India.',
    relatedServiceSlug: 'website-development',
    sections: [
      {
        heading: '1. Scope, Page Count, and Functional Complexity',
        paragraphs: [
          'A focused single-page landing page for a product launch requires a very different engineering effort than a multi-page corporate website or a custom web application with interactive dashboards.',
          'When planning your budget, start by listing the core goals your website must achieve in its first phase—such as showcasing services, displaying a portfolio, and capturing customer leads.',
        ],
      },
      {
        heading: '2. Custom UI/UX Design vs. Generic Pre-Made Templates',
        paragraphs: [
          'Low-cost setups often reuse heavy, generic templates that look identical to hundreds of other sites and load slowly on mobile networks.',
          'Custom frontend development—using modern frameworks like React, Vite, and Tailwind CSS—tailors the typography, color palette, animations, and mobile layout specifically to your brand and target audience.',
        ],
      },
      {
        heading: '3. Essential Technical Foundations Not to Overlook',
        paragraphs: [
          'When comparing proposals from web development studios in India, always check whether the following fundamentals are included:',
        ],
        bullets: [
          'Mobile-first responsive design tested across screen sizes',
          'On-page Technical SEO (canonical URLs, meta tags, XML sitemap, Schema.org JSON-LD)',
          'Core Web Vitals speed optimization and modern WebP image compression',
          'Direct enquiry form and WhatsApp integration with Google Analytics 4 tracking',
        ],
      },
    ],
  },
  'custom-website-vs-template-website': {
    slug: 'custom-website-vs-template-website',
    title: 'Custom Website vs Template Website: Which Is Right for Your Business?',
    seoTitle: 'Custom Website vs Template Website – Pros, Cons & SEO Impact | DevStudioCreations',
    metaDescription:
      'Compare custom website development vs template websites. Learn how custom engineering improves page speed, Core Web Vitals, brand uniqueness, and long-term SEO.',
    category: 'Web Engineering',
    readTime: '4 min read',
    publishedDate: '2026-11-10',
    summary:
      'Templates promise quick setup, but often come with bloated code and generic layouts. Compare how custom web development stacks up in performance, SEO, and scalability.',
    relatedServiceSlug: 'website-development',
    sections: [
      {
        heading: '1. Performance & Core Web Vitals',
        paragraphs: [
          'Pre-built theme templates are designed to bundle dozens of plugins, sliders, and style sheets so they can appeal to everyone. Unfortunately, this excess code slows down Largest Contentful Paint (LCP) and hurts mobile usability.',
          'A custom-engineered website loads only the exact styles, components, and assets required for your pages—resulting in noticeably faster load times and smoother scrolling.',
        ],
      },
      {
        heading: '2. Brand Differentiation',
        paragraphs: [
          'Your website should reflect your unique value proposition. Custom design allows you to craft signature interactions, tailored project showcases, and a layout built around your real content rather than forcing your text into rigid template boxes.',
        ],
      },
      {
        heading: '3. Long-Term Flexibility',
        paragraphs: [
          'As your business introduces new services or campaigns, a clean modular codebase makes it straightforward to add new landing pages, structured data, or custom tools without fighting plugin conflicts.',
        ],
      },
    ],
  },
  'importance-of-good-website-design': {
    slug: 'importance-of-good-website-design',
    title: 'The Importance of Good Website Design for User Trust & Conversions',
    seoTitle: 'Importance of Good Website Design for Business Growth | DevStudioCreations',
    metaDescription:
      'Learn how thoughtful UI/UX website design, clear typography, and mobile responsiveness increase visitor trust and enquiry conversions.',
    category: 'UI/UX Design',
    readTime: '4 min read',
    publishedDate: '2026-11-10',
    summary:
      'Good web design is more than decoration—it is about clarity, visual hierarchy, and guiding visitors effortlessly toward contacting your business.',
    relatedServiceSlug: 'website-redesign',
    sections: [
      {
        heading: '1. Visual Hierarchy Guides Attention',
        paragraphs: [
          'Visitors scan websites in seconds. Strong typography, generous whitespace, and clear contrast help users immediately grasp what your company does and why it matters.',
        ],
      },
      {
        heading: '2. Mobile Usability Is Non-Negotiable in India',
        paragraphs: [
          'The majority of web traffic in India comes from smartphones. Good website design ensures touch-friendly buttons, readable font sizes without zooming, and navigation menus that work effortlessly with one thumb.',
        ],
      },
      {
        heading: '3. Frictionless Paths to Enquiry',
        paragraphs: [
          'When call-to-action buttons, WhatsApp links, and enquiry forms are clearly visible and easy to complete, a higher percentage of visitors take the next step to reach out.',
        ],
      },
    ],
  },
  'how-to-choose-a-web-development-company': {
    slug: 'how-to-choose-a-web-development-company',
    title: 'How to Choose a Web Development Company in India: A Practical Checklist',
    seoTitle: 'How to Choose a Web Development Company in India | DevStudioCreations',
    metaDescription:
      'A practical checklist for business owners on how to evaluate and choose the right web development company in India based on live work, code quality, and SEO.',
    category: 'Buyer Guide',
    readTime: '5 min read',
    publishedDate: '2026-11-10',
    summary:
      'Selecting the right digital partner makes all the difference. Use this practical checklist to evaluate live portfolios, technical SEO standards, and communication.',
    relatedServiceSlug: 'website-development',
    sections: [
      {
        heading: '1. Inspect Real, Live Production Websites',
        paragraphs: [
          'Always look beyond static screenshots. Open the agency’s live websites on your own phone and desktop browser. Check how fast they load, how smooth the animations feel, and whether the layout adapts cleanly.',
        ],
      },
      {
        heading: '2. Ask About Technical SEO & Performance Standards',
        paragraphs: [
          'A website that looks good but cannot be crawled properly by Google misses out on organic growth. Ensure the team implements proper heading tags (H1–H3), canonical URLs, XML sitemaps, Schema.org structured data, and image optimization.',
        ],
      },
      {
        heading: '3. Clear Communication & Post-Launch Support',
        paragraphs: [
          'Choose a studio that explains technical decisions clearly, sets transparent milestones, and remains available to support your website after it goes live.',
        ],
      },
    ],
  },
  'benefits-of-professional-video-editing': {
    slug: 'benefits-of-professional-video-editing',
    title: 'Benefits of Professional Video Editing for Brand Storytelling',
    seoTitle: 'Benefits of Professional Video Editing for Businesses & Creators | DevStudioCreations',
    metaDescription:
      'Explore how professional video editing, pacing, color grading, and motion graphics help Indian brands and creators hold viewer attention across YouTube and Reels.',
    category: 'Video & Motion',
    readTime: '4 min read',
    publishedDate: '2026-11-10',
    summary:
      'Raw footage only tells half the story. Learn how intentional pacing, clean audio, color grading, and motion graphics elevate brand perception.',
    relatedServiceSlug: 'video-editing',
    sections: [
      {
        heading: '1. Viewer Retention Starts in the First 3 Seconds',
        paragraphs: [
          'On YouTube, Instagram Reels, and landing pages, viewers decide almost immediately whether to keep watching. Professional editing removes dead air, structures a compelling visual hook, and maintains rhythmic momentum.',
        ],
      },
      {
        heading: '2. Cohesive Color Grading & Sound Design',
        paragraphs: [
          'Balanced color correction and clean audio leveling immediately separate amateur clips from trustworthy brand communication.',
        ],
      },
      {
        heading: '3. Clear On-Screen Typography & Motion Cues',
        paragraphs: [
          'Many mobile users watch videos with low volume. Well-designed captions, callouts, and motion graphics ensure your message lands clearly even without sound.',
        ],
      },
    ],
  },
  'importance-of-branding-for-small-businesses': {
    slug: 'importance-of-branding-for-small-businesses',
    title: 'The Importance of Branding for Small Businesses in India',
    seoTitle: 'Importance of Branding & Logo Design for Small Businesses | DevStudioCreations',
    metaDescription:
      'Why cohesive branding, custom logo design, and consistent visual identity help small businesses in India stand out and earn long-term customer loyalty.',
    category: 'Branding & Design',
    readTime: '4 min read',
    publishedDate: '2026-11-10',
    summary:
      'Branding is more than just a logo—it is the consistent visual and emotional impression your business leaves at every customer touchpoint.',
    relatedServiceSlug: 'graphic-design',
    sections: [
      {
        heading: '1. Recognition Across Digital & Physical Touchpoints',
        paragraphs: [
          'When your logo, color palette, typography, and website share a unified visual language, customers remember your business much faster when they see your posts or search results again.',
        ],
      },
      {
        heading: '2. Standing Out in Competitive Markets',
        paragraphs: [
          'Thoughtful graphic design and brand identity help small businesses project the same clarity and confidence as nationwide enterprises.',
        ],
      },
    ],
  },
};

export const BLOG_LIST: BlogPostData[] = Object.values(BLOG_POSTS);
