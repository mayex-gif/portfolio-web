import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import { Analytics } from "@vercel/analytics/next"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: 'Alcalde, Alejo Emanuel - Portfolio Web',
  description: 'Mi portfolio web personal, donde muestro mis proyectos, educación, certificados e intereses en el desarrollo web.',
  openGraph: {
    title: 'Alcalde, Alejo Emanuel - Portfolio Web',
    description: 'Mi portfolio web personal, donde muestro mis proyectos, educación, certificados e intereses en el desarrollo web.',
    url: 'https://alca-alejo.vercel.app/',
    siteName: 'Portfolio Alejo Alcalde',
    images: [
      {
        url: 'https://alca-alejo.vercel.app/images/og-image.png', 
        width: 1920,
        height: 1080,
      },
    ],
    locale: 'es_AR',
    type: 'website',
  },
};

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  return (
    <html lang={lang} className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="bg-gray-950 antialiased">
        <Analytics />
        {children}
      </body>
    </html>
  );
}