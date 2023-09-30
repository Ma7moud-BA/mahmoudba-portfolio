import "../globals.css";
import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import { IBM_Plex_Mono } from "next/font/google";
export const metadata: Metadata = {
	title: "MahmoudBA_Studio",
	description: "My portfolio made using nextjs, shadcn,framermotion",
};
const ipm_flex_mono = IBM_Plex_Mono({
	style: "normal",
	weight: ["100", "200", "300", "400", "500", "600", "700"],
	subsets: ["cyrillic"],
});

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" className={ipm_flex_mono.className}>
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
