import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const classes = [
  {
    title: "A/L 2027 Sinhala Medium Onikmin Kuliyapitiya",
    description: "Time : 08.30 am - 10.30 am<br/>Day : Sunday<br/>Location: Kuliyapitiya",
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
    <section id="classes" className="w-full pt-6 md:pt-8 lg:pt-12 pb-0 bg-card scroll-mt-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline text-primary" dangerouslySetInnerHTML={{ __html: 'Our&nbsp;Classes' }} />
            <p className="max-w-[900px] text-foreground/70 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Join with our A/L classes to gather a deep knowledge and advanced skills in Information and Communication Technology
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
                <CardDescription className="text-base" dangerouslySetInnerHTML={{ __html: c.description }} />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
