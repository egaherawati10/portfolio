import Timeline from "@/components/about/timeline"
import SkillsSection from "@/components/about/skills-section"
import AboutHero from "@/components/about/about-hero"
import Certificates from "@/components/about/certificates"

export default function AboutPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-24 space-y-24">

      <AboutHero />

      <Timeline />

      <SkillsSection />

      <Certificates />

    </main>
  )
}