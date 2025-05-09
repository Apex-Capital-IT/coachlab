"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Clock, Users, Calendar } from "lucide-react";
import Header from "@/components/header";
import Footer from "@/components/footer";

export default function ClassesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="bg-[#1782e0] rounded-3xl p-8 md:p-10 relative overflow-hidden mb-8">
            <div className="relative z-10 max-w-2xl">
              <div className="inline-flex items-center justify-center p-2 bg-white/20 rounded-full text-white mb-4">
                <GraduationCap className="h-6 w-6" />
              </div>
              <h1 className="text-4xl md:text-6xl font-black text-white mb-6">
                БИДНИЙ ХИЧЭЭЛҮҮД
              </h1>
              <p className="text-lg text-white/90 mb-8">
                Орчин цагийн дэлхийд практик ур чадвар бий болгоход зориулсан иж
                бүрэн хичээлүүд. Карьераа ахиулахын тулд олон төрлийн
                хөтөлбөрөөс сонгоорой.
              </p>
              <Button className="bg-white text-[#1782e0] font-bold rounded-full px-6">
                БҮГДИЙГ НЬ ХАРАХ
              </Button>
            </div>

            {/* Decorative Elements */}
            <div className="absolute bottom-6 right-6 flex space-x-2">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                <GraduationCap className="h-6 w-6 text-white" />
              </div>
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
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
                  className="h-6 w-6 text-white"
                >
                  <path d="M12 3l1.2 2.4L16 6l-2.4 1.2L12 10l-1.2-2.4L8 6l2.4-1.2z"></path>
                </svg>
              </div>
            </div>
          </div>

          {/* Single Class Card */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ClassCard classItem={classes[0]} index={0} />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

function ClassCard({ classItem, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="overflow-hidden h-full bg-white rounded-3xl">
        <div className="aspect-video relative">
          <Image
            src={classItem.image || "/placeholder.svg"}
            fill
            alt={classItem.title}
            className="object-cover"
          />
          <div className="absolute top-3 right-3 bg-[#2a7d5f] text-white text-xs font-medium py-1 px-2 rounded-full">
            {classItem.level}
          </div>
        </div>
        <CardContent className="p-6">
          <h3 className="text-xl font-bold mb-2">{classItem.title}</h3>
          <div className="flex flex-wrap gap-3 mb-4">
            <div className="flex items-center text-sm text-muted-foreground">
              <Clock className="h-4 w-4 mr-1" />
              <span>{classItem.duration}</span>
            </div>
            <div className="flex items-center text-sm text-muted-foreground">
              <Users className="h-4 w-4 mr-1" />
              <span>{classItem.students} оюутан</span>
            </div>
            <div className="flex items-center text-sm text-muted-foreground">
              <Calendar className="h-4 w-4 mr-1" />
              <span>{classItem.startDate}</span>
            </div>
          </div>
          <p className="text-sm text-muted-foreground mb-4">
            {classItem.description}
          </p>
          <div className="flex justify-between items-center">
            <span className="font-bold text-lg">{classItem.price}</span>
            <Button
              variant="outline"
              className="rounded-full bg-white hover:bg-white/90 text-[#2a7d5f] font-bold px-4"
              asChild
            >
              <Link href={`/classes/${classItem.id}`}>Дэлгэрэнгүй</Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

const classes = [
  {
    id: "monthly-soft-skills",
    title: "Сар тутмын Софт Удирдлагын Сургалт",
    level: "Бүх түвшин",
    duration: "1 сар",
    students: "156",
    startDate: "2025 оны 7-р сарын 1",
    price: "₮199,990",
    description:
      "Багаараа ажиллах, харилцааны ур чадварыг хөгжүүлэх сар тутмын сургалт. Эдгээр чадварууд нь орчин үеийн ажлын байранд зайлшгүй шаардлагатай ур чадварууд юм.",
    image: "/courseCover.png",
  },
];
