import { GalleryGrid } from "@/components/gallery-grid"
import type { GalleryItem } from "@/components/gallery-grid"

/*
  Add or remove sketches freely.
  The gallery handles any aspect ratio — just provide src and alt.
*/
const sketches: GalleryItem[] = Array.from({ length: 24 }, (_, i) => ({
  src: `/image/sketch/sket${i + 1}.jpg`,
  alt: `Sketch ${i + 1}`
}));

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
