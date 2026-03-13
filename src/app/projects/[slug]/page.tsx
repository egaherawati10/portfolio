import { projects } from "@/data/projects"
import { notFound } from "next/navigation"
import Link from "next/link"

import ProjectHeader from "./components/ProjectHeader"
import ProjectSlider from "./components/ProjectSlider"
import ProjectContent from "./components/ProjectContent"

type Props = {
  params: Promise<{
    slug: string
  }>
}

export default async function ProjectPage({ params }: Props) {

  const { slug } = await params

  const index = projects.findIndex((p) => p.slug === slug)

  if (index === -1) notFound()

  const project = projects[index]

  const prevProject = projects[index - 1]
  const nextProject = projects[index + 1]

  return (

    <main className="max-w-6xl mx-auto px-6 py-20 space-y-20">

      {/* Breadcrumb */}
      <nav className="text-sm text-muted-foreground mb-8">
        <Link href="/" className="hover:text-primary">Home</Link>
        {" / "}
        <Link href="/projects" className="hover:text-primary">Projects</Link>
        {" / "}
        <span className="text-foreground">{project.title}</span>
      </nav>

      {/* HERO SECTION */}
      <section className="grid lg:grid-cols-2 gap-16 items-start">

        {/* LEFT */}
        <ProjectHeader project={project} />

        {/* RIGHT */}
        <ProjectSlider images={project.gallery} />

      </section>

      {/* CONTENT */}
      <ProjectContent project={project} />

      {/* PROJECT NAVIGATION */}
      <div className="border-t pt-12 flex justify-between">

        {prevProject ? (
          <Link
            href={`/projects/${prevProject.slug}`}
            className="group"
          >
            <p className="text-sm text-muted-foreground">
              Previous
            </p>

            <p className="font-medium group-hover:text-primary">
              ← {prevProject.title}
            </p>
          </Link>
        ) : <div />}

        {nextProject && (
          <Link
            href={`/projects/${nextProject.slug}`}
            className="group text-right"
          >
            <p className="text-sm text-muted-foreground">
              Next
            </p>

            <p className="font-medium group-hover:text-primary">
              {nextProject.title} →
            </p>
          </Link>
        )}

      </div>

    </main>

  )
}