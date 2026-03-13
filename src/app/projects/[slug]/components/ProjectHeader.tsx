import Link from "next/link"
import { Project } from "../../../../../types/project"

export default function ProjectHeader({ project }: { project: Project }) {
  return (
    <header className="space-y-6">

      <div className="space-y-3">

        <h1 className="text-3xl md:text-4xl font-bold">
          {project.title}
        </h1>

        <p className="text-sm text-muted-foreground">
          {project.institution} • {project.period}
        </p>

        <p className="text-muted-foreground max-w-2xl">
          {project.description}
        </p>

        <p className="text-sm text-primary font-medium">
          {project.projectType} — Designed and developed independently
        </p>

      </div>

      <div className="flex flex-wrap gap-4">

        {project.github && (
          <Link
            href={project.github}
            target="_blank"
            className="px-5 py-2 bg-primary text-white rounded-lg hover:opacity-90 transition"
          >
            GitHub Repository
          </Link>
        )}

        {project.demo && (
          <Link
            href={project.demo}
            target="_blank"
            className="px-5 py-2 border border-border rounded-lg hover:bg-muted transition"
          >
            Live Demo
          </Link>
        )}

      </div>

    </header>
  )
}