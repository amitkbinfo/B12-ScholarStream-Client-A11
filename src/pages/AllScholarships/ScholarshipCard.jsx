import { Link } from "react-router";

const ScholarshipCard = ({ scholarship }) => {
  const {
    _id,
    scholarshipName,
    universityName,
    universityImage,
    universityCountry,
    scholarshipCategory,
    applicationFees,
  } = scholarship;

  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition h-full flex flex-col">
      <img
        src={universityImage}
        alt={universityName}
        className="w-full h-52 object-cover"
      />

      <div className="p-5 flex flex-col grow">
        <div className="grow">
          <h3 className="text-xl font-semibold min-h-16">{scholarshipName}</h3>

          <p className="text-gray-500 text-sm">{universityName}</p>

          <p className="text-gray-500 text-sm">{universityCountry}</p>

          <div className="flex justify-between items-center mt-4">
            <span className="badge badge-outline">{scholarshipCategory}</span>

            <span className="font-semibold text-primary">
              ${applicationFees}
            </span>
          </div>
        </div>

        <Link
          to={`/scholarship/${_id}`}
          className="btn btn-primary text-white  border-none shadow-none btn-sm w-full mt-5 rounded-lg"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default ScholarshipCard;
