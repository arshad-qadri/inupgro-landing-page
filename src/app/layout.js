import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Inupgro",
  description:
    "A responsive landing page built with Next.js and Tailwind CSS. Stay updated with the latest strategies to grow your learning platform.",
  robots: "index, follow",
  openGraph: {
    title: "Inupgro",
    description:
      "A responsive landing page built with Next.js and Tailwind CSS. Stay updated with the latest strategies to grow your learning platform.",
    siteName: "Inupgro",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/favicon.png" type="image/png" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
