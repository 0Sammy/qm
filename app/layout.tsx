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
  title: "TOO Qazaqstan Marine Fuels.",
  description: "TOO Qazaqstan Marine Fuels.",
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
