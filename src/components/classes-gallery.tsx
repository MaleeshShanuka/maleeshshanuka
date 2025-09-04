import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Clock, Calendar, MapPin, Book } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type ClassDetail = {
  iconName: "Clock" | "Calendar" | "MapPin" | "Book";
  text: string;
};

const icons: { [key: string]: LucideIcon } = {
  Clock,
  Calendar,
  MapPin,
  Book,
};

const classes = [
  {
    title: "A/L 2027 Sinhala Medium Onikmin Kuliyapitiya",
    details: [
      { iconName: "Book" as const, text: "Type : Theory" },
      { iconName: "Clock" as const, text: "Time : 08.30 am - 10.30 am" },
      { iconName: "Calendar" as const, text: "Day : Sunday" },
      { iconName: "MapPin" as const, text: "Location : Kuliyapitiya" },
    ],
    imageSrc: "https://picsum.photos/600/400",
    aiHint: "information communication technology",
  },
  {
    title: "A/L 2027 English Medium Onikmin Kuliyapitiya",
    details: [
      { iconName: "Book" as const, text: "Type : Theory" },
      { iconName: "Clock" as const, text: "Time : 12.30 pm - 02.30 pm" },
      { iconName: "Calendar" as const, text: "Day : Sunday" },
      { iconName: "MapPin" as const, text: "Location : Kuliyapitiya" },
    ],
    imageSrc: "https://picsum.photos/600/401",
    aiHint: "algorithm flowchart",
  },
  {
    title: "A/L 2026 Sinhala Medium Onikmin Kuliyapitiya",
    details: [
        { iconName: "Book" as const, text: "Type : Theory" },
        { iconName: "Clock" as const, text: "Time : 08.00 am - 10.30 am" },
        { iconName: "Calendar" as const, text: "Day : Sunday" },
        { iconName: "MapPin" as const, text: "Location : Kuliyapitiya" },
    ],
    imageSrc: "https://picsum.photos/600/402",
    aiHint: "cyber security",
  },
  {
    title: "A/L 2026 Sinhala Medium A Sakul Narammala",
    details: [
      { iconName: "Book" as const, text: "Type : Theory" },
      { iconName: "Clock" as const, text: "Time : 05.30 pm - 08.30 pm" },
      { iconName: "Calendar" as const, text: "Day : Sunday" },
      { iconName: "MapPin" as const, text: "Location : Narammala" },
    ],
    imageSrc: "https://picsum.photos/600/403",
    aiHint: "education technology",
  },
  {
    title: "A/L 2027 Sinhala Medium A Sakul Narammala",
    details: [
      { iconName: "Book" as const, text: "Type : Theory" },
      { iconName: "Clock" as const, text: "Time : 03.30 pm - 05.30 pm" },
      { iconName: "Calendar" as const, text: "Day : Sunday" },
      { iconName: "MapPin" as const, text: "Location : Narammala" },
    ],
    imageSrc: "https://picsum.photos/600/404",
    aiHint: "programming code",
  },
  {
    title: "A/L 2025 Sinhala Medium Onikmin Kuliyapitiya",
    details: [
      { iconName: "Book" as const, text: "Type : Revision" },
      { iconName: "Clock" as const, text: "Time : 08.30 am - 02.30 pm" },
      { iconName: "Calendar" as const, text: "Day : Monday" },
      { iconName: "MapPin" as const, text: "Location : Kuliyapitiya" },
    ],
    imageSrc: "https://picsum.photos/600/405",
    aiHint: "revision class",
  },
];

export function ClassesGallery() {
  return (
    <section id="classes" className="w-full pt-6 md:pt-8 lg:pt-12 pb-12 bg-card scroll-mt-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline text-primary" dangerouslySetInnerHTML={{ __html: 'Our&nbsp;Classes' }} />
            <p className="max-w-[900px] text-foreground/70 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Join with our A/L classes to gather a deep knowledge and advanced skills in Information and Communication Technology
            </p>
          </div>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-12">
          {classes.map((c, index) => (
            <Card key={index} className="overflow-hidden transition-all hover:shadow-lg hover:-translate-y-1">
              <CardHeader className="p-0">
                <Image
                  src={c.imageSrc}
                  width={600}
                  height={400}
                  alt={c.title}
                  data-ai-hint={c.aiHint}
                  className="aspect-video w-full object-cover"
                />
              </CardHeader>
              <CardContent className="p-6">
                <CardTitle className="font-headline text-xl mb-2">{c.title}</CardTitle>
                <CardDescription>
                  <div className="space-y-2 text-base">
                    {c.details.map((detail, detailIndex) => {
                      const Icon = icons[detail.iconName];
                      return (
                        <div key={detailIndex} className="flex items-center gap-2">
                          <Icon className="h-4 w-4 text-muted-foreground" />
                          <span>{detail.text}</span>
                        </div>
                      );
                    })}
                  </div>
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
