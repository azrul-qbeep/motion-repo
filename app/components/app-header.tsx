'use client'

import Link from "next/link"
import { useState } from "react"

interface Link {
  label: string
  url: string
}

const links: Link[] = [
  { label: 'Test', url: '/test' }
]

export default function AppHeader() {
  const [activeLink, setActiveLink] = useState<string>('/');
  const onLinkClick = (link: string) => {
    setActiveLink(link)
  }
  return (
    <header className="sticky top-0 z-10 bg-white border-b border-gray-200">
      <div className="max-w-7xl p-4 mx-auto flex justify-between">
        <Link
          href="/"
          className="text-teal-500 font-semibold"
          onClick={() => setActiveLink('/')}
        >
          Motion Repo
        </Link>
        <ul className="flex gap-2">
          {links.map(link => (
            <li key={link.url}>
              <Link
                href={link.url}
                className={`hover:underline ${activeLink === link.url ? 'text-teal-500' : ''}`}
                onClick={() => onLinkClick(link.url)}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  )
} 