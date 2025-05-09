"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Calendar,
  Clock,
  GraduationCap,
  Users,
  CheckCircle,
  Star,
} from "lucide-react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

const academyPrograms = [
  {
    id: "personal-development",
    title: "ХУВЬ ХҮНИЙ ХӨГЖИЛ",
    shortDescription: "Хувь хүний хөгжлийн цогц сургалт",
    description:
      "Өөрийгөө илүү сайн таньж, хувь хүний ур чадвараа хөгжүүлэхэд зориулагдсан.",
    additionalInfo:
      "Энэхүү сургалт нь хувь хүний менежмент, зорилго тодорхойлох, өөртөө итгэх итгэл зэрэг сэдвүүдийг хамарна.",
    category: "Софтк скилл",
    level: "Бүх түвшин",
    duration: "8 модуль, 16 цаг",
    icon: Users,
    instructor: "CoachLab Master Teacher",
    curriculum: [
      {
        title: "Өөрийгөө таних",
        duration: "2 цаг",
        lessons: [
          { title: "Өөрийн давуу болон сул тал", duration: "60 мин" },
          { title: "Өөрийгөө үнэлэх", duration: "60 мин" },
        ],
      },
      {
        title: "Зорилго тодорхойлох",
        duration: "2 цаг",
        lessons: [
          { title: "Зорилгоо тодорхойлох арга", duration: "60 мин" },
          { title: "Зорилгодоо хүрэх төлөвлөгөө", duration: "60 мин" },
        ],
      },
    ],
    features: [
      { label: "Модулиуд", value: "8", icon: GraduationCap },
      { label: "Хугацаа", value: "16 цаг", icon: Clock },
      { label: "Түвшин", value: "Бүх түвшин", icon: Users },
    ],
    reviews: [
      {
        name: "Бат-Эрдэнэ",
        avatar: "/placeholder.svg?height=64&width=64",
        bio: "Сургалтын оролцогч",
        text: "Энэхүү сургалт надад өөрийгөө илүү сайн ойлгоход тусалсан. Маш их баярлалаа!",
      },
    ],
  },
  {
    id: "teamwork",
    title: "БАГИЙН АЖИЛЛАГАА",
    duration: "8 модуль, 16 цаг",
    icon: Users,
    description:
      "Багийн ажиллагааны үндсэн зарчим, хамтын ажиллагааг сайжруулах сургалт.",
    curriculum: [
      { title: "Багийн бүтэц", duration: "2 цаг" },
      { title: "Харилцаа ба хамтын ажиллагаа", duration: "2 цаг" },
      { title: "Зөрчил шийдвэрлэх", duration: "2 цаг" },
      { title: "Багийн манлайлал", duration: "2 цаг" },
    ],
    features: [
      { label: "Модулиуд", value: "8", icon: GraduationCap },
      { label: "Хугацаа", value: "16 цаг", icon: Clock },
      { label: "Түвшин", value: "Бүх түвшин", icon: Users },
    ],
  },
  {
    id: "leadership",
    title: "МАНЛАЙЛАЛ",
    duration: "9 модуль, 18 цаг",
    icon: GraduationCap,
    description:
      "Манлайлах ур чадвар, удирдлагын арга барилыг хөгжүүлэх сургалт.",
    curriculum: [
      { title: "Манлайллын үндэс", duration: "2 цаг" },
      { title: "Шийдвэр гаргалт", duration: "2 цаг" },
      { title: "Баг удирдах", duration: "2 цаг" },
      { title: "Хариуцлага ба итгэлцэл", duration: "2 цаг" },
      { title: "Хувийн манлайлал", duration: "2 цаг" },
    ],
    features: [
      { label: "Модулиуд", value: "9", icon: GraduationCap },
      { label: "Хугацаа", value: "18 цаг", icon: Clock },
      { label: "Түвшин", value: "Бүх түвшин", icon: Users },
    ],
  },
  {
    id: "presentation-skills",
    title: "ИЛТГЭХ УРЛАГ",
    duration: "9 модуль, 18 цаг",
    icon: GraduationCap,
    description:
      "Илтгэх урлаг, олон нийтийн өмнө ярих ур чадварыг хөгжүүлэх сургалт.",
    curriculum: [
      { title: "Илтгэлийн бүтэц", duration: "2 цаг" },
      { title: "Ярих ур чадвар", duration: "2 цаг" },
      { title: "Өөртөө итгэх итгэл", duration: "2 цаг" },
      { title: "Сонсогчидтой харилцах", duration: "2 цаг" },
      { title: "Практик дасгал", duration: "2 цаг" },
    ],
    features: [
      { label: "Модулиуд", value: "9", icon: GraduationCap },
      { label: "Хугацаа", value: "18 цаг", icon: Clock },
      { label: "Түвшин", value: "Бүх түвшин", icon: Users },
    ],
  },
  {
    id: "sales",
    title: "БОРЛУУЛАЛТ",
    duration: "8 модуль, 16 цаг",
    icon: GraduationCap,
    description:
      "Борлуулалтын үндсэн арга барил, харилцааны ур чадварыг хөгжүүлэх сургалт.",
    curriculum: [
      { title: "Борлуулалтын үндэс", duration: "2 цаг" },
      { title: "Харилцааны ур чадвар", duration: "2 цаг" },
      { title: "Үйлчлүүлэгчтэй харилцах", duration: "2 цаг" },
      { title: "Борлуулалтын стратеги", duration: "2 цаг" },
    ],
    features: [
      { label: "Модулиуд", value: "8", icon: GraduationCap },
      { label: "Хугацаа", value: "16 цаг", icon: Clock },
      { label: "Түвшин", value: "Бүх түвшин", icon: Users },
    ],
  },
];

