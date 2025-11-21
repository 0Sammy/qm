import type { Metadata } from "next";
import { Montserrat, Raleway } from "next/font/google";

//Components
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

//Styles
import "./globals.css";

//Fonts
const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://qmfuels.kz"),

  title: {
    default: "TOO Qazaqstan Marine Fuels",
    template: "%s | TOO Qazaqstan Marine Fuels",
  },

  description:
    "TOO Qazaqstan Marine Fuels provides high-quality marine fuel solutions, logistics, and energy services across Kazakhstan and international waters.",

  keywords: [
    "Marine Fuels Kazakhstan",
    "Bunkering Services",
    "Qazaqstan Marine Fuels",
    "Marine Logistics",
    "Energy Services",
  ],

  authors: [{ name: "TOO Qazaqstan Marine Fuels" }],
  creator: "TOO Qazaqstan Marine Fuels",

  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://qmfuels.kz",
    siteName: "TOO Qazaqstan Marine Fuels",
    title: "TOO Qazaqstan Marine Fuels",
    description:
      "High-quality marine fuel solutions and bunkering services across Kazakhstan and international waters.",
    images: [
      {
        url: "/logo.jpg",
        width: 1200,
        height: 630,
        alt: "TOO Qazaqstan Marine Fuels OG Image",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "TOO Qazaqstan Marine Fuels",
    description:
      "Premium marine fuels, bunkering, and marine logistics services in Kazakhstan.",
    images: ["/logo.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/logo.jpg",
  },

  alternates: {
    canonical: "https://tooqazaqstanmarinefuels.kz",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} ${raleway.variable} antialiased`}>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
