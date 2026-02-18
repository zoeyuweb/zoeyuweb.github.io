import { GalleryGrid } from "@/components/gallery-grid"
import type { GalleryItem } from "@/components/gallery-grid"

/*
  Add or remove sketches freely.
  The gallery handles any aspect ratio — just provide src and alt.
*/
const sketches: GalleryItem[] = [
  { src: "/image/sketch/sket1.jpg", alt: "Sketch 1" },
  { src: "/image/skett.jpg", alt: "Sketch 2" },
  { src: "/image/sketch/sket3.jpg", alt: "Sketch 3" },
  { src: "/image/sket4.jpg", alt: "Sketch 4" },
  { src: "/image/sketch/sket5.jpg", alt: "Sketch 5" },
  { src: "/image/sketch/sket6.jpg", alt: "Sketch 6" },
  { src: "/image/sketch/sket7.jpg", alt: "Sketch 7" },
  { src: "/image/sketch/sket8.jpg", alt: "Sketch 8" },
  { src: "/image/sketch/sket9.jpg", alt: "Sketch 9" },
  { src: "/image/sketch/sket10.jpg", alt: "Sketch 10" },
  { src: "/image/sketch/sket11.jpg", alt: "Sketch 11" },
  { src: "/image/sketch/sketot.jpg", alt: "Sketch 12" },
  { src: "/image/sket13.jpg", alt: "Sketch 13" },
  { src: "/image/sket14.jpg", alt: "Sketch 14" },
  { src: "/image/sketch/sket15.jpg", alt: "Sketch 15" },
  { src: "/image/sketch/sket16.jpg", alt: "Sketch 16" },
  { src: "/image/sketch/sket17.jpg", alt: "Sketch 17" },
  { src: "/image/sketch/sket18.jpg", alt: "Sketch 18" },
  { src: "/image/sketch/sket19.jpg", alt: "Sketch 19" },
  { src: "/image/sketch/sket20.jpg", alt: "Sketch 20" },
  { src: "/image/sketch/sket21.jpg", alt: "Sketch 21" },
  { src: "/image/sketch/sket22.jpg", alt: "Sketch 22" },
  { src: "/image/sketch/sket23.jpg", alt: "Sketch 23" },
  { src: "/image/sketch/sket24.jpg", alt: "Sketch 24" },
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
