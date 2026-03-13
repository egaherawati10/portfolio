"use client"

import toast from "react-hot-toast"
import { Github, Linkedin, Instagram } from "lucide-react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"

const schema = z.object({
  name: z.string().min(2, "Name too short"),
  email: z.string().email("Invalid email"),
  inquiry: z.string().min(1, "Select inquiry type"),
  message: z.string().min(10, "Message must be at least 10 characters")
})

type FormData = z.infer<typeof schema>

export default function ContactPage() {

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm<FormData>({
    resolver: zodResolver(schema)
  })

  const onSubmit = async (data: FormData) => {

    try {

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      })

      const result = await res.json()

      if (!res.ok) {
        throw new Error(result.error || "Failed to send message")
      }

      toast.success("Message sent successfully!")
      reset()

    } catch (error) {

      console.error("Contact form error:", error)

      toast.error(
        error instanceof Error
          ? error.message
          : "Failed to send message"
      )

    }

  }

  return (
    <main className="py-16 px-6">

      <div className="max-w-6xl mx-auto">

        <h1 className="text-3xl font-semibold text-text mb-12 text-center">
          Contact
        </h1>

        <div className="grid md:grid-cols-2 gap-12">

          {/* FORM */}

          <div className="bg-surface border border-border rounded-xl p-8">

            <h2 className="text-lg font-semibold mb-6 text-text">
              Send a message
            </h2>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">

              {/* NAME */}

              <div>

                <input
                  {...register("name")}
                  placeholder="Your Name"
                  className="
                  w-full
                  p-3
                  text-sm
                  bg-background
                  border border-border
                  rounded-lg
                  focus:outline-none
                  focus:border-primary
                  focus:ring-1
                  focus:ring-primary/40
                  transition
                  "
                />

                {errors.name && (
                  <p className="text-red-400 text-sm mt-1">
                    {errors.name.message}
                  </p>
                )}

              </div>

              {/* EMAIL */}

              <div>

                <input
                  type="email"
                  {...register("email")}
                  placeholder="Your Email"
                  className="
                  w-full
                  p-3
                  text-sm
                  bg-background
                  border border-border
                  rounded-lg
                  focus:outline-none
                  focus:border-primary
                  focus:ring-1
                  focus:ring-primary/40
                  transition
                  "
                />

                {errors.email && (
                  <p className="text-red-400 text-sm mt-1">
                    {errors.email.message}
                  </p>
                )}

              </div>

              {/* INQUIRY */}

              <div>

              <select
                {...register("inquiry")}
                defaultValue=""
                className="
                w-full
                p-3
                text-sm
                text-white
                bg-background
                border border-border
                rounded-lg
                focus:outline-none
                focus:border-primary
                focus:ring-1
                focus:ring-primary/40
                transition
                "
              >
                <option value="" disabled className="text-black">
                  Select Inquiry
                </option>

                <option value="collaboration" className="text-black">
                  Collaboration
                </option>

                <option value="project" className="text-black">
                  Project Proposal
                </option>

                <option value="job" className="text-black">
                  Job Opportunity
                </option>

                <option value="general" className="text-black">
                  General Question
                </option>

              </select>

              {errors.inquiry && (
                <p className="text-red-400 text-sm mt-1">
                  {errors.inquiry.message}
                </p>
              )}

            </div>

              {/* MESSAGE */}

              <div>

                <textarea
                  {...register("message")}
                  rows={5}
                  placeholder="Your Message"
                  className="
                  w-full
                  p-3
                  text-sm
                  bg-background
                  border border-border
                  rounded-lg
                  focus:outline-none
                  focus:border-primary
                  focus:ring-1
                  focus:ring-primary/40
                  transition
                  "
                />

                {errors.message && (
                  <p className="text-red-400 text-sm mt-1">
                    {errors.message.message}
                  </p>
                )}

              </div>

              {/* SUBMIT */}

              <button
                type="submit"
                disabled={isSubmitting}
                className="
                w-full
                py-3
                text-sm
                font-medium
                bg-primary
                text-white
                rounded-lg
                hover:bg-primary/90
                transition
                "
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>

            </form>

          </div>

          {/* CONNECT */}

          <div className="bg-surface border border-border rounded-xl p-8 flex flex-col justify-center">

            <h2 className="text-lg font-semibold mb-3 text-text">
              Connect
            </h2>

            <p className="text-muted mb-8 text-sm leading-relaxed">
              Prefer social platforms? Reach out through one of these.
            </p>

            <div className="space-y-3">

              <a
                href="https://github.com/egaherawati10"
                target="_blank"
                rel="noopener noreferrer"
                className="
                flex items-center gap-3
                p-3
                text-sm
                rounded-lg
                text-muted
                hover:text-text
                hover:bg-background
                transition
                "
              >
                <Github size={18}/>
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/egaherawati10/"
                target="_blank"
                rel="noopener noreferrer"
                className="
                flex items-center gap-3
                p-3
                text-sm
                rounded-lg
                text-muted
                hover:text-text
                hover:bg-background
                transition
                "
              >
                <Linkedin size={18}/>
                LinkedIn
              </a>

              <a
                href="https://www.instagram.com/egaherawati10?igsh=cWF1NnFyNGZqa2tp"
                target="_blank"
                rel="noopener noreferrer"
                className="
                flex items-center gap-3
                p-3
                text-sm
                rounded-lg
                text-muted
                hover:text-text
                hover:bg-background
                transition
                "
              >
                <Instagram size={18}/>
                Instagram
              </a>

            </div>

          </div>

        </div>

      </div>

    </main>
  )
}