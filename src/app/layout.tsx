import { Montserrat } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-montserrat',
});

export const metadata = {
  title: 'DJ Sergio Telmo',
  description: 'Site officiel de DJ Sergio Telmo',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={montserrat.variable}>
  <head>
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"
      crossOrigin="anonymous"
      referrerPolicy="no-referrer"
    />
  </head>
  <body>
    <Navbar />
    <div>{children}</div>
    <Footer />
  </body>
</html>
  );
}
