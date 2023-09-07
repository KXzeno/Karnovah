import Head from 'next/head'
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
  description: 'Personal Business & Blog Site Under Development',
  openGraph: {
    images: 'https://i.postimg.cc/FKm800ZK/test.png'
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <meta property="og:url" content="https://karnovah.netlify.app" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:image" content={metadata.openGraph.images} />
      </Head>
      <body className={`${cinzel.variable} ${inter.variable} ${urbanist.variable} font-sans`}>{children}</body>
    </html>
  )
}
