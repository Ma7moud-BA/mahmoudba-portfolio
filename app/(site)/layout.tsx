import "../globals.css";
import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/Layout/Navbar";
import { Toaster } from "react-hot-toast";
import { Analytics } from "@vercel/analytics/react";
export const revalidate = 3600; //!!!!!important revalidate the site everyday might change the value
export const metadata: Metadata = {
	title: "MahmoudBA",
	description: "My portfolio made using nextjs, shadcn,framermotion",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body>
				<Toaster />
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange
				>
					<Navbar />
					{children}
					<Analytics />
				</ThemeProvider>
			</body>
		</html>
	);
}
