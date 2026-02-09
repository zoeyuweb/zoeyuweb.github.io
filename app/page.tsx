import Link from "next/link"
import Image from "next/image"

/*
  Featured works on the home page.
  Each item links to a category page.
  `label` is the text shown on hover (serif font, blur overlay).
  Replace src with your own images — any aspect ratio works.
*/
const featured = [
  { src: "/image/picturebook/seamonster1.jpg", alt: "Picture books", href: "/picture-books", label: "Picture Books" },
  { src: "/image/illustration/illustration2.jpg", alt: "Illustration", href: "/illustration", label: "Illustration" },
  { src: "/image/sketch/sket%20%283%29.jpg", alt: "Sketches", href: "/sketches", label: "Sketches" },
]

export default function HomePage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
      {/* Name & tagline */}
      <section className="mb-16 max-w-2xl">
        <h1 className="font-serif text-4xl leading-tight tracking-tight text-foreground md:text-5xl text-balance">
          Zheyue Zhang
        </h1>
        <p className="mt-3 text-base text-muted-foreground">
          Illustrator &amp; PictureBook Artist
        </p>
      </section>

      {/* Featured work grid with hover blur + label */}
      <section>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((item) => (
            <Link
              key={item.src}
              href={item.href}
              className="group relative block aspect-[4/3] overflow-hidden rounded-sm"
            >
              <Image
                src={item.src || "/placeholder.svg"}
                alt={item.alt}
                fill
                className="object-cover transition-all duration-500 group-hover:scale-[1.03] group-hover:blur-[6px]"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              {/* Dark overlay + label on hover */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors duration-500 group-hover:bg-black/30">
                <span className="font-serif text-xl tracking-wide text-white opacity-0 transition-opacity duration-500 group-hover:opacity-100 md:text-2xl">
                  {item.label}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}
