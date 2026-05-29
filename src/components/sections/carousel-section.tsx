import { motion } from "framer-motion"

const portfolioItems = [
  "https://cdn.poehali.dev/projects/b5a35f89-2c37-4ab2-9758-da7eed435936/files/a872138b-4c65-441d-9bc5-3e6ea6678a6d.jpg",
  "https://cdn.poehali.dev/projects/b5a35f89-2c37-4ab2-9758-da7eed435936/files/0a0539e4-d294-44b4-b654-1aeb62175a42.jpg",
  "https://cdn.poehali.dev/projects/b5a35f89-2c37-4ab2-9758-da7eed435936/files/20e63985-915f-4795-9221-1e27cbd64196.jpg",
  "https://cdn.poehali.dev/projects/b5a35f89-2c37-4ab2-9758-da7eed435936/files/a872138b-4c65-441d-9bc5-3e6ea6678a6d.jpg",
  "https://cdn.poehali.dev/projects/b5a35f89-2c37-4ab2-9758-da7eed435936/files/20e63985-915f-4795-9221-1e27cbd64196.jpg",
  "https://cdn.poehali.dev/projects/b5a35f89-2c37-4ab2-9758-da7eed435936/files/0a0539e4-d294-44b4-b654-1aeb62175a42.jpg",
]

export function CarouselSection() {
  const items = [...portfolioItems, ...portfolioItems]

  return (
    <section className="bg-primary py-24 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 mb-12">
        <motion.h2
          className="text-3xl md:text-4xl font-serif text-primary-foreground"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Стиль — это язык, на котором говорит твоя личность.
        </motion.h2>
      </div>

      <div className="relative">
        <motion.div
          className="flex gap-6"
          animate={{ x: [0, "-50%"] }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {items.map((src, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-[300px] md:w-[400px] rounded-xl overflow-hidden shadow-2xl"
              data-clickable
            >
              <img
                src={src}
                alt={`Работа стилиста ${(i % portfolioItems.length) + 1}`}
                className="w-full h-auto aspect-[4/3] object-cover"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
