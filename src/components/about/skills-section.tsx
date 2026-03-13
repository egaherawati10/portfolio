import TechStack from "@/components/tech-stack"
import { skills } from "@/data/skills"

export default function SkillsSection() {
  return (
    <section className="grid md:grid-cols-2 gap-8 items-start">

      {/* Tech Stack */}

      <div className="animate-fade-in-delay max-w-lg">
        <h2 className="text-xl font-semibold mb-5">
          Tech Stack
        </h2>

        <TechStack />
      </div>


      {/* Soft Skills */}

      <div className="animate-fade-in-delay space-y-8">

        {skills.map((group) => (
          <div key={group.category}>

            <h2 className="text-xl font-semibold mb-5">
              {group.category}
            </h2>

            <div className="flex flex-wrap gap-2.5">

              {group.skills.map((skill) => (
                <span
                  key={skill.name}
                  className="
                  text-sm
                  px-3.5
                  py-1.5
                  border
                  border-(--border)
                  rounded-full
                  bg-(--surface)
                  hover:border-(--primary)
                  transition
                  "
                >
                  {skill.name}
                </span>
              ))}

            </div>

          </div>
        ))}

      </div>

    </section>
  )
}