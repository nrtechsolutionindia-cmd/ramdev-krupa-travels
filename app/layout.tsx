import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ramdev Krupa Travels | Taxi & Tempo Traveller",
  description: "Comfortable local, outstation and group travel from Ramdev Krupa Travels. Book Ertiga, Swift Dzire and Tempo Traveller.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}