import React from "react";
import { FaStar } from "react-icons/fa";

const Reviews = ({ reviews }) => {
  return (
    <div className="space-y-6">
      {reviews.map((review) => (
        <div key={review._id} className="bg-white rounded-2xl p-6 shadow-sm">
          <div className="flex items-start gap-4">
            {/* User Image */}
            <img
              src={review.userImage}
              alt={review.userName}
              className="w-14 h-14 rounded-full object-cover"
            />

            <div className="flex-1">
              {/* Name + Date */}
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div>
                  <h3 className="font-bold text-lg">{review.userName}</h3>

                  <p className="text-sm text-gray-500">{review.reviewDate}</p>
                </div>

                {/* Rating */}
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, index) => (
                    <FaStar
                      key={index}
                      className={
                        index < review.ratingPoint
                          ? "text-yellow-400"
                          : "text-gray-300"
                      }
                    />
                  ))}

                  <span className="ml-2 text-sm font-medium">
                    {review.ratingPoint}/5
                  </span>
                </div>
              </div>

              {/* Comment */}
              <p className="mt-4 text-gray-600 leading-7">
                {review.reviewComment}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Reviews;
