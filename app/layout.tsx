import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { PHProvider } from './providers';

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "PostHog Bug Reproduction",
  description: "Testing non-existent feature flag behavior",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <PHProvider>
          {children}
        </PHProvider>
      </body>
    </html>
  );
}
