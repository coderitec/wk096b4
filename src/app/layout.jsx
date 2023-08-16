import Footer from './components/Footer'
import Navbar from './components/Navbar'
import './globals.css'
import { Handjet } from 'next/font/google'

const hand = Handjet({ subsets: ['latin'] })

export const metadata = {
  title: 'your first React',
  description: 'this is react and nextjs',
}

export default function RootLayout({ children }) {
  const myName = 'francis'
  return (
    <html lang="en">
      <body className={hand.className}>
        <Navbar />
        <main  className="text-[50px] h-[420px]">
        {children}

        </main>

        <Footer />
      </body>
    </html>
  )
}

