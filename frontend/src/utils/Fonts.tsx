import { Noto_Sans } from 'next/font/google';
import { Quicksand } from 'next/font/google';

export const DefaultHeaders = Noto_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-noto-sans',
});

export const DefaultBody = Quicksand({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-quicksand',
});