'use client'

import Link from "next/link"

export default function NavBar() {
  return (    
    <nav className="w-full p-12 bg-gray-900 text-center justify-center">
    <h1>
    <Link className="text-blue-600" href="/home">Globomantics</Link>
    </h1>
    <h2>
      <Link className="text-blue-200" href="/blog">Blog</Link>
    </h2>
    <h2>
      <Link className="text-blue-200" href="/settings">Settings</Link>
    </h2>
    <h2>
      <Link className="text-blue-200" href="/conference">Conference</Link>
    </h2>
    </nav>
    
  )
}
