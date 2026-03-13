"use client"

import toast from "react-hot-toast"
import { Github, Linkedin, Instagram, ArrowUpRight } from "lucide-react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"

const schema = z.object({
  name: z.string().min(2, "Please enter your name"),
  email: z.string().email("Invalid email"),
  inquiry: z.string().min(1, "Select inquiry type"),
  message: z.string().min(10, "Message must be at least 10 characters"),
})

type FormData = z.infer<typeof schema>

export default function ContactPage() {

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  })

  const onSubmit = async (data: FormData) => {

    const toastId = toast.loading("Sending message...")

    try {

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })

      const result = await res.json()

      if (!res.ok) {
        throw new Error(result.error || "Failed to send message")
      }

      toast.success("Message sent successfully!", { id: toastId })

      reset()

    } catch (error) {

      toast.error(
        error instanceof Error
          ? error.message
          : "Failed to send message",
        { id: toastId }
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

          <div
            className="
            bg-surface
            border border-border
            rounded-xl
            p-8
            transition
            hover:border-primary/40
            hover:shadow-[0_0_25px_rgba(20,184,166,0.15)]
            "
          >

            <h2 className="text-lg font-semibold mb-6 text-text">
              Send a message
            </h2>

            <form
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-5"
            >

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

              {/* SUBMIT BUTTON */}

              <button
                type="submit"
                disabled={isSubmitting}
                className="
                w-full
                py-3
                text-sm
                font-medium
                rounded-lg
                text-white
                bg-linear-to-r
                from-teal-500
                to-cyan-500
                transition
                duration-300
                hover:scale-[1.02]
                hover:shadow-[0_0_25px_rgba(20,184,166,0.45)]
                disabled:opacity-60
                disabled:cursor-not-allowed
                flex
                items-center
                justify-center
                gap-2
                "
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>

            </form>

          </div>

          {/* CONNECT */}

          <div className="flex flex-col justify-center">

            <h2 className="text-lg font-semibold mb-3 text-text">
              Connect
            </h2>

            <p className="text-muted mb-8 text-sm leading-relaxed">
              Prefer social platforms? Reach out through one of these.
            </p>

            <div className="space-y-4">

              <SocialLink
                href="https://github.com/egaherawati10"
                icon={<Github size={20} />}
                label="GitHub"
              />

              <SocialLink
                href="https://www.instagram.com/egaherawati10"
                icon={<Instagram size={20} />}
                label="Instagram"
              />

              <SocialLink
                href="https://www.linkedin.com/in/egaherawati10/"
                icon={<Linkedin size={20} />}
                label="LinkedIn"
              />

            </div>

          </div>

        </div>

      </div>

    </main>
  )
}

function SocialLink({
  href,
  icon,
  label,
}: {
  href: string
  icon: React.ReactNode
  label: string
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="
      group
      flex
      items-center
      justify-between
      p-4
      rounded-lg
      border border-border
      bg-surface
      transition
      hover:border-primary/40
      hover:shadow-[0_0_20px_rgba(20,184,166,0.2)]
      hover:translate-x-1
      "
    >

      <div className="flex items-center gap-3">

        <div
          className="
          p-2
          rounded-md
          bg-background
          text-primary
          group-hover:scale-110
          transition
          "
        >
          {icon}
        </div>

        <span className="text-sm text-text">
          {label}
        </span>

      </div>

      <ArrowUpRight
        size={16}
        className="
        text-muted
        group-hover:text-primary
        transition
        "
      />

    </a>
  )
}