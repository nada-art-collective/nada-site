import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Roboto_Mono } from 'next/font/google';
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });


const mono = Roboto_Mono({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={mono.className}>
      <body >{children}</body>
    </html>
  );
}
