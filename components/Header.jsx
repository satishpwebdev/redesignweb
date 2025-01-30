'use client';

import { ArrowRight, Leaf, Shield, Sprout, Target } from 'lucide-react';
import Image from 'next/image';
import useEmblaCarousel from 'embla-carousel-react';
import { useCallback, useEffect, useState } from 'react';
import { cn } from "@/lib/utils";

import logo from '../public/todaylogo.png'

export default function Home() {
 const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  

  return (
    <>
 <nav  className={cn(
        "fixed w-full z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm dark:bg-gray-900/90"
          : "bg-transparent"
      )}>
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between h-20">
              <div className="text-2xl font-bold text-green-600">
                <Image src={logo} height={200} width={180} alt='logo'></Image>
              </div>
              <div className="hidden md:flex space-x-8">
                <a href="#" className="bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 transition-colors">Products</a>
                <a href="#" className="bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 transition-colors">Solutions</a>
                <a href="#" className="bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 transition-colors">About</a>
                <a href="#" className="bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 transition-colors">Contact</a>
              </div>
              
            </div>
          </div>
        </nav>
    </>
  );
}