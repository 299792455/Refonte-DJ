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
  description: 'DJ Sergio Telmo - Sitio Oficial',
openGraph: {
    images: ['https://djsergiotelmo.com/meta-cover.jpg'],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={montserrat.variable}>
  <head>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta name="robots" content="index, follow" />
  <meta name="description" content="DJ Sergio Telmo - Sitio Oficial" />
  <meta property="og:title" content="DJ Sergio Telmo" />
  <meta property="og:description" content="Sitio Oficial de DJ Sergio Telmo" />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://djsergiotelmo.com" />
  <meta name="twitter:card" content="summary_large_image" />
<meta name="google-site-verification" content="cWlnPNgIbN4GmqCr7TNP3xmRNtqcet0vxA7MOK_s5Mo" />
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