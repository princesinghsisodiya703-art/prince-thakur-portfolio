import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/lib/data";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | ${siteConfig.title}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "Prince Thakur",
    "AI Engineer",
    "Artificial Intelligence Student",
    "Full Stack Developer",
    "AI Product Builder",
    "Machine Learning",
    "Portfolio",
    "Nexora AI Communication Platform",
    "Robotics",
    "Next.js",
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/icon.svg",
    apple: "/apple-icon.svg",
  },
  manifest: "/manifest.webmanifest",
  openGraph: {
    title: `${siteConfig.name} | ${siteConfig.title}`,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: `${siteConfig.name} Portfolio`,
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} portfolio`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | ${siteConfig.title}`,
    description: siteConfig.description,
    images: [
      {
        url: "/twitter-image",
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} portfolio preview`,
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${siteConfig.url}/#person`,
      name: siteConfig.name,
      url: siteConfig.url,
      image: `${siteConfig.url}${siteConfig.profileImage}`,
      email: siteConfig.email,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Indore",
        addressCountry: "IN",
      },
      jobTitle: [
        "B.Tech Artificial Intelligence Student",
        "Full Stack Developer",
        "AI Product Builder",
      ],
      sameAs: [
        "https://github.com/princesinghsisodiya703-art",
        "https://www.linkedin.com/in/prince-thakur007",
      ],
      knowsAbout: [
        "Artificial Intelligence",
        "Machine Learning",
        "Full Stack Development",
        "Next.js",
        "Python",
      ],
    },
    {
      "@type": "ProfilePage",
      "@id": `${siteConfig.url}/#profile-page`,
      url: siteConfig.url,
      name: `${siteConfig.name} Portfolio`,
      description: siteConfig.description,
      mainEntity: {
        "@id": `${siteConfig.url}/#person`,
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        {children}
      </body>
    </html>
  );
}
