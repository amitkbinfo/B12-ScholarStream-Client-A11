import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAuth from "../../hooks/useAuth";

const AddScholarship = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const handleAddScholarship = async (data) => {
    try {
      const scholarshipInfo = {
        ...data,
        postedUserEmail: user?.email,
        scholarshipPostDate: new Date(),
      };

      const res = await axiosSecure.post("/scholarships", scholarshipInfo);

      if (res.data.insertedId) {
        toast.success("Scholarship Added Successfully!");
        reset();
      }
      reset();
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="bg-[#e7f7ff] rounded-2xl p-8 md:p-12 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-8">
        Add New Scholarship
      </h1>

      <form onSubmit={handleSubmit(handleAddScholarship)}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* Scholarship Name */}
          <div>
            <label className="label text-sm text-black">Scholarship Name</label>

            <input
              type="text"
              {...register("scholarshipName", {
                required: "Scholarship name is required",
              })}
              className="input w-full rounded-xl border border-primary/20 outline-none shadow-none"
              placeholder="Scholarship Name"
            />

            {errors.scholarshipName && (
              <p className="text-red-600 mt-1">
                {errors.scholarshipName.message}
              </p>
            )}
          </div>

          {/* University Name */}
          <div>
            <label className="label text-sm text-black">University Name</label>

            <input
              type="text"
              {...register("universityName", {
                required: "University name is required",
              })}
              className="input w-full rounded-xl border border-primary/20 outline-none shadow-none"
              placeholder="University Name"
            />

            {errors.universityName && (
              <p className="text-red-600 mt-1">
                {errors.universityName.message}
              </p>
            )}
          </div>

          {/* University Image */}
          <div>
            <label className="label text-sm text-black">
              University Image URL
            </label>

            <input
              type="url"
              {...register("universityImage", {
                required: "University image is required",
              })}
              className="input w-full rounded-xl border border-primary/20 outline-none shadow-none"
              placeholder="Image URL"
            />

            {errors.universityImage && (
              <p className="text-red-600 mt-1">
                {errors.universityImage.message}
              </p>
            )}
          </div>

          {/* Country */}
          <div>
            <label className="label text-sm text-black">Country</label>

            <input
              type="text"
              {...register("universityCountry", {
                required: "Country is required",
              })}
              className="input w-full rounded-xl border border-primary/20 outline-none shadow-none"
              placeholder="Country"
            />

            {errors.universityCountry && (
              <p className="text-red-600 mt-1">
                {errors.universityCountry.message}
              </p>
            )}
          </div>

          {/* City */}
          <div>
            <label className="label text-sm text-black">City</label>

            <input
              type="text"
              {...register("universityCity", {
                required: "City is required",
              })}
              className="input w-full rounded-xl border border-primary/20 outline-none shadow-none"
              placeholder="City"
            />

            {errors.universityCity && (
              <p className="text-red-600 mt-1">
                {errors.universityCity.message}
              </p>
            )}
          </div>

          {/* World Rank */}
          <div>
            <label className="label text-sm text-black">World Rank</label>

            <input
              type="number"
              {...register("universityWorldRank", {
                required: "World rank is required",
                min: {
                  value: 1,
                  message: "Rank must be greater than 0",
                },
              })}
              className="input w-full rounded-xl border border-primary/20 outline-none shadow-none"
              placeholder="World Rank"
            />

            {errors.universityWorldRank && (
              <p className="text-red-600 mt-1">
                {errors.universityWorldRank.message}
              </p>
            )}
          </div>

          {/* Subject Category */}
          <div>
            <label className="label text-sm text-black">Subject Category</label>

            <select
              {...register("subjectCategory", {
                required: "Select a subject category",
              })}
              className="select w-full rounded-xl border border-primary/20 outline-none shadow-none"
            >
              <option value="">Select Subject</option>
              <option>Engineering</option>
              <option>Computer Science</option>
              <option>Business</option>
              <option>Health</option>
              <option>Science</option>
              <option>Arts</option>
            </select>

            {errors.subjectCategory && (
              <p className="text-red-600 mt-1">
                {errors.subjectCategory.message}
              </p>
            )}
          </div>

          {/* Scholarship Category */}
          <div>
            <label className="label text-sm text-black">
              Scholarship Category
            </label>

            <select
              {...register("scholarshipCategory", {
                required: "Select scholarship category",
              })}
              className="select w-full rounded-xl border border-primary/20 outline-none shadow-none"
            >
              <option value="">Select Category</option>
              <option>Full Fund</option>
              <option>Partial</option>
              <option>Self Fund</option>
            </select>

            {errors.scholarshipCategory && (
              <p className="text-red-600 mt-1">
                {errors.scholarshipCategory.message}
              </p>
            )}
          </div>

          {/* Degree */}
          <div>
            <label className="label text-sm text-black">Degree</label>

            <select
              {...register("degree", {
                required: "Select degree",
              })}
              className="select w-full rounded-xl border border-primary/20 outline-none shadow-none"
            >
              <option value="">Select Degree</option>
              <option>Diploma</option>
              <option>Bachelor</option>
              <option>Masters</option>
            </select>

            {errors.degree && (
              <p className="text-red-600 mt-1">{errors.degree.message}</p>
            )}
          </div>

          {/* Tuition Fees */}
          <div>
            <label className="label text-sm text-black">Tuition Fees</label>

            <input
              type="number"
              {...register("tuitionFees")}
              className="input w-full rounded-xl border border-primary/20 outline-none shadow-none"
              placeholder="Tuition Fees"
            />
          </div>

          {/* Application Fees */}
          <div>
            <label className="label text-sm text-black">Application Fees</label>

            <input
              type="number"
              {...register("applicationFees", {
                required: "Application fee is required",
              })}
              className="input w-full rounded-xl border border-primary/20 outline-none shadow-none"
              placeholder="Application Fees"
            />

            {errors.applicationFees && (
              <p className="text-red-600 mt-1">
                {errors.applicationFees.message}
              </p>
            )}
          </div>

          {/* Service Charge */}
          <div>
            <label className="label text-sm text-black">Service Charge</label>

            <input
              type="number"
              {...register("serviceCharge", {
                required: "Service charge is required",
              })}
              className="input w-full rounded-xl border border-primary/20 outline-none shadow-none"
              placeholder="Service Charge"
            />

            {errors.serviceCharge && (
              <p className="text-red-600 mt-1">
                {errors.serviceCharge.message}
              </p>
            )}
          </div>

          {/* Deadline */}
          <div>
            <label className="label text-sm text-black">
              Application Deadline
            </label>

            <input
              type="date"
              {...register("applicationDeadline", {
                required: "Deadline is required",
              })}
              className="input w-full rounded-xl border border-primary/20 outline-none shadow-none"
            />

            {errors.applicationDeadline && (
              <p className="text-red-600 mt-1">
                {errors.applicationDeadline.message}
              </p>
            )}
          </div>
        </div>

        {/* Description */}
        <div className="mt-5">
          <label className="label text-sm text-black">
            Scholarship Description
          </label>

          <textarea
            rows={5}
            {...register("scholarshipDescription", {
              required: "Description is required",
            })}
            className="textarea w-full rounded-xl border border-primary/20 outline-none shadow-none"
            placeholder="Scholarship Description"
          />

          {errors.scholarshipDescription && (
            <p className="text-red-600 mt-1">
              {errors.scholarshipDescription.message}
            </p>
          )}
        </div>

        {/* Benefits */}
        <div className="mt-5">
          <label className="label text-sm text-black">
            Coverage & Benefits
          </label>

          <textarea
            rows={4}
            {...register("stipend", {
              required: "Benefits information is required",
            })}
            className="textarea w-full rounded-xl border border-primary/20 outline-none shadow-none"
            placeholder="Coverage & Benefits"
          />

          {errors.stipend && (
            <p className="text-red-600 mt-1">{errors.stipend.message}</p>
          )}
        </div>

        <button className="btn btn-primary w-full rounded-xl border-none shadow-none text-white mt-6">
          Add Scholarship
        </button>
      </form>
    </div>
  );
};

export default AddScholarship;
