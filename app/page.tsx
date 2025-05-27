"use client";

import { motion } from "framer-motion";
import { Header } from "@/components/landing/header";
import { Hero } from "@/components/landing/hero";
import { Services } from "@/components/landing/services";
import { Benefits } from "@/components/landing/benefits";
import { Testimonials } from "@/components/landing/testimonials";
import { ContactCTA } from "@/components/landing/contact-cta";
import { Footer } from "@/components/landing/footer";

export default function Home() {
  return (
    <motion.main
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen"
    >
      <Header />
      <Hero />
      <Services />
      <Benefits />
      <Testimonials />
      <ContactCTA />
      <Footer />
    </motion.main>
  );
}
