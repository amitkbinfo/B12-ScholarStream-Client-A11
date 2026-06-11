import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import useAuth from "../../../hooks/useAuth";
import supportImg from "../../../assets/support.png";
import serviceImg from "../../../assets/service.png";
import hoursImg from "../../../assets/24 hours.png";
import allTimeImg from "../../../assets/247.png";

const ContactSupport = () => {
  const { user } = useAuth();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);

    toast.success("Your query has been submitted successfully!");

    reset();
  };

  return (
    <div className=" bg-[#E7F7FF] md:w-10/12 mx-auto rounded-2xl my-10 p-10 md:px-20">
      <div className="">
        {/* Header */}

        <div className="text-center mb-10">
          <div>
            <img
              src={supportImg}
              alt=""
              className="object-cover w-20 mx-auto mb-2"
            />
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800">
              Connect with Our Team
            </h2>
          </div>

          <p className="text-gray-500 text-sm md:text-base mt-3">
            Have questions regarding scholarships, applications, payments, or
            reviews? Our team is here to help.
          </p>
        </div>

        {/* Form */}

        <div className="bg-white rounded-2xl shadow-md p-8 md:p-10">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            {/* Name */}

            <fieldset className="fieldset">
              <label className="label font-medium">Full Name</label>

              <input
                type="text"
                defaultValue={user?.displayName || ""}
                {...register("name", {
                  required: "Please enter your name",
                })}
                className="input w-full rounded-xl border-sky-200"
                placeholder="Your Name"
              />

              {errors.name && (
                <p className="text-red-500">{errors.name.message}</p>
              )}
            </fieldset>

            {/* Email */}

            <fieldset className="fieldset">
              <label className="label font-medium">Email Address</label>

              <input
                type="email"
                defaultValue={user?.email || ""}
                {...register("email", {
                  required: "Please enter your email",
                })}
                className="input w-full rounded-xl border-sky-200"
                placeholder="Your Email"
              />

              {errors.email && (
                <p className="text-red-500">{errors.email.message}</p>
              )}
            </fieldset>

            {/* Topic */}

            <fieldset className="fieldset">
              <label className="label font-medium">Query Topic</label>

              <select
                {...register("topic", {
                  required: "Please select a topic",
                })}
                className="select w-full rounded-xl border-sky-200"
              >
                <option value="">Select Topic</option>

                <option>Scholarship Application</option>

                <option>Payment Issue</option>

                <option>Review & Feedback</option>

                <option>Account Support</option>

                <option>Technical Problem</option>

                <option>Other</option>
              </select>

              {errors.topic && (
                <p className="text-red-500">{errors.topic.message}</p>
              )}
            </fieldset>

            {/* Subject */}

            <fieldset className="fieldset">
              <label className="label font-medium">Subject</label>

              <input
                type="text"
                {...register("subject", {
                  required: "Please enter a subject",
                })}
                className="input w-full rounded-xl border-sky-200"
                placeholder="Short summary of your issue"
              />

              {errors.subject && (
                <p className="text-red-500">{errors.subject.message}</p>
              )}
            </fieldset>

            {/* Message */}

            <fieldset className="fieldset">
              <label className="label font-medium">Message</label>

              <textarea
                {...register("message", {
                  required: "Please describe your issue",
                  minLength: {
                    value: 20,
                    message: "Please provide more details",
                  },
                })}
                className="textarea w-full h-40 rounded-xl border-sky-200"
                placeholder="Describe your issue or question..."
              />

              {errors.message && (
                <p className="text-red-500">{errors.message.message}</p>
              )}
            </fieldset>

            {/* Submit */}

            <div className="pt-2">
              <button className="btn btn-primary w-full rounded-lg text-white border-none shadow-none">
                Submit Query
              </button>
            </div>
          </form>
        </div>

        {/* Extra Info */}

        <div className="grid md:grid-cols-3 gap-5 mt-10">
          <div className="bg-white rounded-2xl p-5 shadow text-center space-y-2">
            <img src={serviceImg} alt="" className="w-10 mx-auto" />
            <h4 className="font-semibold">Support Email</h4>
            <p className="text-gray-500 text-sm">support@scholarstream.com</p>
          </div>

          <div className="bg-white rounded-2xl p-5 shadow text-center space-y-2">
            <img src={hoursImg} alt="" className="w-10 mx-auto" />
            <h4 className="font-semibold">Response Time</h4>
            <p className="text-gray-500 text-sm">Within 24 Hours</p>
          </div>

          <div className="bg-white rounded-2xl p-5 shadow text-center space-y-2">
            <img src={allTimeImg} alt="" className="w-10 mx-auto" />
            <h4 className="font-semibold">Help Center</h4>
            <p className="text-gray-500 text-sm">Available 24/7</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSupport;
