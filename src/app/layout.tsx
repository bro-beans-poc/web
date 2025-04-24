import "~/styles/globals.css";

import type { Metadata } from "next";

import { cn } from "~/lib/utils";
import { geistSans, geistMono } from "~/styles/fonts";

const fonts = cn("antialiased", geistSans.variable, geistMono.variable);

export const metadata: Metadata = {
  title: "Brobeans",
  description: "Proof of concept",
};

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <body className={fonts}>{children}</body>
    </html>
  );
}
