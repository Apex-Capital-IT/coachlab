"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Calendar,
  MapPin,
  CheckCircle,
  Phone,
  Clock,
  Users,
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
          <div className="md:flex md:flex-col lg:flex-row items-center gap-8  mb-12">
            <motion.div
              className="lg:w-2/5"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-3xl lg:text-4xl font-extrabold leading-tight mb-4">
                🎤 ИЛТГЭХ УР ЧАДВАРЫН СУРГАЛТ 🔋
              </h1>
              <p className="text-lg text-gray-600 mb-6">
                Өөрийн хүрээлэлдээ, найз нөхөд, ажлын хамт олон, хурал цуглаан
                гээд бүхий л салбарт бодол санаагаа оновчтой илэрхийлэх, итгэл
                үнэмшилтэйгээр өөрийгөө чөлөөтэй зөвөөр ойлгуулах шаардлага
                бидэнд өдөр тутамд тулгардаг.
              </p>

              <div className="flex items-start flex-col gap-6 mb-6">
                <div className="flex items-center gap-4">
                  <Clock className="text-xl text-gray-700" />
                  <span className="font-bold text-gray-700">2 days</span>
                  <span className="text-gray-500">Starts May 10, 2025</span>
                </div>
                <div className="flex items-center gap-4">
                  <Users className="text-xl text-gray-700" />
                  <span className="font-bold text-gray-700">156 students</span>
                  <span className="text-gray-500">Bold Tumen</span>
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
                  src="/speaking.jpg"
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
              Хэрвээ танд илтгэх ур чадвараа сайжруулах хэрэгцээ байгаа бол бид
              доорх сургалтаараа туслах болно. Манай сургалт мэдлэг онолоос илүү
              дадлага хийж, шууд хэрэгжүүлж ур чадвар олгодог.
            </p>

            <p className="text-base text-gray-600">
              Алсдаа тодорхой зорилготой, өөрийгөө нээх ур чадварын хэрэгцээ
              шаардлагатай хүмүүст сургалтаа санал болгож байна.
            </p>

            <h3 className="text-xl font-bold mt-6">What You’ll Learn</h3>
            <ul className="list-disc pl-6 text-gray-600">
              <li>
                ✅ Өөрийгөө чөлөөтэй илэрхийлэн бусдад итгэл үнэмшил төрүүлэх,
                хоногшил үлдээх.
              </li>
              <li>
                ✅ Цэгцтэй ярих, бусдад нөлөөлж, илтгэлээр дамжуулан бусдыг
                манлайлах.
              </li>
              <li>
                ✅ Илтгэлийн нандин сүнс болох биеийн хэлэмж болон дуу хоолойн
                динамик дээр ажиллах.
              </li>
              <li>✅ Тайзны айдсаа давах чадварыг эзэмшүүлэх болно.</li>
            </ul>
          </section>

          {/* Tabs */}
          <div className="flex mb-8 border-b-2 border-gray-300">
            <button
              className={`tab-button ${
                activeTab === "overview"
                  ? "font-semibold border-b-2 border-black"
                  : ""
              } px-4 py-2 text-lg`}
              onClick={() => handleTabClick("overview")}
            >
              Overview
            </button>
            <button
              className={`tab-button ${
                activeTab === "curriculum"
                  ? "font-semibold border-b-2 border-black"
                  : ""
              } px-4 py-2 text-lg`}
              onClick={() => handleTabClick("curriculum")}
            >
              Curriculum
            </button>
            <button
              className={`tab-button ${
                activeTab === "reviews"
                  ? "font-semibold border-b-2 border-black"
                  : ""
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
              <p className="text-base text-gray-800">
                Эхэн сургалтаар та илтгэх ур чадвараа хөгжүүлж, илүү үр дүнтэй
                илтгэл тавих боломжтой болно.
              </p>
            </section>
          )}

          {activeTab === "curriculum" && (
            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-4">Curriculum</h2>
              <ul className="list-disc pl-6 text-gray-800">
                <li>Introduction to Public Speaking</li>
                <li>Building Confidence</li>
                <li>Mastering Presentation Skills</li>
              </ul>
            </section>
          )}

          {activeTab === "reviews" && (
            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-4">Reviews</h2>
              <p className="text-base text-gray-800">No reviews yet.</p>
            </section>
          )}

          {/* Instructor Info */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Instructor</h2>
            <p className="text-base text-gray-600">
              🧑🏻‍🏫 Сургалт орох багш нар: Г.Одонтуяа Coach Lab-ын Мастер багш
              болон туслах багш нар
            </p>
          </section>

          {/* Contact Information */}
          <section className=" bg-gray-50 p-6 rounded-xl">
            <h2 className="text-2xl font-semibold mb-4">Contact</h2>
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <Phone className="text-xl text-[#0a3b8c]" />
                <span className="text-lg font-semibold">
                  88109363, 99103175
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="text-xl text-[#0a3b8c]" />
                <span className="text-lg font-semibold">May 10-11, 2025</span>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
