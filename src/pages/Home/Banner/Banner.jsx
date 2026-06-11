import { Link } from "react-router";
import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const Banner = () => {
  const axiosSecure = useAxiosSecure();

  const { data: scholarships = [] } = useQuery({
    queryKey: ["bannerImages"],
    queryFn: async () => {
      const res = await axiosSecure.get("/scholarships?limit=5&sort=latest");

      return res.data;
    },
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9 }}
      className="relative min-h-[70vh] rounded-xl overflow-hidden flex items-center"
    >
      {/* Background Images */}

      <div className="absolute inset-0 grid grid-cols-5">
        {scholarships.map((scholarship) => (
          <img
            key={scholarship._id}
            src={scholarship.universityImage || scholarship.image}
            alt={scholarship.universityName}
            className="w-full h-full object-cover"
          />
        ))}
      </div>

      {/* Overlay */}

      <div className="absolute inset-0 bg-black/65"></div>

      {/* Content */}

      <div className="relative z-10 max-w-7xl mx-auto px-4 text-center w-full">
        <h1 className="text-3xl md:text-5xl font-bold leading-tight text-white">
          Find Your Dream <span className="text-sky-400">Scholarship</span>
        </h1>

        <p className="mt-6 text-slate-200 max-w-2xl mx-auto text-lg">
          Discover scholarship opportunities from top universities worldwide.
          Apply with confidence and take the next step toward your academic
          future.
        </p>

        <div className="flex justify-center gap-4 mt-8 flex-wrap">
          <Link
            to="/scholarships"
            className="btn btn-sm md:btn-md btn-primary rounded-lg text-white border-none shadow-none"
          >
            Search Scholarships
          </Link>

          <Link
            to="/register"
            className="btn btn-sm md:btn-md bg-white text-slate-800 border-none shadow-none rounded-lg"
          >
            Get Started
          </Link>
        </div>

        <div className="flex justify-center gap-10 mt-10 flex-wrap text-white">
          <div>
            <h3 className="text-2xl font-bold">100+</h3>
            <p className="text-slate-300">Scholarships</p>
          </div>

          <div>
            <h3 className="text-2xl font-bold">50+</h3>
            <p className="text-slate-300">Universities</p>
          </div>

          <div>
            <h3 className="text-2xl font-bold">Global</h3>
            <p className="text-slate-300">Opportunities</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Banner;
