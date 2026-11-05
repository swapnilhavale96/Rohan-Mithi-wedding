import type { Metadata } from "next";
import "./globals.css";
import weddingConfig from "@/data/wedding";

export const metadata: Metadata = {
  title: `${weddingConfig.groom.firstName} & ${weddingConfig.bride.firstName} - Wedding Invitation`,
  description: `You are cordially invited to the wedding celebration of ${weddingConfig.groom.firstName} ${weddingConfig.groom.lastName} and ${weddingConfig.bride.firstName} ${weddingConfig.bride.lastName}. ${weddingConfig.weddingDateDisplay} at ${weddingConfig.venue.name}, ${weddingConfig.venue.city}.`,
  keywords: [
    "wedding invitation",
    "Indian wedding",
    `${weddingConfig.groom.firstName} and ${weddingConfig.bride.firstName}`,
    weddingConfig.venue.city,
  ],
  openGraph: {
    title: `${weddingConfig.groom.firstName} & ${weddingConfig.bride.firstName} - Wedding Invitation`,
    description: `Join us for the wedding celebration on ${weddingConfig.weddingDateDisplay} at ${weddingConfig.venue.name}, ${weddingConfig.venue.city}.`,
    type: "website",
    url: weddingConfig.websiteUrl,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#FDF8F0" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&family=Josefin+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&family=Great+Vibes&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
