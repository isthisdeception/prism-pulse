# Prism Pulse — Antigravity Website Build Plan

## Project goal
Build a polished, minimal, cinematic portfolio website for **Prism Pulse**, a photographer / videographer / cinematographer / drone creator. The site must be a **static frontend only**: no backend, database, login, CMS, or contact form. Visitors should be able to explore selected work and contact the creator through WhatsApp, Facebook, or Instagram.

## Important instructions for Antigravity

1. **Execute one step at a time.** Do not implement all eight steps at once. When the user says “Execute Step 1”, do Step 1 only. Stop after it is complete and report what changed, which files changed, the checks run, and anything the user should review. Wait until the user explicitly asks for the next step.
2. Before editing, inspect the existing workspace and reuse a working project if one already exists. Do not overwrite unrelated files or remove existing work without a clear reason.
3. Use **React + Vite + TypeScript + Tailwind CSS**. Use Lucide icons if icons are needed. Keep the code component-based and easy to maintain.
4. Design mobile-first. Test narrow screens as carefully as desktop screens. Target fast initial loading on mobile networks.
5. There must be **no backend** and no dependency on a database or secret API keys. All portfolio content and social details must come from small static TypeScript configuration/data files.
6. Use clearly labelled **dummy photos, poster images, project titles, and video URLs** during development. Centralize all replaceable media URLs so the owner can later replace them with Cloudinary URLs without searching through component files. Never claim dummy work belongs to the actual photographer.
7. Use placeholders for the WhatsApp number and social profile URLs. Clearly mark them `TODO_REPLACE` in one site configuration file. Do not invent the real contact details.
8. Avoid unnecessary packages, heavy animation libraries, autoplaying background video, giant sliders, and visual effects that hurt performance. Prefer CSS transitions and lightweight interactions.
9. Keep the visual identity refined: dark cinematic/editorial direction, near-black background, warm off-white text, restrained accent colour, strong typography, generous spacing, and photography as the main visual. Avoid a generic template look, excessive gradients, glassmorphism, and overdone animations.
10. At the end of each step, run the checks appropriate to the current project, especially `npm run build`. Fix issues introduced by that step before stopping. Do not silently continue to the next step.

## Product and design requirements

- Brand name: **PRISM PULSE**.
- Suggested tagline: **Light in motion. Stories in focus.** Keep it easy to change later.
- Services may include photography, videography, cinematography, event / portrait / product work, and drone / aerial footage. Make service labels editable because the creator’s final service list may differ.
- Main sections: navigation, hero, selected works, films/showreel, services, about, contact, social links, footer.
- The primary conversion action is **Chat on WhatsApp**. Facebook and Instagram are secondary links.
- Use a single-page portfolio unless the existing project has a strong reason to use separate routes.
- The work gallery should support basic category filters (e.g. All, Photography, Films, Drone) and a lightweight image lightbox. Make controls usable with touch, mouse, and keyboard.
- For video projects, show a poster/thumbnail first and load the video only after the visitor chooses to play it. Do not autoplay videos with sound. Keep real video URLs replaceable in the project data.
- Keep the first screen visually compelling but lightweight. Prefer one optimized hero image with an optional “Watch Showreel” action instead of an autoplaying hero video.
- Include descriptive alt text, visible keyboard focus states, semantic headings, and readable contrast.

## The 8 implementation steps

### Step 1 — Inspect workspace, set up the foundation, and establish design tokens

**Tasks**
- Inspect the workspace and report whether a project already exists. Reuse the project if possible.
- Set up or verify React + Vite + TypeScript + Tailwind CSS and the required npm scripts.
- Establish a clean folder structure, for example:
  - `src/components/`
  - `src/sections/`
  - `src/data/siteConfig.ts`
  - `src/data/projects.ts`
  - `src/App.tsx`
  - `src/index.css`
- Add the initial design tokens: colours, spacing, typography, container widths, border treatments, and focus styles. Use a system-font stack or a carefully chosen font with a good fallback so the site does not depend on a remote font to render.
- Add a minimal app shell and confirm the development server and production build work.
- Create the initial placeholder site configuration and project data files, clearly marking contact details and media URLs for later replacement.

**Acceptance criteria**
- The app starts successfully and `npm run build` passes.
- No backend or database is introduced.
- Replaceable configuration and media data have a clear, centralized location.

