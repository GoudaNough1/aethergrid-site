import type { Metadata, Viewport } from "next";
import { DM_Sans, DM_Mono, Fraunces } from "next/font/google";
import Background from "@/components/Background";
import CursorFollower from "@/components/CursorFollower";
import { Nav } from "@/components/Nav";
import "./globals.css";

const dmSans = DM_Sans({
	variable: "--font-dm-sans",
	subsets: ["latin"],
	weight: ["400", "500", "700"],
});

const dmMono = DM_Mono({
	variable: "--font-dm-mono",
	subsets: ["latin"],
	weight: ["400", "500"],
});

const fraunces = Fraunces({
	variable: "--font-serif",
	subsets: ["latin"],
	weight: ["400", "500"],
	style: ["normal", "italic"],
	display: "swap",
});

export const metadata: Metadata = {
	metadataBase: new URL("https://aethergrid.net"),
	title: {
		default: "Aethergrid",
		template: "%s - Aethergrid",
	},
	description:
		"Aethergrid is a studio. Four products under one mark - the training platform, the apps, the client work, the desktop tools.",
	applicationName: "Aethergrid",
	authors: [{ name: "Aethergrid LLC" }],
	keywords: ["aethergrid", "studio", "msp training", "software studio", "msp academy", "design studio"],
	manifest: "/manifest.webmanifest",
	openGraph: {
		title: "Aethergrid",
		description: "A studio. The mark is the system.",
		url: "https://aethergrid.net",
		siteName: "Aethergrid",
		images: [
			{
				url: "/opengraph-image.png",
				width: 1200,
				height: 630,
				alt: "Aethergrid - The mark is the system",
			},
		],
		locale: "en_US",
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Aethergrid",
		description: "A studio. The mark is the system.",
		site: "@aethergridllc",
		creator: "@aethergridllc",
		images: ["/opengraph-image.png"],
	},
	robots: {
		index: true,
		follow: true,
		googleBot: { index: true, follow: true, "max-image-preview": "large" },
	},
	icons: {
		icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
	},
};

export const viewport: Viewport = {
	themeColor: "#0a0808",
	width: "device-width",
	initialScale: 1,
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang="en"
			className={`${dmSans.variable} ${dmMono.variable} ${fraunces.variable} antialiased`}
		>
			<body className="font-sans">
				<Background />
				<CursorFollower />
				<div style={{ position: "relative", zIndex: 1 }}>
					<Nav />
					{children}
				</div>
			</body>
		</html>
	);
}
