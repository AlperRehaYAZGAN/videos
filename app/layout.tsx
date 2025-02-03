import "../styles/global.css";
import "@radix-ui/themes/styles.css";

import { Theme } from "@radix-ui/themes";
import AppShell from "@/components/AppShell/AppShell";
import { Metadata, Viewport } from "next";

export const metadata: Metadata = {
  title: "videos - @alperreha",
  description: "videos and sandpack playground of mine - @alperreha",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Theme>
          <AppShell>{children}</AppShell>
        </Theme>
      </body>
    </html>
  );
}
