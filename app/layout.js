import './globals.css'
// import { Inter } from 'next/font/google'
import { Urbanist, Inter, Cinzel } from 'next/font/google'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap'})

const urbanist = Urbanist({ 
  subsets: ['latin'],
  weight: ['100', '300'],
  variable: '--font-urbanist',
});

const cinzel = Cinzel({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-cinzel',
});

export const metadata = {
  title: 'Karnovah',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${cinzel.variable} ${inter.variable} ${urbanist.variable} font-sans`}>{children}</body>
    </html>
  )
}
