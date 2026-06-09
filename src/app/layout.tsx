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
    "free biodata maker",
    "biodata maker online",
    "online marriage biodata",
    "marriage biodata template",
    "simple biodata format",
    "marriage CV template",
    "wedding biodata design",
    "editable biodata template",
    "biodata for bride",
    "biodata for groom",
    "hindu marriage biodata",
    "muslim marriage biodata",
    "jain marriage biodata",
    "sikh marriage biodata",
    "premium biodata templates",
    "creative biodata design",
    "stylish marriage biodata",
    "modern marriage resume",
    "AI marriage profile creator",
    "smart biodata generator",
    "download biodata PDF",
    "custom marriage profile",
    "professional marriage profile",
    "traditional marriage profile",
    "matrimonial biodata maker",
    "bio data for shaadi",
    "shaadi biodata template",
    "marriage details format",
    "Indian wedding biodata",
    "digital biodata creator",
    "printable biodata template",
    "minimal biodata design",
    "luxury biodata templates",
    "responsive biodata maker",
    "instant biodata download",
    "one page biodata template",
    "biodata design for marriage",
    "best biodata maker",
    "AI powered biodata",
    "biodata with photo",
    "marriage portfolio template",
    "matrimony profile creator",
    "customizable biodata",
    "resume style biodata",
    "online matrimonial profile",
    "bridal biodata format",
    "groom biodata format",
    "elegant biodata templates",
    "marriage introduction template",
    "biodata app for marriage",
    "easy biodata creator",
    "modern Indian biodata",
    "professional profile maker",
    "wedding profile maker",
    "marriage profile PDF",
    "biodata builder for marriage",
    "advanced biodata creator",
    "creative matrimonial profile",
    "free marriage biodata templates",
    "AI generated biodata",
    "best marriage biodata maker",
    "free online biodata builder",
    "AI matrimonial biodata",
    "instant biodata generator",
    "smart marriage profile maker",
    "custom wedding biodata",
    "professional matrimonial resume",
    "beautiful biodata templates",
    "designer marriage biodata",
    "traditional Indian marriage biodata",
    "premium matrimonial templates",
    "marriage profile for shaadi",
    "simple marriage profile",
    "marriage biodata with horoscope",
    "kundli biodata template",
    "biodata with family details",
    "marriage profile with photo",
    "downloadable biodata format",
    "editable marriage resume",
    "marriage information template",
    "marriage profile creator online",
    "AI based biodata generator",
    "personalized biodata templates",
    "wedding biodata creator",
    "marriage profile design",
    "royal biodata template",
    "classic biodata format",
    "minimal marriage biodata",
    "modern matrimonial biodata",
    "creative wedding profile",
    "bio data format for marriage PDF",
    "Indian matrimonial profile",
    "online biodata template free",
    "free wedding biodata maker",
    "marriage profile builder",
    "professional biodata for marriage",
    "elegant marriage profile",
    "marriage profile for bride",
    "marriage profile for groom",
    "smart matrimonial profile",
    "custom profile templates",
    "wedding resume templates",
    "biodata design online",
    "instant marriage biodata PDF",
    "high quality biodata templates",
    "print ready biodata",
    "mobile friendly biodata maker",
    "AI wedding profile creator",
    "online shaadi profile maker",
    "best matrimonial biodata templates",
    "biodata maker with themes",
    "multilingual biodata maker",
    "marriage CV builder",
    "traditional shaadi biodata",
    "custom biodata PDF",
    "simple shaadi profile",
    "wedding introduction profile",
    "premium wedding templates",
    "stylish matrimonial profile",
    "interactive biodata creator"
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
    google: "U61z9WvB238RUEavCgIuOpCpDLFPVOMv2i-Ax3ACxPI",
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
