import Link from 'next/link'

export default function Blog() {
  return (
    <section className="py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-3xl font-bold font-lora bg-clip-text text-transparent bg-gradient-to-r from-[#7CD3FC] to-[#BAE6FD]">
            Latest Posts
          </h2>
          <Link
            href="/blog"
            className="inline-flex items-center text-[#7CD3FC] hover:text-[#BAE6FD] transition-colors duration-300 group"
          >
            Read More
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 ml-1 transform group-hover:translate-x-1 transition-transform duration-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Blog Post Card */}
          <div className="group bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
            <div className="text-sm text-gray-500 mb-2">December 15, 2023</div>
            <h3 className="text-xl font-bold mb-2 font-lora group-hover:text-[#7CD3FC] transition-colors duration-300">
              Getting Started with Next.js and TailwindCSS
            </h3>
            <p className="text-gray-600 text-sm mb-4">
              A comprehensive guide to setting up your first Next.js project with TailwindCSS...
            </p>
            <Link
              href="/blog/getting-started-nextjs-tailwind"
              className="inline-flex items-center text-[#7CD3FC] group-hover:text-[#BAE6FD] transition-colors duration-300"
            >
              Read Post
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 ml-1 transform group-hover:translate-x-1 transition-transform duration-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}