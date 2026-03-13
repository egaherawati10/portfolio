import { projects } from "../../data/projects"
import Link from "next/link"
import Image from "next/image"

function getTechPreview(techStack?: {
  frontend?: string[]
  backend?: string[]
  database?: string[]
  tools?: string[]
}) {
  if (!techStack) return []

  const allTech = [
    ...(techStack.frontend ?? []),
    ...(techStack.backend ?? []),
    ...(techStack.database ?? []),
    ...(techStack.tools ?? [])
  ]

  return allTech.slice(0, 3)
}

export default function ProjectsPage() {

  return (

    <main className="max-w-6xl mx-auto px-6 py-16">

      {/* Header */}
      <header className="mb-12">

        <h1 className="text-3xl md:text-4xl font-bold">
          Projects
        </h1>

        <p className="text-muted-foreground mt-2 max-w-lg leading-relaxed">
          A collection of applications I have built, ranging from
          full-stack systems to backend APIs and interactive frontend projects.
        </p>

      </header>

      {/* Projects Grid */}
      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">

        {projects.map((project) => {

          const techPreview = getTechPreview(project.techStack)
          const cover = project.gallery?.[0]

          return (

            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className="
              group
              bg-surface
              border border-border
              rounded-2xl
              overflow-hidden
              flex flex-col
              transition
              hover:border-primary
              hover:-translate-y-1
              hover:shadow-[0_10px_40px_rgba(0,0,0,0.25)]
              "
            >

              {/* Image Slot */}

              <div className="relative w-full aspect-video bg-muted/20 overflow-hidden">

                {cover && (
                  <Image
                    src={cover}
                    alt={project.title}
                    fill
                    className="
                    object-cover
                    transition
                    duration-500
                    group-hover:scale-105
                    "
                  />
                )}

              </div>


              {/* Content */}

              <div className="p-6 flex flex-col flex-1">

                {/* Title + Badge */}

                <div className="flex items-center justify-between mb-2">

                  <h2 className="text-lg font-semibold group-hover:text-primary transition">
                    {project.title}
                  </h2>

                  <span className="text-xs px-2 py-1 border rounded-md text-muted-foreground">
                    {project.projectType}
                  </span>

                </div>

                {/* Description */}

                <p className="text-sm text-muted-foreground line-clamp-3">
                  {project.description}
                </p>


                {/* Tech + View */}

                <div className="mt-auto flex items-center justify-between pt-5">

                  <div className="flex flex-wrap gap-2 min-h-13 content-start">

                    {techPreview.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-2 py-1 border border-border rounded-md"
                      >
                        {tech}
                      </span>
                    ))}

                  </div>

                  <div className="text-sm text-primary font-medium flex items-center gap-1 transition group-hover:translate-x-1">

                    <span className="text-sm">View</span>
                    <span className="text-lg leading-none">→</span>

                  </div>

                </div>

              </div>

            </Link>

          )
        })}

      </div>

    </main>

  )
}