import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../component/navbar/Navbar";
import Footer from "@/component/footer/Footer";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://biodata.ditvi.org";

export const metadata: Metadata = {
  title:
    "Ditvi Biodata | Marriage Biodata Maker & Professional Biodata Templates",

  description:
    "Create beautiful marriage biodata, traditional biodata, and professional service biodata templates with AI. Customize and download biodata instantly with Ditvi Biodata.",

  metadataBase: new URL(baseUrl),

  keywords: [
    "biodata maker",
    "marriage biodata",
    "marriage biodata maker",
    "biodata for marriage",
    "professional biodata",
    "service biodata",
    "traditional biodata",
    "biodata templates",
    "marriage profile template",
    "AI biodata builder",
    "biodata format",
    "Indian biodata templates",
    "custom biodata design",
    "online biodata creator",
    "modern biodata templates",
  ],

  authors: [{ name: "Ditvi Biodata Team" }],
  creator: "Ditvi Biodata",
  publisher: "Ditvi Biodata",

  category: "Marriage & Professional Biodata",

  openGraph: {
    title:
      "Ditvi Biodata | AI Marriage Biodata & Professional Templates",

    description:
      "Design marriage biodata, traditional biodata, and professional biodata templates instantly using AI-powered customization tools.",

    type: "website",
    url: baseUrl,
    siteName: "Ditvi Biodata",

    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Ditvi Biodata - Marriage Biodata Maker",
      },
    ],

    locale: "en_IN",
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Ditvi Biodata | Marriage Biodata Maker",

    description:
      "Create stunning marriage biodata and professional biodata templates online using AI-powered tools.",

    images: ["/og-image.png"],
    creator: "@ditvibiodata",
  },

  robots: {
    index: true,
    follow: true,
    nocache: false,

    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  verification: {
    // google: "YOUR_GOOGLE_VERIFICATION_CODE",
  },

  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-32x32.png", sizes: "32x32" },
      { url: "/favicon-16x16.png", sizes: "16x16" },
    ],

    apple: "/apple-touch-icon.png",
  },

  alternates: {
    canonical: baseUrl,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Navbar />
        {children}
        <Footer />
        <div className="whatsappFloating">
          <a
            href="https://wa.me/919285248504?text=Hello%20*Ditvi%20Biodata*%2C%0AI%E2%80%99m%20looking%20to%20create%20a%20traditional%20biodata.%0ACould%20you%20please%20assist%20me%20with%20the%20best%20design%20and%20format%20for%20my%20profile%3F" aria-label="Chat with us on WhatsApp"
          >
            <WhatsAppIcon fontSize="small" />
          </a>
        </div>
      </body>
    </html>
  );
}
