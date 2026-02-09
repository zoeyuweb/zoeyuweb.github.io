import { GalleryGrid } from "@/components/gallery-grid"
import type { GalleryItem } from "@/components/gallery-grid"

/*
  Add or remove images freely.
  Each item only needs src and alt.
  The gallery handles variable aspect ratios automatically.
*/
const illustrations: GalleryItem[] = [
  { src: "/images/illustration-01.jpg", alt: "Illustration 1" },
  { src: "/images/illustration-02.jpg", alt: "Illustration 2" },
  { src: "/images/illustration-03.jpg", alt: "Illustration 3" },
  { src: "/images/illustration-04.jpg", alt: "Illustration 4" },
  { src: "/images/illustration-05.jpg", alt: "Illustration 5" },
  { src: "/images/illustration-06.jpg", alt: "Illustration 6" },
]

export default function IllustrationPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
      <h1 className="font-serif text-3xl tracking-tight text-foreground md:text-4xl mb-12">
        Illustration
      </h1>
      <GalleryGrid items={illustrations} />
    </div>
  )
}
