import Image from "next/image"
import { Certificate } from "../../../types/certificate"

const certificates: Certificate[] = [
  {
    title: "Basic Cybersecurity",
    issuer: "CODEPOLITAN",
    year: "Feb 2026",
    image: "/images/certificates/CySec.png",
    link: "https://drive.google.com/file/d/1jcfF4bmXxO_2ysBIiGutUmiYrpdMybIi/view?usp=drive_link"
  },
  
  {
    title: "Full Stack Software Engineering Bootcamp",
    issuer: "RevoU",
    year: "Aug 2025",
    image: "/images/certificates/RevoU.png",
    link: "https://drive.google.com/file/d/1X3bc5BFSiaJxuXBCpQM8Hh-BhaqCThJu/view?usp=drive_link"
  },

  {
    title: "Advanced Cardiac Life Support",
    issuer: "PERKI",
    year: "Jun 2024 - Jun 2027",
    image: "/images/certificates/ACLS.png",
    link: "https://drive.google.com/file/d/1-yIDJBTeiW2EItUhkU0odh9xP9nhAwo7/view?usp=drive_link"
  }
]

export default function Certificates() {

  return (
    <section className="py-4">

      <div className="max-w-6xl mx-auto px-6">

        {/* TITLE */}

        <h2 className="text-3xl font-bold text-text mb-12">
          Certifications
        </h2>

        {/* GRID */}

        <div className="grid md:grid-cols-3 gap-6">

          {certificates.map((cert) => (

            <a
              key={cert.title}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="
              group
              relative
              bg-surface
              border border-border
              rounded-xl
              overflow-hidden
              transition
              duration-300
              hover:border-primary
              hover:-translate-y-1
              hover:shadow-[0_0_20px_rgba(56,189,248,0.25)]
              "
            >

              {/* IMAGE */}

              <div className="relative h-40 overflow-hidden">

                <Image
                  src={cert.image}
                  alt={cert.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="
                  object-cover
                  transition
                  duration-500
                  group-hover:scale-105
                  "
                />

              </div>

              {/* CONTENT */}

              <div className="p-5">

                <h3 className="font-semibold text-text mb-2 leading-snug">
                  {cert.title}
                </h3>

                <div className="flex items-center justify-between">

                  <span className="
                  text-xs
                  px-2 py-1
                  rounded-md
                  bg-background
                  border border-border
                  text-muted
                  ">
                    {cert.issuer}
                  </span>

                  <span className="text-xs text-muted">
                    {cert.year}
                  </span>

                </div>

              </div>

            </a>

          ))}

        </div>

      </div>

    </section>
  )
}