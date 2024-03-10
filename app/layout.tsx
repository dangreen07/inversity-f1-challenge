import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "./ui/sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PrecisionPit ProMetrics",
  description: "A monitoring dashboard for Mercedes f1 data",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`bg-[#BEBEBE] ${inter.className} flex`}>
        <Sidebar />
        {children}
      </body>
    </html>
  );
}
