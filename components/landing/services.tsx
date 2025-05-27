"use client";

import React from "react";
import {
  Shield,
  Cloud,
  HardDrive,
  Users,
  Clock,
  Headset,
  ChevronRight,
  CheckCircle2,
  Network,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useInView } from "@/hooks/use-in-view";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  features: string[];
  delay: number;
}

function ServiceCard({
  title,
  description,
  icon,
  features,
  delay,
}: ServiceCardProps) {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <Card
      ref={ref}
      className={`relative group hover-scale card-hover border-0 bg-white ${
        inView ? "animate-fade-up" : "opacity-0"
      }`}
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="absolute inset-0 bg-gradient-radial opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <CardContent className="relative z-10 p-8">
        <div className="flex flex-col h-full space-y-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-brand-blue/10 flex items-center justify-center text-brand-blue group-hover:bg-brand-blue group-hover:text-white transition-colors duration-300">
              {icon}
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-brand-blue transition-colors">
                {title}
              </h3>
              <p className="text-gray-600 group-hover:text-gray-700 transition-colors">
                {description}
              </p>
            </div>
          </div>

          <div className="space-y-3 pt-4">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-center gap-2 text-sm text-gray-600"
              >
                <CheckCircle2 className="h-4 w-4 text-brand-blue" />
                <span>{feature}</span>
              </div>
            ))}
          </div>

          <div className="pt-2 mt-auto"></div>
        </div>
      </CardContent>
    </Card>
  );
}

export function Services() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  const services = [
    {
      title: "System Maintenance",
      description:
        "Reduce downtime with continuous system checks and preventive maintenance to catch issues early.",
      icon: <Headset className="h-6 w-6" />,
      features: [
        "Continuous system check",
        "24/7 threat monitoring",
        "Reduce downtime",
        "Instant response",
      ],
    },
    {
      title: "Unlimited Support",
      description:
        "Get fast, reliable expert tech support whenever you need it, with no hidden fees for peace of mind.",
      icon: <Clock className="h-6 w-6" />,
      features: [
        "Proactive monitoring",
        "Regular maintenance",
        "Software updates",
        "Hardware support",
      ],
    },
    {
      title: "Cybersecurity",
      description:
        "Protect your business with robust security measures, including real-time monitoring and regular threat scans.",
      icon: <Shield className="h-6 w-6" />,
      features: [
        "Real-time monitoring",
        "Regular threat scans",
        "Security updates and audits",
        "HIPPA & CJIS compliance",
      ],
    },
    {
      title: "Network Optimization",
      description:
        "Enhance connectivity and boost performance for efficient, uninterrupted operations.",
      icon: <Network className="h-6 w-6" />,
      features: [
        "Performance Boost",
        "Uninterrupted operations",
        "Enhance Connectivity",
        "Issue tracking",
      ],
    },
    {
      title: "Risk Management",
      description:
        "We proactively tackle tech vulnerabilities to ensure your devices stay secure and resilient.",
      icon: <Headset className="h-6 w-6" />,
      features: [
        "Quick recovery",
        "Regular testing",
        "Real-time backups",
        "Secure",
      ],
    },
    {
      title: "Strategic IT",
      description:
        "Consult with our experts to align your technology with your business goals for growth.",
      icon: <Users className="h-6 w-6" />,
      features: [
        "Ongoing support",
        "Growth strategy",
        "Best practices",
        "Business growth",
      ],
    },
  ];

  return (
    <section id="services" className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial opacity-50" />

      <div className="container relative z-10">
        <div
          ref={ref}
          className={`text-center max-w-2xl mx-auto mb-16 ${
            inView ? "animate-fade-up" : "opacity-0"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Specialized IT Services for
            <span className="text-gradient block  leading-tight pb-1">
              Legal Practices
            </span>
          </h2>
          <p className="text-xl text-gray-600">
            Comprehensive technology solutions designed specifically for law
            firms in Oklahoma, addressing your unique challenges and
            requirements.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              {...service}
              delay={0.1 + index * 0.1}
            />
          ))}
        </div>

        {/* <div className="mt-16 text-center">
          <Button className="magnetic-button bg-brand-blue hover:bg-brand-darkBlue text-white px-8 py-6 text-lg">
            View All Services
          </Button> */}
        {/* </div> */}
      </div>
    </section>
  );
}
