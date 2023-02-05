import ConferenceHeader from "@/components/ConferenceHeader";

export default function ConferenceLayout({ children }) {
  return (
    <>
    <html lang="en">      
      <head />
      <body>
      <ConferenceHeader/>
      {children}
      </body>
    </html>
    </>
  )
}