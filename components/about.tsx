export default function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-card">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">About Me</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img src="/images/ARITRA.jpg" alt="About" className="rounded-lg shadow-lg w-full object-cover h-96" />
          </div>
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Full Stack Developer with 1+ year of experience delivering end-to-end web applications using React,
              Next.js, Angular, Node.js, and SQL databases. Skilled in both frontend performance optimization and
              backend system design.
            </p>
            <div className="pt-4">
              <h3 className="text-xl font-semibold mb-4">Core Expertise</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  Full-stack web development with React, Next.js & Angular
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  Backend systems with Node.js, Express & databases
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  Performance optimization & system design
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
