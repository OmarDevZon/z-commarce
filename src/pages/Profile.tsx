/* eslint-disable @typescript-eslint/no-explicit-any */
import styles from "../styles/Login.module.css";
import extend from "../styles/Profile.module.css";
import avatar from "../assets/profile.png";
import { selectCurrentUser } from "../redux/features/auth/authSlice";
import { useAppSelector } from "../redux/hooks";
import { Button, Form, Input, Row } from "antd";
import { SaenForm } from "./from/SaenFrom";
import { SaenInput } from "./from/SaenInput";
import { SaenSelect } from "./from/SaenSelect";

export const Profile = () => {
  const user = useAppSelector(selectCurrentUser);

  console.log(user, "file name : Profile line number : +-11");

  const defaultValues = {
    userId: "A-0001",
    password: "Super@admin1234",
  };

  const onSubmit = async () => {
    // const toastId = toast.loading("Logging in");
    console.log("enter", "file name : Profile line number : +-29");

    // try {
    //   const userInfo = {
    //     id: data.userId,
    //     password: data.password,
    //   };
    //   const res = await login(userInfo).unwrap();
    //   const user = verifyToken(res.data.accessToken) as TUser;

    //   dispatch(setUser({ user: user, token: res.data.accessToken }));
    //   toast.success("Logged in", { id: toastId, duration: 2000 });
    //   navigate(`/${user.role}/dashboard`);
    // } catch (err) {
    //   toast.error("Something went wrong", { id: toastId, duration: 2000 });
    // }
  };

  const gender = [
    { value: "mail", label: "mail" },
    { value: "female", label: "female" },
    { value: "other", label: "other" },
  ];

  return (
    <>
      <div className="container mx-auto bg2 p-6 pt-4 ">
        <div className="p-4 bg1">
          <div>
            <h4 className="font-semibold text-">My Profile</h4>
            <p className="">Manage and protect your account</p>
          </div>
          <div className="diver"></div>
          <div className="">
            <div>
              <Row>
                <SaenForm
                  onSubmit={onSubmit}
                  layout="horizontal"
                  defaultValues={defaultValues}
                >
                  <div className="grid grid-cols-3 gap-6 items-center">
                    <div className="col-span-2">
                      <SaenInput
                        type="text"
                        name="name"
                        label="Name "
                        rules={[
                          {
                            required: true,
                            message: "Name cannot be empty.",
                          },
                        ]}
                      />
                      <SaenInput
                        type="email"
                        name="email"
                        label="Email"
                        className="w-[100%]"
                      />
                      <SaenInput
                        type="password"
                        name="password"
                        label="Password"
                        className="w-[100%]"
                      />
                      <SaenInput
                        type="text"
                        name="contactNo"
                        label="Phone Number"
                        className="w-[100%]"
                      />
                      <SaenInput
                        type="text"
                        name="password"
                        label="Phone Number"
                        className="w-[100%]"
                      />

                      <SaenSelect
                        label="Gender"
                        name="gender"
                        options={gender}
                      />

                      <SaenInput
                        type="date"
                        name="email"
                        label="Email"
                        className="w-[100%]"
                      />
                    </div>
                    <div className="border-x border-r-0 flex  justify-center py-10">
                      <div>
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

                        <SaenInput
                          type="file"
                          name="file"
                          rules={[
                            {
                              required: true,
                              message: "Name cannot be empty.",
                            },
                          ]}
                        />
                      </div>
                    </div>
                  </div>

                  <Button htmlType="submit">Login</Button>
                </SaenForm>
              </Row>
            </div>

            {/* image section */}
          </div>
        </div>
      </div>
    </>
  );
};
