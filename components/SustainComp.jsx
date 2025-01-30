'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';



import { Sprout, Recycle, Leaf, HeartHandshake, CloudCog } from 'lucide-react';

const sustainabilitySlides = [
  {
    title: "Committed to Sustainability",
    text: "We believe in developing solutions that not only enhance crop yields but also protect our environment for future generations.",
    image: "https://images.unsplash.com/photo-1589923188900-85dae523342b?q=80&w=1170",
    icon: <Sprout className="w-6 h-6 text-green-600" />
  },
 
  {
    title: "Organic Ingredients",
    text: "Sourced from ethical suppliers, our natural components promote soil health and biodiversity.",
    image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=1170",
    icon: <Leaf className="w-6 h-6 text-green-600" />
  },
  {
    title: "Community Impact",
    text: "We support local farming communities through education and sustainable agriculture programs.",
    image: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?q=80&w=1170",
    icon: <HeartHandshake className="w-6 h-6 text-green-600" />
  },
 
];

export default function SustainabilitySlider() {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 4000 })]);

  return (
    <section className="py-20 bg-white">
      <div className="embla" ref={emblaRef}>
        <div className="embla__container">
          {sustainabilitySlides.map((slide, index) => (
            <div className="embla__slide" key={index}>
              <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  {/* Text Content with Staggered Animation */}
                  <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                  >
                    <h2 className="text-4xl font-bold mb-6">{slide.title}</h2>
                    <p className="text-gray-600 mb-8">{slide.text}</p>
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5 }}
                      className="flex items-center gap-4"
                    >
                      <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                        {slide.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold">Eco-Friendly Solutions</h4>
                        <p className="text-gray-600">Minimizing environmental impact</p>
                      </div>
                    </motion.div>
                  </motion.div>

                  {/* Image with Delayed Animation */}
                  <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="relative h-[400px]"
                  >
                    <Image
                      src={slide.image}
                      alt="Sustainable farming"
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover rounded-xl"
                    />
                  </motion.div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}