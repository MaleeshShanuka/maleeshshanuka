import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const classes = [
  {
    title: "Advanced Web Development",
    description: "Master modern web technologies including React, Next.js, and serverless functions. This course covers everything from front-end frameworks to back-end architecture.",
    image: "https://picsum.photos/600/400",
    aiHint: "web development",
  },
  {
    title: "Data Structures & Algorithms",
    description: "Deep dive into the fundamental concepts of data structures and algorithms. Essential for competitive programming and technical interviews. Python and Java examples.",
    image: "https://picsum.photos/600/401",
    aiHint: "algorithm flowchart",
  },
  {
    title: "Cybersecurity Essentials",
    description: "Learn the principles of cybersecurity, including network security, cryptography, and ethical hacking. Protect systems from cyber threats and attacks.",
    image: "https://picsum.photos/600/402",
    aiHint: "cyber security",
  },
];

export function ClassesGallery() {
  return (
    <section id="classes" className="w-full pt-6 md:pt-12 lg:pt-16 pb-6 bg-card scroll-mt-16">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline text-primary">Our Courses</h2>
            <p className="max-w-[900px] text-foreground/70 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Explore our range of A/L ICT courses designed to build a strong foundation and advanced skills in computer science.
            </p>
          </div>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12">
          {classes.map((c, index) => (
            <Card key={index} className="overflow-hidden transition-all hover:shadow-lg hover:-translate-y-1">
              <CardHeader className="p-0">
                <Image
                  src={c.image}
                  width={600}
                  height={400}
                  alt={c.title}
                  data-ai-hint={c.aiHint}
                  className="aspect-video w-full object-cover"
                />
              </CardHeader>
              <CardContent className="p-6">
                <CardTitle className="font-headline text-xl mb-2">{c.title}</CardTitle>
                <CardDescription className="text-base">{c.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
