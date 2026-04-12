import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "SpaFlow — Client Onboarding",
  description: "Your complete guide to getting started with SpaFlow",
};

export default function DaySpaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={`${playfair.variable} ${dmSans.variable}`}>
      {children}
    </div>
  );
}
