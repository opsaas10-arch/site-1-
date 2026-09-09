import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";

// Site uses Google's "Geist" font for all text. next/font/google needs live
// network access to fonts.googleapis.com (unavailable in this environment),
// so we self-host it via the official `geist` npm package instead (same
// typeface, no network dependency).

export const metadata: Metadata = {
  title: "InfBlox - Home",
  description: "A melhor loja de Blox do Brasil — entrega automática.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR" className={`${GeistSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
