import Image from 'next/image';

export function About() {
  return (
    <section id="about" className="w-full pt-6 md:pt-12 lg:pt-16 pb-6 md:pb-12 lg:pb-16 scroll-mt-16">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <div className="grid gap-10 lg:gap-16 items-center md:grid-cols-2">
          <div className="space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none font-headline text-primary">
                Maleesh Shanuka
              </h1>
              <h2 className="text-lg md:text-xl font-headline text-foreground/80 leading-tight">
                BSc. (Hons) in Information Technology <br /> University of Moratuwa
              </h2>
            </div>
            <div className="text-5xl md:text-6xl lg:text-7xl font-extrabold py-4 tracking-tight space-y-4">
              <div className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">"Learn</div>
              <div className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent pl-8">Code</div>
              <div className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent pl-10">Create"</div>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <Image
              src="/teacher.png"
              width={500}
              height={500}
              alt="ICT Educator"
              data-ai-hint="teacher classroom"
              className="rounded-xl object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
