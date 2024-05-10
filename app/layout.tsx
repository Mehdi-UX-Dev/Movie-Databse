"use client";
import Navbar from "@/components/UI_components/navbar";
import "./globals.css";
import { StoreProvider } from "@/redux";
import Footer from "@/components/UI_components/Footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#04152d]">
        <Navbar />
        <StoreProvider>{children}</StoreProvider>
        <Footer />
      </body>
    </html>
  );
}
