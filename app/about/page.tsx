import Image from "next/image"

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
      <h1 className="font-serif text-3xl tracking-tight text-foreground md:text-4xl mb-12">
        Zheyue Zhang
      </h1>

      <div className="flex flex-col-reverse gap-10 md:flex-row md:gap-16">
        {/* Portrait — replace src with your own photo */}
        <div className="w-full shrink-0 overflow-hidden rounded-sm md:w-72">
          <Image
            src="/image/zoey.jpg"
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
            Hello, I am an illustrator and designer who is slightly obsessed with
            historical settings and the tension they create. I explore visual storytelling through
            illustration, picture books, and comics—choosing the form that best fits the heartbeat of the narrative.
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
           I treat my practice as a laboratory for curiosity. Using watercolour and mixed media, 
            I experiment with colour and space to craft environments that feel both epic and intimate.
            Whether I’m sketching from observation or building a fantasy world from scratch,
            I’m always chasing that specific mood—a blend of warmth, texture, and a hint of narrative unease.
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Feel free to reach out for collaborations, commissions, or just to
            say hello.
          </p>

          {/* Contact info */}
          <div className="mt-8 flex flex-col gap-2 text-sm text-muted-foreground">
            <a
              href="mailto:zheyue.artist@gmail.com"
              className="transition-colors hover:text-foreground"
            >
              zheyue.artist@gmail.com
            </a>
            <a
              href="https://www.instagram.com/zoey_z_zhang/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-foreground"
            >
              Instagram: @zoey_z_zhang
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
