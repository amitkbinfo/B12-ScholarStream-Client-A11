import { useParams } from "react-router";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const Payment = () => {
  const { id } = useParams();
  const axiosSecure = useAxiosSecure();

  const { data: application = {}, isLoading } = useQuery({
    queryKey: ["application", id],
    queryFn: async () => {
      const res = await axiosSecure.get(`/applications/${id}`);
      return res.data;
    },
  });

  const handlePayment = async () => {
    const res = await axiosSecure.post("/create-checkout-session", {
      applicationId: application._id,
      scholarshipName: application.scholarshipName,
      amount:
        Number(application.applicationFees) +
        Number(application.serviceCharge),
      email: application.applicantEmail,
    });

    window.location.replace(res.data.url);
  };

  if (isLoading) {
    return (
      <div className="flex justify-center py-20">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  const total =
    Number(application.applicationFees || 0) +
    Number(application.serviceCharge || 0);

  return (
    <div className="min-h-screen bg-base-200 flex items-center justify-center p-6">
      <div className="card w-full max-w-2xl bg-base-100 shadow-xl">
        <div className="card-body">
          <div className="text-center mb-6">
            <h2 className="text-3xl font-bold">
              Scholarship Payment
            </h2>
            <p className="text-gray-500 mt-2">
              Complete your application payment securely.
            </p>
          </div>

          <div className="bg-base-200 rounded-xl p-5 space-y-4">
            <div className="flex justify-between">
              <span className="font-medium">Scholarship</span>
              <span>{application.scholarshipName}</span>
            </div>

            <div className="flex justify-between">
              <span className="font-medium">Applicant Email</span>
              <span>{application.applicantEmail}</span>
            </div>

            <div className="divider my-1"></div>

            <div className="flex justify-between">
              <span>Application Fee</span>
              <span>${application.applicationFees}</span>
            </div>

            <div className="flex justify-between">
              <span>Service Charge</span>
              <span>${application.serviceCharge}</span>
            </div>

            <div className="divider my-1"></div>

            <div className="flex justify-between text-xl font-bold text-primary">
              <span>Total Amount</span>
              <span>${total}</span>
            </div>
          </div>

          <div className="mt-8">
            <button
              onClick={handlePayment}
              className="btn btn-primary btn-block btn-lg border-none shadow-none text-white"
            >
              Pay ${total}
            </button>
          </div>

          <div className="text-center mt-4 text-sm text-gray-500">
            🔒 Secure payment powered by Stripe
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;