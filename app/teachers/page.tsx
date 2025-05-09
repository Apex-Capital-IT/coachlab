"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Users } from "lucide-react";
import Header from "@/components/header";
import Footer from "@/components/footer";

export default function TeachersPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="bg-[#1782e0] rounded-3xl p-8 md:p-10 relative overflow-hidden mb-8">
            <div className="relative z-10 max-w-2xl">
              <div className="inline-flex items-center justify-center p-2 bg-white/20 rounded-full text-white mb-4">
                <Users className="h-6 w-6" />
              </div>
              <h1 className="text-4xl md:text-6xl font-black text-white mb-6">
                БИДНИЙ МЭРГЭЖЛИЙН БАГШ НАР
              </h1>
              <p className="text-lg text-white/90 mb-8">
                Өөрсдийн салбартаа олон жилийн туршлагатай Монголын шилдэг
                мэргэжилтнүүдээс суралц. Бидний багш нар бодит туршлагаа ангид
                авчирдаг.
              </p>
              <Button className="bg-white text-[#1782e0] font-bold rounded-full px-6">
                БАГТ НЭГДЭХ
              </Button>
            </div>

            {/* Decorative Elements */}
            <div className="absolute bottom-6 right-6 flex space-x-2">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                <Users className="h-6 w-6 text-white" />
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
                  <path d="M12 20h9"></path>
                  <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
                </svg>
              </div>
            </div>
          </div>

          {/* Teachers Grid Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {teachers.map((teacher, index) => (
              <TeacherCard key={index} teacher={teacher} index={index} />
            ))}
          </div>

          {/* Join Our Team Section */}
          <div className="mt-12 bg-[#1782e0] rounded-3xl p-8 md:p-10 relative overflow-hidden">
            <div className="relative z-10 max-w-2xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-3xl md:text-4xl font-black text-white mb-6">
                  БИДНИЙ БАГШЛАХ БАГТ НЭГДЭЭРЭЙ
                </h2>
                <p className="text-white mb-8">
                  Та боловсролын талаар сэтгэл гаргадаг бөгөөд өөрчлөлт хийхийг
                  хүсч байна уу? Бид үргэлж авьяаслаг багш нарыг багтаа
                  элсүүлэхийг эрмэлздэг.
                </p>
                <Button
                  className="bg-[white]  text-[#1782e0] font-bold rounded-full px-6 hover:bg-white/80"
                  size="lg"
                  asChild
                >
                  <Link href="/contact">ОДОО БҮРТГҮҮЛЭХ</Link>
                </Button>
              </motion.div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute bottom-6 right-6">
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
                className="h-8 w-8 text-white"
              >
                <path d="M12 3l1.2 2.4L16 6l-2.4 1.2L12 10l-1.2-2.4L8 6l2.4-1.2z"></path>
              </svg>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

// Teacher Card Component
function TeacherCard({ teacher, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="overflow-hidden h-full bg-white rounded-3xl">
        <div className="aspect-[3/4] relative">
          <Image
            src={teacher.image || "/placeholder.svg"}
            fill
            alt={teacher.name}
            className="object-cover"
          />
        </div>
        <CardContent className="p-6">
          <h3 className="text-xl font-bold mb-1">{teacher.name}</h3>
          <p className="text-[#2a7d5f] font-medium mb-3">{teacher.position}</p>
          <p className="text-sm text-muted-foreground mb-4">{teacher.bio}</p>
          <div className="flex space-x-4">
            {teacher.socialLinks?.map((link, i) => (
              <Link
                key={i}
                href={link.url}
                className="text-muted-foreground hover:text-[#2a7d5f]"
              >
                <span className="sr-only">{link.name}</span>
                {link.icon}
              </Link>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

// Sample data with expanded information
const teachers = [
  {
    name: "Э.Чинзориг",
    position: "Үүсгэн байгуулагч, Көүч Лаб ХХК",
    bio: "Э.Чинзориг нь бизнесийн коучинг, манлайлал, зөөлөн ур чадварын чиглэлээр мэргэшсэн сургагч багш бөгөөд Көүч Лаб ХХК болон BNI Mongolia-ийн үүсгэн байгуулагч юм. Тэрээр байгууллагын соёлыг сайжруулах, хамт олны урам зоригийг нэмэгдүүлэх, хувь хүний хөгжлийг дэмжих чиглэлээр олон сургалт, лекц зохион байгуулдаг. Мөн тэрээр олон улсын чанарын удирдлагын тогтолцоо ISO 9001, хэвлэл мэдээллийн салбарын ISAS MEDIA 9001 стандартыг үйл ажиллагаандаа амжилттай нэвтрүүлсэн туршлагатай.",
    image:
      "https://i.ytimg.com/vi/A3ZBeka0a_c/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLD2DGxx76FTyrrIHf5mQ2LTGc4-oA",
    socialLinks: [
      {
        name: "LinkedIn",
        url: "#",
        icon: (
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
            className="h-5 w-5"
          >
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
            <rect x="2" y="9" width="4" height="12"></rect>
            <circle cx="4" cy="4" r="2"></circle>
          </svg>
        ),
      },
    ],
  },
];
