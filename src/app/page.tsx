import AboutPreview from "@/components/sections/about-preview";
import Hero from "../components/sections/hero";
import ProjectsPreview from "@/components/sections/projects-preview";
import ContactPreview from "@/components/sections/contact-preview";

export default function Home() {
  return (
    <main className="relative overflow-hidden">

      {/* HERO */}
      <section className="min-h-screen flex items-center">
        <Hero />
      </section>

      {/* ABOUT */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <AboutPreview />
        </div>
      </section>

      {/* PROJECTS */}
      <section className="py-24 px-6 bg-slate-900/40">
        <div className="max-w-6xl mx-auto">
          <ProjectsPreview />
        </div>
      </section>

      {/* CONTACT */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <ContactPreview />
        </div>
      </section>

    </main>
  )
}