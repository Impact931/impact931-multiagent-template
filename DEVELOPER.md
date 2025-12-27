# JHR Photography Website - Developer Documentation

> **Version:** 1.0.0
> **Last Updated:** December 27, 2024
> **Stack:** Next.js 14 + TypeScript + AWS (DynamoDB, S3, CloudFront)

---

## Table of Contents

1. [Project Overview](#project-overview)
2. [Architecture](#architecture)
3. [Directory Structure](#directory-structure)
4. [Brand & Design System](#brand--design-system)
5. [Core Features](#core-features)
6. [API Reference](#api-reference)
7. [Database Schema](#database-schema)
8. [AWS Infrastructure](#aws-infrastructure)
9. [Component Library](#component-library)
10. [Environment Configuration](#environment-configuration)
11. [Development Workflow](#development-workflow)
12. [Deployment TODO List](#deployment-todo-list)

---

## Project Overview

JHR Photography is a Nashville-based corporate event photography company. This website serves as their primary trust platform, designed to convert high-stakes event planners into clients through credibility signals, venue expertise, and streamlined service discovery.

### Business Context

- **Target Audience:** Corporate event planners, DMCs, associations, exhibitors
- **Geographic Focus:** Nashville, TN (with national reach)
- **Services:** Headshot activations, event coverage, corporate headshot programs, video systems
- **Differentiation:** "Venue Fluent" - deep expertise in Nashville's premier venues

### StoryBrand Framework

The site follows the StoryBrand messaging framework:
- **Hero:** The event planner (not JHR)
- **Problem:** Anxiety about media vendor reliability
- **Guide:** JHR Photography (experienced, empathetic)
- **Plan:** Clear service pathways and booking process
- **Success:** Stress-free events with exceptional media

---

## Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                         CLIENT BROWSER                          │
├─────────────────────────────────────────────────────────────────┤
│                      Next.js 14 (App Router)                    │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────────────────┐  │
│  │   Pages     │  │    Admin    │  │      API Routes         │  │
│  │  (Public)   │  │   Dashboard │  │  /api/admin/*           │  │
│  └─────────────┘  └─────────────┘  └─────────────────────────┘  │
├─────────────────────────────────────────────────────────────────┤
│                        AWS Services                             │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────────────┐   │
│  │   DynamoDB   │  │      S3      │  │     CloudFront       │   │
│  │  (Content)   │  │   (Media)    │  │       (CDN)          │   │
│  └──────────────┘  └──────────────┘  └──────────────────────┘   │
├─────────────────────────────────────────────────────────────────┤
│                    External Services                            │
│  ┌──────────────┐  ┌──────────────────────────────────────────┐ │
│  │   OpenAI     │  │          (Future: Email/CRM)             │ │
│  │  (AI Edit)   │  │                                          │ │
│  └──────────────┘  └──────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────────┘
```

### Tech Stack

| Layer | Technology | Purpose |
|-------|------------|---------|
| Frontend | Next.js 14 (App Router) | SSR/SSG React framework |
| Styling | Tailwind CSS | Utility-first CSS |
| Animation | Framer Motion | Scroll animations, transitions |
| Icons | Lucide React | Consistent icon library |
| Database | AWS DynamoDB | Content & media metadata |
| Storage | AWS S3 | Image/video file storage |
| CDN | AWS CloudFront | Global image delivery |
| Image Processing | Sharp | Server-side optimization |
| AI | OpenAI GPT-4 | Content editing assistance |

---

## Directory Structure

```
jhr-website/
├── app/                          # Next.js App Router
│   ├── layout.tsx                # Root layout with fonts
│   ├── page.tsx                  # Homepage
│   ├── globals.css               # Global styles & CSS variables
│   │
│   ├── admin/                    # Admin Dashboard (protected)
│   │   ├── layout.tsx            # Admin layout with sidebar
│   │   ├── page.tsx              # Dashboard home
│   │   ├── login/page.tsx        # Login page
│   │   ├── media/page.tsx        # Media library
│   │   ├── pages/                # Page management
│   │   │   ├── page.tsx          # Pages list
│   │   │   └── [pageId]/page.tsx # Page editor redirect
│   │   └── settings/page.tsx     # Site settings
│   │
│   ├── api/admin/                # Admin API routes
│   │   ├── auth/                 # Authentication
│   │   │   ├── login/route.ts
│   │   │   ├── logout/route.ts
│   │   │   └── verify/route.ts
│   │   ├── content/              # Content management
│   │   │   ├── route.ts          # GET/POST content
│   │   │   └── batch/route.ts    # Batch operations
│   │   ├── media/                # Media library
│   │   │   ├── route.ts          # List/create media
│   │   │   ├── [mediaId]/route.ts
│   │   │   ├── folders/route.ts
│   │   │   ├── upload/route.ts
│   │   │   ├── sync/route.ts     # Sync S3 metadata
│   │   │   └── scan-s3/route.ts  # Scan S3 bucket
│   │   ├── images/upload/route.ts # Direct image upload
│   │   └── ai/edit/route.ts      # AI text assistance
│   │
│   ├── services/                 # Service pages
│   │   ├── page.tsx              # Services overview
│   │   ├── headshot-activation/
│   │   ├── corporate-event-coverage/
│   │   ├── corporate-headshot-program/
│   │   └── event-video-systems/
│   │
│   ├── solutions/                # Solution pages (by audience)
│   │   ├── associations/
│   │   ├── dmcs-agencies/
│   │   ├── exhibitors-sponsors/
│   │   └── venues/
│   │
│   ├── venues/                   # Venue partner pages
│   │   ├── page.tsx              # Venues overview
│   │   ├── music-city-center/
│   │   ├── gaylord-opryland/
│   │   ├── jw-marriott-nashville/
│   │   └── ... (8 venues total)
│   │
│   ├── about/page.tsx
│   ├── contact/page.tsx
│   ├── faqs/page.tsx
│   └── schedule/page.tsx
│
├── components/
│   ├── ui/                       # Reusable UI components
│   │   ├── ScrollAnimation.tsx   # Framer Motion wrappers
│   │   ├── TrustBadges.tsx       # Credibility indicators
│   │   ├── ProcessTimeline.tsx   # Step-by-step visual
│   │   ├── BeforeAfterSlider.tsx # Image comparison
│   │   ├── ROICalculator.tsx     # Interactive calculator
│   │   └── HeroBanner.tsx        # Page hero component
│   │
│   ├── layout/                   # Layout components
│   │   ├── Header.tsx            # Site header with nav
│   │   ├── Footer.tsx            # Site footer
│   │   └── ClientLayout.tsx      # Conditional layout wrapper
│   │
│   ├── editor/                   # On-page editing system
│   │   ├── EditorWrapper.tsx     # Context provider wrapper
│   │   ├── EditorToolbar.tsx     # Edit mode controls
│   │   ├── EditableText.tsx      # Inline text editing
│   │   ├── EditableImage.tsx     # Image upload/replace
│   │   ├── AIAssistantPanel.tsx  # AI editing panel
│   │   └── index.ts              # Exports
│   │
│   └── admin/                    # Admin-specific components
│       ├── layout/
│       │   ├── AdminSidebar.tsx
│       │   └── AdminHeader.tsx
│       └── media/
│           ├── MediaLibrary.tsx  # Main media manager
│           ├── MediaGrid.tsx     # Grid display
│           ├── MediaItem.tsx     # Single media card
│           ├── MediaUploader.tsx # Upload component
│           ├── MediaDetailModal.tsx # Detail/edit modal
│           └── FolderTree.tsx    # Folder navigation
│
├── lib/                          # Utility libraries
│   ├── dynamodb.ts               # DynamoDB client & helpers
│   ├── s3.ts                     # S3 client & helpers
│   ├── media.ts                  # Media CRUD operations
│   ├── image-optimization.ts     # Sharp processing
│   ├── openai.ts                 # OpenAI client
│   ├── video.ts                  # Video URL parsing
│   └── pages-schema.ts           # Page definitions
│
├── context/
│   └── EditorContext.tsx         # Editor state management
│
├── hooks/
│   └── useEditableContent.ts     # Content fetching hook
│
├── infrastructure/               # AWS CloudFormation
│   ├── cloudfront-cdn/
│   │   └── template.yaml
│   └── image-optimization/
│       ├── template.yaml
│       └── lambda/index.mjs
│
├── scripts/
│   ├── generate-images.mjs       # Placeholder generation
│   └── optimize-s3-images.mjs    # Batch S3 optimization
│
├── tailwind.config.ts            # Tailwind configuration
├── next.config.mjs               # Next.js configuration
└── package.json
```

---

## Brand & Design System

### Color Palette

The design follows a **dark-mode-first** approach with gold accents for premium feel.

```css
/* Primary Colors */
--jhr-black:         #0A0A0A   /* Primary background */
--jhr-black-light:   #1A1A1A   /* Cards, sidebar */
--jhr-black-lighter: #2A2A2A   /* Borders, dividers */

/* Text Colors */
--jhr-white:         #FFFFFF   /* Primary text */
--jhr-white-muted:   #E5E5E5   /* Secondary text */
--jhr-white-dim:     #A3A3A3   /* Tertiary/disabled text */

/* Accent Colors */
--jhr-gold:          #C9A227   /* Primary accent (CTAs, highlights) */
--jhr-gold-light:    #D4B94A   /* Hover states */
--jhr-gold-dark:     #A68920   /* Active states */

/* Secondary Accent (sparingly) */
--jhr-blue:          #2563EB   /* Links, info states */
```

### Typography

| Usage | Font | Class |
|-------|------|-------|
| Display/Headlines | Outfit | `font-display` |
| Body Text | Inter | `font-sans` |

**Type Scale:**
```
display-xl:  4.5rem (72px)  - Hero headlines
display-lg:  3.5rem (56px)  - Page titles
display-md:  2.5rem (40px)  - Section titles
display-sm:  2rem   (32px)  - Large headings
heading-lg:  1.5rem (24px)  - Card titles
heading-md:  1.25rem (20px) - Subsections
body-lg:     1.125rem (18px)- Lead paragraphs
body-md:     1rem   (16px)  - Body text
body-sm:     0.875rem (14px)- Captions, meta
```

### Component Patterns

**Buttons:**
```tsx
// Primary CTA (gold)
<button className="btn-primary">
  Schedule a Call
</button>

// Secondary (outlined)
<button className="btn-secondary">
  Learn More
</button>
```

**Cards:**
```tsx
<div className="bg-jhr-black-light border border-jhr-black-lighter
               rounded-xl p-6 hover:border-jhr-gold/30 transition-colors">
  {/* Card content */}
</div>
```

**Sections:**
```tsx
// Dark section (default)
<section className="section-dark py-section-y">
  <div className="section-container">
    {/* Content */}
  </div>
</section>

// Light section (alternating)
<section className="section-light py-section-y">
  <div className="section-container">
    {/* Content */}
  </div>
</section>
```

### Animation Guidelines

Use Framer Motion components from `components/ui/ScrollAnimation.tsx`:

```tsx
import { FadeUp, FadeIn, SlideInLeft, StaggerContainer, StaggerItem } from '@/components/ui/ScrollAnimation';

// Single element fade up
<FadeUp>
  <h2>Section Title</h2>
</FadeUp>

// Staggered list animation
<StaggerContainer>
  {items.map(item => (
    <StaggerItem key={item.id}>
      <Card {...item} />
    </StaggerItem>
  ))}
</StaggerContainer>
```

---

## Core Features

### 1. Admin Dashboard (`/admin`)

WordPress-style content management accessible only to authenticated users.

**Authentication Flow:**
1. User navigates to `/admin`
2. If not authenticated, redirected to `/admin/login`
3. Password validated against `EDITOR_PASSWORD` env var
4. Session cookie set (`editor_session`) with base64 encoded token
5. All admin API routes verify session cookie

**Key Features:**
- Dashboard with site statistics
- Media library with folder organization
- Page content management
- On-page editing (navigate to page from admin)

### 2. Media Library

Full-featured media management system.

**Capabilities:**
- Drag-and-drop upload to S3
- Automatic image optimization (Sharp)
- Folder organization
- SEO metadata (alt text, title, description)
- Usage tracking across pages
- Duplicate detection
- S3 metadata sync

**Supported Formats:**
- Images: JPEG, PNG, WebP, GIF
- Videos: External URLs (YouTube, Vimeo) + S3 upload

### 3. On-Page Editing

WYSIWYG-style editing directly on live pages.

**Components:**
- `EditableText` - Inline text editing with AI assistance
- `EditableImage` - Click-to-replace image upload

**Flow:**
1. Admin logs in at `/admin`
2. Navigates to Pages → clicks "Edit" on a page
3. Redirected to actual page with edit toolbar visible
4. Click "Edit Mode" to enable inline editing
5. Click any editable element to modify
6. Changes tracked as "pending" until saved
7. "Save" persists all changes to DynamoDB

**AI Assistance:**
- "Improve" - Make text more compelling
- "Shorter" - Condense text
- "Longer" - Expand text

### 4. Image Optimization Pipeline

All uploaded images are automatically optimized:

```typescript
// Optimization settings (lib/image-optimization.ts)
{
  maxWidth: 2400,
  maxHeight: 2400,
  quality: 85,
  format: 'preserve' // or 'webp'
}
```

**Process:**
1. User uploads image
2. Sharp processes: resize, compress, strip metadata
3. Optimized image uploaded to S3
4. CloudFront serves via CDN
5. Cache headers set for performance

---

## API Reference

### Authentication

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/admin/auth/login` | POST | Authenticate with password |
| `/api/admin/auth/logout` | POST | Clear session |
| `/api/admin/auth/verify` | GET | Check session validity |

### Content Management

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/admin/content` | GET | Get content by pageId/sectionId/contentKey |
| `/api/admin/content` | POST | Create/update content |
| `/api/admin/content/batch` | POST | Batch save multiple content items |

### Media Management

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/admin/media` | GET | List media with pagination |
| `/api/admin/media` | POST | Create media record |
| `/api/admin/media/[mediaId]` | GET | Get single media item |
| `/api/admin/media/[mediaId]` | PUT | Update media metadata |
| `/api/admin/media/[mediaId]` | DELETE | Delete media item |
| `/api/admin/media/[mediaId]/usage` | GET | Get usage across pages |
| `/api/admin/media/upload` | POST | Get presigned S3 upload URL |
| `/api/admin/media/folders` | GET/POST | Manage folders |
| `/api/admin/media/sync` | POST | Sync file sizes from S3 |
| `/api/admin/media/scan-s3` | POST | Scan S3 for untracked files |

### AI Assistance

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/admin/ai/edit` | POST | AI-powered text editing |

---

## Database Schema

### DynamoDB Table: `jhr-website`

**Partition Key Patterns:**

```typescript
// Content items
{
  pk: "CONTENT#{pageId}#{sectionId}#{contentKey}",
  sk: "META",
  value: string,
  type: "text" | "image",
  updatedAt: string (ISO)
}

// Media items
{
  pk: "MEDIA#{mediaId}",
  sk: "META",
  mediaId: string,
  name: string,
  type: "image" | "video",
  mimeType: string,
  s3Key: string,
  url: string,
  size: number,
  width?: number,
  height?: number,
  folderId: string,
  alt?: string,
  seoTitle?: string,
  seoDescription?: string,
  tags?: string[],
  uploadedAt: string,
  updatedAt: string
}

// Folders
{
  pk: "FOLDER#{folderId}",
  sk: "META",
  folderId: string,
  name: string,
  parentId: string | null,
  createdAt: string,
  updatedAt: string
}
```

---

## AWS Infrastructure

### Current Setup

| Service | Resource | Purpose |
|---------|----------|---------|
| DynamoDB | `jhr-website` table | Content & media metadata |
| S3 | `jhr-website-images` bucket | Media file storage |
| CloudFront | `d2kcvv1z8cjmc8.cloudfront.net` | CDN for images |

### CloudFormation Templates

Located in `/infrastructure/`:

1. **cloudfront-cdn/template.yaml** - CloudFront distribution setup
2. **image-optimization/template.yaml** - Lambda@Edge for image processing

---

## Component Library

### UI Components

| Component | Location | Description |
|-----------|----------|-------------|
| `ScrollAnimation` | `components/ui/` | Framer Motion animation wrappers |
| `TrustBadges` | `components/ui/` | Photographer credibility badges |
| `ProcessTimeline` | `components/ui/` | Visual process steps |
| `BeforeAfterSlider` | `components/ui/` | Image comparison slider |
| `ROICalculator` | `components/ui/` | Interactive ROI tool |
| `HeroBanner` | `components/ui/` | Page hero section |

### Editor Components

| Component | Description |
|-----------|-------------|
| `EditorWrapper` | Context provider, wraps page content |
| `EditorToolbar` | Fixed bottom toolbar (edit/save/discard) |
| `EditableText` | Inline text editing with AI |
| `EditableImage` | Click-to-upload image replacement |

### Admin Components

| Component | Description |
|-----------|-------------|
| `AdminSidebar` | Navigation sidebar |
| `MediaLibrary` | Full media management interface |
| `MediaGrid` | Responsive media grid |
| `MediaUploader` | Drag-drop upload zone |
| `FolderTree` | Folder navigation tree |

---

## Environment Configuration

### Required Environment Variables

```bash
# AWS Credentials
AWS_ACCESS_KEY_ID=xxx
AWS_SECRET_ACCESS_KEY=xxx
S3_BUCKET_NAME=jhr-website-images
S3_BUCKET_REGION=us-east-1

# CloudFront (required for production)
CLOUDFRONT_DOMAIN=d2kcvv1z8cjmc8.cloudfront.net

# Admin Authentication
EDITOR_PASSWORD=your_secure_password

# OpenAI (for AI text editing)
OPENAI_API_KEY=sk-xxx

# Environment
NODE_ENV=development|production
```

---

## Development Workflow

### Local Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Type checking
npm run typecheck

# Linting
npm run lint

# Run tests
npm run test
```

### Accessing Admin

1. Start dev server: `npm run dev`
2. Navigate to: `http://localhost:3000/admin`
3. Login with `EDITOR_PASSWORD`
4. Use media library, edit pages, etc.

### Adding a New Page

1. Create page file: `app/your-page/page.tsx`
2. Add to pages schema: `lib/pages-schema.ts`
3. Use editable components:
   ```tsx
   import { EditableText, EditableImage } from '@/components/editor';

   <EditableText
     pageId="your-page"
     sectionId="hero"
     contentKey="title"
     defaultValue="Default Title"
     as="h1"
     className="text-display-lg"
   />
   ```

---

## Deployment TODO List

### Phase 1: Pre-Production (Required for Launch)

- [ ] **Domain & SSL Setup**
  - Register/configure domain (e.g., jhrphotography.com)
  - Set up SSL certificate in AWS Certificate Manager
  - Configure CloudFront with custom domain

- [ ] **Production Environment**
  - Set up production AWS account/IAM roles
  - Create production DynamoDB table
  - Create production S3 bucket with proper CORS
  - Deploy CloudFront distribution

- [ ] **Security Hardening**
  - Implement rate limiting on API routes
  - Add CSRF protection
  - Review and restrict S3 bucket policies
  - Set secure cookie attributes (HttpOnly, Secure, SameSite)
  - Implement proper session expiration

- [ ] **Email Integration**
  - Set up contact form email delivery (SES/SendGrid)
  - Configure email templates
  - Add form validation and spam protection

- [ ] **Analytics & Monitoring**
  - Set up Google Analytics 4
  - Configure AWS CloudWatch alarms
  - Set up error tracking (Sentry recommended)

### Phase 2: Launch Optimization

- [ ] **SEO Implementation**
  - Add meta tags to all pages
  - Generate sitemap.xml
  - Create robots.txt
  - Add structured data (JSON-LD)
  - Implement Open Graph tags

- [ ] **Performance Optimization**
  - Enable Next.js static generation where possible
  - Implement ISR (Incremental Static Regeneration)
  - Add image lazy loading
  - Configure proper cache headers

- [ ] **Accessibility Audit**
  - WCAG 2.1 AA compliance check
  - Keyboard navigation testing
  - Screen reader testing
  - Color contrast verification

### Phase 3: Post-Launch Enhancements

- [ ] **Booking Integration**
  - Integrate Calendly or similar for scheduling
  - Add availability calendar

- [ ] **CRM Integration**
  - Connect contact forms to CRM (HubSpot/Salesforce)
  - Set up lead tracking

- [ ] **Content Delivery**
  - Implement image CDN optimization (Lambda@Edge)
  - Add WebP automatic conversion
  - Configure responsive image serving

- [ ] **Advanced Features**
  - Client portal for photo delivery
  - Gallery/portfolio system
  - Testimonial collection system
  - Blog/news section

### Phase 4: Scale & Maintenance

- [ ] **CI/CD Pipeline**
  - Set up GitHub Actions for automated deployment
  - Add automated testing in pipeline
  - Configure staging environment

- [ ] **Backup & Recovery**
  - Enable DynamoDB point-in-time recovery
  - Set up S3 versioning
  - Document disaster recovery procedures

- [ ] **Documentation**
  - Create user guide for admin panel
  - Document deployment procedures
  - API documentation (OpenAPI/Swagger)

---

## Support & Resources

### Key Files for New Developers

1. `lib/pages-schema.ts` - Understand all pages and editable fields
2. `context/EditorContext.tsx` - Editor state management
3. `tailwind.config.ts` - Brand colors and design tokens
4. `app/globals.css` - Global styles and CSS variables

### Coding Conventions

- **TypeScript:** Strict mode enabled, explicit types preferred
- **Components:** Functional components with hooks
- **Styling:** Tailwind utility classes, avoid custom CSS
- **State:** React Context for global state, local state for components
- **API Routes:** Next.js Route Handlers with proper error handling

### Common Commands

```bash
npm run dev          # Start development server
npm run build        # Production build
npm run start        # Start production server
npm run typecheck    # Run TypeScript checks
npm run lint         # Run ESLint
npm run test         # Run tests
```

---

*This documentation is maintained alongside the codebase. Update as features are added or changed.*
