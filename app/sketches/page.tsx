import { GalleryGrid } from "@/components/gallery-grid"
import type { GalleryItem } from "@/components/gallery-grid"

/*
  Add or remove sketches freely.
  The gallery handles any aspect ratio — just provide src and alt.
*/
const sketches: GalleryItem[] = [
  { src: "/image/sketch/sket1.jpg", alt: "Sketch 1" },
  { src: "/image/sketch/sket2.jpg", alt: "Sketch 2" },
  { src: "/image/sketch/sket3.jpg", alt: "Sketch 3" },
  { src: "/image/sketch/sket4.jpg", alt: "Sketch 4" },
  { src: "/image/sketch/sket5.jpg", alt: "Sketch 5" },
  { src: "/image/sketch/sket6.jpg", alt: "Sketch 6" },
]

export default function SketchesPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
      <h1 className="font-serif text-3xl tracking-tight text-foreground md:text-4xl mb-12">
        Sketches
      </h1>
      <GalleryGrid items={sketches} />
    </div>
  )
}
