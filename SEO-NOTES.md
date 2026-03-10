# SEO Notes — Green Ink Financial Wellness (YMYL)

This site covers **Your Money or Your Life (YMYL)** topics (debt, wealth, financial coaching). Google applies stricter E-E-A-T and trust signals to such content. Below is what’s in place and what to do next.

---

## 1. Implemented in the codebase

### E-E-A-T (Experience, Expertise, Authoritativeness, Trust)
- **Compliance footer** on every page: “Green Ink Financial Wellness provides educational and coaching services. We are not registered investment advisors…”
- **Author bio** on each blog post: “About the author” box with a link to `#about`. Replace the placeholder text with a real bio and link to a dedicated **About** or **credentials** page (certifications, background) to strengthen E-E-A-T.
- **Transparent identity**: Physical address in footer; About/Contact in nav. Add a real About page with founder/coach name, photo, and credentials when ready.

### Schema markup (structured data)
- **Homepage (`index.html`)**: `FinancialService` + `Organization` JSON-LD in `<head>`. Includes name, description, URL, address, service type, area served. Update `url`, `sameAs`, and `logo` to your live domain when you launch.
- **Blog posts**: `Article` schema with headline, description, `datePublished`, `dateModified`, `author`, `publisher`. Update `datePublished`/`dateModified` to real dates and set `author` to a `Person` with a real name and URL to your About/credentials page when you have one.

### Meta and canonical
- **Homepage**: `<meta name="description">`, `<link rel="canonical">`, Open Graph and Twitter Card meta tags.
- **Blog posts**: Unique meta descriptions (aligned with long-tail intent), canonical URL, `og:type="article"` and Twitter card.
- **Canonical base**: All canonicals use `https://www.greeninkfinancialwellness.com/`. Replace with your actual live domain in every file (search for `greeninkfinancialwellness.com`).

### Internal linking
- Nav links to `#start-here`, `#services`, `#blog`, `#contact`.
- Blog posts link back to `index.html#blog` and `index.html#about`.
- “Start Here” and “Consulting” are clear conversion paths; link to them from old site content (see below).

---

## 2. Recommended next steps

### When you have a live domain
1. **Replace canonical and schema URLs** in:
   - `index.html` (canonical, og:url, schema `url`/`@id`/`logo`/`sameAs`)
   - `five-things-before-migrating.html` (canonical, og:url, Article `url`, author `url`, publisher `logo`)
   - `financial-freedom-debt-free.html` (same as above)
2. **Add `sameAs`** in Organization schema: LinkedIn, any professional profiles, or the old site URL so Google can connect the entity.

### Author and E-E-A-T
- Add a real **About** page (or expand `#about`) with coach name, photo, credentials, and “Since 2019” story.
- In each blog post, replace the generic “Written by the team at Green Ink…” with a **named author** and link to that About/credentials page.
- In Article schema, set `author` to a `Person` with `name` and `url` pointing to the About/credentials page.

### Search intent and long-tail
- Meta descriptions are already angled to immigrant + debt/wealth. When writing new posts, target phrases like:
  - “how to build US credit as a new immigrant”
  - “tax strategies for first-generation wealth”
  - “debt free plan for immigrants”
- Keep titles and H1s specific and problem-focused rather than generic.

### FAQPage schema (optional)
- If a post has a clear Q&A section, add `FAQPage` JSON-LD so it can be eligible for FAQ rich results. Use the same URL as the article or the specific section.

### Technical SEO and Core Web Vitals
- **Images**: Prefer **WebP** (with fallback) and compress assets. Add `width`/`height` on images to reduce layout shift (already done for logo).
- **Mobile**: Layout is mobile-first; keep tap targets large (e.g. buttons) and avoid heavy scripts above the fold.
- **Hosting**: Use a fast host and consider a CDN for static assets.

### 301 redirects and old site
- When migrating from an old site, set **301 redirects** from old URLs to the new ones (e.g. old blog URL → `five-things-before-migrating.html` or `financial-freedom-debt-free.html`).
- In **old blog posts** that stay live during transition, add in-content links to the new **Start Here** and **Consulting** pages so link equity and crawlers flow to the new conversion funnels.
- Any removed pages should 301 to the closest relevant new page (e.g. homepage or blog index), not to 404.

---

## 3. Quick reference: where to edit

| Goal                     | File(s)                                                                 |
|--------------------------|-------------------------------------------------------------------------|
| Canonical / meta / schema| `index.html`, `five-things-before-migrating.html`, `financial-freedom-debt-free.html` `<head>` and JSON-LD |
| Author bio text          | Same two blog posts; look for `class="author-bio"`                      |
| Compliance / footer      | All pages; `class="footer-legal"`                                       |
| About / credentials link | Nav and footer `#about`; author bio “Learn more about us” → point to real About page when it exists |

Once the live domain and real author/About page exist, updating URLs and author schema will complete the main YMYL-oriented SEO setup in code.
