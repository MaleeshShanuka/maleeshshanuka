import Image from 'next/image';

export function About() {
  return (
    <section id="about" className="w-full py-12 md:py-24 lg:py-32 scroll-mt-16">
      <div className="container px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none font-headline text-primary">
                A/L ICT Educator
              </h1>
              <h2 className="text-xl md:text-2xl font-headline text-foreground/80">
                Teacher, Coder, Innovator
              </h2>
            </div>
            <p className="max-w-[600px] text-foreground/70 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed text-justify">
              Welcome to my digital classroom! With a passion for technology and a commitment to education, I've dedicated my career to demystifying Information and Communication Technology for Advanced Level students. From the intricacies of web development to the fundamentals of algorithm design, I believe in empowering the next generation of tech leaders. Here, you'll find the courses I offer to help students excel in their ICT journey.
            </p>
          </div>
          <div className="flex items-center justify-center">
            <Image
              src="https://picsum.photos/400/400"
              width={400}
              height={400}
              alt="ICT Educator"
              data-ai-hint="teacher classroom"
              className="aspect-square overflow-hidden rounded-xl object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
