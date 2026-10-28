import type { Metadata } from "next";
import "@fontsource-variable/geist";
import "./globals.css";

const description =
  "Generator supply, installation, servicing, repair and soundproofing, plus electrical and control systems, for businesses that need uninterrupted power.";

export const metadata: Metadata = {
  title: "Plus Electro Engineering Services Limited",
  description,
  openGraph: {
    title: "Plus Electro Engineering Services Limited",
    description,
    images: ["/images/img-000.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Adds .js (so reveals only hide content when they can show it again) and restores the saved motion choice before first paint */}
        <script
          dangerouslySetInnerHTML={{
            __html:
              "document.documentElement.classList.add('js');try{if(localStorage.getItem('motion')==='reduce')document.documentElement.dataset.motion='reduce'}catch(e){}",
          }}
        />
      </head>
      <body className="bg-paper text-ink antialiased">
        <a
          href="#main"
          className="fixed left-4 top-4 z-[100] -translate-y-20 rounded bg-white px-4 py-2 text-sm font-medium text-ink focus:translate-y-0"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
