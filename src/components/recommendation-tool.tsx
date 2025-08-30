"use client";

import { useFormState, useFormStatus } from "react-dom";
import { getRecommendedClasses, type RecommendationState } from "@/app/actions";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import { useEffect, useRef } from "react";
import { Loader2, Wand2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} size="lg" className="w-full sm:w-auto">
      {pending ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Wand2 className="mr-2 h-4 w-4" />}
      {pending ? "Analyzing..." : "Get Recommendations"}
    </Button>
  );
}

export function RecommendationTool() {
  const initialState: RecommendationState = { message: "" };
  const [state, formAction] = useFormState(getRecommendedClasses, initialState);
  const formRef = useRef<HTMLFormElement>(null);
  const { toast } = useToast();

  useEffect(() => {
    if (state.message && state.message !== 'Success!') {
      toast({
        title: "Error",
        description: state.message,
        variant: "destructive",
      });
    }
    if (state.message === 'Success!') {
      formRef.current?.reset();
    }
  }, [state, toast]);

  return (
    <section id="recommendations" className="w-full py-12 md:py-24 lg:py-32 scroll-mt-16">
      <div className="container px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline text-primary">Find Your Perfect Class</h2>
            <p className="max-w-[600px] text-foreground/70 md:text-xl/relaxed">
              Not sure where to start? Let our AI-powered tool recommend the perfect class for you. Just tell us a bit about your interests and experience, and we'll do the rest!
            </p>
            <form ref={formRef} action={formAction} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="interests" className="text-lg">Your Interests</Label>
                <Textarea id="interests" name="interests" placeholder="e.g., 'I love expressive dance, learning new instruments, and painting landscapes.'" rows={4} />
                {state.errors?.interests && <p className="text-sm text-destructive">{state.errors.interests[0]}</p>}
              </div>
              <div className="space-y-3">
                <Label className="text-lg">Your Experience Level</Label>
                <RadioGroup name="experienceLevel" className="flex flex-col sm:flex-row gap-4">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="beginner" id="beginner" />
                    <Label htmlFor="beginner">Beginner</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="intermediate" id="intermediate" />
                    <Label htmlFor="intermediate">Intermediate</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="advanced" id="advanced" />
                    <Label htmlFor="advanced">Advanced</Label>
                  </div>
                </RadioGroup>
                {state.errors?.experienceLevel && <p className="text-sm text-destructive">{state.errors.experienceLevel[0]}</p>}
              </div>
              <div className="space-y-2">
                <Label htmlFor="professionalHistory" className="text-lg">Professional History (Optional)</Label>
                <Textarea id="professionalHistory" name="professionalHistory" placeholder="e.g., 'I worked as a graphic designer for 5 years.'" rows={3} />
              </div>
              <SubmitButton />
            </form>
          </div>
          <div className="flex items-center justify-center">
            <Card className="w-full">
              <CardHeader>
                <CardTitle className="font-headline text-2xl flex items-center gap-2">
                  <Wand2 className="text-primary" />
                  Your AI Recommendations
                </CardTitle>
                <CardDescription>
                  Recommendations based on your input will appear here.
                </CardDescription>
              </CardHeader>
              <CardContent className="prose prose-sm md:prose-base max-w-none text-foreground/80 whitespace-pre-wrap">
                {state.recommendation ? (
                  <p>{state.recommendation}</p>
                ) : (
                  <p className="text-muted-foreground">Fill out the form to get started!</p>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
