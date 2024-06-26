import type { Metadata } from "next";
import "./globals.css";
import { StoreProvider } from "@/redux";

export const metadata: Metadata = {
  title: "Movie Time",
  description: "Search For Movies",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#04152d]">
        <StoreProvider>{children}</StoreProvider>
      </body>
    </html>
  );
}
