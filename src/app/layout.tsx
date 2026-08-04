import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "CodePillars | Mobile App & Website Development Company",
  description:
    "CodePillars builds high-quality Android apps, iOS apps, websites, AI solutions, and custom software for startups, businesses, and entrepreneurs.",

  keywords: [
    "CodePillars",
    "Android Developer",
    "iOS Developer",
    "Website Development",
    "Next.js Developer",
    "React Developer",
    "Jetpack Compose",
    "Flutter Alternative",
    "UI UX Design",
    "Mobile App Development",
    "Custom Software",
    "AI Development",
    "Web Development",
    "Jabalpur",
    "India",
  ],

  authors: [{ name: "CodePillars" }],
  creator: "CodePillars",
  publisher: "CodePillars",

  metadataBase: new URL("https://www.codepillars.net"),

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "CodePillars | Mobile App & Website Development",
    description:
      "Professional Android, iOS, Web, AI and Custom Software Development Services.",
    url: "https://www.codepillars.net",
    siteName: "CodePillars",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "CodePillars",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "CodePillars | Mobile App & Website Development",
    description:
      "Professional Android, iOS, Web, AI and Custom Software Development Services.",
    images: ["/og-image.jpg"],
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

  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
