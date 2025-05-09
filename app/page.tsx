"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  GraduationCap,
  User2,
  Users,
  Crown,
  Presentation,
  BadgeDollarSign,
  ArrowDown,
} from "lucide-react";
import Header from "@/components/header";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import Footer from "@/components/footer";

interface Slide {
  title: string;
  description: string;
  image: string;
  link: string;
}

const slides: Slide[] = [
  {
    title: "ИЛТГЭХ УР\nЧАДВАРЫН СУРГАЛТ",
    description: "Learn to code deliciously",
    image: "/speaking.jpg",
    link: "/presentation-skills",
  },
  {
    title: "МАНЛАЙЛАХ УР\nЧАДВАРЫН СУРГАЛТ",
    description: "Master new skills",
    image: "/leadership.jpg",
    link: "/leadership",
  },
];

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [expandedPicks, setExpandedPicks] = useState<boolean[]>([]);
  const [showBannerDetails, setShowBannerDetails] = useState(false);
  const testimonialsRef = useRef<HTMLDivElement>(null);

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

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const togglePick = (index: number) => {
    const newExpandedPicks = [...expandedPicks];
    newExpandedPicks[index] = !newExpandedPicks[index];
    setExpandedPicks(newExpandedPicks);
  };

  const scrollTestimonials = (direction: "left" | "right") => {
    if (testimonialsRef.current) {
      const scrollAmount = 400;
      if (direction === "left") {
        testimonialsRef.current.scrollBy({
          left: -scrollAmount,
          behavior: "smooth",
        });
      } else {
        testimonialsRef.current.scrollBy({
          left: scrollAmount,
          behavior: "smooth",
        });
      }
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="container mx-auto px-4 pt-20">
        <div className="grid grid-cols-1 gap-4 md:gap-6">
          <div className="bg-[#1782e0] rounded-3xl p-8 md:p-10 relative overflow-hidden h-[500px]">
            <div className="absolute left-0 top-0 w-full h-full">
              <Image
                src={slides[currentSlide].image}
                alt="Students learning"
                fill
                className="object-cover object-right transition-opacity duration-500"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#1782e0] to-transparent" />
            </div>

            <div className="relative z-10 justify-between flex flex-col h-full">
              <h1 className="text-5xl md:text-8xl font-black text-white leading-none tracking-tighter hover:text-white/90 transition-colors">
                {slides[currentSlide].title.split(" ").map((word, i) => (
                  <React.Fragment key={i}>
                    {word}
                    {i < slides[currentSlide].title.split(" ").length - 1 && (
                      <br />
                    )}
                  </React.Fragment>
                ))}
              </h1>
              <div className="mt-2">
                <Link href={slides[currentSlide].link}>
                  <Button className="bg-white text-[#1782e0] hover:bg-white/90 px-8 py-6 text-lg font-bold rounded-full transition-colors">
                    Дэлгэрэнгүй
                  </Button>
                </Link>
              </div>
            </div>

            <div className="absolute md:bottom-12 bottom-24 left-1/2 transform -translate-x-1/2 flex z-50 items-center space-x-4">
              <button
                onClick={prevSlide}
                className="w-12 h-12 bg-white/20 hover:bg-white/40 rounded-full flex items-center justify-center text-white transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m15 18-6-6 6-6" />
                </svg>
              </button>
              <button
                onClick={nextSlide}
                className="w-12 h-12 bg-white/20 hover:bg-white/40 rounded-full flex items-center justify-center text-white transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </button>
            </div>

            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    currentSlide === index ? "bg-white" : "bg-white/40"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Top 5 Picks Section */}
        <div className="mt-6 bg-white rounded-3xl p-8">
          <h2 className="text-4xl md:text-5xl font-black text-black leading-tight">
            Онцлох хичээлүүд
          </h2>

          <div className="mt-8 space-y-6">
            {topPicks.map((pick, index) => {
              return (
                <div key={index} className="border-b pb-6 last:border-0">
                  <div
                    className="flex items-center justify-between cursor-pointer"
                    onClick={() => togglePick(index)}
                  >
                    <div className="flex items-center">
                      <div className="md:w-16 md:h-16 w-8 h-8 bg-[#1782e0] rounded-full flex items-center justify-center mr-4">
                        {pick.icon &&
                          React.createElement(pick.icon, {
                            className: "w-8 h-8 px-2 text-white",
                          })}
                      </div>
                      <div>
                        <h3 className="font-bold text-lg">{pick.title}</h3>
                        <p className="text-gray-600">{pick.description}</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="text-right mr-4"></div>
                      <Button
                        className="bg-[#1782e0] hover:bg-[#1782e0]/90 text-white rounded-full px-2 md:px-4 py-2 text-sm"
                        onClick={() => togglePick(index)}
                      >
                        <ArrowDown />
                      </Button>
                    </div>
                  </div>

                  {expandedPicks[index] && (
                    <div className="mt-4 pl-20 pr-4 py-4 bg-gray-50 rounded-xl animate-accordion-down">
                      <h4 className="font-bold mb-2">Course Details</h4>
                      <p className="text-gray-700 mb-3">
                        {pick.fullDescription}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-3">
                        {pick.tags?.map((tag, i) => (
                          <span
                            key={i}
                            className="bg-[#a7c5e3]/30 text-[#2a7d5f] text-xs px-2 py-1 rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="text-sm text-gray-600">
                            Duration: {pick.duration}
                          </p>
                          <p className="text-sm text-gray-600">
                            Level: {pick.level}
                          </p>
                        </div>
                        <Link href={`/classes/${pick.id}`}>
                          <Button className="bg-[#1782e0] hover:bg-[#1782e0]/90 text-white">
                            Дэлгэрэнгүй
                          </Button>
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* CoachLab Academy Image */}
        <div className="mt-6 bg-[#1782e0] rounded-3xl overflow-hidden p-8">
          <div className="mb-12">
            <h2 className="text-5xl font-black text-white">
              Coach Lab
              <br />
              ACADEMY
            </h2>
            <p className="text-2xl text-white/80 mt-2">СУРГАЛТУУД</p>
          </div>
          <div className="flex flex-col gap-4">
            {academyPrograms.map((program, index) => (
              <Link key={index} href={`/academy/${program.id}`}>
                <div className="flex items-center bg-white/10 rounded-xl p-4 hover:bg-white/20 transition-colors duration-200">
                  <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center mr-6 flex-shrink-0">
                    <program.icon className="w-7 h-7 text-[#1782e0]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-white tracking-wider">
                      {program.title}
                    </h3>
                    <p className="text-white/80 tracking-wider">
                      {program.duration}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="mt-6 bg-white text-black border-black border-[1px] rounded-3xl p-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl md:text-4xl font-black text-black">
              WHAT OUR STUDENTS SAY
            </h2>
            <div className="flex space-x-2">
              <button
                onClick={() => scrollTestimonials("left")}
                className="w-10 h-10 bg-white/20 hover:bg-white/40 rounded-full flex items-center justify-center text-black transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m15 18-6-6 6-6" />
                </svg>
              </button>
              <button
                onClick={() => scrollTestimonials("right")}
                className="w-10 h-10 bg-white/20 hover:bg-white/40 rounded-full flex items-center justify-center text-black transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </button>
            </div>
          </div>

          <div className="relative">
            <div
              ref={testimonialsRef}
              className="flex overflow-x-auto pb-4 space-x-6 scroll-smooth no-scrollbar"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-white/90 backdrop-blur p-6 rounded-2xl flex-shrink-0 w-[300px] md:w-[350px]"
                >
                  <div className="flex items-start mb-4">
                    <div className="text-xl font-bold text-gray-400 mr-4">
                      {String(index + 1).padStart(2, "0")}
                    </div>
                    <div>
                      <div className="h-16 w-16 rounded-full overflow-hidden bg-gray-200 mb-3">
                        <Image
                          src={
                            "https://cdn-icons-png.flaticon.com/512/1077/1077114.png" ||
                            testimonial.avatar
                          }
                          alt={testimonial.name}
                          width={64}
                          height={64}
                          className="object-cover"
                        />
                      </div>
                      <h3 className="font-bold text-lg">{testimonial.name}</h3>
                      <p className="text-sm text-gray-600 mb-3">
                        {testimonial.bio}
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-700">{testimonial.text}</p>
                </div>
              ))}
            </div>
            <style jsx>{`
              .no-scrollbar::-webkit-scrollbar {
                display: none;
              }
            `}</style>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="mt-6 bg-white text-black border-black border-[1px] rounded-3xl p-8">
          <h2 className="text-3xl md:text-4xl font-black text-black mb-6">
            Get in Touch
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
          <form onSubmit={handleSubmitForm} className="space-y-4">
            <input
              name="name"
              type="text"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#1782e0]"
              required
              disabled={formStatus.isSubmitting}
            />
            <input
              name="phone"
              type="tel"
              placeholder="Your Phone"
              value={formData.phone}
              onChange={handleInputChange}
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#1782e0]"
              required
              disabled={formStatus.isSubmitting}
            />
            <input
              name="email"
              type="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#1782e0]"
              required
              disabled={formStatus.isSubmitting}
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows={4}
              value={formData.message}
              onChange={handleInputChange}
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#1782e0]"
              required
              disabled={formStatus.isSubmitting}
            />
            <Button
              type="submit"
              className="bg-[#1782e0] hover:bg-[#1782e0]/90 text-white rounded-full px-6 py-3"
              disabled={formStatus.isSubmitting}
            >
              {formStatus.isSubmitting ? "Sending..." : "Send Message"}
            </Button>
          </form>
        </div>

        <Footer />
      </div>

      <Dialog open={showBannerDetails} onOpenChange={setShowBannerDetails}>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold">
              CoachLab Mongolia Courses
            </DialogTitle>
            <DialogDescription>
              Starting from just $12, our courses are designed to fit every
              budget and learning need
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-6 py-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-[#f2f0e6] p-4 rounded-lg">
                <h3 className="font-bold text-lg mb-2">Starter Courses</h3>
                <p className="text-sm text-gray-700 mb-2">
                  Perfect for beginners looking to explore new skills
                </p>
                <ul className="space-y-2">
                  <li className="flex justify-between">
                    <span>Introduction to Programming</span>
                    <span className="font-bold">$12</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Basic Web Design</span>
                    <span className="font-bold">$15</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Digital Marketing Basics</span>
                    <span className="font-bold">$18</span>
                  </li>
                </ul>
              </div>
              <div className="bg-[#a7c5e3]/30 p-4 rounded-lg">
                <h3 className="font-bold text-lg mb-2">Professional Courses</h3>
                <p className="text-sm text-gray-700 mb-2">
                  Comprehensive programs for career advancement
                </p>
                <ul className="space-y-2">
                  <li className="flex justify-between">
                    <span>Full-Stack Web Development</span>
                    <span className="font-bold">$49.99</span>
                  </li>
                  <li className="flex justify-between">
                    <span>UX/UI Design</span>
                    <span className="font-bold">$39.99</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Data Science & Analytics</span>
                    <span className="font-bold">$59.99</span>
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-2">What's Included</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <CheckCircleIcon className="h-5 w-5 text-[#2a7d5f] mr-2" />
                  <span>Expert instruction from industry professionals</span>
                </li>
                <li className="flex items-center">
                  <CheckCircleIcon className="h-5 w-5 text-[#2a7d5f] mr-2" />
                  <span>Hands-on projects and practical assignments</span>
                </li>
                <li className="flex items-center">
                  <CheckCircleIcon className="h-5 w-5 text-[#2a7d5f] mr-2" />
                  <span>Certificate of completion</span>
                </li>
                <li className="flex items-center">
                  <CheckCircleIcon className="h-5 w-5 text-[#2a7d5f] mr-2" />
                  <span>Access to learning community and resources</span>
                </li>
              </ul>
            </div>
            <Button className="bg-[#2a7d5f] hover:bg-[#2a7d5f]/90 text-white">
              <Link href="/classes">Browse All Courses</Link>
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}

// CheckCircle Icon Component
function CheckCircleIcon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
      <polyline points="22 4 12 14.01 9 11.01"></polyline>
    </svg>
  );
}

const academyPrograms = [
  {
    id: "personal-development",
    title: "ХУВЬ ХҮНИЙ ХӨГЖИЛ",
    duration: "8 модуль, 16 цаг",
    icon: User2,
  },
  {
    id: "teamwork",
    title: "БАГИЙН АЖИЛЛАГАА",
    duration: "8 модуль, 16 цаг",
    icon: Users,
  },
  {
    id: "leadership",
    title: "МАНЛАЙЛАЛ",
    duration: "9 модуль, 18 цаг",
    icon: Crown,
  },
  {
    id: "presentation-skills",
    title: "ИЛТГЭХ УРЛАГ",
    duration: "9 модуль, 18 цаг",
    icon: Presentation,
  },
  {
    id: "sales",
    title: "БОРЛУУЛАЛТ",
    duration: "8 модуль, 16 цаг",
    icon: BadgeDollarSign,
  },
];

const topPicks = [
  {
    id: "art-of-speaking",
    title: "Art of Speaking",
    description: "Хоёр өдөр үргэлжилдэг ярих ур чадварын сургалт",
    price: "299.99",
    icon: Presentation,
    fullDescription:
      "Хоёр өдрийн турш үргэлжилдэг ярих ур чадварын сургалт. Энэхүү сургалтаар та илтгэх ур чадвараа хөгжүүлж, илүү үр дүнтэй илтгэл тавих боломжтой болно.",
    duration: "2 days",
    level: "All Levels",
    tags: [
      "Public Speaking",
      "Communication",
      "Presentation Skills",
      "Confidence Building",
    ],
  },
  {
    id: "monthly-soft-skills",
    title: "Сар бүрийн софт скилл сургалтууд",
    description: "Хувь хүний софт скиллийг хөгжүүлэх сургалтууд",
    price: "199.99",
    icon: User2,
    fullDescription:
      "Сар бүр зохион байгуулагддаг хувь хүний софт скиллийг хөгжүүлэх сургалтууд. Энэхүү сургалтаар та харилцааны ур чадвараа сайжруулж, илүү үр дүнтэй ажиллах боломжтой болно.",
    duration: "Monthly",
    level: "All Levels",
    tags: [
      "Soft Skills",
      "Personal Development",
      "Communication",
      "Leadership",
    ],
  },
  {
    id: "teacher-training",
    title: "Сургалт орох багш нарын сургалт",
    description:
      "Coach Lab-ын мастер багш болон туслах багш нарын оролцоотой сургалтууд",
    price: "399.99",
    icon: GraduationCap,
    fullDescription:
      "Coach Lab-ын мастер багш болон туслах багш нарын оролцоотой сургалтууд. Энэхүү сургалтаар та сургалт зохион байгуулах, хэрэгжүүлэх ур чадвараа хөгжүүлэх боломжтой болно.",
    duration: "5 days",
    level: "Advanced",
    tags: [
      "Teaching Skills",
      "Training",
      "Education",
      "Professional Development",
    ],
  },
  {
    id: "social-soft-skills",
    title: "Нийгмийн софт скилл хөгжүүлэх сургалтууд",
    description: "Олон нийтийн софт скиллийг сайжруулах сургалтууд",
    price: "249.99",
    icon: Users,
    fullDescription:
      "Сар бүр зохион байгуулагддаг олон нийтийн софт скиллийг сайжруулах сургалтууд. Энэхүү сургалтаар та нийгмийн харилцааны ур чадвараа хөгжүүлж, илүү үр дүнтэй харилцах боломжтой болно.",
    duration: "Monthly",
    level: "Intermediate",
    tags: ["Social Skills", "Communication", "Networking", "Public Relations"],
  },
  {
    id: "professional-trainer",
    title: "Мэргэжлийн сургагч багшийн ур чадварын сургалт",
    description: "Ахьсан түвшний сургагч багшийн ур чадварыг хөгжүүлэх сургалт",
    price: "499.99",
    icon: Crown,
    fullDescription:
      "Ахьсан түвшний сургагч багшийн ур чадварыг хөгжүүлэх сургалт. Энэхүү сургалтаар та мэргэжлийн сургагч багшийн ур чадвараа хөгжүүлж, илүү үр дүнтэй сургалт зохион байгуулах боломжтой болно.",
    duration: "7 days",
    level: "Advanced",
    tags: [
      "Professional Training",
      "Teaching Skills",
      "Education",
      "Leadership",
    ],
  },
];

const testimonials = [
  {
    name: "Батбаяр Т.",
    avatar:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-05-05%20at%2010.54.16-oIMi8hNqjsw2WDndhsSfwWsbQHOWMP.png",
    bio: "Вэб хөгжүүлэлтийн төгсөгч",
    text: "Багш нар маш чадварлаг, хичээлийн агуулга нь бодит хэрэглээнд тулгуурласан байсан. Төгсөөд шууд ажлын санал авсан!",
  },
  {
    name: "Оюунгэрэл Д.",
    avatar:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-05-05%20at%2010.54.16-oIMi8hNqjsw2WDndhsSfwWsbQHOWMP.png",
    bio: "UX/UI дизайны суралцагч",
    text: "CoachLab надад уламжлалт зураачаас дижитал дизайнер болох шилжилт хийхэд тусалсан. Нийтлэг орчин нь гайхалтай.",
  },
  {
    name: "Гантулга Б.",
    avatar:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-05-05%20at%2010.54.16-oIMi8hNqjsw2WDndhsSfwWsbQHOWMP.png",
    bio: "Өгөгдлийн шинжлэх ухааны төгсөгч",
    text: "Бодит төсөл дээр ажилласнаар их сургуульд авч чадаагүй туршлагыг олж авсан. Сурч хөгжих хүсэлтэй хүнд бол заавал зөвлөе!",
  },
  {
    name: "Энхжаргал Д.",
    avatar:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-05-05%20at%2010.54.16-oIMi8hNqjsw2WDndhsSfwWsbQHOWMP.png",
    bio: "Мобайл хөгжүүлэлтийн суралцагч",
    text: "Мобайл хөгжүүлэлтийн курс яг л надад хэрэгтэй зүйл байсан. Багш нар байнга тусалдаг, асуух зүйлээ төвөггүй асууж болдог.",
  },
  {
    name: "Цогт Н.",
    avatar:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-05-05%20at%2010.54.16-oIMi8hNqjsw2WDndhsSfwWsbQHOWMP.png",
    bio: "Дижитал маркетингийн төгсөгч",
    text: "Сургалтаас сурсан аргуудыг би шууд өөрийн бизнестээ ашиглаж чадсан. Үнэхээр үр өгөөжтэй сургалт байлаа!",
  },
  {
    name: "Сараа Б.",
    avatar:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-05-05%20at%2010.54.16-oIMi8hNqjsw2WDndhsSfwWsbQHOWMP.png",
    bio: "UX/UI дизайны төгсөгч",
    text: "Дизайны зарчмуудыг ойлгож авснаар миний ажлын хандлага огцом өөрчлөгдсөн. Одоо миний портфолио бүрэн шинэчлэгдсэн!",
  },
  {
    name: "Наранбаатар С.",
    avatar:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-05-05%20at%2010.54.16-oIMi8hNqjsw2WDndhsSfwWsbQHOWMP.png",
    bio: "Өгөгдлийн шинжлэх ухааны суралцагч",
    text: "Өмнө нь код бичиж үзээгүй байсан ч алхам алхмаар заадаг хөтөлбөрийн ачаар бодит төсөл хийж чадсан.",
  },
  {
    name: "Болормаа Э.",
    avatar:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-05-05%20at%2010.54.16-oIMi8hNqjsw2WDndhsSfwWsbQHOWMP.png",
    bio: "Вэб хөгжүүлэлтийн төгсөгч",
    text: "Би багш мэргэжлээс вэб хөгжүүлэлт рүү бүрэн шилжсэн. 3 сарын дотор хэд хэдэн ажлын санал авсан!",
  },
  {
    name: "Батбаяр Т.",
    avatar:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-05-05%20at%2010.54.16-oIMi8hNqjsw2WDndhsSfwWsbQHOWMP.png",
    bio: "Мобайл хөгжүүлэлтийн төгсөгч",
    text: "Төслүүд нь сорилттой хэрнээ сэтгэл ханамжтай байсан. Миний портфолио одоо хэд хэдэн апптай болсон.",
  },
  {
    name: "Дэлгэрмаа О.",
    avatar:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-05-05%20at%2010.54.16-oIMi8hNqjsw2WDndhsSfwWsbQHOWMP.png",
    bio: "Дижитал маркетингийн суралцагч",
    text: "Багш нар жинхэнэ кейс дээр тулгуурласан жишээгээр заадаг тул ойлгоход амархан, хэрэгжүүлэхэд үр дүнтэй байсан.",
  },
];
