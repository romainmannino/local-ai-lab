import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Local AI Lab — données locales structurées pour IA',
  description: 'Laboratoire public de données locales structurées et orientées intention pour moteurs et assistants IA.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="fr"><body><main className="wrap"><nav className="topnav"><a href="/">Local AI Lab</a><a href="/discover">Pour les IA</a></nav>{children}</main></body></html>;
}
