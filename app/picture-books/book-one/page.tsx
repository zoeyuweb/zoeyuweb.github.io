import Image from "next/image"
import Link from "next/link"

/*
  Book detail page.
  Replace text and image paths with your own.
  Add or remove images in the `pages` array freely — the grid adapts.
*/
const book = {
  title: "The Seamonster's Island",
  year: "2026",
  publisher: "",
  description:
    "A lonely sea monster quietly watches the daily lives of people on its island, observing their routines and joys, until in the end, it finds a friend of its own. Materials: Watercolor, colored pencils",
  cover: "/image/picturebook/bookcover2.jpg",
  pages: [
    "/image/picturebook/seamonster1.jpg",
    "/image/picturebook/seamonster2.jpg",
    "/image/picturebook/seamonster13.jpg",
    /* Add more spread images here */
  ],
}

export default function BookOnePage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
      {/* Back link */}
      <Link
        href="/picture-books"
        className="mb-10 inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
      >
        <span aria-hidden="true">&larr;</span> All Picture Books
      </Link>

      {/* Book header: cover + info */}
      <div className="flex flex-col gap-8 md:flex-row md:gap-12">
        <div className="w-full shrink-0 overflow-hidden rounded-sm md:w-72">
          <Image
            src={book.cover || "/placeholder.svg"}
            alt={`Cover of ${book.title}`}
            width={600}
            height={800}
            className="h-auto w-full object-cover"
            sizes="(max-width: 768px) 100vw, 288px"
            priority
          />
        </div>

        <div className="flex flex-col justify-center">
          <h1 className="font-serif text-3xl tracking-tight text-foreground md:text-4xl">
            {book.title}
          </h1>
          <p className="mt-2 text-sm text-muted-foreground">
            {book.year} &middot; {book.publisher}
          </p>
          <p className="mt-4 max-w-lg text-base leading-relaxed text-muted-foreground">
            {book.description}
          </p>
        </div>
      </div>

      {/* Interior pages grid — responsive, add as many as you like */}
      <div className="mt-12 columns-1 gap-4 sm:columns-2 lg:columns-3">
        {book.pages.map((page) => (
          <div
            key={page}
            className="mb-4 break-inside-avoid overflow-hidden rounded-sm"
          >
            <Image
              src={page || "/placeholder.svg"}
              alt={`Interior page from ${book.title}`}
              width={800}
              height={500}
              className="h-auto w-full object-cover"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          </div>
        ))}
      </div>
    </div>
  )
}