export default function AcademyProgramDetail({
  params,
}: {
  params: { id: string };
}) {
  const program = academyPrograms.find((p) => p.id === params.id);
  
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState({
    isSubmitting: false,
    isSuccess: false,
    isError: false,
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmitForm = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      setFormStatus({
        isSubmitting: true,
        isSuccess: false,
        isError: false,
        message: "",
      });
      
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error || 'Something went wrong');
      }
      
      // Reset form on success
      setFormData({
        name: "",
        phone: "",
        email: "",
        message: "",
      });
      
      setFormStatus({
        isSubmitting: false,
        isSuccess: true,
        isError: false,
        message: "Thank you! Your message has been sent successfully.",
      });
      
    } catch (error) {
      console.error('Error submitting form:', error);
      setFormStatus({
        isSubmitting: false,
        isSuccess: false,
        isError: true,
        message: error instanceof Error ? error.message : "Failed to send message. Please try again.",
      });
    }
  };
  
  if (!program) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#f2f0e6]">
        <div className="text-center bg-white rounded-2xl shadow-lg p-10">
          <h1 className="text-2xl font-bold mb-4 text-[#1782e0]">
            Програм олдсонгүй
          </h1>
        </div>
      </div>
    );
  }
  const Icon = program.icon;
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-10 flex flex-col h-full">
            {/* Header Card */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-xl flex flex-col h-full min-h-[600px] justify-between">
              <div>
                <div className="relative h-64 md:h-80 flex items-center justify-center bg-gradient-to-br from-[#1782e0] to-[#2a7d5f]">
                  <div className="flex flex-col items-center justify-center w-full h-full">
                    <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mb-4 shadow-lg">
                      <Icon className="w-12 h-12 text-[#1782e0]" />
                    </div>
                    <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-2 drop-shadow-lg">
                      {program.title}
                    </h1>
                    <div className="flex flex-wrap gap-2 mb-2">
                      <span className="bg-[#2a7d5f] text-white text-xs font-bold px-3 py-1 rounded-full shadow">
                        {program.level}
                      </span>
                      {program.category && (
                        <span className="bg-white/80 text-[#1782e0] text-xs font-bold px-3 py-1 rounded-full shadow">
                          {program.category}
                        </span>
                      )}
                    </div>
                    <p className="text-lg text-white/90 font-medium">
                      {program.duration}
                    </p>
                    {program.instructor && (
                      <p className="text-white/80 mt-2 text-sm">
                        Багш: {program.instructor}
                      </p>
                    )}
                  </div>
                </div>
                <div className="p-8 md:p-12 flex flex-col gap-6">
                  <h2 className="text-2xl font-bold text-[#1782e0]">
                    Програмын тухай
                  </h2>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    {program.description}
                  </p>
                  {program.additionalInfo && (
                    <p className="text-gray-700 text-base">
                      {program.additionalInfo}
                    </p>
                  )}
                  {/* Add more details for each program here if needed */}
                  {program.id === "personal-development" && (
                    <ul className="list-disc pl-5 text-gray-600 text-base space-y-2">
                      <li>
                        Өөрийгөө таних, зорилго тодорхойлох, өөртөө итгэх итгэл
                        зэрэг хувь хүний чухал чадваруудыг хөгжүүлнэ.
                      </li>
                      <li>
                        Менежмент, төлөвлөлт, өөрийгөө үнэлэх, амжилтын зуршил
                        зэрэг сэдвүүдийг хамарна.
                      </li>
                    </ul>
                  )}
                  {program.id === "teamwork" && (
                    <ul className="list-disc pl-5 text-gray-600 text-base space-y-2">
                      <li>
                        Багийн бүтэц, хамтын ажиллагаа, зөрчил шийдвэрлэх,
                        манлайлал зэрэг багийн чухал ур чадваруудыг хөгжүүлнэ.
                      </li>
                      <li>
                        Багийн гишүүдийн үүрэг, харилцаа, итгэлцэл, хамтын
                        шийдвэр гаргалт зэрэг сэдвүүдийг хамарна.
                      </li>
                    </ul>
                  )}
                  {program.id === "leadership" && (
                    <ul className="list-disc pl-5 text-gray-600 text-base space-y-2">
                      <li>
                        Манлайлах ур чадвар, удирдлагын арга барил, шийдвэр
                        гаргалт, баг удирдах зэрэг сэдвүүдийг хамарна.
                      </li>
                      <li>
                        Хариуцлага, итгэлцэл, хувь хүний манлайлал, бусдад
                        нөлөөлөх чадваруудыг хөгжүүлнэ.
                      </li>
                    </ul>
                  )}
                  {program.id === "presentation-skills" && (
                    <ul className="list-disc pl-5 text-gray-600 text-base space-y-2">
                      <li>
                        Илтгэх урлаг, олон нийтийн өмнө ярих, өөртөө итгэх
                        итгэл, сонсогчидтой харилцах чадваруудыг хөгжүүлнэ.
                      </li>
                      <li>
                        Илтгэлийн бүтэц, практик дасгал, илтгэлийн
                        хэрэглэгдэхүүн ашиглах зэрэг сэдвүүдийг хамарна.
                      </li>
                    </ul>
                  )}
                  {program.id === "sales" && (
                    <ul className="list-disc pl-5 text-gray-600 text-base space-y-2">
                      <li>
                        Борлуулалтын үндэс, харилцааны ур чадвар, үйлчлүүлэгчтэй
                        харилцах, борлуулалтын стратеги зэрэг сэдвүүдийг
                        хамарна.
                      </li>
                      <li>
                        Үйлчилгээний стандарт, итгэлцэл, үр дүнтэй харилцаа,
                        борлуулалтын амжилтын арга барилыг хөгжүүлнэ.
                      </li>
                    </ul>
                  )}
                </div>
              </div>
            </div>
          </div>
          {/* Sidebar */}
          <div className="space-y-8">
            {program.features && (
              <div className="bg-white rounded-3xl p-8 shadow-xl border-l-4 border-[#2a7d5f]">
                <h2 className="text-xl font-bold mb-4 text-[#2a7d5f]">
                  Үндсэн үзүүлэлтүүд
                </h2>
                <div className="space-y-4 mb-8">
                  {program.features.map((feature, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-3 py-2 border-b last:border-0"
                    >
                      {feature.icon &&
                        React.createElement(feature.icon, {
                          className: "h-5 w-5 text-[#2a7d5f]",
                        })}
                      <span className="font-medium text-gray-700">
                        {feature.label}:
                      </span>
                      <span className="text-gray-600">{feature.value}</span>
                    </div>
                  ))}
                </div>
                {/* Contact/Help Form */}
                <div className="pt-6 mt-6 border-t border-gray-100">
                  <h2 className="text-xl font-bold mb-6 text-[#1782e0]">
                    Тусламж & Холбоо барих
                  </h2>
                  
                  {formStatus.isSuccess && (
                    <div className="mb-6 p-4 bg-green-100 text-green-800 rounded-lg">
                      {formStatus.message}
                    </div>
                  )}
                  
                  {formStatus.isError && (
                    <div className="mb-6 p-4 bg-red-100 text-red-800 rounded-lg">
                      {formStatus.message}
                    </div>
                  )}
                  
                  <form className="space-y-6" onSubmit={handleSubmitForm}>
                    <div>
                      <label
                        className="block text-sm font-medium mb-1 text-[#2a7d5f]"
                        htmlFor="name"
                      >
                        Нэр
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full border border-[#a7c5e3] rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#1782e0] bg-[#f8fafc]"
                        required
                        disabled={formStatus.isSubmitting}
                      />
                    </div>
                    <div>
                      <label
                        className="block text-sm font-medium mb-1 text-[#2a7d5f]"
                        htmlFor="email"
                      >
                        Имэйл
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full border border-[#a7c5e3] rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#1782e0] bg-[#f8fafc]"
                        required
                        disabled={formStatus.isSubmitting}
                      />
                    </div>
                    <div>
                      <label
                        className="block text-sm font-medium mb-1 text-[#2a7d5f]"
                        htmlFor="phone"
                      >
                        Дугаар
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="text"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full border border-[#a7c5e3] rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#1782e0] bg-[#f8fafc]"
                        required
                        disabled={formStatus.isSubmitting}
                      />
                    </div>
                    <div>
                      <label
                        className="block text-sm font-medium mb-1 text-[#2a7d5f]"
                        htmlFor="message"
                      >
                        Мессеж
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        value={formData.message}
                        onChange={handleInputChange}
                        className="w-full border border-[#a7c5e3] rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#1782e0] bg-[#f8fafc]"
                        required
                        disabled={formStatus.isSubmitting}
                      />
                    </div>
                    <div className="flex justify-end">
                      <button
                        type="submit"
                        className="bg-[#1782e0] text-white font-bold px-10 py-3 rounded-full hover:bg-[#2a7d5f] transition-colors shadow"
                        disabled={formStatus.isSubmitting}
                      >
                        {formStatus.isSubmitting ? "Илгээж байна..." : "Илгээх"}
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
