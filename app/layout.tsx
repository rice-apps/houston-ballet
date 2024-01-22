import type { Metadata } from "next";
import { Inter } from "next/font/google";
import NavBar from "./Components/Navbar";
import "./globals.css";
import { ClientCookiesProvider } from "./Components/ClientCookiesProvider";
import GoogleAnalytics from "./Components/GoogleAnalytics";
import localFont from '@next/font/local';

// metric font (houston ballet's)
const metric = localFont({
    src: [
      {
        path: '../public/fonts/Metric-Regular.ttf',
        weight: '400'
      },
      {
        path: '../public/fonts/Metric-Bold.ttf',
        weight: '700'
      }
    ],
    variable: '--font-metric'
  })


// inter font
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Nutcracker Market",
    description: "Generated by create next app",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <GoogleAnalytics GA_TRACKING_ID="G-RVES61K2QJ" />
            <ClientCookiesProvider>
                <body className={metric.className}>
                    <NavBar />
                    {children}
                    <div className="h-20"></div>
                </body>
            </ClientCookiesProvider>
        </html>
    );
}
