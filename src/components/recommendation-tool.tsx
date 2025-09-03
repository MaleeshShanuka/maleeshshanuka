"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
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
  const [state, formAction] = useActionState(getRecommendedClasses, initialState);
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
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <div className="flex flex-col items-center justify-center gap-12 lg:gap-20">
          <div className="space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline text-primary">Find Your Perfect Course</h2>
            <p className="max-w-[600px] text-foreground/70 md:text-xl/relaxed">
              Not sure which course is right for you? Our AI-powered tool can help. Tell us your interests and background, and we'll suggest the best path for your ICT education.
            </p>
          </div>
          <div className="w-full grid gap-12 lg:grid-cols-2 lg:gap-20">
            <form ref={formRef} action={formAction} className="space-y-6">
              <div className="space-y-2 text-left">
                <Label htmlFor="interests" className="text-lg">Your Interests</Label>
                <Textarea id="interests" name="interests" placeholder="e.g., 'I enjoy web design, solving logic puzzles, and want to learn about cybersecurity.'" rows={4} />
                {state.errors?.interests && <p className="text-sm text-destructive">{state.errors.interests[0]}</p>}
              </div>
              <div className="space-y-3 text-left">
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
              <div className="space-y-2 text-left">
                <Label htmlFor="professionalHistory" className="text-lg">Academic/Professional History (Optional)</Label>
                <Textarea id="professionalHistory" name="professionalHistory" placeholder="e.g., 'Completed O/L with an interest in science subjects.'" rows={3} />
              </div>
              <div className="flex justify-center">
                <SubmitButton />
              </div>
            </form>
            <div className="flex items-center justify-center">
              <Card className="w-full">
                <CardContent className="prose prose-sm md:prose-base max-w-none text-foreground/80 whitespace-pre-wrap pt-6">
                  {state.recommendation ? (
                    <p>{state.recommendation}</p>
                  ) : (
                    <p className="text-muted-foreground">Your AI recommendations based on your input will appear here. Fill out the form to get started!</p>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
