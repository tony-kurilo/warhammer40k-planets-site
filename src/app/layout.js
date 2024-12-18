import "./styles/globals.css";
import React from "react";

export const metadata = {
  title: "Archivum Astralis - Warhammer 40k Planet Database",
  description: "",
};

export default function RootLayout({ children }) {
  return (
      <html lang="en">
      <head>
          <link rel="icon" type="image/webp" href="/images/logo.webp"/>
          <link rel="preconnect" href="https://fonts.googleapis.com"/>
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous"/>
          <link
              href="https://fonts.googleapis.com/css2?family=Space+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap"
              rel="stylesheet"/>
          <link rel="preconnect" href="https://fonts.googleapis.com"/>
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous"/>
          <link
              href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap"
              rel="stylesheet"/>
      </head>
      <body>
      {children}
      </body>
      </html>
  );
}
