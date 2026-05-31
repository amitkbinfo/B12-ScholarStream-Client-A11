import { Link, useSearchParams } from "react-router";
import { useEffect } from "react";
import { CheckCircle } from "lucide-react";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const PaymentSuccess = () => {
  const axiosSecure = useAxiosSecure();
  const [params] = useSearchParams();

  const sessionId = params.get("session_id");

  useEffect(() => {
    if (!sessionId) return;

    axiosSecure.patch(`/payment-success?session_id=${sessionId}`);
  }, [axiosSecure, sessionId]);

  return (
    <div className="min-h-screen bg-base-200 flex items-center justify-center px-4">
      <div className="card w-full max-w-xl bg-base-100 shadow-2xl">
        <div className="card-body text-center">
          {/* Success Icon */}
          <div className="flex justify-center">
            <CheckCircle size={90} className="text-success" />
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-success mt-4">
            Payment Successful!
          </h1>

          {/* Message */}
          <p className="text-base-content/70 mt-3">
            Thank you for completing your scholarship application payment. Your
            transaction has been processed successfully.
          </p>

          {/* Status Badge */}
          <div className="mt-5">
            <span className="badge badge-success badge-lg px-4 py-4">
              Application Payment Confirmed
            </span>
          </div>

          {/* Information Box */}
          <div className="bg-base-200 rounded-xl p-4 mt-6 text-left">
            <h3 className="font-semibold mb-2">What happens next?</h3>

            <ul className="list-disc list-inside space-y-1 text-sm text-base-content/80">
              <li>Your payment has been recorded.</li>
              <li>Your scholarship application is now under review.</li>
              <li>You can track the application status from your dashboard.</li>
            </ul>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center mt-8">
            <Link to="/dashboard/my-applications" className="btn btn-primary shadow-none text-white border-none">
              My Applications
            </Link>

            <Link to="/" className="btn btn-outline">
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccess;
