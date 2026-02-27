import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Orcas Ji | Software Engineer",
  description:
    "Personal portfolio website showcasing projects, background, and contact information. Focused on full-stack development and applied AI.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} relative min-h-screen text-zinc-900 antialiased`}
      >
        {/* Ambient top glow */}
        <div
          aria-hidden
          className="pointer-events-none fixed left-1/2 top-[-10rem] -z-10 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-white/20 blur-3xl"
        />

        {children}
      </body>
    </html>
  );
}
