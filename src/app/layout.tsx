import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'DJ Sergio Telmo',
  description: 'Site officiel de DJ Sergio Telmo',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>
        <Navbar />
        <div> {/* padding top pour pas que le contenu passe sous la navbar fixe */}
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
