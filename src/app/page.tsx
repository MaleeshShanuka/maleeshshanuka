import { About } from '@/components/about';
import { ClassesGallery } from '@/components/classes-gallery';
import { Contact } from '@/components/contact';
import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import { RecommendationTool } from '@/components/recommendation-tool';

export default function Home() {
  return (
    <div className="flex flex-col min-h-dvh bg-background text-foreground">
      <Header />
      <main className="flex-1">
        <About />
        <ClassesGallery />
        <RecommendationTool />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
