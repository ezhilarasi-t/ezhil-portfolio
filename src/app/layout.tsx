import type { Metadata } from "next";
import { Geist, Geist_Mono, Rubik } from "next/font/google";
import "./globals.css";
import Footer from "@/Components/Footer";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const getRubik = Rubik({
  variable: "--font-rubik",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ezhil portfolio",
  description: "Frontend developer portfolio using nextjs",
  keywords:["react", "server components","next js","ezhil portfolio","portfolio","trending portfolio"],
  icons: {
    icon: "/ezhil-logo.png", 
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/ezhil-logo.png" type="image/png" />
      </head>
      <body
        className={`${getRubik.variable} ${geistMono.variable} ${geistSans.variable}  antialiased `}
      >
        {children}
        <Footer />
      </body>
    </html>
  );
}
