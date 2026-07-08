import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Orin Within",
  description:
    "Orin Within helps individuals, families and organisations create lasting transformation from within.",
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
