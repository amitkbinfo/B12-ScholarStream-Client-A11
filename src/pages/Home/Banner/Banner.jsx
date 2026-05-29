import { Link } from "react-router";
import { motion } from "framer-motion";

const Banner = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-[#e7f7ff] py-20 rounded-2xl"
    >
      <div className="max-w-7xl mx-auto px-4 text-center">
        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          Find Your Dream <span className="text-primary">Scholarship</span>
        </h1>

        {/* Description */}
        <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
          Discover thousands of scholarships from top universities around the
          world. Apply and take the next step toward your future.
        </p>

        {/* Button */}
        <div className="mt-8">
          <Link
            to="/scholarships"
            className="btn shadow-none border-primary text-primary hover:btn-primary hover:text-white hover:border-none px-6 rounded-lg"
          >
            Search Scholarship
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default Banner;
