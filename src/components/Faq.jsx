"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ChevronDown, ChevronUp } from "lucide-react"

const Faq = () => {
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

  const faqs = [
    {
      question: "আমি কীভাবে প্ল্যাটফর্মের সাথে শুরু করব?",
      answer:
        "শুরু করা খুব সহজ! কেবল একটি অ্যাকাউন্টের জন্য সাইন আপ করুন, আপনার প্রয়োজন অনুসারে একটি সাবস্ক্রিপশন প্ল্যান বেছে নিন এবং আপনি আমাদের কোর্স লাইব্রেরিতে তাৎক্ষণিক অ্যাক্সেস পাবেন। আপনার লক্ষ্য এবং দক্ষতার স্তরের সাথে মেলে এমন কোর্সগুলি খুঁজে পেতে আমরা আমাদের 'লার্নিং পাথ অ্যাসেসমেন্ট' দিয়ে শুরু করার পরামর্শ দিই।",
    },
    {
      question: "আমি কি অফলাইনে দেখার জন্য কোর্স ডাউনলোড করতে পারি?",
      answer:
        "হ্যাঁ, আমাদের প্রো এবং এন্টারপ্রাইজ প্ল্যানের মাধ্যমে, আপনি অফলাইনে দেখার জন্য কোর্সের উপকরণ এবং ভিডিও ডাউনলোড করতে পারেন। এই বৈশিষ্ট্যটি iOS এবং Android ডিভাইসের জন্য আমাদের মোবাইল অ্যাপে উপলব্ধ।",
    },
    {
      question: "কোর্স শেষ করার পরে আমি কি একটি সার্টিফিকেট পাব?",
      answer:
        "যেকোনো কোর্সের সফল সমাপ্তির পরে, আপনি একটি ডিজিটাল সার্টিফিকেট পাবেন যা আপনি আপনার লিঙ্কডইন প্রোফাইলে শেয়ার করতে বা আপনার জীবনবৃত্তান্তে অন্তর্ভুক্ত করতে পারেন। আমাদের সার্টিফিকেট বিশ্বব্যাপী অনেক নিয়োগকর্তা কর্তৃক স্বীকৃত।",
    },
    {
      question: "আপনার রিফান্ড নীতি কি?",
      answer:
        "আমরা আমাদের বেসিক প্ল্যানের জন্য ৭ দিনের মানি-ব্যাক গ্যারান্টি এবং আমাদের প্রো প্ল্যানের জন্য ৩০ দিনের মানি-ব্যাক গ্যারান্টি অফার করি। আপনি যদি আপনার সাবস্ক্রিপশনে সন্তুষ্ট না হন তবে এই সময়ের মধ্যে আপনি সম্পূর্ণ রিফান্ডের জন্য অনুরোধ করতে পারেন।",
    },
    {
      question: "আমি কি সাবস্ক্রিপশন প্ল্যানের মধ্যে পরিবর্তন করতে পারি?",
      answer:
        "হ্যাঁ, আপনি যেকোনো সময় আপনার সাবস্ক্রিপশন প্ল্যান আপগ্রেড বা ডাউনগ্রেড করতে পারেন। আপগ্রেড করার সময়, আপনাকে আনুপাতিক পার্থক্য চার্জ করা হবে। ডাউনগ্রেড করার সময়, আপনার পরবর্তী বিলিং চক্রের শুরুতে নতুন হার প্রযোজ্য হবে।",
    },
  ]

  const [openIndex, setOpenIndex] = useState(0)

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? -1 : index)
  }

  return (
    <section className="py-20 bg-slate-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-base font-semibold text-purple-300 tracking-wide uppercase"
          >
            জিজ্ঞাসা
          </motion.h2>
          <motion.h3 variants={itemVariants} className="mt-2 text-3xl font-extrabold text-violet-200 sm:text-4xl">
            প্রায়শই জিজ্ঞাসিত প্রশ্নাবলী
          </motion.h3>
          <motion.p variants={itemVariants} className="mt-4 text-lg text-slate-300">
            আপনি যে উত্তরটি খুঁজছেন তা খুঁজে পাচ্ছেন না? সহায়তার জন্য আমাদের সাপোর্ট টিমের সাথে যোগাযোগ করুন।
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="space-y-4"
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="border border-violet-700 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full flex justify-between items-center p-4 text-left bg-slate-700 hover:bg-slate-600 transition-colors duration-200"
              >
                <span className="text-violet-200 font-medium">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-purple-300" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-purple-300" />
                )}
              </button>
              <motion.div
                initial={false}
                animate={{
                  height: openIndex === index ? "auto" : 0,
                  opacity: openIndex === index ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="p-4 bg-slate-800 border-t border-violet-700">
                  <p className="text-slate-300">{faq.answer}</p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Faq