**Stop after Step 1. Do not start Step 2 until asked.**

### Step 2 — Build the navigation and cinematic hero

**Tasks**
- Build a responsive header with the PRISM PULSE wordmark and links to Work, Films, Services, About, and Contact.
- On mobile, use a compact accessible menu with a clear open/close state.
- Create a strong hero section with the editable tagline, a short supporting line, one lightweight placeholder photo, and two actions: “Explore Work” and “Watch Showreel”.
- Use a compelling layout with clean typography and deliberate whitespace. Keep the hero image aspect ratio stable to prevent layout shifts.
- Make navigation anchors scroll smoothly, while respecting reduced-motion preferences.

**Acceptance criteria**
- Header and hero work at 320px width, common phone sizes, tablet, and desktop.
- No horizontal overflow; the hero remains readable and the CTA buttons are easy to tap.
- The main hero image does not cause a noticeable layout jump.

### Step 3 — Create the Selected Works gallery

**Tasks**
- Build a responsive gallery/grid with polished image ratios and consistent spacing.
- Add category filters such as All, Photography, Films, and Drone. The categories must be easy to edit.
- Add project title and category labels with subtle hover/focus states.
- Implement a lightweight accessible image lightbox/modal with close button, Escape-key support, and sensible focus behaviour.
- Keep all project entries in `src/data/projects.ts` (or an equally clear central file). Every project should have fields such as `id`, `title`, `category`, `image`, `alt`, and optional `description` / `videoUrl` / `poster`.
- Use realistic dummy project labels but do not represent placeholder work as the real photographer’s work.

**Acceptance criteria**
- Filtering works correctly and the gallery remains responsive.
- Images have descriptive alt text and stable dimensions/aspect ratios.
- Closing the lightbox works with its button and keyboard.
- Replacing placeholder media requires editing data/config, not component implementation.

### Step 4 — Build the Films / Cinematography / Drone showcase

**Tasks**
- Create a distinct Films / Showreel section that visually complements the photo gallery.
- Use poster images and a play affordance for video items. Load the external video/embed only after a user clicks; avoid autoplay and eager loading of several video players.
- Provide a graceful placeholder/fallback when a video URL is not yet configured or an embed fails.
- Keep each `videoUrl` and `poster` in the centralized project data. Allow for YouTube or Vimeo embed URLs to be pasted in later.
- Make the section easy to update with new selected films without adding a backend.

**Acceptance criteria**
- Initial page load does not download all video files/players.
- Video playback is user-initiated and works on mobile.
- A missing/placeholder URL does not break the section or the build.

### Step 5 — Add Services and About sections

**Tasks**
- Build concise service cards or editorial rows for the creator’s real services, using a small number of matching placeholder images or thumbnails.
- Add an About section with a dummy portrait or behind-the-scenes photo and concise editable bio text.
- Use restrained interactions only; keep content scannable and avoid large blocks of marketing copy.
- Store editable bio, service labels, location (if later supplied), and tagline in a clear config/data file wherever practical.

**Acceptance criteria**
- Sections feel consistent with the overall brand and look polished on mobile.
- No unsupported claims, fake client logos, fabricated testimonials, or made-up awards are included.
- The creator can replace the copy without editing layout components.

### Step 6 — Contact, social links, and delayed WhatsApp popup

**Tasks**
- Create a strong contact section with a clear “Let’s create something” message and a prominent WhatsApp CTA.
- Add Facebook and Instagram links using placeholder URLs from `src/data/siteConfig.ts`.
- Build the delayed contact popup with the following behaviour:
  - Open around **7 seconds after page load** (within the requested 5–10 second range).
  - Message example: “Want to work with Prism Pulse? Let’s talk about your project.”
  - Primary action: “Chat on WhatsApp”. Build the destination from the configured phone number using the standard `https://wa.me/` format; leave a clearly marked placeholder until the real number is supplied.
  - Secondary action: a visible close button and a “Not now” dismissal action.
  - Desktop: a compact, polished dialog. Mobile: a comfortable bottom sheet or near-full-width panel that does not cover the entire page unnecessarily.
  - Do not show immediately on page load. Do not interrupt while the visitor is actively using another modal/lightbox.
  - Show no more than once per browser session. If the visitor dismisses it, remember the dismissal for 7 days using local storage; make storage access safe so privacy settings or storage errors do not crash the app.
  - Close on Escape and backdrop click where appropriate; label the dialog for screen readers, manage focus, and return focus sensibly after dismissal. Make the close control easy to tap.
  - Respect reduced-motion preferences and use only a subtle entrance transition.
  - Clear timers/listeners during cleanup. Do not show the popup again after the user has already chosen the WhatsApp CTA.
