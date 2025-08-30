import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const classes = [
  {
    title: "Contemporary Dance Fundamentals",
    description: "Discover the freedom of expression through contemporary dance. This class focuses on core techniques, improvisation, and connecting movement with emotion. Suitable for all levels.",
    image: "https://picsum.photos/600/400",
    aiHint: "dancing couple",
  },
  {
    title: "Abstract Painting Workshop",
    description: "Unleash your inner artist in this hands-on workshop. Learn to work with acrylics, explore color theory, and develop your unique abstract style. No prior experience needed.",
    image: "https://picsum.photos/600/401",
    aiHint: "painting easel",
  },
  {
    title: "Acoustic Guitar for Beginners",
    description: "Strum your first chords and learn to play your favorite songs. This beginner-friendly course covers basic guitar techniques, music theory, and a repertoire of popular tunes.",
    image: "https://picsum.photos/600/402",
    aiHint: "playing guitar",
  },
];

export function ClassesGallery() {
  return (
    <section id="classes" className="w-full py-12 md:py-24 lg:py-32 bg-card scroll-mt-16">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline text-primary">Our Classes</h2>
            <p className="max-w-[900px] text-foreground/70 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Explore our range of classes designed to ignite your creativity and passion. Whether you're a beginner or an experienced artist, there's something here for you.
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
