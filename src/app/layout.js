import { Red_Hat_Text, Caveat, JetBrains_Mono } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";
import clsx from "clsx";

import {
    BLOG_TITLE,
    BLOG_DESCRIPTION,
    DARK_TOKENS,
    LIGHT_TOKENS,
} from "@/constants";
import { cookies } from "next/headers";

const red_hat_text = Red_Hat_Text({
    subsets: ["latin"],
    display: "fallback",
    weight: "variable",
    variable: "--font-family",
});

const jet_brains_mono = JetBrains_Mono({
    subsets: ["latin"],
    display: "fallback",
    weight: "variable",
    variable: "--font-family-code",
});

const caveat = Caveat({
    subsets: ["latin"],
    weight: "variable",
    display: "fallback",
    variable: "--font-family-hand",
});

export const metadata = {
    title: BLOG_TITLE,
    description: BLOG_DESCRIPTION,
};

export default function RootLayout({ children }) {
    const savedTheme = cookies().get("theme");
    const theme = savedTheme?.value || "dark";

    return (
        <html
            lang="en"
            style={theme === "light" ? LIGHT_TOKENS : DARK_TOKENS}
            className={clsx(
                red_hat_text.variable,
                jet_brains_mono.variable,
                caveat.variable
            )}
        >
            <body>
                <Header initialTheme={theme} />
                <main>{children}</main>
                <Footer />
            </body>
        </html>
    );
}
