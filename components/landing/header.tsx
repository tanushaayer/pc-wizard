"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

export function Header() {
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        isScrolled ? "bg-white shadow-md py-3" : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between md:justify-center relative">
        {/* Centered Logo */}
        <Link href="/" className="absolute left-4 flex items-center gap-3">
          <div className="w-14 h-14 relative">
            <Image
              src="/pcwizard-logo.png"
              alt="PC Wizard"
              fill
              className="object-contain"
            />
          </div>
          <span className="text-2xl font-semibold text-brand-blue">
            PC Wizard
          </span>
        </Link>

        {/* Main nav */}
        <nav className="hidden md:flex items-center gap-10">
          {[
            { name: "Services", href: "#services" },
            { name: "Benefits", href: "#benefits" },
            { name: "Testimonials", href: "#testimonials" },
            { name: "Contact", href: "#contact" },
          ].map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-brand-blue",
                isScrolled ? "text-gray-700" : "text-gray-800"
              )}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block absolute right-4">
          <Button
            className="bg-brand-blue hover:bg-brand-darkBlue text-white"
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Free Consultation
          </Button>
        </div>

        {/* Mobile menu */}
        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <div className="flex flex-col gap-6 mt-6">
              {[
                { name: "Services", href: "#services" },
                { name: "Benefits", href: "#benefits" },
                { name: "Testimonials", href: "#testimonials" },
                { name: "Contact", href: "#contact" },
              ].map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-lg font-medium transition-colors hover:text-brand-blue"
                >
                  {item.name}
                </Link>
              ))}
              <Button className="bg-brand-blue hover:bg-brand-darkBlue text-white mt-4">
                Free Consultation
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
