"use client";

import Carousel from "./Carousel";
import SpotlightCard from "./SpotlightCard";

type Spotlight = { name: string; highlight: string; photo: string; focus?: string };

export default function SpotlightsCarousel({ items }: { items: Spotlight[] }) {
  return (
    <Carousel
      items={items}
      keyFor={(s) => s.name}
      label="spotlight"
      renderItem={(s) => <SpotlightCard {...s} />}
    />
  );
}
