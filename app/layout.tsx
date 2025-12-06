import { Header } from "@/components/layout/Header";
import "./globals.css";
export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className="flex flex-col  min-h-screen bg-gray-100">
				<Header />
				<main>{children}</main>
			</body>
		</html>
	);
}
