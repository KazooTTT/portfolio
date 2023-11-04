import type { Metadata } from "next";
import "./globals.css";
import { cn } from "@/lib/utils";
import { fontSans } from "@/components/font";
import { NavigationMenuDemo } from "./components/NavigationMenu";

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
        className={cn("bg-background font-sans antialiased", fontSans.variable)}
      >
        <NavigationMenuDemo></NavigationMenuDemo>
        {children}
      </body>
    </html>
  );
}
