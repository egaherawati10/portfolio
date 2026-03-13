import { techStack } from "../data/tech-stacks";

export default function TechStack() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">

      {techStack.map(({ name, icon: Icon }) => (
        <div
          key={name}
          className="
          group
          flex flex-col items-center gap-3
          p-6
          bg-surface
          border border-border
          rounded-xl
          transition
          hover:-translate-y-1
          hover:border-primary
          hover:shadow-md
          "
        >

          <Icon
            className="
            text-3xl
            text-muted-foreground
            transition
            group-hover:text-primary
            "
          />

          <span className="text-sm text-muted-foreground">
            {name}
          </span>

        </div>
      ))}

    </div>
  )
}