"use client";
import type { Metadata } from "next";
import "./globals.css";
import { StoreProvider } from "@/redux";

import Header from "@/components/UI_components/header/Header";
import Footer from "@/components/UI_components/footer/Footer";

// export const metadata: Metadata = {
//   title: "Movie Time",
//   description: "Search For Movies",
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#04152d]">
        <Header />
        <StoreProvider>{children}</StoreProvider>
        <Footer />
      </body>
    </html>
  );
}
