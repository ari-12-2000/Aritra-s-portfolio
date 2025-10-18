const skillCategories = [
  {
    category: "Languages & Frameworks",
    skills: [
      "JavaScript",
      "TypeScript",
      "Python",
      "Java",
      "C",
      "React.js",
      "Next.js",
      "Angular",
      "Node.js",
      "Express.js",
    ],
  },
  {
    category: "Frontend Technologies",
    skills: ["HTML5", "CSS3", "SASS", "Tailwind CSS", "Redux Toolkit", "Material-UI", "React Testing Library"],
  },
  {
    category: "Databases & ORMs",
    skills: ["MySQL", "PostgreSQL", "MongoDB", "Prisma", "Mongoose", "JSON Web Token"],
  },
  {
    category: "Tools & Platforms",
    skills: [
      "Git",
      "GitHub",
      "Linux",
      "Docker",
      "CI/CD Pipeline",
      "Webpack",
      "ESLint",
      "Prettier",
      "Cloudinary",
      "Razorpay",
    ],
  },
  {
    category: "Advanced Skills",
    skills: ["Next-Auth", "CytoScape.js", "JEST", "Next-Intl (I18n)", "Agile Scrum", "SEO", "UI/UX Design Principles"],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Technical Skills</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category) => (
            <div
              key={category.category}
              className="bg-card rounded-lg p-6 border border-border hover:border-primary/50 transition-colors"
            >
              <h3 className="text-lg font-semibold mb-4 text-primary">{category.category}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 bg-primary/10 text-primary rounded-md text-sm font-medium hover:bg-primary/20 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
