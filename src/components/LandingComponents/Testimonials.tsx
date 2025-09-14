"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    designation: "Project Manager",
    image: "/user1.jpg",
    rating: 5,
    description:
      "BuildAI has completely transformed the way I manage projects. Easy to use and super efficient! BuildAI has completely transformed the way I manage projects. Easy to use and super efficient!",
  },
  {
    id: 2,
    name: "Michael Lee",
    designation: "Software Engineer",
    image: "/user2.jpg",
    rating: 4,
    description:
      "The automation features save me hours every week. Highly recommended for all professionals. BuildAI has completely transformed the way I manage projects. Easy to use and super efficient!",
  },
  {
    id: 3,
    name: "Sophia Davis",
    designation: "Architect",
    image: "/user3.jpg",
    rating: 5,
    description:
      "Great user experience and reliable real-time syncing. This is exactly what I needed. BuildAI has completely transformed the way I manage projects. Easy to use and super efficient!",
  },
  {
    id: 4,
    name: "James Smith",
    designation: "Entrepreneur",
    image: "/user4.jpg",
    rating: 5,
    description:
      "Fantastic tool for document generation and workflow management. A real game-changer. BuildAI has completely transformed the way I manage projects. Easy to use and super efficient!",
  },
  {
    id: 5,
    name: "Emma Wilson",
    designation: "UX Designer",
    image: "/user5.jpg",
    rating: 4,
    description:
      "Really intuitive and modern design. Works smoothly across all my devices. BuildAI has completely transformed the way I manage projects. Easy to use and super efficient! ",
  },
];

export default function TestimonialsSlider() {
  return (
    <section className="relative w-full py-12 mb-16 lg:pt-24  ">
      <div className="hidden sm-block">
        <img
          src="./testimonialShap.png"
          alt=""
          className=" absolute top-0   right-[-133px]"
        />
      </div>

      <div className="hidden sm-block">
        <img
          src="./testimonialShapLeft.png"
          alt=""
          className=" absolute  bottom-0 left-0"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8 text-center">
        {/* Section Title */}
        <h2 className="text-3xl md:text-5xl font-bold text-blue-600 mb-8">
          Testimonial
        </h2>

        <Swiper
          modules={[Autoplay]}
          spaceBetween={24}
          slidesPerView={1}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 3 },
          }}
          className="pb-12"
        >
          {testimonials.map((t) => (
            <SwiperSlide key={t.id}>
              <div className="bg-white  rounded-2xl p-6 flex flex-col hover:bg-blue-50 transition-all decoration-1 cursor-pointer shadow-xl border border-blue-50 shadow-blue-50 h-full">
                {/* Rating */}
                <div className="flex  mb-3">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${
                        i < t.rating
                          ? "text-yellow-400 fill-yellow-400"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>

                {/* Description */}
                <p className="text-gray-600 text-sm text-left ">
                  {t.description}
                </p>

                {/* User Info */}
                <div className="flex  mt-6">
                  <img
                    src={
                      "https://static.vecteezy.com/system/resources/previews/012/177/622/non_2x/man-avatar-isolated-png.png"
                    }
                    alt={t.name}
                    className="w-14 h-14 rounded-full object-cover border-2 border-blue-500"
                  />
                  <div className="ml-4 text-left">
                    <h3 className="text-base font-semibold">{t.name}</h3>
                    <p className="text-sm text-gray-500">{t.designation}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
