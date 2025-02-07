import "./globals.css";
import Link from 'next/link';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <nav className="flex space-x-4 p-4 bg-gray-200">
          <Link href="/home">Home</Link>
          <Link href="/profile">Profile</Link>
          <Link href="/create-post">Create Post</Link>
        </nav>
        {children}
      </body>
    </html>
  );
}
