import React from "react";
import { FaPaperPlane } from "react-icons/fa";
import { toast } from "react-toastify";

const Newsletter = () => {
  const handleSubscribe = (e) => {
    e.preventDefault();

    toast.success("Successfully subscribed to ScholarStream Newsletter!");

    e.target.reset();
  };

  return (
    <section className="my-20">
      {" "}
      <div className="bg-linear-to-r from-slate-800 to-sky-700 rounded-3xl overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            {/* Left Side */}

            <div>
              <span className="bg-white/20 text-white px-4 py-2 rounded-full text-sm">
                📩 Stay Updated
              </span>

              <h2 className="text-3xl md:text-4xl font-bold text-white mt-5 leading-tight">
                Never Miss a Scholarship Opportunity!
              </h2>

              <p className="text-sky-100 mt-5">
                Subscribe to our newsletter and get the latest scholarships,
                application deadlines, study abroad opportunities, and
                scholarship tips directly in your inbox.
              </p>

              <div className="flex flex-wrap gap-5 mt-8 text-white">
                <div>✅ New Scholarships</div>

                <div>✅ Deadline Alerts</div>

                <div>✅ Application Tips</div>
              </div>
            </div>

            {/* Right Side */}

            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-slate-800">
                Join Our Newsletter
              </h3>

              <p className="text-gray-500 mt-2">
                Enter your email address and stay connected.
              </p>

              <form onSubmit={handleSubscribe} className="mt-6 space-y-4">
                <input
                  type="email"
                  required
                  placeholder="Enter your email address"
                  className="input input-bordered w-full rounded-xl"
                />

                <button className="btn btn-primary w-full shadow-none rounded-xl text-white border-none">
                  Subscribe Now
                  <FaPaperPlane />
                </button>
              </form>

              <p className="text-xs text-gray-400 mt-4 text-center">
                We respect your privacy. No spam, ever.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
