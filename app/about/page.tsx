import Image from "next/image"

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
      <h1 className="font-serif text-3xl tracking-tight text-foreground md:text-4xl mb-12">
        About
      </h1>

      <div className="flex flex-col gap-10 md:flex-row md:gap-16">
        {/* Portrait — replace src with your own photo */}
        <div className="w-full shrink-0 overflow-hidden rounded-sm md:w-72">
          <Image
            src="/images/portrait.jpg"
            alt="Artist portrait"
            width={600}
            height={800}
            className="w-full h-auto object-cover"
            sizes="(max-width: 768px) 100vw, 288px"
            priority
          />
        </div>

        {/* Bio text */}
        <div className="max-w-lg">
          <p className="text-base leading-relaxed text-muted-foreground">
            Hello, I am an illustrator and picture book artist. My work
            explores the intersection of storytelling and visual art, with a
            focus on warmth, texture, and narrative detail.
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            I have worked with publishers and studios on a range of projects
            including children&apos;s picture books, editorial illustrations,
            and personal art. I am always looking for new stories to tell.
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Feel free to reach out for collaborations, commissions, or just to
            say hello.
          </p>

          {/* Contact info */}
          <div className="mt-8 flex flex-col gap-2 text-sm text-muted-foreground">
            <a
              href="mailto:hello@example.com"
              className="transition-colors hover:text-foreground"
            >
              hello@example.com
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-foreground"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
