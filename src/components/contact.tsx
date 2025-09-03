"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"
import { Send, Facebook, Instagram, Linkedin, MessageCircle } from "lucide-react"
import Link from "next/link"

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
              Have a question about a class, a project idea, or just want to connect? Drop a line below!
            </p>
          </div>
          <div className="flex space-x-4 pt-4">
            <Link href="#" target="_blank" rel="noopener noreferrer">
              <Facebook className="h-8 w-8 text-foreground/70 hover:text-primary transition-colors" />
            </Link>
            <Link href="#" target="_blank" rel="noopener noreferrer">
              <Instagram className="h-8 w-8 text-foreground/70 hover:text-primary transition-colors" />
            </Link>
            <Link href="#" target="_blank" rel="noopener noreferrer">
              <Linkedin className="h-8 w-8 text-foreground/70 hover:text-primary transition-colors" />
            </Link>
            <Link href="#" target="_blank" rel="noopener noreferrer">
              <MessageCircle className="h-8 w-8 text-foreground/70 hover:text-primary transition-colors" />
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
