import React, { useEffect, useState } from "react";
import { PropagateLoader } from "react-spinners";
import { Link } from "react-router-dom";

const Success = () => {
  const handleBackToHome = () => {
    history.push("/");
  };
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen ">
        {loading ? (
          <PropagateLoader color="#36d7b7" />
        ) : (
          <div>
            <h2 className="text-3xl font-semibold mb-4 text-center">
              Order Successful!
            </h2>

            <p> Your order has been sucessfully placed</p>
            <div className="flex justify-center">
              <Link
                to="/"
                className="bg-yellow-500 rounded-md p-2 text-sm font-mono font-bold my-3 justify-center flex absolute"
              >
                BACK TO HOME
              </Link>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Success;
