import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const TestimonialSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "Robin Ayala Doe",
      image: "https://randomuser.me/api/portraits/men/77.jpg",
      text: "Their expertise helped us scale quickly. Fantastic team and seamless experience!",
    },
    {
      id: 2,
      name: "John De Marli",
      image: "https://randomuser.me/api/portraits/women/90.jpg",
      text: "Highly recommend! Their insights and tools have been game-changers for our business.",
    },
    {
      id: 3,
      name: "Rowhan Smith",
      image: "https://randomuser.me/api/portraits/men/90.jpg",
      text: "Professional and responsive. They truly understand what businesses need to thrive!",
    },
    {
      id: 4,
      name: "Sarah Johnson",
      image: "https://randomuser.me/api/portraits/women/45.jpg",
      text: "Amazing support and a powerful platform. It’s exactly what we needed!",
    },
    {
      id: 5,
      name: "Michael Chen",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      text: "I've been using their services for over a year now, and the experience has been incredible!",
    },
    {
      id: 6,
      name: "Emma Wilson",
      image: "https://randomuser.me/api/portraits/women/28.jpg",
      text: "What impressed me most was how quickly they responded. Great team, great results!",
    },
  ];

  return (
    <section className="py-16 px-4 max-w-7xl mx-auto relative" id="testimonials">
      {/* Header Section */}
      <div className="text-center">
        <h2 className="text-4xl font-bold mb-3 text-gray-900">What Our Clients Say</h2>
        <p className="text-gray-600 mb-10 text-lg">
          Hear from our happy customers and their success stories.
        </p>
      </div>

      {/* Swiper Testimonials */}
      <div className="relative">
        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          modules={[Navigation, Pagination, Autoplay]}
          className="max-w-6xl mx-auto"
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <div className="bg-white shadow-lg rounded-2xl p-6 text-center transition-transform transform hover:scale-105 duration-300 border border-gray-200">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 mx-auto rounded-full mb-4 border-4 border-purple-500 shadow-sm"
                />
                <p className="text-gray-700 italic mb-3">"{testimonial.text}"</p>
                <h4 className="text-lg font-semibold text-gray-900">{testimonial.name}</h4>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Navigation Buttons */}
        <button className="swiper-button-prev absolute left-[-40px] top-1/2 transform -translate-y-1/2 text-purple-700 text-xl bg-white p-3 shadow-md rounded-full hover:bg-purple-100 transition">
          ❮
        </button>
        <button className="swiper-button-next absolute right-[-40px] top-1/2 transform -translate-y-1/2 text-purple-700 text-xl bg-white p-3 shadow-md rounded-full hover:bg-purple-100 transition">
          ❯
        </button>
      </div>
    </section>
  );
};

export default TestimonialSection;
