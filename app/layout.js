import './globals.css'
import { Open_Sans } from "@next/font/google"

const openFont = Open_Sans({ 
  subsets: ['latin'],
  weight: ['400'],
})

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={openFont.className}>      
      <head />
      <body>
      {children}
      </body>
    </html>
  )
}
