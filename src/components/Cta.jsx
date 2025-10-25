"use client"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

const Cta = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <section className="py-20 bg-gradient-to-r from-violet-900 to-purple-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="relative rounded-2xl overflow-hidden"
        >
          <div className="absolute inset-0 bg-black opacity-40"></div>
          <div className="relative z-10 py-12 px-6 md:py-16 md:px-12 text-center md:text-left md:flex md:items-center md:justify-between">
            <div className="max-w-xl">
              <motion.h2 variants={itemVariants} className="text-3xl font-extrabold text-white sm:text-4xl">
                আপনার শেখার যাত্রা শুরু করতে প্রস্তুত?
              </motion.h2>
              <motion.p variants={itemVariants} className="mt-4 text-lg text-purple-200">
                হাজার হাজার শিক্ষার্থীর সাথে যোগ দিন যারা ইতিমধ্যেই আমাদের প্ল্যাটফর্মে শিখছেন। ৭ দিনের বিনামূল্যে ট্রায়ালের মাধ্যমে আজই শুরু করুন।
              </motion.p>
            </div>
            <motion.div variants={itemVariants} className="mt-8 md:mt-0 md:ml-8">
              <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-violet-900 bg-white hover:bg-violet-100 transition-colors duration-200">
                বিনামূল্যে শুরু করুন
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Cta
