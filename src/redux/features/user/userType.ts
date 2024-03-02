export type TRegistration = {
  data: {
    name: {
      firstName: string;
      middleName: string;
      lastName: string;
    };
    email: string;
    contactNo: number;
    gender: "male" | "female";
    password: string;
  };
};
