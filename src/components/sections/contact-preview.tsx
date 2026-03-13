export default function ContactPreview() {

  return (

    <section className="bg-background">

      <div className="max-w-4xl mx-auto px-4 text-center">

        <h2 className="text-3xl md:text-4xl font-bold text-text">
          Let's Work Together
        </h2>

        <p className="text-muted mt-4">
          Interested in collaborating or discussing a project?
          Feel free to reach out.
        </p>

        <div className="mt-8">

          <a
            href="/contact"
            className="
            px-6 py-3
            rounded-lg
            bg-primary
            text-white
            font-medium
            hover:opacity-90
            transition
            "
          >
            Contact Me
          </a>

        </div>

      </div>

    </section>

  )

}