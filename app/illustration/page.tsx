import { GalleryGrid } from "@/components/gallery-grid"
import type { GalleryItem } from "@/components/gallery-grid"

/*
  Add or remove images freely.
  Each item only needs src and alt.
  The gallery handles variable aspect ratios automatically.
*/
const illustrations: GalleryItem[] = [
  { src: "/image/illustration/illustration1.jpg", alt: "Illustration 1" },
  { src: "/image/illustration/illustration2.jpg", alt: "Illustration 2" },
  { src: "/image/illustration/illustration3.jpg", alt: "Illustration 3" },
  { src: "/image/illustration/illustration4.jpg", alt: "Illustration 4" },
  { src: "/image/illustration/illustration5.jpg", alt: "Illustration 5" },
  { src: "/image/illustration/illustration6.jpg", alt: "Illustration 6" },
  { src: "/image/illustration/illustration7.jpg", alt: "Illustration 7" },
  { src: "/image/illustration/illustration8.jpg", alt: "Illustration 8" },
  { src: "/image/illustration/illustration9.png", alt: "Illustration 9" },
  { src: "/image/illustration/illustration10.jpg", alt: "Illustration 10" },
  { src: "/image/illustration/illustration11.jpg", alt: "Illustration 11" },
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
