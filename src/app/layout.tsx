import "./globals.css";

export const metadata = {
  title: "AA Basics",
  description: "Web3 basics",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
