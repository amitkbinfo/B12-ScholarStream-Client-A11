import { FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router";

const ScholarshipCard = ({ scholarship }) => {
  const {
    _id,
    universityName,
    universityImage,
    universityCountry,
    universityCity,
    scholarshipCategory,
    applicationFees,
  } = scholarship;

  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition duration-300 h-full flex flex-col">
      {/* University Image */}
      <img
        src={universityImage}
        alt={universityName}
        className="w-full h-52 object-cover"
      />

      <div className="p-5 flex flex-col grow">
        <div className="grow">
          {/* University Name */}
          <h3 className="text-xl font-semibold">{universityName}</h3>

          {/* Category + Fee */}
          <div className="flex justify-between items-center mt-5">
            <span className="badge badge-outline">{scholarshipCategory}</span>

            <span className="font-semibold text-primary">
              ${applicationFees}
            </span>
          </div>
          {/* Location */}
          <p className="text-gray-500 mt-3 flex items-center gap-1">
            <FaLocationDot className="text-[#F53871]" /> {universityCity},{" "}
            {universityCountry}
          </p>
        </div>

        {/* View Details */}
        <Link
          to={`/scholarship/${_id}`}
          className="btn btn-primary text-white  border-none shadow-none btn-sm w-full mt-3 rounded-lg"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default ScholarshipCard;
