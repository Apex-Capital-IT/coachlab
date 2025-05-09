"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Info, Award, Users, Globe } from "lucide-react";
import Header from "@/components/header";
import Footer from "@/components/footer";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="bg-[#1782e0] rounded-3xl p-8 md:p-10 relative overflow-hidden mb-8">
            <div className="relative z-10 max-w-2xl">
              <div className="inline-flex items-center justify-center p-2 bg-white/20 rounded-full text-white mb-4">
                <Info className="h-6 w-6" />
              </div>
              <h1 className="text-4xl md:text-6xl font-black text-white mb-6">
                КОАЧЛАБ МОНГОЛ ТУХАЙ
              </h1>
              <p className="text-lg text-white/90 mb-8">
                Бидний зорилго бол инновацлаг заах арга, практик ур чадварын
                хөгжүүлэлтээр дамжуулан Монголын боловсролыг хувиргах явдал юм.
              </p>
              <Button className="bg-white text-[#1782e0] font-bold" size="lg">
                БИДНИЙ ТҮҮХ
              </Button>
            </div>

            {/* Decorative Elements */}
            <div className="absolute bottom-6 right-6 flex space-x-2">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                <Info className="h-6 w-6 text-white" />
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

          {/* Our Story Section */}
          <div className="bg-white rounded-3xl p-8 mb-8">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <motion.div
                className="md:w-1/2"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <Image
                  src="https://scontent.fuln6-2.fna.fbcdn.net/v/t39.30808-6/473068913_122185570472088063_8032309013538541302_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=86c6b0&_nc_ohc=p6EYx9UrI5MQ7kNvwFV0tq_&_nc_oc=AdkvoxTwM7_KdkNVJD0dyEIGI6536JHspDj-v7uZDp-ID6eOfV74v_5KbQ6A6eYZlp4&_nc_zt=23&_nc_ht=scontent.fuln6-2.fna&_nc_gid=Oti22jDr-885zrzH3eZHmg&oh=00_AfIbjBIEtV3QLbXddgfIt_TImBwNTeCZS0kTilcWw12Kaw&oe=68233C67"
                  width={600}
                  height={400}
                  alt="КоачЛаб Монгол кампус"
                  className="rounded-xl shadow-lg"
                />
              </motion.div>
              <motion.div
                className="md:w-1/2"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h2 className="text-3xl font-black mb-6">БИДНИЙ ТҮҮХ</h2>
                <p className="text-muted-foreground mb-6">
                  2018 онд байгуулагдсан Коачлаб Монгол нь энгийн зорилготой
                  эхэлсэн: академик мэдлэг болон ажлын байранд шаардлагатай
                  практик ур чадварын хоорондох зайг нөхөх чанартай боловсрол
                  олгохыг зорьж байв.
                </p>
                <p className="text-muted-foreground mb-6">
                  Өнөөдөр бид Монголын боловсролын тэргүүлэх байгууллагуудын нэг
                  болж, 1,000 гаруй төгсөгчид орон нутагт болон олон улсад
                  амжилттай карьер эхлүүлжээ.
                </p>
                <p className="text-muted-foreground">
                  Бидний арга барил нь мэргэжлийн багш нар, практик төслүүд,
                  үйлдвэрлэлийн түншлэлийг хослуулан сурагчдыг орчин үеийн ажлын
                  байрны шаардлагад бэлтгэх явдал юм.
                </p>
              </motion.div>
            </div>
          </div>

          {/* Our Values Section */}
          <div className="bg-gradient-to-br from-[#1782e0] text-white to-[#2a7d5f] rounded-3xl p-8 mb-8">
            <motion.div
              className="text-center max-w-3xl mx-auto mb-12"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-black mb-6">БИДНИЙ ҮНЭТ ЗҮЙЛС</h2>
              <p className="text-white">
                Эдгээр үндсэн зарчмууд КоачЛаб Монголын бүх үйл ажиллагааг
                удирдаж байдаг.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <ValueCard
                icon={<Award className="h-10 w-10" />}
                title="Шилдэг байх"
                description="Бид сурагчдыг бодит сорилтуудад бэлтгэх практик, гарт суурилсан сургалтаар дамжуулан боловсролд шилдэг байхыг эрмэлздэг."
                index={0}
              />
              <ValueCard
                icon={<Users className="h-10 w-10" />}
                title="Нийгэмлэг"
                description="Бид оюутнууд хамтран ажиллаж, санаа бодлоо хуваалцаж, удаан хугацааны мэргэжлийн сүлжээ үүсгэх дэмжлэгт орчин бүрдүүлдэг."
                index={1}
              />
              <ValueCard
                icon={<Globe className="h-10 w-10" />}
                title="Инноваци"
                description="Бид боловсролын практикийн тэргүүн эгнээнд байхын тулд заах аргууд болон хөтөлбөрийн загварт инновацийг дэмждэг."
                index={2}
              />
            </div>
          </div>

          {/* Our Impact Section */}
          <div className="bg-white rounded-3xl p-8 mb-8">
            <motion.div
              className="text-center max-w-3xl mx-auto mb-12"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-black mb-6">БИДНИЙ НӨЛӨӨ</h2>
              <p className="text-muted-foreground">
                Бид Монголын боловсролын салбарт гаргаж буй өөрчлөлтөөрөө
                бахархдаг.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              <StatCard number="1,000+" label="Төгсөгчид" />
              <StatCard number="50+" label="Мэргэжлийн багш нар" />
              <StatCard number="30+" label="Үйлдвэрлэлийн түнш" />
              <StatCard number="95%" label="Ажил эрхлэлтийн хувь" />
            </div>
          </div>

          {/* Team Section */}
          <div className="bg-gradient-to-br from-[#1782e0] to-[#2a7d5f] text-white rounded-3xl p-8 mb-8">
            <motion.div
              className="text-center max-w-3xl mx-auto mb-12"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-black mb-6">УДИРДЛАГЫН БАГ</h2>
              <p className="text-white">
                Бидний байгууллагыг чиглүүлдэг онцгой мэргэжилтнүүдтэй танилц.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {leadershipTeam.map((member, index) => (
                <TeamMemberCard key={index} member={member} index={index} />
              ))}
            </div>
          </div>

          {/* Join Us Section */}
          <div className="bg-gradient-to-br from-[#1782e0] to-[#2a7d5f]  rounded-3xl p-8 md:p-10 relative overflow-hidden">
            <div className="relative z-10 max-w-2xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-3xl md:text-4xl font-black text-white mb-6">
                  БИДНИЙ ХАМТ ОЛОНД НЭГДЭЭРЭЙ
                </h2>
                <p className="text-white mb-8">
                  Та шинэ ур чадвар эзэмших, карьераа ахиулах, эсвэл зүгээр л
                  сонирхлоо судлахыг хүсч байна уу, КоачЛаб Монголд танд
                  зориулсан зүйл бий.
                </p>
                <Button
                  className="bg-[#f5c26b] hover:bg-[#f5c26b]/90 text-[#2a7d5f] font-bold"
                  size="lg"
                  asChild
                >
                  <Link href="/classes">БИДНИЙ ХИЧЭЭЛҮҮДИЙГ СУДЛАХ</Link>
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

