// src/components/LatestNews.jsx
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // Import Swiper core styles
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Import images
import img1 from '../assets/1.jpg';
import img2 from '../assets/2.jpg';
import img3 from '../assets/3.jpg';
import img4 from '../assets/4.jpg';
import cambridge from '../assets/cambridge.avif';

const LatestNews = () => {
  const newsItems = [
    {
      text: "A collaboration between local universities and tech companies has been established to enhance research in artificial intelligence, providing students with unique opportunities for internships and practical experience in cutting-edge projects.",
      imgUrl: img1, // Use the imported image
    },
    {
      text: "As a Sales Support Intern, you will assist in generating leads, building client relationships, and supporting the sales team in meeting targets. Key responsibilities include conducting market research to identify new opportunities, preparing and presenting sales proposals, and maintaining accurate records of sales activities. You will also collaborate with other departments to ensure client satisfaction and participate in sales meetings and training sessions",
      imgUrl: "https://www.ethiopiawork.com/sites/ethiopiawork.com/themes/africawork3/logo-header-ethiopiawork.svg"},
    {
      text:  "Join our team as a Software/Website Development Intern, where you'll work on various projects and gain hands-on experience with industry best practices. You will be mentored by experienced developers and collaborate with leaders across tech and cross-functional teams",
      imgUrl: "https://zalatechs.com/wp-content/uploads/2022/04/Zalatech-wp-e1540712041216.png?x33217", // Use the imported image
    },
    {
      text: "A new scholarship program has been launched to support underrepresented students pursuing degrees in science, technology, engineering, and mathematics, aiming to foster diversity in these critical fields.",
      imgUrl: img4, // Use the imported image
    },
    {
      text: "Several universities are offering grants for innovative research projects addressing global challenges, inviting faculty and graduate students to apply for funding that enhances societal benefits",
      imgUrl: cambridge, // Use the imported image
    },
  ];

  return (
    <section className="latest-news-section py-10 bg-gray-100">
      <h2 className="text-center text-4xl font-bold text-gray-800 mb-8">Latest News</h2>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        navigation
        pagination={{ clickable: true }}
        modules={[Autoplay, Navigation, Pagination]}
        className="mx-5"
      >
        {newsItems.map((news, index) => (
          <SwiperSlide key={index}>
            <div className="relative group rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105">
            <img
  src={news.imgUrl}
  alt={`news-${index}`}
  className="w-full h-48 object-cover border-2 border-black-600" // Adjust the shade as necessary
/>

              <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-white text-lg font-semibold">{news.text}</span>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default LatestNews;
