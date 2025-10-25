import { motion, AnimatePresence } from "framer-motion";
import { SiDiscord } from "react-icons/si";
import { IoLogoWhatsapp } from "react-icons/io5";

import { useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const CourseDetails = () => {
  const data = useLoaderData();
  const id = useParams();
  const numId = Number.parseInt(id.id);
  console.log(numId);
  const course = data[numId - 1];
  const { title, description, image, salePrice } = course;

  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Course Header */}
      <div className="flex flex-col md:flex-row gap-8 mb-12">
        {/* Course Image */}
        <div className="w-full md:w-1/2 rounded-lg overflow-hidden">
          <img
            src={image || "/placeholder.svg?height=400&width=600"}
            alt={title}
            className="w-full h-auto object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* Course Info */}
        <div className="w-full md:w-1/2 flex flex-col justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-800 mb-4">{title}</h1>
            <div className="flex items-center mb-4">
              <div className="flex items-center">
                <span className="text-yellow-400">★★★★</span>
                <span className="text-yellow-400">★</span>
                <span className="ml-2 text-gray-600">4.8 (120 reviews)</span>
              </div>
              <span className="mx-2 text-gray-300">|</span>
              <span className="text-gray-600">1,200 students enrolled</span>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg mb-6">
              <h2 className="text-xl font-semibold mb-2">What you'll learn</h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                <li className="flex items-start">
                  <svg
                    className="h-5 w-5 text-green-500 mr-2 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>Complete understanding of the subject</span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="h-5 w-5 text-green-500 mr-2 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>Practical skills for real-world applications</span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="h-5 w-5 text-green-500 mr-2 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>Certificate of completion</span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="h-5 w-5 text-green-500 mr-2 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>Lifetime access to course materials</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-auto">
            <div className="flex items-center mb-4">
              <span className="text-3xl font-bold text-gray-800">
                ৳{salePrice}
              </span>
            </div>
            <button
              onClick={() => setIsModalOpen(true)}
              className="w-full cursor-pointer bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-4 rounded-lg transition duration-200"
            >
              Enroll Now
            </button>
          </div>
        </div>
      </div>

      {/* Course Description */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Course Description
        </h2>
        <div className="prose max-w-none text-gray-600">
          <p className="mb-4">{description}</p>
          <p className="mb-4">
            This comprehensive course is designed to take you from beginner to
            expert. Whether you're just starting out or looking to enhance your
            existing skills, this course provides all the tools and knowledge
            you need to succeed.
          </p>
          <p>
            Our expert instructors will guide you through each concept with
            clear explanations and practical examples. By the end of this
            course, you'll have the confidence and skills to apply what you've
            learned in real-world scenarios.
          </p>
        </div>
      </div>

      {/* Course Curriculum */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Course Curriculum
        </h2>
        <div className="border rounded-lg overflow-hidden">
          <div className="bg-gray-50 p-4 border-b">
            <div className="flex justify-between items-center">
              <h3 className="font-semibold">Module 1: Introduction</h3>
              <span className="text-gray-500 text-sm">3 lessons • 45 min</span>
            </div>
          </div>
          <div className="p-4 border-b">
            <div className="flex justify-between items-center mb-3">
              <div className="flex items-center">
                <svg
                  className="h-5 w-5 text-gray-400 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>Welcome to the Course</span>
              </div>
              <span className="text-gray-500 text-sm">15 min</span>
            </div>
            <div className="flex justify-between items-center mb-3">
              <div className="flex items-center">
                <svg
                  className="h-5 w-5 text-gray-400 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>Course Overview</span>
              </div>
              <span className="text-gray-500 text-sm">10 min</span>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <svg
                  className="h-5 w-5 text-gray-400 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                <span>Getting Started Guide</span>
              </div>
              <span className="text-gray-500 text-sm">20 min</span>
            </div>
          </div>
          <div className="bg-gray-50 p-4 border-b">
            <div className="flex justify-between items-center">
              <h3 className="font-semibold">Module 2: Core Concepts</h3>
              <span className="text-gray-500 text-sm">
                5 lessons • 1h 30min
              </span>
            </div>
          </div>
          <div className="bg-gray-50 p-4">
            <div className="flex justify-between items-center">
              <h3 className="font-semibold">Module 3: Advanced Techniques</h3>
              <span className="text-gray-500 text-sm">
                4 lessons • 2h 15min
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Instructor */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Your Instructor
        </h2>
        <div className="flex items-start">
          <img
            src="/placeholder.svg?height=100&width=100"
            alt="Instructor"
            className="w-20 h-20 rounded-full object-cover mr-4"
          />
          <div>
            <h3 className="text-xl font-semibold mb-1">Dr. Jane Smith</h3>
            <p className="text-gray-600 mb-2">
              Expert Instructor with 10+ years of experience
            </p>
            <p className="text-gray-600">
              Dr. Smith has helped over 10,000 students master this subject
              through her clear teaching style and practical approach. She
              brings real-world experience to make complex concepts easy to
              understand.
            </p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gray-100 rounded-lg p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">
          Ready to start your learning journey?
        </h2>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          Join thousands of students who have already transformed their skills
          with this course. Enroll today and take the first step toward mastery.
        </p>
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-green-600 hover:bg-green-700 text-white py-3 px-8 rounded-lg transition duration-200"
        >
          Enroll Now for ৳{salePrice}
        </button>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-black/30 backdrop-blur-sm">
          <motion.div
            className="bg-white p-4 sm:p-6 rounded-lg shadow-2xl w-full max-w-2xl mx-auto my-6 sm:my-8 flex flex-col md:flex-row gap-6"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3 }}
          >
            <div className="w-full flex flex-col justify-between">
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <h2 className="text-lg sm:text-xl font-bold mb-4">নিবন্ধন</h2>
                <p className="mb-4 text-sm sm:text-base">
                  কোর্সের শিরোনাম: <strong>{title}</strong>!
                </p>

                <h4 className="font-medium text-gray-800 mb-2 flex items-center text-sm sm:text-base">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 mr-2 text-indigo-500"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                    <polyline points="14 2 14 8 20 8" />
                    <path d="M16 13H8" />
                    <path d="M16 17H8" />
                    <path d="M10 9H8" />
                  </svg>
                  পেমেন্ট বিস্তারিত
                </h4>

                <ul className="text-sm text-gray-600 space-y-2 mb-4">
                  <li className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 mr-2 mt-0.5 text-green-500"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    পেমেন্ট মেসেজে আপনার পুরো নাম এবং ইমেইল উল্লেখ করুন
                  </li>
                  <li className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 mr-2 mt-0.5 text-green-500"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    কোর্সের নাম উল্লেখ করুন:{" "}
                    <span className="font-medium">{title}</span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 mr-2 mt-0.5 text-green-500"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    পেমেন্ট নিশ্চিতকরণ ২৪ ঘণ্টার মধ্যে পাঠানো হবে
                  </li>
                  <li className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 mr-2 mt-0.5 text-green-500"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    পেমেন্ট যাচাইয়ের পরপরই কোর্স উপকরণে অ্যাক্সেস দেওয়া হবে
                  </li>
                </ul>

                <h4 className="font-medium text-gray-800 mb-2 flex items-center text-sm sm:text-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 mr-2 text-indigo-500"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 8v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5Z" />
                    <path d="m17 8-5 5-5-5" />
                  </svg>
                  পেমেন্টের জন্য মেসেজ করুন:
                </h4>

                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="https://discord.com/users/1125393903466586153"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded-md transition-colors w-full"
                  >
                    <SiDiscord />
                    Discord
                  </a>
                  <a
                    href="https://wa.me/8801750402019"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-md transition-colors w-full"
                  >
                    <IoLogoWhatsapp />
                    WhatsApp
                  </a>
                </div>
              </div>

              <p className="mt-4 text-xs sm:text-sm text-gray-500 text-center md:text-left flex items-center justify-center md:justify-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 mr-1 text-yellow-500"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
                  <line x1="12" y1="9" x2="12" y2="13" />
                  <line x1="12" y1="17" x2="12.01" y2="17" />
                </svg>
                পেমেন্ট সংক্রান্ত যেকোনো সমস্যায় আমাদের সাপোর্ট টিমের সঙ্গে
                যোগাযোগ করুন
              </p>

              <div className="flex justify-end mt-6">
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 bg-red-600 cursor-pointer text-white rounded hover:bg-red-700 text-sm sm:text-base"
                >
                  Close
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default CourseDetails;
