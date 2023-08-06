import './globals.css'
import { Inter } from 'next/font/google'
import { Footer, Navbar } from '@/components';


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Car Hub',
  description: 'Discover the Best Cars Around the World',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='relative'>
        <Navbar />
        {children}
        <Footer />
      
      </body>
    </html>
  )
}
