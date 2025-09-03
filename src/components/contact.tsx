"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"
import { Send, Facebook, Instagram, Linkedin, Youtube, Mail } from "lucide-react"
import Link from "next/link"

const WhatsAppIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 24 24" 
      fill="currentColor"
      stroke="currentColor"
      strokeWidth="0"
      {...props}
    >
      <path
        d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.371-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01s-.521.074-.792.372c-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"
      />
    </svg>
)

const XIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.847h-7.407l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.153h7.594l5.243 7.184L18.901 1.153z" />
  </svg>
)

export function Contact() {
    const { toast } = useToast()

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        toast({
            title: "Message Sent!",
            description: "Thank you for reaching out. I'll get back to you soon.",
        });
        (event.target as HTMLFormElement).reset();
    }

  return (
    <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-card scroll-mt-16">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline text-primary">Contact Me</h2>
            <p className="max-w-[900px] text-foreground/70 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Have a question about a class, a course, or just want to connect? Drop a line below!
            </p>
          </div>
          <div className="flex space-x-4 pt-4 items-center">
            <Link href="https://www.facebook.com/share/17AG2Wzfuq/" target="_blank" rel="noopener noreferrer">
              <Facebook className="h-8 w-8 text-foreground/70 hover:text-primary transition-colors" />
            </Link>
            <Link href="https://www.instagram.com/maleeshshanuka/" target="_blank" rel="noopener noreferrer">
              <Instagram className="h-8 w-8 text-foreground/70 hover:text-primary transition-colors" />
            </Link>
            <Link href="https://www.linkedin.com/in/maleeshshanuka/" target="_blank" rel="noopener noreferrer">
              <Linkedin className="h-8 w-8 text-foreground/70 hover:text-primary transition-colors" />
            </Link>
            <Link href="https://x.com/MaleeshShanuka" target="_blank" rel="noopener noreferrer">
              <XIcon className="h-6 w-6 text-foreground/70 hover:text-primary transition-colors" />
            </Link>
            <Link href="https://youtube.com/@maleeshshanuka" target="_blank" rel="noopener noreferrer">
              <Youtube className="h-9 w-9 text-foreground/70 hover:text-primary transition-colors" />
            </Link>
            <Link href="https://wa.me/94762897867" target="_blank" rel="noopener noreferrer">
              <WhatsAppIcon className="h-7 w-7 text-foreground/70 hover:text-primary transition-colors" />
            </Link>
            <Link href="mailto:maleeshshanuka@gmail.com" target="_blank" rel="noopener noreferrer">
              <Mail className="h-8 w-8 text-foreground/70 hover:text-primary transition-colors" />
            </Link>
          </div>
          <div className="w-full max-w-xl mx-auto pt-8">
            <form onSubmit={handleSubmit} className="grid gap-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2 text-left">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" type="text" placeholder="Your Name" required />
                </div>
                <div className="space-y-2 text-left">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="your@email.com" required />
                </div>
              </div>
              <div className="space-y-2 text-left">
                <Label htmlFor="whatsapp">WhatsApp Number (Optional)</Label>
                <Input id="whatsapp" type="tel" placeholder="+94 77 123 4567" />
              </div>
              <div className="space-y-2 text-left">
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" placeholder="Your message..." rows={5} required />
              </div>
              <div className="flex justify-center">
                <Button type="submit" size="lg">
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
