'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Card } from '@/components/ui/card';
import { Star, Quote } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  role: string;
  company: string;
  feedback: string;
  rating: number;
  delay: number;
}

function TestimonialCard({ name, role, company, feedback, rating, delay }: TestimonialCardProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50, rotate: -2 }}
      animate={isInView ? { opacity: 1, y: 0, rotate: 0 } : {}}
      transition={{ duration: 0.6, delay }}
    >
      <Card className="p-8 bg-white hover:shadow-2xl transition-all duration-500 border-none shadow-lg relative overflow-hidden group">
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-100 to-blue-100 rounded-bl-full opacity-50 group-hover:scale-150 transition-transform duration-500" />

        <div className="relative z-10">
          <Quote className="w-12 h-12 text-purple-600 mb-4 opacity-50" />

          <div className="flex mb-4">
            {[...Array(rating)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
            ))}
          </div>

          <p className="text-gray-700 text-lg mb-6 leading-relaxed">"{feedback}"</p>

          <div className="flex items-center">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
              {name.charAt(0)}
            </div>
            <div>
              <h4 className="font-bold text-gray-900">{name}</h4>
              <p className="text-gray-600 text-sm">{role}</p>
              <p className="text-gray-500 text-sm">{company}</p>
            </div>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}

export function TestimonialsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-xl text-gray-600">Trusted by industry leaders worldwide</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <TestimonialCard
            name="Sarah Johnson"
            role="CIO"
            company="Sony Interactive Entertainment"
            feedback="BangMetric transformed our HR processes with ServiceNow HRSD. Their expertise and dedication resulted in a 40% improvement in employee satisfaction."
            rating={5}
            delay={0.2}
          />
          <TestimonialCard
            name="Michael Chen"
            role="VP of Operations"
            company="Global Financial Services"
            feedback="The team's innovative approach to digital transformation exceeded our expectations. They delivered a solution that scales with our growing needs."
            rating={5}
            delay={0.4}
          />
          <TestimonialCard
            name="Emily Rodriguez"
            role="Director of IT"
            company="Healthcare Systems Inc."
            feedback="Outstanding service and support! BangMetric's 24/7 availability and deep ServiceNow knowledge made our implementation seamless."
            rating={5}
            delay={0.6}
          />
        </div>
      </div>
    </section>
  );
}
