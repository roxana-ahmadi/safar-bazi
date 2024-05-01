import type { Metadata } from "next";
import AppWrapper from "../components/AppWrapper";
import "./globals.css";

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
    <html lang="en" dir="rtl">
      <body>
        <AppWrapper>{children}</AppWrapper>
      </body>
    </html>
  );
}
