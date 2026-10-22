import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "carDealer Motors | Drive Extraordinary",
  description: "A curated collection of exceptional vehicles, selected for those who expect more.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className="h-full antialiased"
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
