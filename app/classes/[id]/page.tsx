"use client";

import { useState } from "react";
import Image from "next/image";
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

import { useParams } from "next/navigation";

export default function CourseDetailPage() {
  const params = useParams();
  const courseId = Array.isArray(params.id) ? params.id[0] : params.id;
  const course = courses.find((course) => course.id === courseId) || courses[0];
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Course Header */}
          <div className="bg-white rounded-3xl overflow-hidden shadow-lg">
            <div className="relative h-64 md:h-80">
              <Image
                src={"/courseCover.png" || course.coverImage}
                alt={course.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <div className="p-6 md:p-10 text-white">
                  <div className="flex items-center mb-2">
                    <span className="bg-[#2a7d5f] text-white text-xs font-bold px-2 py-1 rounded-full mr-2">
                      {course.level}
                    </span>
                    <span className="text-xs font-medium">
                      {course.category}
                    </span>
                  </div>
                  <h1 className="text-3xl md:text-4xl font-bold mb-2">
                    {course.title}
                  </h1>
                  <p className="text-lg text-white/90 max-w-2xl">
                    {course.shortDescription}
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 md:p-10">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div className="flex flex-wrap gap-6">
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 text-[#2a7d5f] mr-2" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-5 w-5 text-[#2a7d5f] mr-2" />
                    <span>Starts {course.startDate}</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="h-5 w-5 text-[#2a7d5f] mr-2" />
                    <span>{course.students} students</span>
                  </div>
                  <div className="flex items-center">
                    <GraduationCap className="h-5 w-5 text-[#2a7d5f] mr-2" />
                    <span>{course.instructor}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Course Content */}
          <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="bg-white rounded-3xl p-6 md:p-8 shadow-lg">
                <Tabs
                  value={activeTab}
                  onValueChange={setActiveTab}
                  className="w-full"
                >
                  <TabsList className="grid grid-cols-3 mb-8">
                    <TabsTrigger value="overview">Overview</TabsTrigger>
                    <TabsTrigger value="curriculum">Curriculum</TabsTrigger>
                    <TabsTrigger value="reviews">Reviews</TabsTrigger>
                  </TabsList>

                  <TabsContent value="overview" className="space-y-6">
                    <div>
                      <h2 className="text-2xl font-bold mb-4">
                        About This Course
                      </h2>
                      <p className="text-gray-700 mb-4">{course.description}</p>
                      <p className="text-gray-700">{course.additionalInfo}</p>
                    </div>

                    <div>
                      <h2 className="text-2xl font-bold mb-4">
                        What You'll Learn
                      </h2>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {course.learningOutcomes.map((outcome, index) => (
                          <div key={index} className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-[#2a7d5f] mr-2 mt-0.5 flex-shrink-0" />
                            <span>{outcome}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h2 className="text-2xl font-bold mb-4">Requirements</h2>
                      <ul className="list-disc pl-5 space-y-2">
                        {course.requirements.map((req, index) => (
                          <li key={index}>{req}</li>
                        ))}
                      </ul>
                    </div>
                  </TabsContent>

                  <TabsContent value="curriculum" className="space-y-6">
                    <h2 className="text-2xl font-bold mb-4">
                      Course Curriculum
                    </h2>
                    <div className="space-y-4">
                      {course.curriculum.map((module, index) => (
                        <div
                          key={index}
                          className="border rounded-lg overflow-hidden"
                        >
                          <div className="bg-gray-50 p-4 font-medium flex justify-between items-center">
                            <div>
                              Module {index + 1}: {module.title}
                            </div>
                            <div className="text-sm text-gray-500">
                              {module.duration}
                            </div>
                          </div>
                          <div className="p-4 space-y-3">
                            {module.lessons.map((lesson, lessonIndex) => (
                              <div
                                key={lessonIndex}
                                className="flex justify-between items-center py-2 border-b last:border-0"
                              >
                                <div className="flex items-center">
                                  <span className="w-6 h-6 rounded-full bg-[#a7c5e3]/30 text-[#2a7d5f] flex items-center justify-center text-xs mr-3">
                                    {lessonIndex + 1}
                                  </span>
                                  {lesson.title}
                                </div>
                                <div className="text-sm text-gray-500">
                                  {lesson.duration}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </TabsContent>

                  <TabsContent value="reviews" className="space-y-6">
                    <div className="flex items-center justify-between mb-6">
                      <h2 className="text-2xl font-bold">Student Reviews</h2>
                      <div className="flex items-center">
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className="h-5 w-5 text-[#f5c26b] fill-[#f5c26b]"
                            />
                          ))}
                        </div>
                        <span className="ml-2 font-medium">
                          {course.rating} course rating
                        </span>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {course.reviews.map((review, index) => (
                        <div key={index} className="bg-gray-50 rounded-xl p-6">
                          <div className="flex items-start mb-4">
                            <div className="text-xl font-bold text-gray-400 mr-4">
                              {String(index + 1).padStart(2, "0")}
                            </div>
                            <div>
                              <div className="h-16 w-16 rounded-full overflow-hidden bg-gray-200 mb-3">
                                <Image
                                  src={
                                    review.avatar ||
                                    "/placeholder.svg?height=64&width=64"
                                  }
                                  alt={review.name}
                                  width={64}
                                  height={64}
                                  className="object-cover"
                                />
                              </div>
                              <h3 className="font-bold text-lg">
                                {review.name}
                              </h3>
                              <p className="text-sm text-gray-600 mb-3">
                                {review.bio}
                              </p>
                            </div>
                          </div>
                          <p className="text-gray-700">{review.text}</p>
                        </div>
                      ))}
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
            </div>

            <div>
              <div className="bg-white rounded-3xl p-6 shadow-lg sticky top-24">
                <h2 className="text-xl font-bold mb-4">Course Features</h2>
                <div className="space-y-4">
                  {course.features.map((feature, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center py-2 border-b last:border-0"
                    >
                      <div className="flex items-center">
                        {feature.icon}
                        <span className="ml-2">{feature.label}</span>
                      </div>
                      <div className="font-medium">{feature.value}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Related Courses */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold mb-6">Санал болгох сургалтууд</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedCourses.map((course, index) => (
                <Link href={`/classes/${course.id}`} key={index}>
                  <div className="bg-white rounded-xl overflow-hidden shadow-lg transition-transform hover:scale-[1.02]">
                    <div className="relative h-48">
                      <Image
                        src={course.image || "/placeholder.svg"}
                        alt={course.title}
                        fill
                        className="object-contain"
                      />
                      <div className="absolute top-3 right-3 bg-primary text-primary-foreground text-xs font-medium py-1 px-2 rounded">
                        {course.level}
                      </div>
                    </div>
                    <div className="p-5">
                      <h3 className="font-bold text-lg mb-2">{course.title}</h3>
                      <div className="flex items-center text-sm text-muted-foreground mb-3">
                        <Clock className="h-4 w-4 mr-1" />
                        <span>{course.duration}</span>
                        <span className="mx-2">•</span>
                        <span>{course.students} students</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="font-bold text-lg">
                          {course.price}
                        </span>
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-4 w-4 ${
                                i < Math.floor(course.rating)
                                  ? "text-[#f5c26b] fill-[#f5c26b]"
                                  : "text-gray-300"
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

const courses = [
  {
    id: "monthly-soft-skills",
    title: "Сар тутмын Софт Удирдлагын Сургалт",
    shortDescription:
      "Багаараа ажиллах, харилцааны ур чадварыг хөгжүүлэх сар тутмын сургалт",
    description:
      "Энэхүү сар бүрийн софт ур чадварын сургалт нь таны удирдлага, харилцаа, багийн хамтын ажиллагаа, хямрал шийдвэрлэх зэрэг чадваруудыг хөгжүүлэхэд туслах болно.",
    additionalInfo:
      "Сургалт нь мөн бодит амьдралын жишээнүүд, практик дасгалууд, болон мэргэжлийн зөвлөгөөнүүдийг багтаасан бөгөөд энэ нь таны софт ур чадварыг сайжруулахад шаардлагатай бүхнийг олгоно.",
    category: "Харилцаа холбоо",
    level: "Бүх түвшин",
    price: "199.99",
    duration: "1 сар",
    startDate: "2025 оны 7-р сарын 1",
    students: "156",
    instructor: "Болд Түмэн",
    rating: 4.9,
    coverImage: "/placeholder.svg?height=400&width=1200",
    learningOutcomes: [
      "Багийн удирдлага, зохион байгуулалт",
      "Сайн харилцаа үүсгэх болон хадгалах",
      "Шийдвэр гаргалт, хямрал шийдвэрлэх ур чадвар",
      "Багаар ажиллах чадварын сайжруулалт",
      "Амжилттай харилцааны стратегиудыг эзэмших",
      "Хүмүүсийн хооронд итгэлцэл үүсгэх",
      "Сайн сонсох болон хариу үйлдэл хийх ур чадвар",
      "Асуудлыг шийдвэрлэх болон амжилттай ажиллах арга барил",
      "Өөрийн сэтгэл санаа, стрессийг удирдах",
    ],
    requirements: [
      "Сургалтад оролцох хүсэл эрмэлзэл",
      "Харилцааны ур чадварын талаар анхан шатны мэдлэгтэй байвал сайн",
      "Групп болон хичээлд оролцох боломжтой байх",
      "Суралцахад идэвхитэй хандлага",
    ],
    curriculum: [
      {
        title: "Харилцааны Үндэс",
        duration: "1 долоо хоног",
        lessons: [
          { title: "Харилцааны төрлүүд", duration: "45 мин" },
          { title: "Эерэг харилцаа үүсгэх", duration: "60 мин" },
          { title: "Сайн сонсох ур чадвар", duration: "60 мин" },
          { title: "Итгэлцэл үүсгэх арга", duration: "45 мин" },
          { title: "Өөрийгөө илэрхийлэх ур чадвар", duration: "30 мин" },
        ],
      },
      {
        title: "Багийн Ажил, Удирдлага",
        duration: "1 долоо хоног",
        lessons: [
          { title: "Багийн удирдлагын зарчим", duration: "45 мин" },
          { title: "Багийн сэтгэл зүйг ойлгох", duration: "60 мин" },
          { title: "Тамирчин сэтгэлгээ ба харилцаа", duration: "45 мин" },
          {
            title: "Асуудал шийдвэрлэх, хямралын үеийн шийдвэр",
            duration: "60 мин",
          },
          { title: "Эерэг эрсдэл даах чадвар", duration: "45 мин" },
        ],
      },
      {
        title: "Хувийн Харилцаа ба Сэтгэлзүй",
        duration: "1 долоо хоног",
        lessons: [
          { title: "Хувийн харилцааны ур чадвар", duration: "45 мин" },
          { title: "Эерэг сэтгэл санааг хадгалах", duration: "60 мин" },
          { title: "Өөрийгөө танин мэдэх", duration: "45 мин" },
          { title: "Өөрийн сэтгэл зүйг удирдах", duration: "60 мин" },
        ],
      },
    ],
    features: [
      {
        label: "Хичээл",
        value: "12",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-[#2a7d5f]"
          >
            <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
            <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
          </svg>
        ),
      },
      {
        label: "Хугацаа",
        value: "1 сар",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-[#2a7d5f]"
          >
            <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
            <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
          </svg>
        ),
      },
      {
        label: "Түвшин",
        value: "Бүх түвшин",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-[#2a7d5f]"
          >
            <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
          </svg>
        ),
      },
      {
        label: "Хэл",
        value: "Монгол",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-[#2a7d5f]"
          >
            <path d="M21.54 15H17a2 2 0 0 0-2 2v4.54"></path>
            <path d="M7 3.34V5a3 3 0 0 0 3 3h0a2 2 0 0 1 2 2v0c0 1.1.9 2 2 2h0a2 2 0 0 0 2-2v0c0-1.1.9-2 2-2h0a2 2 0 0 0 2-2v0c0-1.1.9-2 2-2h.46"></path>
            <path d="M2 14.5A2.5 2.5 0 0 0 4.5 17h0A2.5 2.5 0 0 0 7 14.5v-6a2.5 2.5 0 0 1 5 0v0"></path>
          </svg>
        ),
      },
      {
        label: "Сертификат",
        value: "Тийм",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-[#2a7d5f]"
          >
            <circle cx="12" cy="8" r="7"></circle>
            <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
          </svg>
        ),
      },
      {
        label: "Хандалт",
        value: "1 сар",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-[#2a7d5f]"
          >
            <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
            <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
          </svg>
        ),
      },
    ],
    reviews: [
      {
        name: "Түмэн Болд",
        avatar: "/placeholder.svg?height=64&width=64",
        bio: "Түмэн бол маркетингийн менежер бөгөөд энэ сургалтаар илтгэл тавих ур чадвараа сайжруулахыг хүссэн.",
        text: "Энэ курс нь миний илтгэх ур чадварыг олон дахин сайжруулсан. Сургалт нь үнэхээр амжилттай бөгөөд багш нарын санал бодол үнэхээр хэрэгтэй байсан.",
      },
      {
        name: "Сараа Ганболд",
        avatar: "/placeholder.svg?height=64&width=64",
        bio: "Сараа бол оюутан бөгөөд энэ сургалтаар академик илтгэл тавих ур чадвараа сайжруулахыг хүссэн.",
        text: "Энэхүү сургалт нь илтгэл тавих техникийн талаар маш олон хэрэгтэй мэдлэгийг өгсөн. Сургалтын багшийн өгсөн санал маш сайн байсан.",
      },
    ],
  },
  {
    id: "art-of-speaking",
    title: "Art of Speaking",
    shortDescription: "Хоёр өдрийн турш үргэлжилдэг ярих ур чадварын сургалт",
    description:
      "Энэхүү сургалтаар та илтгэх ур чадвараа хөгжүүлж, илүү үр дүнтэй илтгэл тавих боломжтой болно.",
    additionalInfo:
      "Сургалт нь практик дасгал, бодит жишээ, болон таны илтгэлийг сайжруулах зөвлөгөөг агуулна.",
    category: "Communication",
    level: "All Levels",
    price: "299.99",
    duration: "2 days",
    startDate: "July 1, 2024",
    students: "156",
    instructor: "Bold Tumen",
    rating: 4.9,
    coverImage: "/placeholder.svg?height=400&width=1200",
    learningOutcomes: [
      "Илтгэл тавих ур чадварыг хөгжүүлэх",
      "Самбар дээр илтгэх техникийг эзэмших",
      "Хариу үйлдэл хүлээн авах, хариулах ур чадварыг сайжруулах",
      "Илтгэлийн бүтэц, агуулгыг зөв зохицуулах",
      "Илтгэлийн хэлбэр, агуулгыг сайжруулах",
      "Илтгэлийн цагийг зөв удирдах",
      "Илтгэлийн хэрэглэгдэхүүнийг зөв ашиглах",
      "Илтгэлийн амжилтыг хэмжих",
    ],
    requirements: [
      "Сургалтад оролцох хүсэл эрмэлзэл",
      "Илтгэл тавих туршлага байхгүй байж болно",
      "Хоёр өдрийн турш сургалтад оролцох боломж",
      "Илтгэл тавих дасгал хийх хүсэл",
    ],
    curriculum: [
      {
        title: "Илтгэлийн үндэс",
        duration: "1 өдөр",
        lessons: [
          { title: "Илтгэлийн төрлүүд", duration: "45 мин" },
          { title: "Илтгэлийн бүтэц", duration: "60 мин" },
          { title: "Илтгэлийн агуулга", duration: "60 мин" },
          { title: "Илтгэлийн хэлбэр", duration: "45 мин" },
          { title: "Илтгэлийн цаг", duration: "30 мин" },
        ],
      },
      {
        title: "Илтгэлийн техник",
        duration: "1 өдөр",
        lessons: [
          { title: "Илтгэлийн хэрэглэгдэхүүн", duration: "45 мин" },
          { title: "Илтгэлийн дасгал", duration: "60 мин" },
          { title: "Илтгэлийн хариу үйлдэл", duration: "45 мин" },
          { title: "Илтгэлийн амжилт", duration: "30 мин" },
          { title: "Илтгэлийн дүгнэлт", duration: "30 мин" },
        ],
      },
    ],
    features: [
      {
        label: "Хичээл",
        value: "10",
        icon: <GraduationCap className="h-5 w-5 text-[#2a7d5f]" />,
      },
      {
        label: "Хугацаа",
        value: "2 өдөр",
        icon: <Clock className="h-5 w-5 text-[#2a7d5f]" />,
      },
      {
        label: "Түвшин",
        value: "Бүх түвшин",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-[#2a7d5f]"
          >
            <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
          </svg>
        ),
      },
      {
        label: "Хэл",
        value: "Монгол",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-[#2a7d5f]"
          >
            <path d="M21.54 15H17a2 2 0 0 0-2 2v4.54"></path>
            <path d="M7 3.34V5a3 3 0 0 0 3 3h0a2 2 0 0 1 2 2v0c0 1.1.9 2 2 2h0a2 2 0 0 0 2-2v0c0-1.1.9-2 2-2h0a2 2 0 0 0 2-2v0c0-1.1.9-2 2-2h.46"></path>
            <path d="M2 14.5A2.5 2.5 0 0 0 4.5 17h0A2.5 2.5 0 0 0 7 14.5v-6a2.5 2.5 0 0 1 5 0v0"></path>
          </svg>
        ),
      },
      {
        label: "Сертификат",
        value: "Тийм",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-[#2a7d5f]"
          >
            <circle cx="12" cy="8" r="7"></circle>
            <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
          </svg>
        ),
      },
      {
        label: "Хандалт",
        value: "2 өдөр",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-[#2a7d5f]"
          >
            <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
            <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
          </svg>
        ),
      },
    ],
    reviews: [
      {
        name: "Tumen Bold",
        avatar: "/placeholder.svg?height=64&width=64",
        bio: "Tumen is a marketing manager who took the course to improve his presentation skills.",
        text: "This course completely transformed how I approach public speaking. The practical exercises and feedback were invaluable. I now feel much more confident presenting to large groups.",
      },
      {
        name: "Saraa Ganbold",
        avatar: "/placeholder.svg?height=64&width=64",
        bio: "Saraa is a university student who wanted to improve her academic presentation skills.",
        text: "The course provided excellent techniques for structuring presentations and engaging with the audience. The instructor's feedback was very helpful in identifying areas for improvement.",
      },
    ],
  },
  {
    id: "teacher-training",
    title: "Багшийн Сургалт",
    shortDescription:
      "Багш нарын хувьд заах арга, сэтгэлзүй, болон сэтгүүл зүйн ур чадварын сургалт",
    description:
      "Энэхүү багшийн сургалт нь заах ур чадварыг сайжруулах, сурагчидтай харилцах чадварыг хөгжүүлэх, болон багшийн сэтгэлзүйг тогтворжуулах зорилготой.",
    additionalInfo:
      "Сургалт нь практик дасгалууд, бодит амьдралын жишээнүүд, болон багшийн хоорондын харилцааг сайжруулах зөвлөгөө өгөх болно.",
    category: "Багшийн хөгжил",
    level: "Дунд түвшин",
    price: "249.99",
    duration: "4 сар",
    startDate: "2025 оны 8-р сарын 1",
    students: "120",
    instructor: "Сарантуяа Дэмчиг",
    rating: 4.8,
    coverImage: "/placeholder.svg?height=400&width=1200",
    learningOutcomes: [
      "Багшлах арга зүйг сайжруулах",
      "Сурагчдыг илүү үр дүнтэй удирдах",
      "Сэтгэл зүйг удирдах",
      "Илтгэл тавих ур чадварыг сайжруулах",
      "Сурагчийн амжилтыг хүлээн авах",
    ],
    requirements: [
      "Багшлах хүсэл эрмэлзэл",
      "Сурагчдын хооронд харилцан үйл ажиллагаа явуулах боломжтой байх",
      "Өөрийгөө сайжруулах хүсэлтэй байх",
    ],
    curriculum: [
      {
        title: "Багшлах Арга",
        duration: "1 сар",
        lessons: [
          { title: "Багшлах арга зүй", duration: "60 мин" },
          { title: "Сурагчдыг урамшуулах", duration: "45 мин" },
          { title: "Сурагчийн амжилтыг хүлээн авах", duration: "60 мин" },
        ],
      },
      {
        title: "Сэтгэл зүй ба Сурагчийн Харилцаа",
        duration: "2 сар",
        lessons: [
          { title: "Сэтгэл зүйг удирдах", duration: "60 мин" },
          { title: "Сурагчдын хооронд харилцаа", duration: "45 мин" },
        ],
      },
    ],
    features: [
      {
        label: "Хичээл",
        value: "8",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-[#2a7d5f]"
          >
            <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
            <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
          </svg>
        ),
      },
      {
        label: "Хугацаа",
        value: "4 сар",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-[#2a7d5f]"
          >
            <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
            <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
          </svg>
        ),
      },
      {
        label: "Түвшин",
        value: "Дунд түвшин",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-[#2a7d5f]"
          >
            <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
          </svg>
        ),
      },
    ],
    reviews: [
      {
        name: "Батсайхан Амар",
        avatar: "/placeholder.svg?height=64&width=64",
        bio: "Батсайхан бол багш бөгөөд сурагчдын удирдлагын арга зүйг сайжруулахыг хүссэн.",
        text: "Сургалт миний багшлах арга зүйг сайжруулсан. Багш нарын хамтын ажиллагаа маш сайн байсан бөгөөд сургалт нь үнэхээр хэрэгтэй байсан.",
      },
    ],
  },
  {
    id: "social-soft-skills",
    title: "Нийгмийн Софт Ур Чадвар",
    shortDescription:
      "Харилцааны чадвар, нийгэмд тохиромжтой үйлдэл хийх, болон стрессийн удирдлагыг сайжруулах сургалт",
    description:
      "Энэхүү сургалт нь харилцааны ур чадварыг хөгжүүлэх, нийгэмд тохиромжтой үйлдэл хийх, болон стрессийг удирдах чадварыг сайжруулахад чиглэгдэнэ.",
    additionalInfo:
      "Сургалт нь стресс удирдах, эерэг харилцаа үүсгэх, болон эерэг амжилттай нийгэмд зохицох зөвлөмжүүдийг агуулна.",
    category: "Нийгмийн ур чадвар",
    level: "Бүх түвшин",
    price: "159.99",
    duration: "1 сар",
    startDate: "2025 оны 9-р сарын 15",
    students: "240",
    instructor: "Жаргал Баяр",
    rating: 4.7,
    coverImage: "/placeholder.svg?height=400&width=1200",
    learningOutcomes: [
      "Нийгмийн харилцаанд эерэг хандлага үүсгэх",
      "Стресс удирдах чадварыг сайжруулах",
      "Нийгэмд тохиромжтой шийдвэр гаргах",
      "Өөрийн сэтгэл санааг удирдах",
    ],
    requirements: [
      "Суралцах хүсэл эрмэлзэл",
      "Багаар ажиллах чадвартай байх",
      "Өөрийгөө хөгжүүлэх хүсэлтэй байх",
    ],
    curriculum: [
      {
        title: "Нийгмийн Харилцаа",
        duration: "1 сар",
        lessons: [
          { title: "Эерэг харилцаа үүсгэх", duration: "45 мин" },
          { title: "Нийгэмд тохиромжтой үйлдэл", duration: "60 мин" },
          { title: "Хариу үйлдэл хийх ур чадвар", duration: "60 мин" },
        ],
      },
      {
        title: "Стрессийн Удирдлага",
        duration: "1 сар",
        lessons: [
          { title: "Стрессийн удирдлагын арга", duration: "45 мин" },
          { title: "Сэтгэл санаагаа удирдах", duration: "60 мин" },
        ],
      },
    ],
    features: [
      {
        label: "Хичээл",
        value: "6",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-[#2a7d5f]"
          >
            <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
            <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
          </svg>
        ),
      },
      {
        label: "Хугацаа",
        value: "1 сар",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-[#2a7d5f]"
          >
            <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
            <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
          </svg>
        ),
      },
    ],
    reviews: [
      {
        name: "Ганбат Ням",
        avatar: "/placeholder.svg?height=64&width=64",
        bio: "Ганбат бол нийгмийн ажилтан бөгөөд энэ сургалтаар нийгэмд хэрхэн илүү сайн зохицох талаар мэдлэгээ нэмэгдүүлэхийг хүссэн.",
        text: "Сургалт маш хэрэгтэй байсан. Нийгмийн харилцаанд эерэг хандлага үүсгэх, стресс удирдах ур чадварыг маш сайхан зааж өгсөн.",
      },
    ],
  },
  {
    id: "professional-trainer",
    title: "Мэргэжлийн Багшийн Сургалт",
    shortDescription:
      "Мэргэжлийн багш болохын тулд шаардлагатай ур чадварыг хөгжүүлэх сургалт",
    description:
      "Энэхүү мэргэжлийн багшийн сургалт нь багшийн анхан шатны ур чадварыг олгох, мэргэжлийн багш болохоор суралцах арга зүйг танилцуулах зорилготой.",
    additionalInfo:
      "Сургалт нь практик дасгал, бодит амьдралын жишээнүүдийг агуулсан бөгөөд мэргэжлийн багш болох ур чадварыг хөгжүүлэхэд туслах болно.",
    category: "Мэргэжлийн Багш",
    level: "Дунд түвшин",
    price: "349.99",
    duration: "3 сар",
    startDate: "2025 оны 10-р сарын 10",
    students: "175",
    instructor: "Төмөрбат Сайнбаяр",
    rating: 4.7,
    coverImage: "/placeholder.svg?height=400&width=1200",
    learningOutcomes: [
      "Мэргэжлийн багшийн ур чадварыг эзэмших",
      "Өөрийн заах арга зүйг боловсронгуй болгох",
      "Сурагчдын идэвхийг нэмэгдүүлэх",
      "Багшлах сэтгэл зүйг удирдах",
      "Тамирчин сэтгэлгээ болон сэтгэл зүйг ойлгох",
    ],
    requirements: [
      "Багшлах хүсэл эрмэлзэл",
      "Сурагчдын сэтгэл зүйг ойлгох чадвартай байх",
      "Мэргэжлийн багш болох зорилготой байх",
    ],
    curriculum: [
      {
        title: "Мэргэжлийн Багшийн Ур Чадвар",
        duration: "1 сар",
        lessons: [
          { title: "Багшлах арга зүй", duration: "60 мин" },
          { title: "Сурагчийн сэтгэл зүйг удирдах", duration: "45 мин" },
        ],
      },
      {
        title: "Практик Дасгал",
        duration: "2 сар",
        lessons: [
          { title: "Сургалт зохион байгуулах", duration: "60 мин" },
          { title: "Багшийн сэтгэл зүйг тогтворжуулах", duration: "45 мин" },
        ],
      },
    ],
    features: [
      {
        label: "Хичээл",
        value: "12",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-[#2a7d5f]"
          >
            <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
            <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
          </svg>
        ),
      },
      {
        label: "Хугацаа",
        value: "3 сар",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-[#2a7d5f]"
          >
            <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
            <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
          </svg>
        ),
      },
    ],
    reviews: [
      {
        name: "Анхжаргал Бат",
        avatar: "/placeholder.svg?height=64&width=64",
        bio: "Анхжаргал бол мэргэжлийн багш бөгөөд энэхүү сургалтаар багшлах ур чадвараа сайжруулахыг хүссэн.",
        text: "Сургалт нь миний багшлах ур чадварыг сайжруулсан. Практик дасгалууд болон бодит жишээнүүд нь сургалтыг илүү үр дүнтэй болгож байсан.",
      },
    ],
  },
];

const relatedCourses = [
  {
    id: "personal-development",
    title: "Хувь хүний хөгжил",
    modules: 8,
    duration: "16 цаг",
    students: "350+", // example value, update as needed
    price: "₮99,000",
    rating: 4.8,
    image: "/Logo.png",
  },
  {
    id: "teamwork",
    title: "Багийн ажиллагаа",
    modules: 8,
    duration: "16 цаг",
    students: "310+",
    price: "₮99,000",
    rating: 4.7,
    image: "/Logo.png",
  },
  {
    id: "leadership",
    title: "Манлайлал",
    modules: 9,
    duration: "18 цаг",
    students: "400+",
    price: "₮109,000",
    rating: 4.9,
    image: "/Logo.png",
  },
];
