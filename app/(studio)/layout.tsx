import "../globals.css";
import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import { IBM_Plex_Mono } from "next/font/google";
export const metadata: Metadata = {
	title: "MahmoudBA_Studio",
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
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange
				>
					{children}
				</ThemeProvider>
			</body>
		</html>
	);
}
