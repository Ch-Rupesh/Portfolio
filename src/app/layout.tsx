import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import GradientOrbs from "@/components/ui/GradientOrbs";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Rupesh Siva Mani Kanta | AI Engineer & Software Developer",
  description:
    "Portfolio of Rupesh Siva Mani Kanta — AI Engineer & Software Developer specializing in machine learning, full-stack development, and building intelligent solutions.",
  keywords: [
    "AI Engineer",
    "Software Developer",
    "Portfolio",
    "Machine Learning",
    "Full Stack",
    "Next.js",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="relative flex min-h-full flex-col bg-white font-sans text-gray-900">
        <GradientOrbs />
        <Navbar />
        <main className="relative z-10 flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
