import GridBackground from "../ui/grid-background"
import { projects } from "@/data/projects"
import Image from "next/image"
import Link from "next/link"

export default function ProjectsPreview() {

  const previewProjects = projects.slice(0, 2)

  return (
    <section id="projects-preview" className="bg-background relative">

      <GridBackground opacity={0.015} />

      <div className="max-w-6xl mx-auto px-6 relative">

        {/* Header */}

        <div className="mb-12">

          <h2 className="text-3xl md:text-4xl font-bold text-text">
            Selected Projects
          </h2>

          <p className="text-muted mt-3 max-w-lg">
            A selection of projects built with modern web technologies and full-stack development practices.
          </p>

        </div>

        {/* Grid */}

        <div className="grid md:grid-cols-3 gap-6">

          {previewProjects.map((project) => (

            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className="
              group
              bg-surface
              rounded-xl
              border
              border-border
              overflow-hidden
              hover:border-primary
              transition
              "
            >

              {/* Image */}

              <div className="relative w-full h-40 bg-muted/20 overflow-hidden">

                <Image
                  src={project.gallery?.[0] || "/projects/placeholder.png"}
                  alt={project.title}
                  fill
                  className="
                  object-cover
                  group-hover:scale-105
                  transition
                  duration-300
                  "
                />

              </div>

              {/* Content */}

              <div className="p-6">

                <h3 className="font-semibold text-text group-hover:text-primary transition">
                  {project.title}
                </h3>

                <p className="text-muted text-sm mt-2 line-clamp-3">
                  {project.description}
                </p>

              </div>

            </Link>

          ))}

          {/* View All Projects Card */}

          <Link
            href="/projects"
            className="
            group
            flex
            items-center
            justify-center
            text-center
            bg-surface
            rounded-xl
            hover:border-primary
            transition
            p-6
            "
          >

            <div>

              <p className="font-semibold text-text group-hover:text-primary transition">
                View All Projects →
              </p>

              <p className="text-muted text-sm mt-2">
                Explore the full project collection
              </p>

            </div>

          </Link>

        </div>

      </div>

    </section>
  )
}