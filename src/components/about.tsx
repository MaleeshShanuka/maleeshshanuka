import Image from 'next/image';

export function About() {
  return (
    <section id="about" className="w-full py-12 md:py-24 lg:py-32 scroll-mt-16">
      <div className="container px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none font-headline text-primary">
                Maleesh Shanuka
              </h1>
              <h2 className="text-xl md:text-2xl font-headline text-foreground/80">
                Artist, Dancer, Creator
              </h2>
            </div>
            <p className="max-w-[600px] text-foreground/70 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Welcome to my creative space! With a passion for movement and a heart for art, I've dedicated my life to exploring the boundless realms of expression. From the graceful arcs of contemporary dance to the bold strokes of a paintbrush, I believe every medium is a new language to learn. Here, you'll find a collection of my work and the classes I offer to share my passion with you.
            </p>
          </div>
          <div className="flex items-center justify-center">
            <Image
              src="https://picsum.photos/400/400"
              width={400}
              height={400}
              alt="Maleesh Shanuka"
              data-ai-hint="portrait man"
              className="aspect-square overflow-hidden rounded-xl object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
