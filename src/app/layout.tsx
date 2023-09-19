import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { PageLayout } from "@/components/layout/PageLayout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "SK Todolist",
	description: "Build for portfolio projects",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='en'>
			<body className={inter.className}>
				<PageLayout>{children}</PageLayout>
			</body>
		</html>
	);
}
