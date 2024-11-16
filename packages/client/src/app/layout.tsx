import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Spicet | make the tasty eats!",
  description: "Spicet is a recipe and blog app."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
