import { Roboto } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer/Footer';
const roboto = Roboto({ weight: ['300', '400', '500', '700', '900'], subsets: ['latin'] });

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={roboto.className + ' flex flex-col h-screen'}>
      <Header />
      <main className="flex-1 container mx-auto my-20 px-6 sm:px-0">{children}</main>
      <Footer />
    </div>
  );
}
