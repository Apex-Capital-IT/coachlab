import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  openGraph: {
    title: "CoachLab Mongolia",
    description:
      "CoachLab Mongolia is a platform for coaches and athletes to connect and share knowledge.",
    images: [
      {
        url: "/Logo.png",
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
