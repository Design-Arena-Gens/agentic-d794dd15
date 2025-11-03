import type { Metadata } from 'next';
import './globals.css';
import Link from 'next/link';
import { Special_Elite } from 'next/font/google';
import PageShell from '../components/PageShell';

const specialElite = Special_Elite({ weight: '400', subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'The Typewriter OS Compendium',
  description: 'A stark black-and-white, typewriter-aesthetic compendium of Operating Systems algorithms for GATE',
  icons: { icon: '/favicon.ico' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`paper-bg ${specialElite.className}`}>
        <div className="container">
          <header className="header">
            <div>
              <div className="small-label">A Minimalist Study Journal</div>
              <div className="site-title type-line">The Typewriter OS Compendium</div>
            </div>
            <nav className="nav" aria-label="Sections">
              <Link href="/">Home</Link>
              <Link href="/scheduling">CPU Scheduling</Link>
              <Link href="/synchronization">Synchronization</Link>
              <Link href="/deadlocks">Deadlocks</Link>
              <Link href="/memory">Memory & Paging</Link>
              <Link href="/disk">Disk Scheduling</Link>
              <Link href="/filesystems">File Systems</Link>
            </nav>
          </header>
          <main>
            <PageShell>{children}</PageShell>
          </main>
        </div>
      </body>
    </html>
  );
}
