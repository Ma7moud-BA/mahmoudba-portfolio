import "../globals.css";
import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/Layout/Navbar";
import { Toaster } from "react-hot-toast";
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
				</ThemeProvider>
			</body>
		</html>
	);
}
