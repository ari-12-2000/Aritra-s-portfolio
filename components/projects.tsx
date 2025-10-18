"use client"

const projects = [
  {
    id: 1,
    title: "Eduportal",
    description: "A educational web application involving quizzes, self-paced courses for students, professionals.",
    image: "/images/photo0.png",
    tags: ["Next.js", "React", "Typescript", "Tailwind", "Razorpay", "PostgreSQL"],
    link: "https://learning-app-ww1w.vercel.app/",
  },
  {
    id: 2,
    title: "Movie Booking",
    description:
      "A full-stack Movie Booking web application using the MERN stack featuring user, admin authentication, movie bookings and cancellations, adding movies by admin and distinct profiles for users and admins. Contains movie search and filter features",
    image: "/images/photo1.jpg",
    tags: ["React", "MongoDB", "Node", "Express"],
    link: "#",
  },
  {
    id: 3,
    title: "Analytics Dashboard",
    description: "Real-time analytics dashboard with interactive charts and data visualization.",
    image: "/images/photo3.jpg",
    tags: ["Next.js", "Chart.js", "Node.js"],
    link: "#",
  },
  {
    id: 4,
    title: "Advanced Responsive Weather App",
    description:
      "Showing all cities using opendatasoft API, in a table format with infinite scroll feature. The table has columns city name, country, time zone, etc. and clicking on each city row, navigates to the weather page for that particular city. Implemented weather details via openweathermap api",
    image: "/images/photo6.jpg",
    link: "##",
    tags: ["React", "Typescript", "Tailwind"],
  },
  {
    id: 5,
    title: "Google Keep Clone",
    description:
      "This software is a Google Keep–style note-taking app using React, with reusable, modular components (input area, notes grid, note card, controls).",
    image: "/images/photo4.png",
    link: "https://modern-note-taking-web-app.vercel.app/",
    tags: ["React", "Tailwind"],
  },
  {
    id: 6,
    title: "Goal Tracker",
    description:
      "The Goal Accomplish web application is designed for efficient goal management and tracking. Users can check and uncheck goals to monitor their progress individually, and a swipe-to-right feature allows for bulk goal tracking. The progress bar updates dynamically, showing completion percentages based on the total number of goals.",
    image: "/images/photo5.png",
    link:"#",
    tags: ["Next"],
  },
]

export default function Projects() {
  const handleProjectClick = (link: string) => {
    window.open(link, "_blank")
  }

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Featured Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              onClick={() => handleProjectClick(project.link)}
              className="group bg-card rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer"
            >
              <div className="relative h-48 overflow-hidden bg-muted">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover object-left-top group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
