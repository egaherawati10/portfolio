import { Project } from "../../../../../types/project"

function TechSection({
  title,
  tech,
}: {
  title: string
  tech?: string[]
}) {
  if (!tech || tech.length === 0) return null

  return (
    <div>

      <h3 className="text-sm font-semibold text-muted-foreground mb-3 uppercase tracking-wide">
        {title}
      </h3>

      <div className="flex flex-wrap gap-2">

        {tech.map((item) => (
          <span
            key={item}
            className="
            px-3 py-1 text-sm
            border border-border
            rounded-md
            bg-surface
            "
          >
            {item}
          </span>
        ))}

      </div>

    </div>
  )
}

export default function ProjectContent({ project }: { project: Project }) {

  return (

    <div className="grid lg:grid-cols-[1fr_320px] gap-16">

      {/* LEFT CONTENT */}
      <div className="space-y-12">

        <section>
          <h2 className="text-xl font-semibold mb-4">
            Background
          </h2>

          <p className="text-base leading-relaxed text-muted-foreground">
            {project.background}
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">
            Method / Strategy
          </h2>

          <p className="text-base leading-relaxed text-muted-foreground">
            {project.method}
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">
            Result / Output
          </h2>

          <p className="text-base leading-relaxed text-muted-foreground">
            {project.result}
          </p>
        </section>

      </div>

      {/* RIGHT SIDEBAR */}
      <aside className="space-y-8">

        {project.techStack && (

          <div className="space-y-6">

            <h2 className="text-lg font-semibold">
              Tech Stack
            </h2>

            <TechSection
              title="Frontend"
              tech={project.techStack.frontend}
            />

            <TechSection
              title="Backend"
              tech={project.techStack.backend}
            />

            <TechSection
              title="Database"
              tech={project.techStack.database}
            />

            <TechSection
              title="Tools"
              tech={project.techStack.tools}
            />

          </div>

        )}

      </aside>

    </div>

  )
}