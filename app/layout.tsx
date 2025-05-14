// app/layout.tsx  —  un Server Component SIN "use client"
import type { Metadata } from "next";

import "@/styles/helper.css";
import "@/styles/theme.css";
import "@/styles/add.css";


import ClientProviders from "@/components/ClientProviders"; 

export const metadata: Metadata = {
  title: "Mi sitio con Next.js + GSAP",
  description: "…",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body id="body" className="tt-transition tt-boxed tt-magic-cursor tt-header-fixed-on ph-image-on made-with-love-on">
        <main id="body-inner" data-scroll-container>
          {/* Aquí va TODO lo que no use hooks de cliente */}
          <ClientProviders>{children}</ClientProviders>
        </main>
      </body>
    </html>
  );
}
