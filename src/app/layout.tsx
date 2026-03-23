import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { CartProvider } from "@/context/CartContext";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "PeptideLab MX | Péptidos de Investigación de Alta Pureza",
  description:
    "Péptidos de investigación de alta pureza (99%+) con certificado de análisis. Envío a toda la República Mexicana. BPC-157, TB-500, Tirzepatida y más.",
  keywords:
    "péptidos, péptidos de investigación, BPC-157, TB-500, Tirzepatida, México, péptidos pureza 99%",
  openGraph: {
    title: "PeptideLab MX | Péptidos de Investigación de Alta Pureza",
    description:
      "Péptidos de investigación certificados con pureza 99%+. Envío discreto a toda la República Mexicana.",
    type: "website",
    locale: "es_MX",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${inter.variable} antialiased`}>
      <body className="min-h-screen flex flex-col">
        <CartProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <WhatsAppButton />
        </CartProvider>
      </body>
    </html>
  );
}
