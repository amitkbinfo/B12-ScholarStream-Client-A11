import React from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { Link } from "react-router";

const FAQ = () => {
  const faqs = [
    {
      q: "How do I apply for a scholarship?",
      a: "Browse available scholarships, open the details page, click the Apply button, complete the application form, and proceed with the payment process.",
    },
    {
      q: "Can I apply for multiple scholarships?",
      a: "Yes! You can apply for multiple scholarships as long as you meet the eligibility requirements for each scholarship.",
    },
    {
      q: "Can I edit my application after submitting it?",
      a: "Applications can only be edited while their status remains 'Pending'. Once the moderator starts processing your application, editing will be disabled.",
    },
    {
      q: "How can I track my application status?",
      a: "Go to your Dashboard → My Applications to view the current status, moderator feedback, and payment information.",
    },
    {
      q: "When can I add a review?",
      a: "You can submit a review only after your scholarship application status becomes 'Completed'.",
    },
    {
      q: "Are payments secure on ScholarStream?",
      a: "Yes! All payments are processed securely through Stripe, one of the world's most trusted payment gateways.",
    },
  ];

  return (
    <section className="py-20 bg-[#E7F7FF] rounded-2xl">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-800">
          Frequently Asked Questions
        </h2>

        <p className="text-gray-500 mt-3 max-w-2xl mx-auto">
          Find answers to the most common questions about scholarships,
          applications, payments, and reviews on ScholarStream.
        </p>
      </div>

      {/* Content */}
      <div className="w-11/12 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Lottie */}
        <div className="flex justify-center">
          <DotLottieReact
            src="/FAQ.lottie"
            loop
            autoplay
            style={{
              width: "320px",
              height: "320px",
            }}
          />
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((item, index) => (
            <div
              key={index}
              className="collapse collapse-arrow bg-white shadow-md border border-sky-100 rounded-2xl"
            >
              <input type="radio" name="faq-accordion" />

              <div className="collapse-title text-base md:text-lg font-semibold text-slate-700">
                {item.q}
              </div>

              <div className="collapse-content text-gray-600 leading-relaxed">
                <p>{item.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Contact */}
      <div className="text-center mt-12">
        <p className="text-gray-600">
          Still have questions about scholarships?
        </p>

        <Link
          to={"/contact-support"}
          className="btn mt-4 btn-primary rounded-lg text-white border-none shadow-none"
        >
          Contact Support
        </Link>
      </div>
    </section>
  );
};

export default FAQ;
