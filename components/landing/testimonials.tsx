"use client";

import React from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight, Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useInView } from "@/hooks/use-in-view";

const testimonials = [
  {
    quote:
      "PC Wizard was a pleasure to do business with! Very responsive, quick and excellent work!! Thank you for the great service!",
    author: "Michael Stevens",
    title: "Managing Partner, & Associates",
    image:
      "https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    quote:
      "Best place in Duncan for computer repair. Fast and Reasonable. No BS, fixed and on my way. Thank you so much.",
    author: "Ted Robinson",
    title: "Attorney, Rodriguez Family Law",
    image:
      "https://images.pexels.com/photos/5669619/pexels-photo-5669619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    quote:
      "Kory keeps our computer in tip top shape! I would trust anyone else with my business!",
    author: "Sarah Taylor",
    title: "Office Manager, Mitchell & Partners",
    image:
      "https://images.pexels.com/photos/5669602/pexels-photo-5669602.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
];

export function Testimonials() {
  const [current, setCurrent] = React.useState(0);
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  const next = () => setCurrent((current + 1) % testimonials.length);
  const prev = () =>
    setCurrent((current - 1 + testimonials.length) % testimonials.length);

  return (
    <section id="testimonials" ref={ref} className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div
          className={`text-center max-w-2xl mx-auto mb-12 ${
            inView ? "animate-fade-in" : "opacity-0"
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Trusted by Oklahoma's{" "}
            <span className="text-brand-blue">Legal Community</span>
          </h2>
          <p className="text-gray-600 text-lg">
            Hear from law firms who have transformed their technology
            infrastructure with PCWizard's specialized IT services.
          </p>
        </div>

        <div className="relative px-4 md:px-10">
          <div
            className={`grid md:grid-cols-3 gap-6 ${
              inView ? "animate-slide-up" : "opacity-0"
            }`}
            style={{ animationDelay: "0.2s" }}
          >
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className={`border border-gray-200 shadow-sm h-full transition-all duration-500 ${
                  index === current
                    ? "md:scale-105 shadow-md"
                    : "md:scale-95 opacity-80"
                }`}
              >
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="mb-4 text-yellow-400 flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <div className="mb-6 relative">
                    <Quote className="h-8 w-8 text-brand-blue/20 absolute -top-2 -left-2" />
                    <p className="text-gray-700 relative z-10 leading-relaxed">
                      "{testimonial.quote}"
                    </p>
                  </div>
                  <div className="mt-auto flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full overflow-hidden relative">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.author}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">
                        {testimonial.author}
                      </p>
                      <p className="text-sm text-gray-600">
                        {testimonial.title}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="flex justify-center mt-8 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === current ? "bg-brand-blue scale-125" : "bg-gray-300"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          <div className="hidden md:flex justify-between absolute top-1/2 left-0 right-0 -translate-y-1/2 pointer-events-none">
            <Button
              variant="outline"
              size="icon"
              onClick={prev}
              className="rounded-full bg-white border border-gray-200 shadow-sm pointer-events-auto"
            >
              <ArrowLeft className="h-4 w-4" />
              <span className="sr-only">Previous testimonial</span>
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={next}
              className="rounded-full bg-white border border-gray-200 shadow-sm pointer-events-auto"
            >
              <ArrowRight className="h-4 w-4" />
              <span className="sr-only">Next testimonial</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
