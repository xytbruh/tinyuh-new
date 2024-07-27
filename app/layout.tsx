import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TINYUH",
  description: "tinyUH also plays economic activities as part of the show. tinyUH reconstructs the whole atmosphere of taste, visual, aroma, sound, up to the trading process, based on the long history of colonialism in Indonesia that intersects through spices, coffee, tea and clay.",
  keywords: "tinyuh.com tinyuh tiny ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <section className="bg-black min-h-screen font-helvetica">{children}</section>
      </body>
    </html>
  );
}
