import Link from "next/link"
import Image from "next/image"

/*
  Book listing — gallery of uniform thumbnails.
  Each card links to a detail page at /picture-books/[slug].
  To add a new book:
    1. Add an entry here.
    2. Create the matching detail page folder: app/picture-books/[slug]/page.tsx
       (or duplicate an existing one).
*/
const books = [
  {
    slug: "book-one",
    title: "The Seamonster's Island",
    cover: "/image/bookcover2.jpg",
  },
  {
    slug: "book-two",
    title: "A Strange night at the ruins",
    cover: "/images/bookcover4.jpg",
  },
  {
    slug: "book-three",
    title: "Mr.Fox",
    cover: "/images/bookcover1.jpg",
  },
  {
    slug: "book-four",
    title: "The Gift",
    cover: "/images/bookcover3.jpg",
  },
  /* Add more books here — just copy the pattern above */
]

export default function PictureBooksPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
      <h1 className="font-serif text-3xl tracking-tight text-foreground md:text-4xl mb-12">
        Picture Books & Comics
      </h1>

      <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4">
        {books.map((book) => (
          <Link
            key={book.slug}
            href={`/picture-books/${book.slug}`}
            className="group block"
          >
            <div className="aspect-[3/4] overflow-hidden rounded-sm bg-secondary">
              <Image
                src={book.cover || "/placeholder.svg"}
                alt={`Cover of ${book.title}`}
                width={600}
                height={800}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              />
            </div>
            <h2 className="mt-3 text-sm tracking-wide text-muted-foreground transition-colors group-hover:text-foreground">
              {book.title}
            </h2>
          </Link>
        ))}
      </div>
    </div>
  )
}
