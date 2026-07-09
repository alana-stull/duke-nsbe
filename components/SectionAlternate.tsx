"use client";

import { motion } from "framer-motion";

export default function SectionAlternate({
  eyebrow,
  heading,
  body,
  reverse = false,
  tint = false,
  children,
}: {
  eyebrow?: string;
  heading: string;
  body: string;
  reverse?: boolean;
  tint?: boolean;
  children?: React.ReactNode;
}) {
  return (
    <section className={tint ? "bg-mist/50" : ""}>
      <div className="mx-auto max-w-content px-6 py-24 md:py-32">
        <div
          className={`grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-16 ${
            reverse ? "md:[&>*:first-child]:order-2" : ""
          }`}
        >
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            {eyebrow && <p className="eyebrow mb-4">{eyebrow}</p>}
            <h2 className="text-4xl leading-[1.1] text-duke-blue md:text-5xl">
              {heading}
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col justify-center"
          >
            <p className="font-body text-lg leading-relaxed text-slate">
              {body}
            </p>
            {children}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
