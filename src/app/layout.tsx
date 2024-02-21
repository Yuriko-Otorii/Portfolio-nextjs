import type { Metadata } from "next";
import { Tsukimi_Rounded } from "next/font/google";
import { Exo_2 } from "next/font/google";
import "./globals.css";

const inter = Exo_2({ subsets: ["latin"], weight: ['400'] });
// const inter = Tsukimi_Rounded({ subsets: ["latin"], weight: ['400'] });

export const metadata: Metadata = {
  title: "Yuriko Otorii: Portfolio",
  description: "Yuriko Otorii: Full-stack developer",
  icons: {
    icon: [
      {
        media: '(prefers-color-scheme: light)',
        url: '/fabicons/fabicon.ico',
        href: '/fabicons/fabicon.ico',
      },
      {
        media: '(prefers-color-scheme: dark)',
        url: '/fabicons/fabicon.ico',
        href: '/fabicons/fabicon.ico',
      },
    ],
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
        <link href="https://fonts.cdnfonts.com/css/locoroco" rel="stylesheet" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
