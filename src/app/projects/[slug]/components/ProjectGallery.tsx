import Image from "next/image"

type Props = {
  images: string[]
}

export default function ProjectGallery({ images }: Props) {

  if (!images?.length) return null

  return (
    <section className="space-y-6">

      <h2 className="text-xl font-semibold">
        Project Gallery
      </h2>

      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">

        {images.map((img, i) => (

          <div
            key={i}
            className="relative aspect-video rounded-xl overflow-hidden border border-border"
          >

            <Image
              src={img}
              alt={`project screenshot ${i + 1}`}
              fill
              priority={i === 0}
              className="object-cover"
            />

          </div>

        ))}

      </div>

    </section>
  )
}