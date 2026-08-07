import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'OSINC Infobit | Enterprise Software, AI & Student Internship',
  description: 'OSINC Infobit is a premier global IT consulting and software engineering firm in Chennai specializing in custom enterprise software, AI/ML, cloud architecture, and student industrial internship training.',
  keywords: ['OSINC Infobit', 'Software Engineering', 'AI Solutions', 'Cloud DevOps', 'Next.js Web Development', 'Student Internship', 'Chennai IT Hub'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <Navbar />
        <main style={{ minHeight: '80vh' }}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
