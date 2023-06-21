import './globals.css'
import Header from "@/components/Header"
import Footer from "@/components/Footer"

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
