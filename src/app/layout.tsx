import type { Metadata } from "next";
import "./globals.css";
import { Urbanist } from "next/font/google";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
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
      <body className={urbanist.variable}>
        <Navbar />

        {children}
        <Footer />
      </body>
    </html>
  );
}
