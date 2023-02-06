
import { Open_Sans } from "@next/font/google"

const openFont = Open_Sans({ 
  subsets: ['latin'],
  weight: ['400'],
})

export default function ConferenceLayout({ children }) {
  return (

      <section className={openFont.className}>        
      {children}      
      </section>
  )
}