import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Saad Haris | Data & Analytics Engineer",
  description: "Portfolio of Saad Haris - Utility Professional specializing in Data Analytics, Business Intelligence, and Digital Transformation in the Power & Utilities sector.",
  keywords: ["Data Analytics", "Business Intelligence", "Power BI", "Python", "SQL", "Utilities", "Smart Grid"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
