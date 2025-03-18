import React from 'react'
import Header from '../components/Header'
import Link from 'next/link'

export default function Blog() {
  return (
    <div>
      <Header activePage="blog" />
      <main className="min-h-screen py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-4 font-lora">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#7CD3FC] to-[#BAE6FD]">
              Blog
            </span>
          </h1>
          <p className="text-lg text-gray-600 mb-16">
            Thoughts on marketing, web development, and everything in between.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Blog Post Card */}
            <Link href="/blog/post-1" className="group">
              <div className="rounded-xl overflow-hidden mb-3 aspect-[3/2] bg-gradient-to-br from-purple-900 to-blue-900">
                {/* Image will be added later */}
              </div>
              <div className="space-y-1.5">
                <p className="text-gray-500 text-xs">Dec 30, 2022</p>
                <h2 className="text-lg font-semibold group-hover:text-[#7CD3FC] transition-colors duration-300 line-clamp-2">
                  Getting Started with Next.js and TailwindCSS
                </h2>
              </div>
            </Link>
            <Link href="/blog/post-1" className="group">
              <div className="rounded-xl overflow-hidden mb-3 aspect-[3/2] bg-gradient-to-br from-purple-900 to-blue-900">
                {/* Image will be added later */}
              </div>
              <div className="space-y-1.5">
                <p className="text-gray-500 text-xs">Dec 30, 2022</p>
                <h2 className="text-lg font-semibold group-hover:text-[#7CD3FC] transition-colors duration-300 line-clamp-2">
                  Getting Started with Next.js and TailwindCSS
                </h2>
              </div>
            </Link>
            <Link href="/blog/post-1" className="group">
              <div className="rounded-xl overflow-hidden mb-3 aspect-[3/2] bg-gradient-to-br from-purple-900 to-blue-900">
                {/* Image will be added later */}
              </div>
              <div className="space-y-1.5">
                <p className="text-gray-500 text-xs">Dec 30, 2022</p>
                <h2 className="text-lg font-semibold group-hover:text-[#7CD3FC] transition-colors duration-300 line-clamp-2">
                  Getting Started with Next.js and TailwindCSS
                </h2>
              </div>
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}