// Value Card Component
function ValueCard({ icon, title, description, index }) {
  return (
    <motion.div
      className="bg-white rounded-xl p-8 shadow-sm"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="text-[#2a7d5f] mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </motion.div>
  );
}

// Stat Card Component
function StatCard({ number, label }) {
  return (
    <motion.div
      className="p-6"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <p className="text-4xl font-bold text-[#2a7d5f] mb-2">{number}</p>
      <p className="text-muted-foreground">{label}</p>
    </motion.div>
  );
}

// Team Member Card Component
function TeamMemberCard({ member, index }) {
  return (
    <motion.div
      className="bg-white rounded-xl overflow-hidden shadow-sm"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="aspect-[4/3] relative">
        <Image
          src={member.image || "/placeholder.svg"}
          fill
          alt={member.name}
          className="object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-1">{member.name}</h3>
        <p className="text-[#2a7d5f] font-medium mb-3">{member.position}</p>
        <p className="text-sm text-muted-foreground">{member.bio}</p>
      </div>
    </motion.div>
  );
}

// Sample data
const leadershipTeam = [
  {
    name: "Naranbaatar Sukhbaatar",
    position: "Founder & CEO",
    bio: "With a background in education and technology, Naranbaatar founded CoachLab Mongolia to revolutionize education in the country.",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    name: "Bolormaa Enkhbold",
    position: "Academic Director",
    bio: "Bolormaa oversees curriculum development and ensures all courses meet our high standards for quality and relevance.",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    name: "Batbayar Tumen",
    position: "Operations Director",
    bio: "Batbayar manages the day-to-day operations of CoachLab Mongolia, ensuring everything runs smoothly for students and staff.",
    image: "/placeholder.svg?height=300&width=400",
  },
];
