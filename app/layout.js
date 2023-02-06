import './globals.css'
import { Open_Sans } from "@next/font/google"
import NavBar from '@/components/NavBar'

const openFont = Open_Sans({ 
  subsets: ['latin'],
  weight: ['400'],
})

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={openFont.className}>      
      <head />
      <body className='box-border'>
      <NavBar/>
      {children}
      </body>
    </html>
  )
}
