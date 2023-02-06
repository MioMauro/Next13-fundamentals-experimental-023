'use client'

import Link from "next/link"

export default function NavBarConference() {
  return (
  <div>
    <h1>CONFERENCE</h1>
    <h2>
      <Link href="/blog">Blog</Link>
    </h2>
    <h2>
      <Link href="/settings">Settings</Link>
    </h2>
    <h2>
      <Link href="/conference">Conference</Link>
    </h2>
    </div>
      )
    }