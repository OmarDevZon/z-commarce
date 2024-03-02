import styles from "../styles/Login.module.css";
import avatar from "../assets/avatar_2.jpeg";
import { Link, useNavigate } from "react-router-dom";
import { useLoginMutation } from "../redux/features/auth/authApi";
import { useForm } from "react-hook-form";
import { TLogin, TUser } from "../redux/features/auth/authType";
import toast from "react-hot-toast";
import { verifyToken } from "../utils/verifyToken";
import { setUser } from "../redux/features/auth/authSlice";
import { useAppDispatch } from "../redux/hooks";

export const Login = () => {
  const navigate = useNavigate();
  const [login] = useLoginMutation(undefined);
  const dispatch = useAppDispatch();
  const { register, handleSubmit } = useForm();

  // const onSubmit: (loginInfo: TLogin) => {

  const onSubmit = async (loginInfo: TLogin) => {
    try {
      const res = await login(loginInfo).unwrap();
      const user = verifyToken(res.data.accessToken) as TUser;

      console.log(user.role, "file name : login line number : +-21");

      dispatch(setUser({ user: user, token: res.data.accessToken }));
      toast.success(res.message);

      navigate(`/${user.role}/dashboard`);
    } catch (error) {
      console.log(error, "file name : login line number : +-17");
    }
  };

  return (
    <div className="bg">
      <div className="container mx-auto">
        {/* <Toaster position="top-center" reverseOrder={false}></Toaster> */}

        <div className="flex justify-center items-center py-10 min-h-screen">
          <div className={styles.glass}>
            <div className="title flex flex-col items-center">
              <h2>Hello Again!</h2>
            </div>

            <form className="py-1" onSubmit={handleSubmit(onSubmit)}>
              <div className="profile flex justify-center py-2">
                <img src={avatar} className={styles.profile_img} alt="avatar" />
              </div>

              <div className="textbox flex flex-col items-center gap-3">
                <input
                  className={styles.textbox}
                  type="email"
                  placeholder="Email"
                  defaultValue="omar@gmail.com"
                  {...register("email")}
                />
                <input
                  className={styles.textbox}
                  type="password"
                  placeholder="Password"
                  defaultValue="OMfa35@p"
                  {...register("password")}
                />
                <button className={styles.btn} type="submit">
                  Let's Go
                </button>
              </div>

              <div className="flex justify-between items-center">
                <div className="text-center py-1">
                  <span className="text-gray-500">
                    Not a Member{" "}
                    <Link className="text-red-500" to="/register">
                      Register Now
                    </Link>
                  </span>
                </div>
                <div className="text-center py-4">
                  <span className="text-gray-500">
                    Forgot Password?{" "}
                    <Link className="text-red-500" to="/recovery">
                      Recover Now
                    </Link>
                  </span>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
