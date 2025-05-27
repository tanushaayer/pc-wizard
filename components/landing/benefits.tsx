"use client";

import React from "react";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { useInView } from "@/hooks/use-in-view";

const benefits = [
  {
    title: "Reduce Downtime",
    description:
      "Our proactive monitoring and maintenance prevents issues before they impact your firm's operations.",
  },
  {
    title: "Enhance Security",
    description:
      "Protect client data with industry-leading security protocols and compliance measures.",
  },
  {
    title: "Fixed Monthly Cost",
    description:
      "Predictable IT expenses with no surprise bills or hidden fees.",
  },
  {
    title: "Focus on Law, Not IT",
    description:
      "Eliminate technology distractions so your team can concentrate on serving clients.",
  },
  {
    title: "Scale With Your Practice",
    description:
      "Flexible solutions that grow with your firm, from solo practitioners to multi-office operations.",
  },
  {
    title: "Stay Compliant",
    description:
      "Meet all regulatory requirements with our compliance-focused approach to IT management.",
  },
];

export function Benefits() {
  const { ref: sectionRef, inView: sectionInView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const { ref: imageRef, inView: imageInView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section
      id="benefits"
      ref={sectionRef}
      className="py-16 md:py-24 bg-brand-grey/30"
    >
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 lg:gap-20 gap-12 items-center">
          <div
            className={`space-y-8 transition-all duration-700 ease-out lg:pl-8 \${sectionInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
          >
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Why Oklahoma Law Firms{" "}
                <span className="text-brand-blue">Choose PCWizard</span>
              </h2>
              <p className="text-gray-600 text-lg">
                We understand the unique technology challenges facing legal
                practices and deliver tailored solutions that provide real
                benefits.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-x-6 gap-y-6">
              {benefits.map((benefit, index) => (
                <div
                  key={benefit.title}
                  className="flex gap-3 opacity-0 translate-y-6"
                  style={{
                    transition:
                      "opacity 0.6s ease-out, transform 0.6s ease-out",
                    transitionDelay: sectionInView ? `${index * 0.3}s` : "0s",
                    opacity: sectionInView ? 1 : 0,
                    transform: sectionInView
                      ? "translateY(0)"
                      : "translateY(24px)",
                  }}
                >
                  <CheckCircle2 className="h-6 w-6 text-brand-blue flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      {benefit.title}
                    </h3>
                    <p className="text-sm text-gray-600 mt-1">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div
            ref={imageRef as React.Ref<HTMLDivElement>}
            className={`relative rounded-2xl overflow-hidden shadow-lg transition-all duration-700 ease-out delay-300 \${imageInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}
          >
            <div className="aspect-w-4 aspect-h-3 relative h-[500px]">
              <Image
                src="https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg"
                alt="Law firm professionals with reliable technology"
                fill
                className="object-cover rounded-2xl"
              />
              <div className="absolute inset-0 bg-brand-blue/10 rounded-2xl"></div>
            </div>

            <div className="absolute bottom-6 right-6 bg-white p-5 rounded-xl shadow-xl max-w-[260px]">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 bg-brand-blue rounded-full flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <p className="font-semibold text-gray-900">99.9% Uptime</p>
              </div>
              <p className="text-sm text-gray-600">
                Our clients experience virtually zero downtime, keeping your
                practice running smoothly.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
