import { useState, useEffect } from "react"
import { motion } from "framer-motion"

function WardrobeAnimation() {
  const [active, setActive] = useState(0)
  const items = ["👗", "👔", "🧥", "👠"]

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % items.length)
    }, 1800)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="flex items-center justify-center h-full gap-4">
      {items.map((item, i) => (
        <motion.span
          key={i}
          className="text-4xl"
          animate={{ scale: active === i ? 1.6 : 1, opacity: active === i ? 1 : 0.3 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          {item}
        </motion.span>
      ))}
    </div>
  )
}

function StyleMoodAnimation() {
  const [mood, setMood] = useState(0)
  const moods = [
    { label: "Деловой", color: "bg-slate-600" },
    { label: "Casual", color: "bg-amber-400" },
    { label: "Вечерний", color: "bg-purple-600" },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setMood((prev) => (prev + 1) % moods.length)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="flex flex-col items-center justify-center h-full gap-4">
      <motion.div
        className={`w-16 h-16 rounded-full ${moods[mood].color}`}
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 0.6 }}
        key={mood}
      />
      <motion.span
        className="text-sm font-medium text-foreground"
        key={`label-${mood}`}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
      >
        {moods[mood].label}
      </motion.span>
    </div>
  )
}

function ShoppingProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const timeout = setTimeout(() => setProgress(100), 500)
    return () => clearTimeout(timeout)
  }, [])

  return (
    <div className="flex flex-col items-center justify-center h-full gap-4">
      <span className="text-3xl md:text-4xl font-sans font-medium text-foreground">3 ч</span>
      <span className="text-sm text-muted-foreground">Шопинг с комфортом</span>
      <div className="w-full max-w-[120px] h-1.5 bg-foreground/10 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-primary rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        />
      </div>
    </div>
  )
}

export function FeaturesSection() {
  return (
    <section className="bg-background px-6 py-24">
      <div className="max-w-6xl mx-auto">
        <motion.p
          className="text-muted-foreground text-sm uppercase tracking-widest mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Что входит в сертификат
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Wardrobe Card */}
          <motion.div
            className="bg-secondary rounded-xl p-8 min-h-[280px] flex flex-col"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 0.98 }}
            whileTap={{ scale: 0.96 }}
            transition={{ duration: 0.2 }}
            data-clickable
          >
            <div className="flex-1">
              <WardrobeAnimation />
            </div>
            <div className="mt-4">
              <h3 className="font-serif text-xl text-foreground">Разбор гардероба</h3>
              <p className="text-muted-foreground text-sm mt-1">Анализ того, что есть, что оставить и с чем сочетать.</p>
            </div>
          </motion.div>

          {/* Style Card */}
          <motion.div
            className="bg-secondary rounded-xl p-8 min-h-[280px] flex flex-col"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            whileHover={{ scale: 0.98 }}
            whileTap={{ scale: 0.96 }}
            data-clickable
          >
            <div className="flex-1">
              <StyleMoodAnimation />
            </div>
            <div className="mt-4">
              <h3 className="font-serif text-xl text-foreground">Стилевой образ</h3>
              <p className="text-muted-foreground text-sm mt-1">Создаём индивидуальный стиль под характер и цели.</p>
            </div>
          </motion.div>

          {/* Shopping Card */}
          <motion.div
            className="bg-secondary rounded-xl p-8 min-h-[280px] flex flex-col"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            whileHover={{ scale: 0.98 }}
            whileTap={{ scale: 0.96 }}
            data-clickable
          >
            <div className="flex-1">
              <ShoppingProgress />
            </div>
            <div className="mt-4">
              <h3 className="font-serif text-xl text-foreground">Шопинг сопровождение</h3>
              <p className="text-muted-foreground text-sm mt-1">Идём вместе в магазины — я выбираю, ты примеряешь.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
