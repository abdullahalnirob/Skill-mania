"use client"

import { motion } from "framer-motion"
import { BookOpen, Video, Users } from "lucide-react"

const Features = () => {
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

  const features = [
    {
      icon: <BookOpen className="h-6 w-6 text-violet-300" />,
      title: "বিস্তৃত পাঠ্যক্রম",
      description: "প্রোগ্রামিং থেকে শুরু করে ব্যবসা ব্যবস্থাপনা পর্যন্ত ৫০০ টিরও বেশি কোর্সে অ্যাক্সেস পান।",
    },
    {
      icon: <Video className="h-6 w-6 text-violet-300" />,
      title: "HD ভিডিও লেসন",
      description: "স্পষ্ট ব্যাখ্যা এবং ব্যবহারিক প্রদর্শনের সাথে উচ্চ-মানের ভিডিও কন্টেন্ট উপভোগ করুন।",
    },
    {
      icon: <Users className="h-6 w-6 text-violet-300" />,
      title: "কমিউনিটি সাপোর্ট",
      description: "আপনার শেখার অভিজ্ঞতা উন্নত করতে শিক্ষার্থী এবং শিক্ষাবিদদের একটি সমৃদ্ধশালী কমিউনিটিতে যোগ দিন।",
    },
  ]

  return (
    <section className="py-10 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-base font-semibold text-violet-300 tracking-wide uppercase"
          >
            বৈশিষ্ট্য
          </motion.h2>
          <motion.h3 variants={itemVariants} className="mt-2 text-3xl font-extrabold text-violet-100 sm:text-4xl">
            আপনার সাফল্যের জন্য প্রয়োজনীয় সবকিছু
          </motion.h3>
          <motion.p variants={itemVariants} className="mt-4 text-lg text-slate-300">
            নতুন দক্ষতা অর্জন এবং আপনার ক্যারিয়ার উন্নত করার জন্য আমাদের প্ল্যাটফর্ম প্রয়োজনীয় সরঞ্জাম এবং সংস্থান সরবরাহ করে।
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative p-6 bg-slate-800 rounded-xl shadow-sm border border-violet-800 hover:shadow-md transition-shadow duration-300 hover:border-violet-600"
            >
              <div className="w-12 h-12 rounded-full bg-violet-900 flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h4 className="text-lg font-bold text-violet-200 mb-2">{feature.title}</h4>
              <p className="text-slate-300">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Features
