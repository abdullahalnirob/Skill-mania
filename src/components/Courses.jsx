"use client";

import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Courses = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await fetch("/course.json");
        const data = await response.json();
        console.log(data);
        setCourses(data);
      } catch (error) {
        console.error("Error fetching courses:", error);
        // Fallback data in case the fetch fails
        setCourses([
          {
            id: 1,
            title: "ওয়েব ডেভেলপমেন্ট মাস্টারক্লাস",
            description:
              "HTML, CSS, JavaScript, React, Node.js এবং আরও অনেক কিছু শিখুন।",
            price: 199.99,
            salePrice: 99.99,
            image: "/placeholder.svg?height=300&width=400",
          },
          {
            id: 2,
            title: "ডাটা সায়েন্স ফান্ডামেন্টালস",
            description:
              "পাইথন, পান্ডাস, নামপাই এবং মেশিন লার্নিং এর মূল বিষয়গুলি শিখুন।",
            price: 249.99,
            salePrice: 129.99,
            image: "/placeholder.svg?height=300&width=400",
          },
          {
            id: 3,
            title: "মোবাইল অ্যাপ ডেভেলপমেন্ট",
            description:
              "React Native দিয়ে iOS এবং Android অ্যাপ তৈরি করতে শিখুন।",
            price: 179.99,
            salePrice: 89.99,
            image: "/placeholder.svg?height=300&width=400",
          },
        ]);
      }
    };
    fetchCourses();
  }, []);

  return (
    <section className="py-16 bg-gradient-to-b from-slate-900 to-purple-900">
      <div className="max-w-7xl mx-auto px-4">
        {/* শিরোনাম */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-violet-200">
            আমাদের জনপ্রিয় কোর্সগুলি ঘুরে দেখুন
          </h2>
          <p className="mt-2 text-slate-300 text-base">
            শিল্প বিশেষজ্ঞদের কাছ থেকে শিখুন এবং আপনার ক্যারিয়ারকে উন্নত করুন।
          </p>
        </motion.div>

        {/* কোর্সের কার্ড */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-slate-800 ring-1 ring-violet-700 shadow-lg rounded-2xl overflow-hidden transition-shadow duration-300 hover:shadow-xl"
            >
              <img
                src={course.image || "/placeholder.svg?height=300&width=400"}
                alt={course.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-5">
                <h3 className="text-lg font-semibold text-violet-200 mb-1">
                  {course.title}
                </h3>
                <p className="text-sm text-slate-300 mb-4">
                  {course.description}
                </p>

                <div className="flex items-center justify-between">
                  <div className="text-3xl text-white font-semibold">
                    ৳{course.salePrice}
                    <span className="line-through text-violet-400 text-xl ml-1">
                      ৳{course.price?.toFixed(2)}
                    </span>
                  </div>
                  <Link to={`/course-details/${course.id}`}>
                    <button className="text-white text-sm font-medium cursor-pointer bg-gradient-to-r from-violet-600 to-purple-600  p-3 rounded-md flex hover:shadow-md transition-all duration-200 items-center gap-1">
                      আরও জানুন <ChevronRight className="w-4 h-4" />
                    </button>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;
