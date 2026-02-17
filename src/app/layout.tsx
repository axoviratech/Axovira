import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import { cn } from "@/lib/utils";
import Cursor from "@/components/ui/Cursor";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Axovira Technologies | Engineering the Future",
    template: "%s | Axovira Technologies",
  },
  description: "Axovira Technologies is a next-generation software engineering firm building anti-gravity digital experiences. We specialize in high-performance web development, mobile apps, and scalable digital ecosystems.",
  keywords: ["Axovira", "Software Engineering", "Web Development", "App Development", "Digital Ecosystems", "Anti-gravity Design", "Next.js", "React", "Creative Agency", "Software Solutions"],
  authors: [{ name: "Axovira Technologies" }],
  creator: "Axovira Technologies",
  publisher: "Axovira Technologies",
  icons: {
    icon: [
      { url: "/favicon.ico?v=2", sizes: "any" },
      { url: "/logo.png?v=2", type: "image/png" },
    ],
    apple: [
      { url: "/logo.png?v=2" },
    ],
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://axovira.com"), // Replace with actual domain when available
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Axovira Technologies | Engineering the Future",
    description: "Pioneering the next generation of digital experiences with anti-gravity design and immersive technology.",
    url: "https://axovira.com",
    siteName: "Axovira Technologies",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.jpg", // Needs to be created/added to public
        width: 1200,
        height: 630,
        alt: "Axovira Technologies - Engineering the Future",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Axovira Technologies | Engineering the Future",
    description: "Pioneering the next generation of digital experiences with anti-gravity design and immersive technology.",
    images: ["/og-image.jpg"], // Needs to be created/added to public
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: "cover",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Axovira Technologies",
  url: "https://axovira.com",
  logo: "https://axovira.com/logo.png", // Needs to be created/added
  sameAs: [
    "https://twitter.com/axovira",
    "https://linkedin.com/company/axovira",
    "https://instagram.com/axovira",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+1-555-555-5555", // Placeholder
    contactType: "customer service",
    areaServed: "Global",
    availableLanguage: "English",
  },
  description: "Next-generation software engineering firm building anti-gravity digital experiences.",
};

import { ThemeProvider } from "@/components/ThemeProvider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          inter.variable,
          spaceGrotesk.variable,
          "antialiased font-sans overflow-x-hidden select-none selection:bg-brand-blue selection:text-black"
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Cursor />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          />
          <SmoothScroll>{children}</SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}
