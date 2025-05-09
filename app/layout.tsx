import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  openGraph: {
    title: "CoachLab Mongolia",
    description:
      "CoachLab Mongolia is a platform for coaches and athletes to connect and share knowledge.",
    images: [
      {
        url: "https://www.facebook.com/photo/?fbid=122145638060088063&set=a.122110364594088063",
        width: 32,
        height: 32,
        alt: "lab Logo",
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
      <body>{children}</body>
    </html>
  );
}
