import ConferenceHeader from "@/components/ConferenceHeader";
import { Open_Sans } from "@next/font/google"

const openFont = Open_Sans({ 
  subsets: ['latin'],
  weight: ['400'],
})

export default function ConferenceLayout({ children }) {
  return (
    <html lang="en" className={openFont.className}>      
      <head />
      <body>
      <ConferenceHeader/>
      {children}
      </body>
    </html>
  )
}