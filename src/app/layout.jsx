import './globals.css';
import {Montserrat} from 'next/font/google';
import 'react-tooltip/dist/react-tooltip.css';
import Navbar from './components/Navbar';

const montserrat = Montserrat({subsets: ['latin']});

export const metadata = {
  title: 'Gonzalo Santos',
  description: 'Frontend developer',
};

export default function RootLayout({children}) {
  return (
    <html lang='en'>
      <body className={montserrat.className}>
        {children}
        <Navbar />
      </body>
    </html>
  );
}
