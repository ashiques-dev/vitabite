import type { Metadata } from "next";
import "./globals.css";
import { Urbanist } from "next/font/google";

const urbanist = Urbanist({ variable: "--font-urbanist", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "VitaBite",
  description: "Created by asqe",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={urbanist.variable}>{children}</body>
    </html>
  );
}
