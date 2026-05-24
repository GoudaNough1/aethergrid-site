import type { Metadata } from "next";
import { DM_Sans, DM_Mono } from "next/font/google";
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

export const metadata: Metadata = {
	title: "Aethergrid",
	description:
		"A software studio building tools across the stack. Training, consumer apps, websites, and desktop software.",
	manifest: "/manifest.webmanifest",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang="en"
			className={`${dmSans.variable} ${dmMono.variable} antialiased`}
		>
			<body className="font-sans">{children}</body>
		</html>
	);
}
