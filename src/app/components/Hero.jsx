import Link from 'next/link'

export default function Hero() {
  return (
    <section className="py-16 px-6 md:py-24">
      <div className="flex flex-col md:flex-row items-center max-w-4xl mx-auto gap-10">
        <div className="flex-1 text-center md:text-left space-y-4">
          <div className="space-y-1">
            <h1 className="text-4xl font-bold font-lora bg-clip-text text-transparent bg-gradient-to-r from-[#7CD3FC] to-[#BAE6FD]">
              Hello!<span className="inline-block animate-wave origin-bottom-right">👋</span>
            </h1>
            <h2 className="text-2xl font-semibold font-lora text-gray-800">Khairul Here!</h2>
          </div>

          <p className="text-gray-700 text-lg leading-relaxed">
            I'm a performance marketer diving headfirst into web development. When I'm not crafting
            marketing strategies, you'll find me coding and{' '}
            <span className="bg-gradient-to-r from-[#7CD3FC]/20 to-[#BAE6FD]/20 px-2 py-0.5 rounded-md font-medium">
              building stuff
            </span>
            on web. Super excited to{' '}
            <span className="bg-gradient-to-r from-[#7CD3FC]/20 to-[#BAE6FD]/20 px-2 py-0.5 rounded-md font-medium">
              blend
            </span>{' '}
            my marketing know-how with my growing tech skills!{' '}
            <span className="inline-block animate-bounce">🚀</span>
          </p>

          <div className="flex gap-6 justify-center md:justify-start pt-2">
            <Link
              href="https://twitter.com/motuluii"
              className="flex items-center gap-2 text-gray-700 hover:text-[#7CD3FC] transition-colors duration-300 group"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="bg-gray-100 p-2 rounded-full group-hover:bg-[#7CD3FC]/10 transition-colors duration-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="group-hover:scale-110 transition-transform duration-300"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </span>
              <span className="font-medium">Twitter</span>
            </Link>
            <Link
              href="https://github.com/khmuhtadin"
              className="flex items-center gap-2 text-gray-700 hover:text-[#7CD3FC] transition-colors duration-300 group"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="bg-gray-100 p-2 rounded-full group-hover:bg-[#7CD3FC]/10 transition-colors duration-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="group-hover:scale-110 transition-transform duration-300"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </span>
              <span className="font-medium">GitHub</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
