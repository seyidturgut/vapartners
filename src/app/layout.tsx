import type { Metadata } from "next";
import Script from "next/script";
import { Outfit } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin", "latin-ext"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

import { ThemeProvider } from "@/components/theme-provider";
import { LazyMotion, domAnimation } from "framer-motion";

export const metadata: Metadata = {
  metadataBase: new URL('https://vapartners.com.tr'),
  title: {
    default: "VA Partners | Stratejik Finansal Zeka ve Danışmanlık",
    template: "%s | VA Partners"
  },
  description: "VA Partners, mali müşavirlik, vergi planlaması, devlet destekleri ve finansal mühendislikle işletmelerin sürdürülebilir büyümesine rehberlik eder.",
  keywords: ["mali müşavirlik", "vergi danışmanlığı", "devlet teşvikleri", "finansal yönetim", "kurumsal danışmanlık", "CFO danışmanlığı", "KOSGEB teşvikleri", "Ar-Ge merkezi danışmanlığı"],
  authors: [{ name: "VA Partners" }],
  creator: "VA Partners",
  publisher: "VA Partners",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "https://vapartners.com.tr",
    siteName: "VA Partners",
    title: "VA Partners | Stratejik Finansal Zeka",
    description: "İşletmenizi geleceğe hazırlayan stratejik finansal çözümler ve danışmanlık.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "VA Partners Stratejik Danışmanlık",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "VA Partners | Stratejik Finansal Zeka",
    description: "Stratejik finansal yönetim ve kurumsal danışmanlık hizmetleri.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
};

import { Chatbot } from "@/components/ui/Chatbot";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${outfit.variable} antialiased font-sans`}>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-44F4X95CRT"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-44F4X95CRT');
          `}
        </Script>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <LazyMotion features={domAnimation}>
            <Navbar />
            {children}
            <Chatbot />
          </LazyMotion>
        </ThemeProvider>
      </body>
    </html>
  );
}
