"use client"
import { motion } from "framer-motion"
import { ArrowRight, ChartPie, Laptop, Palette, TrendingUpDown } from 'lucide-react'

const Hero = () => {
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

  const categories = [
    {
      name: "ওয়েব ডেভেলপমেন্ট",
      count: 120,
      icon: (
        <div className="w-6 h-6 bg-purple-900 rounded-md p-4 flex items-center justify-center">
          <span className="text-slate-50 text-xs"><Laptop /></span>
        </div>
      ),
    },
    {
      name: "ডেটা সায়েন্স",
      count: 85,
      icon: (
        <div className="w-6 h-6 bg-purple-900 rounded-md p-4 flex items-center justify-center">
          <span className="text-slate-50 text-xs"><TrendingUpDown /></span>
        </div>
      ),
    },
    {
      name: "ব্যবসা",
      count: 95,
      icon: (
        <div className="w-6 h-6 bg-purple-900 rounded-md p-4 flex items-center justify-center">
          <span className="text-slate-50 text-xs"><ChartPie /></span>
        </div>
      ),
    },
    {
      name: "ডিজাইন",
      count: 70,
      icon: (
        <div className="w-6 h-6 bg-purple-900 rounded-md p-4 flex items-center justify-center">
          <span className="text-slate-50 text-xs"><Palette /></span>
        </div>
      ),
    },
  ]

  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="relative min-h-screen flex flex-col items-center justify-center px-6 md:px-16 py-20 overflow-hidden bg-gradient-to-br from-slate-800 to-purple-900"
    >
      {/* মূল কন্টেন্ট কন্টেইনার */}
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center z-10">
        {/* বাম কলাম - টেক্সট কন্টেন্ট */}
        <div className="max-w-xl text-center lg:text-left space-y-4">
          <motion.div
            variants={itemVariants}
            className="inline-block px-4 py-1.5 bg-purple-800 text-purple-100 rounded-md p-4 text-sm font-medium mb-2"
          >
            🚀 অনলাইন শিক্ষার ভবিষ্যৎ এখানেই
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-3xl md:text-5xl font-extrabold text-purple-200 leading-tight"
          >
            অভিজ্ঞদের নির্দেশনায় যেকোনো সময়, <span className="text-white">যেকোনো স্থানে</span> শিখুন
          </motion.h1>

          <motion.p variants={itemVariants} className="text-purple-100 text-lg">
            শেখার নতুন দিগন্তে আপনাকে স্বাগতম । দেশজুড়ে শেখার উদ্দীপনা, শুরু হোক আজই ।


          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-wrap gap-4 justify-center lg:justify-start">
            <button className="px-6 py-3 bg-gradient-to-r from-violet-500 to-purple-500 text-white rounded-md cursor-pointer shadow-md hover:shadow-lg transition duration-300 flex items-center gap-2 group">
              My Classes
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>

          {/* বিশেষ অফার */}
          <motion.div
            variants={itemVariants}
            className="bg-gradient-to-r from-violet-900 to-purple-800 p-4 rounded-lg border border-violet-700 flex items-center gap-3 mx-auto lg:mx-0 max-w-md lg:max-w-full"
          >
            <div className="bg-violet-700 rounded-md p-2 flex-shrink-0">
              <span className="text-violet-100 text-lg">✅</span>
            </div>
            <div>
              <p className="font-medium text-violet-100">১০,০০০+ শিক্ষার্থীর বিশ্বাস অর্জন</p>
              <p className="text-sm text-violet-200">
                প্রতিদিন তাদের দক্ষতা বৃদ্ধি করছে এমন শিক্ষার্থীদের একটি কমিউনিটিতে যোগ দিন।
              </p>
            </div>
          </motion.div>
        </div>

        {/* ডান কলাম - ভিজ্যুয়াল কন্টেন্ট */}
        <div className="flex flex-col space-y-8">
          {/* হিরো ইমেজ - ফ্লোটিং অ্যানিমেশন সহ */}
          <motion.div
            variants={itemVariants}
            className="relative z-10"
            animate={{
              y: [0, -15, 0],
            }}
            transition={{
              duration: 6,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
          >
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-violet-300 to-purple-500 rounded-2xl blur opacity-30"></div>
              <div className="relative bg-slate-800 p-2 rounded-2xl">
                <img src="Webinar-pana.svg" alt="লার্নিং ইলাস্ট্রেশন" className="w-full h-auto mx-auto rounded-xl" />
              </div>

              {/* ফ্লোটিং ব্যাজ */}
              <motion.div
                className="absolute -right-4 -top-4 bg-slate-800 shadow-lg rounded-lg px-3 py-2 flex items-center gap-2"
                animate={{
                  y: [0, -8, 0],
                  rotate: [0, 3, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                  delay: 1,
                }}
              >
                <div className="w-8 h-8 bg-teal-700 rounded-md p-4 flex items-center justify-center">
                  <span className="text-teal-100 text-lg">✓</span>
                </div>
                <div>
                  <p className="text-xs font-medium text-white">প্রত্যয়িত কোর্স</p>
                  <p className="text-xs text-gray-400">শিল্প স্বীকৃত</p>
                </div>
              </motion.div>

              {/* ফ্লোটিং স্ট্যাট */}
              <motion.div
                className="absolute -left-10 bottom-10 bg-slate-800 shadow-lg rounded-lg px-3 py-2"
                animate={{
                  y: [0, 10, 0],
                  rotate: [0, -2, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                  delay: 0.5,
                }}
              >
                <p className="text-sm font-medium text-white">আপনিও শিখুন</p>
                <p className="text-xs text-gray-400">নিজের গতিতে </p>
              </motion.div>

              {/* শিক্ষার্থীর সংখ্যা ব্যাজ */}
              <motion.div
                className="absolute -right-6 bottom-20 bg-gradient-to-r from-violet-600 to-purple-600 text-white shadow-lg rounded-lg px-3 py-2"
                animate={{
                  y: [0, 8, 0],
                  rotate: [0, 2, 0],
                }}
                transition={{
                  duration: 7,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                  delay: 1.5,
                }}
              >
                <p className="text-sm font-medium">৫০,০০০+</p>
                <p className="text-xs">সক্রিয় শিক্ষার্থী</p>
              </motion.div>
            </div>
          </motion.div>

          {/* বিভাগসমূহ */}
          <motion.div variants={itemVariants} className="grid grid-cols-2 gap-3 w-full mx-auto lg:mx-0">
            {categories.map((category, index) => (
              <div
                key={index}
                className="bg-slate-800 ring-1 ring-purple-700 rounded-xl p-5 w-full border border-purple-800 shadow-sm hover:shadow-md transition-shadow flex items-center gap-3 hover:border-violet-600"
              >
                {category.icon}
                <div>
                  <p className="font-medium text-sm text-white">{category.name}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-12 text-slate-900 fill-current"
        >
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C57.73,118.92,163.83,97.4,321.39,56.44Z"></path>
        </svg>
      </div>
    </motion.section>
  )
}

export default Hero
