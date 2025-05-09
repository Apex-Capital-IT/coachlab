"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  MapPin,
  CheckCircle,
  Phone,
  DollarSign,
  Calendar,
  Clock,
} from "lucide-react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { motion } from "framer-motion";

export default function PresentationSkillsPage() {
  const [activeTab, setActiveTab] = useState("overview");

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <div className="min-h-screen bg-[#f9f9f9]">
      <Header />

      <main className="pt-24 pb-2 px-4 md:px-8">
        <div className="container mx-auto bg-white p-8 rounded-2xl shadow-xl">
          {/* Course Header */}
          <div className="md:flex md:flex-col lg:flex-row items-center gap-8 mb-12">
            <motion.div
              className="lg:w-2/5"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-3xl lg:text-4xl font-extrabold leading-tight mb-4">
                🎤 LEADERSHIP EXCEEDED СУРГАЛТ
              </h1>
              <p className="text-lg text-gray-600 mb-6">
                ЛИДЕР ГЭЖ ХЭН БЭ? Эрх мэдэлтэй байж хүчээр хийлгэх юм уу?
                Симфони оркестрын удирдаач мэт ур ухаанаар уу? Танд шалгарсан
                манлайллын ур чадвараар өөрийгөө зэвсэглэх LEADERSHIP EXCEEDED
                сургалтыг санал болгож байна.
              </p>

              <div className="flex items-start flex-col gap-6 mb-6">
                <div className="flex items-center gap-2">
                  {/* Using the Tugrik symbol directly */}
                  <span className="text-2xl flex items-center justify-center w-[24px] text-black">
                    ₮
                  </span>
                  <span className="font-bold text-black">390,000 MNT</span>
                  <span className="text-gray-500">Price</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="text-xl text-black" />
                  <span className="font-bold text-black">2 days</span>
                  <span className="text-gray-500">Duration</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="text-xl text-black" />
                  <span className="font-bold text-black">
                    Starts November 30, 2024
                  </span>
                  <span className="text-gray-500">Date</span>
                </div>
              </div>
            </motion.div>

            {/* Image */}
            <motion.div
              className="lg:w-3/5 mt-8 lg:mt-0"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="relative w-full h-[400px] lg:h-[500px] rounded-xl overflow-hidden shadow-xl">
                <Image
                  src="/leadershipCover.jpg"
                  alt="Course Image"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          </div>

          {/* Course Description */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">About This Course</h2>
            <p className="text-base text-gray-600 mb-6">
              Энэ сургалт нь танд илүү сайн манлайлагч болохуйц ур чадварыг
              олгох бөгөөд дараах зүйлсийг сурах боломжийг олгоно:
            </p>
            <ul className="list-disc pl-6 text-gray-600">
              <li>✅ Баялаг бүтээх замналтай танилцах</li>
              <li>
                ✅ Сэтгэлээсээ, үр бүтээлтэй багийн гишүүнийг бэлдэж, зөв арга
                барилаар ажил даалгах ур чадварт суралцах
              </li>
              <li>✅ Олон төрлийн зан төлөвтэй хүмүүсийг эергээр манлайлах</li>
              <li>
                ✅ Чухал шийдвэрүүдийг цаг алдалгүй хамгийн зөв хувилбараар
                гаргах арга барилд суралцах
              </li>
              <li>✅ Көүчинг, менторинг ур чадварыг эзэмших</li>
              <li>
                ✅ Босс байх уу? Манлайлагч байх уу? гэдэг шийдвэрийг гаргах
              </li>
            </ul>
          </section>

          {/* Tabs */}
          <div className="flex mb-8 border-b-2 border-gray-300">
            <button
              className={`tab-button ${
                activeTab === "overview"
                  ? "font-semibold border-b-2 border-black"
                  : "text-gray-600"
              } px-4 py-2 text-lg`}
              onClick={() => handleTabClick("overview")}
            >
              Overview
            </button>
            <button
              className={`tab-button ${
                activeTab === "curriculum"
                  ? "font-semibold border-b-2 border-black"
                  : "text-gray-600"
              } px-4 py-2 text-lg`}
              onClick={() => handleTabClick("curriculum")}
            >
              Curriculum
            </button>
            <button
              className={`tab-button ${
                activeTab === "reviews"
                  ? "font-semibold border-b-2 border-black"
                  : "text-gray-600"
              } px-4 py-2 text-lg`}
              onClick={() => handleTabClick("reviews")}
            >
              Reviews
            </button>
          </div>

          {/* Tab Content */}
          {activeTab === "overview" && (
            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-4">About This Course</h2>
              <p className="text-base text-black">
                Манлайлагчид өөрсдийн хөгжлийг ч бусдыг ч сайжруулах зорилгоор
                энэ сургалтыг зохион байгуулж байна.
              </p>
            </section>
          )}

          {activeTab === "curriculum" && (
            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-4">Curriculum</h2>
              <ul className="list-disc pl-6 text-black">
                <li>Introduction to Leadership</li>
                <li>Building a Vision and Strategy</li>
                <li>Coaching and Mentoring Techniques</li>
                <li>Making Crucial Decisions</li>
              </ul>
            </section>
          )}

          {activeTab === "reviews" && (
            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-4">Reviews</h2>
              <p className="text-base text-black">No reviews yet.</p>
            </section>
          )}

          {/* Instructor Info */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Instructor</h2>
            <p className="text-base text-gray-600">
              🧑🏻‍🏫 Энхтайван Чинзориг, BNI Mongolia-гийн үүсгэн байгуулагч, мастер
              трэйнер
            </p>
          </section>

          {/* Contact Information */}
          <section className=" bg-gray-50 p-6 rounded-xl">
            <h2 className="text-2xl font-semibold mb-4">Contact</h2>
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-4">
                <Phone className="text-xl text-[#0a3b8c]" />
                <span className="text-lg font-semibold">
                  89104852, 88019523
                </span>
              </div>
              <div className="flex items-center gap-4">
                <Calendar className="text-xl text-[#0a3b8c]" />
                <span className="text-lg font-semibold">November 30, 2024</span>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
