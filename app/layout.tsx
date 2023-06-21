import './globals.css'
import { Header , Footer } from "@/components"

export const metadata = {
  title: 'Car Showcase',
  description: 'A car showcase developed with NextJS',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='relative overflow-x-hidden'> 
        <Header/>
        {children} 
        <Footer/>
      </body>
    </html>
  )
}
