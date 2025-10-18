"use client"

interface HeroProps {
  setActiveSection: (section: string) => void
}

export default function Hero({ setActiveSection }: HeroProps) {
  const handleNavClick = (id: string) => {
    setActiveSection(id)
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-background via-background to-accent/5"
    >
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <img
            src="/images/ARITRA.jpg"
            alt="Aritra"
            className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-primary shadow-lg"
          />
        </div>
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 text-balance">
          Hi, I'm <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Aritra</span>
        </h1>
        <p className="text-xl sm:text-2xl text-muted-foreground mb-8 text-balance max-w-2xl mx-auto">
          Full-stack developer passionate about creating beautiful, functional web experiences
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => handleNavClick("projects")}
            className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
          >
            View My Work
          </button>
          <button
            onClick={() => handleNavClick("contact")}
            className="px-8 py-3 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary/10 transition-colors"
          >
            Get In Touch
          </button>
        </div>
      </div>
    </section>
  )
}
