import styles from "../styles/Login.module.css";

export const Recovery = () => {
  return (
    <>
      <div className="container mx-auto">
        {/* <Toaster position="top-center" reverseOrder={false}></Toaster> */}

        <div className="flex justify-center items-center h-screen">
          <div className={`${styles.glass}`} >
            <div className="title flex flex-col  items-center">
              <h4 className="text-5xl font-bold">Recovery</h4>
              <span className="py-4 text-xl w-2/3 text-center text-gray-500">
                Enter OTP to recover password.
              </span>
            </div>

            <form
              className="pt-4"
              // onSubmit={onSubmit}
            >
              <div className="textbox flex flex-col items-center gap-6">
                <div className="input text-center">
                  <span className="py-4 text-sm text-left text-gray-500">
                    Enter 6 digit OTP sent to your email address.
                  </span>
                  <input
                    // onChange={(e) => setOTP(e.target.value)}
                    className={styles.textbox}
                    type="text"
                    placeholder="OTP"
                  />
                </div>

                <button className={styles.btn} type="submit">
                  Recover
                </button>
              </div>
            </form>

            <div className="text-center py-4">
              <span className="text-gray-500">
                Can't get OTP?{" "}
                <button
                  // onClick={resendOTP}
                  className="text-red-500"
                >
                  Resend
                </button>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
