"use client"

import Image from "next/image"
import { useState } from "react"

export interface GalleryItem {
  src: string
  alt: string
}

interface GalleryGridProps {
  items: GalleryItem[]
}

export function GalleryGrid({ items }: GalleryGridProps) {
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null)

  return (
    <>
      {/* 
        CSS columns create a masonry-like layout that handles 
        variable aspect ratios naturally. Columns auto-adjust 
        with responsive breakpoints. 
      */}
      <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
        {items.map((item, index) => (
          <button
            key={item.src}
            type="button"
            onClick={() => setLightboxSrc(item.src)}
            className="mb-4 block w-full overflow-hidden rounded-sm break-inside-avoid focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            <Image
              src={item.src || "/placeholder.svg"}
              alt={item.alt}
              width={800}
              height={600}
              className="w-full h-auto object-cover transition-transform duration-500 hover:scale-[1.02]"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              priority={index === 0}
            />
          </button>
        ))}
      </div>

      {/* Lightbox overlay */}
      {lightboxSrc && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-4"
          onClick={() => setLightboxSrc(null)}
          onKeyDown={(e) => {
            if (e.key === "Escape") setLightboxSrc(null)
          }}
          role="dialog"
          aria-modal="true"
          aria-label="Image preview"
        >
          <button
            type="button"
            onClick={() => setLightboxSrc(null)}
            className="absolute top-6 right-6 text-white/70 transition-colors hover:text-white text-2xl leading-none"
            aria-label="Close preview"
          >
            &times;
          </button>
          <Image
            src={lightboxSrc || "/placeholder.svg"}
            alt="Full size preview"
            width={1600}
            height={1200}
            className="max-h-[85vh] max-w-[90vw] rounded object-contain"
            sizes="90vw"
          />
        </div>
      )}
    </>
  )
}
