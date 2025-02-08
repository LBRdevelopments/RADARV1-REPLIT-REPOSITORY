import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from 'next/link';

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "RADAR - Social Media App",
  description: "A modern social media application",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`${inter.variable} antialiased`}>
        <nav className="flex space-x-4 p-4 bg-gray-200">
          <Link href="/home">Home</Link>
          <Link href="/profile">Profile</Link>
          <Link href="/create-post">Create Post</Link>
        </nav>
        {children}
      </body>
    </html>
  );
}
