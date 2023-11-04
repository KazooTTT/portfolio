import type { Metadata } from "next";
import "./globals.css";
import StickyNavbar from "./components/StickyNavbar";
import { cn } from "@/lib/utils";
import { fontSans } from "@/components/font";

export const metadata: Metadata = {
  title: "KazooTTT BLOG",
  description: "记录技术笔记，随笔，生活等等内容。",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
        )}
      >
        <StickyNavbar></StickyNavbar>
        {children}
      </body>
    </html>
  );
}
