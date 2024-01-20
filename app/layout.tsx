import type { Metadata } from "next";
import { Inter } from "next/font/google";
import NavBar from "./Components/Navbar";
import "./globals.css";
import { ClientCookiesProvider } from "./Components/ClientCookiesProvider";
import GoogleAnalytics from "./Components/GoogleAnalytics";

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
                <body className={inter.className}>
                    <NavBar />
                    {children}
                    <div className="h-20"></div>
                </body>
            </ClientCookiesProvider>
        </html>
    );
}
