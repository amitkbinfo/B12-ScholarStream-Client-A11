import React from "react";

const PaymentFailed = () => {
  return (
    <div className="text-center py-20">
      <h1 className="text-5xl font-bold text-red-600">Payment Failed</h1>

      <Link to="/dashboard/my-applications" className="btn btn-error mt-6">
        Return To Dashboard
      </Link>
    </div>
  );
};

export default PaymentFailed;
