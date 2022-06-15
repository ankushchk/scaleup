import React from "react";
import { Box } from "theme-ui";
import SwiperCore, { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import BlockTitle from "components/block-title";
import TestimonialsCard from "components/cards/testimonial-card";
import testimonialsImage1 from "assets/testimonial-1-1.png";
import testimonialsImage2 from "assets/testimonial-2.png";
import testimonialsImage3 from "assets/testimonial-1-3.png";
import testimonialsImage4 from "assets/testimonial-1-4.png";
import testimonialsImage5 from "assets/testimonial-1-5.png";
import testimonialsImage6 from "assets/testimonial-1-6.png";

SwiperCore.use([Autoplay]);

const TESTIMONIALS_DATA = [
  [
    {
      image: testimonialsImage1,
      text: "I would like to take this oppertunity to thank Scale UP for the great service rendered to us. You got me the best place ever in just a few moments after I spoke to you.",
      username: "@nlsdotio",
      name: "Jevin Mangukiya",
    },
    {
      image: testimonialsImage2,
      text: "Many thanks for you kind and efficient service. I have already and will definitely continue to recommend your services to others in the future.",
      username: "@jiyoungy",
      name: "Jiyoung Yoon",
    },
  ],
  [
    {
      image: testimonialsImage3,
      text: "It's my absolute pleasure to recommend Scale UP agency. I thoroughly enjoyed my time working with them, and their team members are came to know him as a truly valuable asset. I highly recommend this Agency and would love to work with them again. Thank you!",
      username: "@hi.veona",
      name: "Veona Watson",
    },
    {
      image: testimonialsImage4,
      text: "I have seldom experienced such an efficient help and support like from you! Thank you so much. We will do all the bookings during the next few days and I will revert to you with the end result",
      username: "@FredPlais",
      name: "Frederic Plais",
    },
  ],
  [
    {
      image: testimonialsImage5,
      text: "Thank you for all your help. Your service was excellent and very FAST.",
      username: "@sarthakkaul",
      name: "Sarthak Kaul",
    },
    {
      image: testimonialsImage6,
      text: "For our project with Scale UP. I got delivered our work under 2 weeks.  The team is very polite and eagar to help. I just wanted to tell you that everything worked out perfectly with all the code and design was very quick and professional. I hope I have the opportunity to re-visit your platform soon,  I will also recommended your services to my friends and family.",
      username: "@naman0111",
      name: "Naman Jaiswal",
    },
  ],
  [
    {
      image: testimonialsImage1,
      text: "I would like to take this oppertunity to thank Scale UP for the great service rendered to us. You got me the best place ever in just a few moments after I spoke to you.",
      username: "@nlsdotio",
      name: "Jevin Mangukiya",
    },
    {
      image: testimonialsImage2,
      text: "Many thanks for you kind and efficient service. I have already and will definitely continue to recommend your services to others in the future.",
      username: "@jiyoungy",
      name: "Jiyoung Yoon",
    },
  ],
  [
    {
      image: testimonialsImage3,
      text: "It's my absolute pleasure to recommend Scale UP agency. I thoroughly enjoyed my time working with them, and their team members are came to know him as a truly valuable asset. I highly recommend this Agency and would love to work with them again. Thank you!",
      username: "@hi.veona",
      name: "Veona Watson",
    },
    {
      image: testimonialsImage4,
      text: "I have seldom experienced such an efficient help and support like from you! Thank you so much. We will do all the bookings during the next few days and I will revert to you with the end result",
      username: "@FredPlais",
      name: "Frederic Plais",
    },
  ],
  [
    {
      image: testimonialsImage5,
      text: "Thank you for all your help. Your service was excellent and very FAST.",
      username: "@sarthakkaul",
      name: "Sarthak Kaul",
    },
    {
      image: testimonialsImage6,
      text: "For our project with Scale UP. I got delivered our work under 2 weeks.  The team is very polite and eagar to help. I just wanted to tell you that everything worked out perfectly with all the code and design was very quick and professional. I hope I have the opportunity to re-visit your platform soon,  I will also recommended your services to my friends and family.",
      username: "@naman0111",
      name: "Naman Jaiswal",
    },
  ],
];

const Testimonials = () => {
  const testimonialCarousel = {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    speed: 1000,
    centeredSlides: true,
    autoHeight: true,
    autoplay: {
      waitForTransition: false,
      delay: 4000,
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
    },
  };
  return (
    <Box as="section" id="testimonials" sx={styles.testimonials}>
      <BlockTitle
        title="What client say about us"
        text="Customer testimonial"
      />
      <Swiper {...testimonialCarousel}>
        {TESTIMONIALS_DATA.map((item, index) => (
          <SwiperSlide key={index}>
            {item.map(({ image, text, name, username }, _index) => (
              <TestimonialsCard
                image={image}
                text={text}
                name={name}
                key={_index}
                username={username}
              />
            ))}
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default Testimonials;

const styles = {
  testimonials: {
    backgroundColor: "#F4F4F6",
    pt: ["80px", null, null, null, "80px", null, "100px"],
    pb: ["60px", null, null, null, "80px", null, "120px"],
  },
};
