import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import { siteConfig } from "@/config/site";
import { montserrat } from "@/config/fonts";
import { Providers } from "./providers";
import clsx from "clsx";

export const metadata: Metadata = {
	title: {
		default: siteConfig.name,
		template: `%s - ${siteConfig.name}`,
	},
	description: siteConfig.description,
	icons: {
		icon: "/favicon.ico",
	},
};

export const viewport: Viewport = {
	themeColor: [
		{ media: "(prefers-color-scheme: light)", color: "white" },
		{ media: "(prefers-color-scheme: dark)", color: "#151515" },
	],
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="pt-br" suppressHydrationWarning>
			<head />
			<body
				className={clsx(
					"min-h-screen bg-background text-[#393939] antialiased dark:text-[#F1F1F1]",
					montserrat.className
				)}
			>
				<Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
					{children}
				</Providers>
			</body>
		</html>
	);
}
