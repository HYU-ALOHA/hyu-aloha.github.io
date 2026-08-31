import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ALOHA | 한양대학교 알고리즘 동아리",
  description: "한양대학교 알고리즘 동아리 ALOHA입니다.",
  icons: {
    icon: [
      {
        url: "/icons/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        url: "/icons/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
    ],
    apple: [
      {
        url: "/icons/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return <html lang="ko"><body>{children}</body></html>;
}
