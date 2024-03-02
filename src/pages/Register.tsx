/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link, useNavigate } from "react-router-dom";
import styles from "../styles/Login.module.css";
import avatar from "../assets/profile.png";
import { useRegistrationMutation } from "../redux/features/user/userApi";
import { TRegistration } from "../redux/features/user/userType";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

export const Register = () => {
  const [registration] = useRegistrationMutation();
  const navigate = useNavigate();

  const { register, handleSubmit } = useForm();
  const onSubmit = async (loginInfo: TRegistration) => {
    const payload = {
      data: {
        ...loginInfo,
      },
    };

    try {
      const res: any = await registration(payload);

      console.log(  res  , 'file name : Register line number : +-25');
      
      if (res?.success) {
        toast.success(res?.data?.message);
        navigate("/login");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="container mx-auto">
        <div className="flex justify-center items-center min-h-screen">
          <div
            className={styles.glass}
            style={{ width: "45%", paddingTop: "3em" }}
          >
            <div className="title flex flex-col items-center">
              <h2 className={styles.title}>Register</h2>
              <span className="w-2/3 block text-center">
                Happy to join you!
              </span>
            </div>

            <form className="py-1" onSubmit={handleSubmit(onSubmit)}>
              <div className="profile flex justify-center">
                <label htmlFor="profile">
                  <img
                    src={avatar}
                    className={styles.profile_img}
                    alt="avatar"
                  />
                </label>

                <input
                  // onChange={onUpload}
                  type="file"
                  id="profile"
                  name="profile"
                />
              </div>

              <div className="textbox flex flex-col items-center gap-6">
                <div className="flex mt-4 items-center gap-6 w-full">
                  <input
                    className={styles.textbox}
                    type="text"
                    placeholder="First Name*"
                    {...register("name.firstName")}
                  />
                  <input
                    className={styles.textbox}
                    type="text"
                    placeholder="Middle Name"
                    {...register("name.middleName")}
                  />
                  <input
                    className={styles.textbox}
                    type="text"
                    placeholder="Last Name*"
                    {...register("name.lastName")}
                  />
                </div>

                <input
                  className={styles.textbox}
                  type="text"
                  placeholder="Email*"
                  {...register("email")}
                />

                <div className="flex mt-4 items-center gap-6 w-full">
                  <input
                    className={styles.textbox}
                    type="text"
                    placeholder="Contact Number*"
                    {...register("contactNo")}
                  />
                  <input
                    className={styles.textbox}
                    type="text"
                    placeholder="Gender*"
                    {...register("gender")}
                  />
                </div>
                <input
                  className={styles.textbox}
                  type="text"
                  placeholder="Password*"
                  {...register("password")}
                />
                <button className={styles.btn} type="submit">
                  Register
                </button>
              </div>

              <div className="text-center py-4">
                <span className="text-gray-500">
                  Already Register?{" "}
                  <Link className="text-red-500" to="/login">
                    Login Now
                  </Link>
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
