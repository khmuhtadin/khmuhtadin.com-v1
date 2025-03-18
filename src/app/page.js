import Blog from './components/Blog'
import Header from './components/Header'
import Hero from './components/Hero'
import Projects from './components/Projects'

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Projects />
        <Blog />
      </main>
    </div>
  )
}
