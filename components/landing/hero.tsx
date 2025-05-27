"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useInView } from "@/hooks/use-in-view";

export function Hero() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex flex-col-reverse md:flex-row items-center gap-10 pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-radial z-0" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div
            className={`space-y-8 text-center md:text-left ${
              inView ? "animate-fade-up" : "opacity-0"
            }`}
          >
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="block text-gradient">
                  Specialized IT Services
                </span>
                <span className="block">For Oklahoma Law Firms</span>
              </h1>
              <p className="text-xl text-gray-700 max-w-xl mx-auto md:mx-0">
                Secure, reliable, and compliant technology solutions designed
                specifically for legal practices. Eliminate downtime and boost
                productivity with reliable managed IT support tailored to keep
                your business running smoothly.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
              <Button
                className="magnetic-button bg-brand-blue hover:bg-brand-darkBlue text-white px-8 py-6 text-lg"
                onClick={() =>
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Experience Stress-Free IT Today
              </Button>
              <Button
                variant="outline"
                className="magnetic-button border-brand-blue text-brand-blue hover:bg-brand-blue/10 px-8 py-6 text-lg"
                onClick={() =>
                  document
                    .getElementById("services")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Learn More
              </Button>
            </div>

            <div className="pt-6 flex flex-col sm:flex-row items-center justify-center md:justify-start gap-6">
              <div className="flex -space-x-4">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-12 h-12 rounded-full border-2 border-white bg-gray-200 shadow-lg overflow-hidden relative"
                  >
                    <Image
                      src={`https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg`}
                      alt="Client"
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
              <div className="glass-effect px-6 py-3 rounded-full">
                <p className="text-sm font-medium">
                  Trusted by{" "}
                  <span className="text-brand-blue font-bold">
                    25+ law firms
                  </span>{" "}
                  in Oklahoma
                </p>
              </div>
            </div>
          </div>

          {/* Image section with floating details */}
          <div
            className={`relative hidden md:block ${
              inView ? "animate-float" : "opacity-0"
            }`}
          >
            <div className="relative h-[600px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.pexels.com/photos/8867443/pexels-photo-8867443.jpeg"
                alt="Legal professional using secure technology"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20" />
            </div>

            <div className="absolute -bottom-6 -left-6 animate-float-delayed">
              <div className="bg-white p-6 rounded-xl shadow-xl">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-brand-blue rounded-full flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-7 w-7 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-lg font-semibold">
                      HIPAA & CJIS Compliant
                    </p>
                    <p className="text-sm text-gray-600">
                      Enterprise-grade security
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="absolute -top-6 -right-6 animate-float"
              style={{ animationDelay: "1s" }}
            >
              <div className="bg-white p-4 rounded-xl shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
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
                  <p className="font-semibold">99.9% Uptime</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
