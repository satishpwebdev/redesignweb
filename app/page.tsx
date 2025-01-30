"use client";

import { ArrowRight, Leaf, Shield, Sprout, Target } from "lucide-react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";
import { AnimatePresence } from 'framer-motion';
 import SustainComp from '../components/SustainComp'

const HERO_SLIDES = [
  {
    image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=2070",
    title: "Leading Agricultural Solutions for Tomorrow's Harvest",
    description:
      "Providing innovative crop protection solutions to enhance agricultural productivity and sustainability"
  },
  {
    image: "https://images.unsplash.com/photo-1472141521881-95d0e87e2e39?q=80&w=2072",
    title: "Sustainable Farming Practices",
    description: "Empowering farmers with eco-friendly solutions for better yields"
  },
  {
    image: "https://images.unsplash.com/photo-1625244695851-1fc873f942bc?q=80&w=2070",
    title: "Advanced Crop Protection",
    description: "State-of-the-art agricultural technologies for optimal crop health"
  }
];

export default function Home() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollTo = useCallback((index: number) => emblaApi && emblaApi.scrollTo(index), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);

    // Auto-play
    const intervalId = setInterval(() => {
      if (emblaApi.canScrollNext()) {
        emblaApi.scrollNext();
      } else {
        emblaApi.scrollTo(0);
      }
    }, 5000);

    return () => {
      emblaApi.off("select", onSelect);
      clearInterval(intervalId);
    };
  }, [emblaApi, onSelect]);

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[90vh]">
        <div className="overflow-hidden h-full" ref={emblaRef}>
          <div className="flex h-full">
            {HERO_SLIDES.map((slide, index) => (
              <div key={index} className="relative flex-[0_0_100%] h-full">
                <Image
                  src={slide.image}
                  alt="Agricultural field"
                  fill
                  priority
                  sizes="100vw"
                  className="object-cover brightness-50"
                />
                <div className="absolute inset-0 flex items-center">
                  <div className="container mx-auto px-4">
                    <div className="max-w-3xl text-white">
                      <h1 className="text-5xl md:text-6xl font-bold mb-6 transition-all duration-500 transform translate-y-0 opacity-100">
                        {slide.title}
                      </h1>
                      <p className="text-xl mb-8 transition-all duration-500 delay-200 transform translate-y-0 opacity-100">
                        {slide.description}
                      </p>
                      <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full flex items-center gap-2 transition-all duration-300">
                        Explore Our Products <ArrowRight className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Slider Navigation Dots */}
        <div className="absolute bottom-8 left-0 right-0 z-10">
          <div className="container mx-auto px-4">
            <div className="flex justify-start gap-2">
              {HERO_SLIDES.map((_, index) => (
                <button
                  key={index}
                  onClick={() => scrollTo(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === selectedIndex ? "bg-white scale-100" : "bg-white/50 scale-75 hover:scale-90"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

     

      {/* Products Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Product Range</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive solutions for crop protection and enhancement
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Herbicides",
                image: "https://images.unsplash.com/photo-1625244724120-1fd1d34d00f6?q=80&w=1170",
                description: "Effective weed control solutions"
              },
              {
                title: "Fungicides",
                image: "https://images.unsplash.com/photo-1628352081506-83c43123ed6d?q=80&w=1170",
                description: "Protection against fungal diseases"
              },
              {
                title: "Insecticides",
                image: "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?q=80&w=1170",
                description: "Advanced pest control products"
              }
            ].map((product, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg">
                <div className="relative h-48">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{product.title}</h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <button className="text-green-600 font-semibold flex items-center gap-2">
                    Learn More <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <AnimatePresence mode='wait'>
        <SustainComp />
      </AnimatePresence>

       {/* Features Section */}
       <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Choose Willowood</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We deliver comprehensive agricultural solutions backed by research and innovation
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-gray-50 rounded-xl text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Leaf className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Sustainable Solutions</h3>
              <p className="text-gray-600">
                Environmentally conscious products that protect both crops and ecosystems
              </p>
            </div>
            <div className="p-6 bg-gray-50 rounded-xl text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Quality Assurance</h3>
              <p className="text-gray-600">
                Rigorous testing and quality control for reliable crop protection
              </p>
            </div>
            <div className="p-6 bg-gray-50 rounded-xl text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Expert Support</h3>
              <p className="text-gray-600">Dedicated technical support and agricultural expertise</p>
            </div>
          </div>
        </div>
      </section>

      {/* Sustainability Section */}
      {/* <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Committed to Sustainability</h2>
              <p className="text-gray-600 mb-8">
                We believe in developing solutions that not only enhance crop yields but also protect our
                environment for future generations. Our commitment to sustainability drives every aspect of
                our business.
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <Sprout className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h4 className="font-semibold">Eco-Friendly Solutions</h4>
                  <p className="text-gray-600">Minimizing environmental impact</p>
                </div>
              </div>
            </div>
            <div className="relative h-[400px]">
              <Image
                src="https://images.unsplash.com/photo-1589923188900-85dae523342b?q=80&w=1170"
                alt="Sustainable farming"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover rounded-xl"
              />
            </div>
          </div>
        </div>
      </section> */}
     

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Willowood</h3>
              <p className="text-gray-400">
                Leading provider of agricultural solutions for sustainable farming
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Products</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Herbicides</li>
                <li>Fungicides</li>
                <li>Insecticides</li>
                <li>Plant Growth Regulators</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li>About Us</li>
                <li>Sustainability</li>
                <li>Careers</li>
                <li>Contact</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact Us</h4>
              <ul className="space-y-2 text-gray-400">
                <li>info@willowood.com</li>
                <li>+1 (555) 123-4567</li>
                <li>123 Agriculture Way</li>
                <li>Farming Valley, CA 90210</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Willowood. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
