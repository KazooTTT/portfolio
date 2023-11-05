import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "KazooTTT BLOG - 文稿",
  description: "记录技术，学习笔记，周报，随笔等。",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
