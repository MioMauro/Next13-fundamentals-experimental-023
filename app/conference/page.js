import Link from "next/link"

export default function page() {
  return (
    <>
    <h1>Welcome conference page</h1>
    <h2><Link href="/conference/speakers">Speakers</Link></h2>
    <h2><Link href="/conference/sessions">Sessions</Link></h2>
    </>
  )
}
