import Link from 'next/link';
import './globals.css';

import { Montserrat } from '@next/font/google';
import Navbar from './Navbar';

const montserrat = Montserrat();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body className="bg-gradient-to-br from-[#B8FCFC] to-[#D2C6F5]">
        <Navbar />
        <main className={`${montserrat.className}`}>{children}</main>
      </body>
    </html>
  );
}
