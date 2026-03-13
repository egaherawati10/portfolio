import TimelineItem from "./timeline-item"

export default function Timeline() {
  return (
    <section className="grid md:grid-cols-2 gap-16">

      {/* EDUCATION */}
      <div className="animate-slide-up">

        <h2 className="text-2xl font-semibold mb-8">
          Education
        </h2>

        <div className="space-y-6">

          <TimelineItem
            date="Feb 2025 – Aug 2025"
            title="RevoU Bootcamp"
            subtitle="Full-Stack Software Engineering"
            details={[
              "Building modern web apps with React and Next.js",
              "Learning TypeScript and scalable backend architecture",
              "Working with Git, REST APIs, and deployment workflows"
            ]}
          />

          <TimelineItem
            date="Jun 2017 – Aug 2022"
            title="Diponegoro University"
            subtitle="Doctor of Medicine"
            details={[
              "Completed clinical rotations in multiple departments",
              "Developed patient care and diagnostic skills",
              "Participated in medical research and case discussions"
            ]}
          />

        </div>

      </div>

      {/* WORK EXPERIENCE */}
      <div className="animate-slide-up">

        <h2 className="text-2xl font-semibold mb-8">
          Work Experience
        </h2>

        <div className="space-y-6">

          <TimelineItem
            date="Oct 2024 – Present"
            title="Medical Doctor"
            subtitle="Dr. Gunawan Primary Clinic"
            details={[
              "Provided comprehensive medical care in outpatient settings, performing rapid clinical assessments, chronic disease management, and continuous monitoring to ensure patient safety and continuity of care",
              "Collaborated with multidisciplinary teams to standardize care protocols and leverage shared data insights, increasing holistic patient care adoption by approximately 98% across services",
            ]}
          />

          <TimelineItem
            date="Oct 2024 – Present"
            title="Medical Doctor"
            subtitle="Sehat Selaras Principal Clinic"
            details={[
              "Collaborated with multidisciplinary teams to standardize care protocols and leverage shared data insights, increasing holistic patient care adoption by approximately 98% across services",
              "Served as Point of Contact for clinic Electronic Medical Record implementation, achieving 100% EMR adoption"
            ]}
          />

          <TimelineItem
            date="Jul 2024 – Present"
            title="Medical Doctor"
            subtitle="Permata Hospital"
            details={[
              "Collaborated with multidisciplinary teams to standardize care protocols and leverage shared data insights, increasing holistic patient care adoption by approximately 98% across services",
              "Acted as Secretary of the Credential Committee at the hospital, supporting credentialing processes and clinical governance"
            ]}
          />

        </div>

      </div>

    </section>
  )
}