"use client";
import type { Metadata } from "next";
import "./globals.css";
import { StoreProvider } from "@/redux";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useParams, usePathname } from "next/navigation";

// export const metadata: Metadata = {
//   title: "Movie Time",
//   description: "Search For Movies",
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const path = usePathname();
  const { replace } = useRouter();
  useEffect(() => {
    path === "/" && replace("/Home");
  });

  return (
    <html lang="en">
      <body className="bg-[#04152d]">
        <StoreProvider>{children}</StoreProvider>
      </body>
    </html>
  );
}
