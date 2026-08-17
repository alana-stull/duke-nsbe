"use client";

import Carousel from "./Carousel";
import TestimonialCard from "./TestimonialCard";

type Testimonial = { name: string; major: string; quote: string; photo: string; focus?: string };

export default function TestimonialsCarousel({ items }: { items: Testimonial[] }) {
  return (
    <Carousel
      items={items}
      keyFor={(t) => t.name}
      label="testimonial"
      renderItem={(t, { centerOn }) => <TestimonialCard {...t} onExpand={centerOn} />}
    />
  );
}