- Keep the delay and persistence rules in one small component or configuration area so they are easy to adjust.

**Acceptance criteria**
- WhatsApp, Facebook, and Instagram links use the configured values and open appropriately.
- Popup timing, dismissal, and persistence behave as described.
- Popup is accessible, responsive, and does not trap the user in a dark pattern.
- No real phone number or social URL is invented.

### Step 7 — Mobile performance, responsiveness, accessibility, and SEO polish

**Tasks**
- Review every section at narrow mobile widths, tablet, laptop, and wide desktop. Fix overflow, clipping, awkward wrapping, and tiny tap targets.
- Add `loading="lazy"` to below-the-fold images. Keep the hero/above-the-fold image eager and high priority where supported. Provide `width`/`height` or aspect ratios to prevent layout shifts.
- Use appropriately sized, compressed placeholder images. Keep image URLs centralized so they can be replaced with optimized Cloudinary delivery URLs later.
- Make sure video embeds are click-to-load and that no heavy animation or large dependency is added without a clear reason.
- Add page title, meta description, favicon placeholder, Open Graph title/description/image, and a sensible theme colour.
- Add semantic HTML, alt text, focus-visible styles, keyboard support, reduced-motion handling, and sufficient contrast.
- Check console errors, failed asset handling, and the production build.

**Acceptance criteria**
- No horizontal scrolling at 320px width.
- Core content and contact actions work without hover.
- The initial page is lightweight and does not autoplay large media.
- SEO/social metadata exists and the production build passes.

### Step 8 — Final QA, deployment readiness, and handoff documentation

**Tasks**
- Run the available lint/typecheck/build scripts and fix issues introduced by the project. Do not claim tests passed unless they were actually run.
- Verify the gallery filters, lightbox, video playback, navigation/menu, popup delay/dismissal, WhatsApp link, and social links.
- Add a `README.md` explaining local setup, build commands, how to replace image/video URLs, where to edit the WhatsApp number and social links, and how to deploy.
- Prepare the project for Cloudflare Pages connected to GitHub. Expected build command: `npm run build`; output directory: `dist`. Mention any required Vite configuration only if it is actually needed.
- List any remaining placeholders that must be replaced before public launch.

**Acceptance criteria**
- `npm run build` passes, and any available typecheck/lint checks are reported accurately.
- README contains straightforward replacement instructions and deployment steps.
- The user receives a short handoff report and no further step is started automatically.

## Example centralized site configuration

Use a structure similar to this (adjust it to the project, but keep values centralized):

```ts
export const siteConfig = {
  brandName: "PRISM PULSE",
  tagline: "Light in motion. Stories in focus.",
  whatsappPhone: "TODO_REPLACE_WITH_COUNTRY_CODE_AND_NUMBER",
  facebookUrl: "TODO_REPLACE_WITH_FACEBOOK_PAGE_URL",
  instagramUrl: "TODO_REPLACE_WITH_INSTAGRAM_PROFILE_URL",
  contactPopupDelayMs: 7000,
};
```

Keep the actual project media in a separate data file, for example:

```ts
export type PortfolioCategory = "Photography" | "Films" | "Drone";

export interface PortfolioProject {
  id: string;
  title: string;
  category: PortfolioCategory;
  image: string; // Replace dummy URL with a Cloudinary URL later
  alt: string;
  description?: string;
  poster?: string; // Replace dummy URL with a Cloudinary URL later
  videoUrl?: string; // YouTube/Vimeo embed URL or supported hosted video URL
}
```

These are examples, not requirements to copy verbatim. Keep the final implementation idiomatic and type-safe.

## Final operating rule
The plan is deliberately split into eight milestones. **Only execute the one step explicitly requested by the user, then stop and report.** Never silently skip ahead, and never rebuild completed work from scratch unless necessary.
