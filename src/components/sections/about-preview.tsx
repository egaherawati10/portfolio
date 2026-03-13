import { techStack } from "@/data/tech-stacks"

export default function AboutPreview() {

  const previewTech = techStack.filter((tech) =>
    ["Next.js", "NestJS", "PostgreSQL", "Prisma ORM"].includes(tech.name)
  )

  return (

    <section className="bg-background">

      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT */}

        <div>

          <h2 className="text-3xl md:text-4xl font-bold text-text">
            About Me
          </h2>

          <p className="text-muted mt-6 leading-relaxed">
            I am a medical doctor pursuing a full-stack software engineering bootcamp at RevoU to advance healthcare digitalization. I bring a disciplined, integrity-driven approach with strong data-informed decision-making and cross-functional collaboration skills.
          </p>

          <a
            href="/about"
            className="inline-block mt-8 text-primary font-medium hover:underline"
          >
            Learn more →
          </a>

        </div>


        {/* RIGHT */}

        <div className="bg-surface border border-border rounded-xl p-7">

          <h3 className="font-semibold text-text">
            Tech Stack
          </h3>

          <div className="flex flex-wrap items-center gap-3 mt-4">

            {previewTech.map((tech) => {
              const Icon = tech.icon

              return (
                <span
                  key={tech.name}
                  className="
                  inline-flex
                  items-center
                  gap-2
                  px-3.5
                  py-1.5
                  bg-background
                  border border-border
                  rounded-md
                  text-sm
                  leading-none
                  transition
                  hover:border-primary
                  "
                >
                  <Icon className="text-lg text-muted" />
                  {tech.name}
                </span>
              )
            })}

            {/* More indicator */}

            <span className="text-sm text-muted ml-1">
              and many more...
            </span>

          </div>

        </div>

      </div>

    </section>

  )
}