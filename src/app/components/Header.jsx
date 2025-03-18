'use client'
import Link from 'next/link'
import Image from 'next/image'

// Add activePage prop
export default function Header({ activePage }) {
  return (
    <header className="bg-white py-4 px-6">
      <div className="max-w-4xl mx-auto flex justify-center items-center relative">
        <Link href="/" className="group absolute left-0">
          <div className="w-10 h-10 rounded-full overflow-hidden">
            <Image
              src="/images/profile.jpg"
              alt="Profile"
              width={40}
              height={40}
              className="object-cover"
            />
          </div>
        </Link>

        <nav className="flex items-center">
          <div className="border border-[#7CD3FC] rounded-full px-4 py-1.5 flex items-center space-x-6">
            <Link
              href="/"
              className={`transition-colors ${
                activePage === 'about' ? 'text-[#7CD3FC]' : 'text-gray-600 hover:text-[#7CD3FC]'
              }`}
            >
              About
            </Link>
            <Link
              href="/project"
              className={`transition-colors ${
                activePage === 'work' ? 'text-[#7CD3FC]' : 'text-gray-600 hover:text-[#7CD3FC]'
              }`}
            >
              Project
            </Link>
            <Link
              href="/blog"
              className={`transition-colors ${
                activePage === 'blog' ? 'text-[#7CD3FC]' : 'text-gray-600 hover:text-[#7CD3FC]'
              }`}
            >
              Blog
            </Link>
          </div>
        </nav>

        <Link
          href="/contact"
          className="bg-gradient-to-r from-[#7CD3FC] to-[#BAE6FD] text-black px-4 py-2 rounded-full hover:opacity-90 transition-opacity absolute right-0"
        >
          Contact
        </Link>
      </div>
    </header>
  )
}
