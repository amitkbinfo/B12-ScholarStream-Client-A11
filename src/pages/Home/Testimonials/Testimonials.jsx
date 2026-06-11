import React from "react";
import { FaStar } from "react-icons/fa";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    university: "University of Oxford",
    image: "https://i.ibb.co.com/zVXgcmRr/avatar1.jpg",
    comment:
      "ScholarStream helped me secure a fully funded Master's scholarship. The application process was smooth and transparent.",
  },
  {
    id: 2,
    name: "David Miller",
    university: "Harvard University",
    image: "https://i.ibb.co.com/27dg2g6M/82450.jpg",
    comment:
      "I found several opportunities that matched my profile. The dashboard made tracking applications incredibly easy.",
  },
  {
    id: 3,
    name: "Emily Wilson",
    university: "Technical University of Munich",
    image: "https://i.ibb.co.com/Y7bFdKmf/avatar3.jpg",
    comment:
      "The review and application management system is fantastic. I highly recommend ScholarStream to students worldwide.",
  },
];

const Testimonials = () => {
  return (
    <section className="mt-20 bg-base-100">
      <div className="w-11/12 max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-3">
          Student Success Stories
        </h2>

        <p className="text-center text-gray-500 mb-12">
          Thousands of students have successfully secured scholarships through
          our platform.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <div className="flex gap-4 items-center mb-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 rounded-full object-cover"
                />

                <div>
                  <h4 className="font-bold text-lg">{item.name}</h4>

                  <p className="text-sm text-gray-500">{item.university}</p>
                </div>
              </div>

              <div className="flex text-yellow-500 mb-4">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>

              <p className="text-gray-600 leading-7">"{item.comment}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
