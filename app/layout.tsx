import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DivineAura from "@/components/DivineAura";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://gita-awakening.vercel.app'),
  title: "Gita Awakening | The Divine Wisdom Experience",
  description: "A premium spiritual web application inspired by the teachings of the Bhagavad Gita. Experience ancient wisdom for the modern warrior.",
  keywords: ["Bhagavad Gita", "Spirituality", "Self-Mastery", "Krishna", "Arjuna", "Wisdom", "Meditation"],
  authors: [{ name: "Anubhav Chaudhary" }],
  openGraph: {
    title: "Gita Awakening | The Divine Wisdom Experience",
    description: "Experience the profound teachings of the Bhagavad Gita through a cinematic digital journey. Ancient wisdom for the modern warrior.",
    url: "https://gita-awakening.vercel.app/",
    siteName: "Gita Awakening",
    images: [
      {
        url: "/assets/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Gita Awakening Divine Vision",
        type: "image/jpeg",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gita Awakening | The Divine Wisdom Experience",
    description: "Experience the profound teachings of the Bhagavad Gita through a cinematic digital journey.",
    images: ["/assets/twitter-card.jpg"],
    creator: "@anubhav",
  },
  icons: {
    icon: [
      { url: "/assets/favicon-16.png", sizes: "16x16", type: "image/png" },
      { url: "/assets/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/assets/favicon-48.png", sizes: "48x48", type: "image/png" },
    ],
    shortcut: "/assets/favicon-16.png",
    apple: [
      { url: "/assets/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        rel: "mask-icon",
        url: "/assets/favicon-48.png",
        color: "#D4AF37",
      },
    ],
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "Gita Awakening",
  },
  formatDetection: {
    telephone: false,
  },
};

export const viewport = {
  themeColor: "#D4AF37",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${playfair.variable} antialiased font-sans flex flex-col min-h-screen relative`}
      >
        <DivineAura />
        <Navbar />
        <main className="flex-grow pt-[80px]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
