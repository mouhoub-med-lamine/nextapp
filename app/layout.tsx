import './globals.css'
import type { Metadata } from 'next'
import { NavBar  , Footer} from '@/Components'

export const metadata: Metadata = {
  title: 'SoftWareSolution',
  description: 'Discover the best solutions ',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={'relative'}>
        <NavBar />
        {children}
        <Footer />
        </body>
    </html>
  )
}
