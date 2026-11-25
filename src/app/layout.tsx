import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mark Machukhu — Product-minded Software Engineer",
  description: "I connect user needs, product decisions and practical engineering to build useful digital systems.",
  metadataBase: new URL("https://poptraworld.digital"),
  openGraph: {
    title: "Mark Machukhu — Product-minded Software Engineer",
    description: "From problem to product. Thoughtful products, clear systems, practical engineering.",
    type: "website"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}