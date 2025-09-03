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
            <p className="text-foreground/70 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed text-justify">
              Welcome to my digital classroom! With a passion for technology and a commitment to education, I've dedicated my career to demystifying Information and Communication Technology for Advanced Level students. From the intricacies of web development to the fundamentals of algorithm design, I believe in empowering the next generation of tech leaders. Here, you'll find the courses I offer to help students excel in their ICT journey.
            </p>
          </div>
          <div className="flex items-center justify-center">
            <Image
              src="https://picsum.photos/500/500"
              width={500}
              height={500}
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
