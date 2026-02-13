
# Theme Switching Implementation

This document outlines the changes made to implement theme switching (Light/Dark mode) in the VA Partners website.

## 1. Core Configuration
- **`src/app/globals.css`**: Refactored to use CSS variables for theming.
  - Defined semantic color tokens (`--background`, `--foreground`, `--primary`, `--muted`, etc.) for both `:root` (light) and `.dark` scopes.
  - Configured `@theme` block for Tailwind v4 to map utilities to these variables.
- **`src/components/theme-provider.tsx`**: Added a `ThemeProvider` component wrapping the app content to manage theme state using `next-themes`.
- **`src/app/layout.tsx`**: Integrated `ThemeProvider` and added `suppressHydrationWarning` to the `html` tag.

## 2. Components Updated
The following components were updated to replace hardcoded colors (e.g., `bg-navy`, `text-white`) with semantic tokens (e.g., `bg-background`, `text-foreground`):
- **Layout**: `Navbar`, `Footer`
- **Sections**: `Hero`, `Services`, `Expertise`, `Process`, `Stats`, `CTA`, `Insights`, `Team`, `Benefits`, `ProblemStatement`
- **UI**: Added `ThemeToggle` component with a sun/moon icon animation.

## 3. Pages Updated
All pages were updated to ensure consistent theming:
- `Home` (`src/app/page.tsx`)
- `Hizmetlerimiz` (`src/app/hizmetlerimiz/page.tsx`) & Detail Page (`[slug]`)
- `Hakkımızda` (`src/app/hakkimizda/page.tsx`)
- `İletişim` (`src/app/iletisim/page.tsx`)
- `Referanslar` (`src/app/referanslar/page.tsx`)
- `Haberler` (`src/app/haberler/page.tsx`) & Detail Page (`[slug]`)

## 4. Usage
- The theme toggle button is located in the **Navbar** (desktop and mobile).
- The site defaults to **Dark Mode**.
- Preferences are saved in `localStorage`.

## 5. Build Verification
- `npm run build` passes successfully.
- Static pages are generated correctly.
