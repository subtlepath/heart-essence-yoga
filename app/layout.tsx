import type { Metadata } from "next";
import { EB_Garamond } from "next/font/google";
import "./globals.css";

const garamond = EB_Garamond({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Heart Essence Yoga",
  description: "Realizing our body, speech, and mind as extraordinary sacred space",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={garamond.className}>{children}</body>
      <footer className={garamond.className}>
        &copy; 2024 Great Vehicle Foundation. All rights reserved. Heart Essence Yoga is a service of <a href="https://greatvehicle.org">Great Vehicle Foundation</a>, an Oregon 501(c)(3).
      </footer>
    </html>
  );
}
