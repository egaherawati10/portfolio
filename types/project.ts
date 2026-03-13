export type Project = {
  slug: string
  title: string
  institution: string
  period: string

  projectType: "Individual Project" | "Team Project"

  description: string
  background: string
  method: string
  result: string

  techStack?: {
    frontend?: string[]
    backend?: string[]
    database?: string[]
    tools?: string[]
  }

  github?: string
  demo?: string

  gallery: string[]
}