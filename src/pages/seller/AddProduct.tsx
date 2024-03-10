/* eslint-disable @typescript-eslint/no-explicit-any */
import { FieldValues, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useAppSelector } from "../../redux/hooks";
import { selectCurrentUser } from "../../redux/features/auth/authSlice";
import { useAddProductMutation } from "../../redux/features/product/productApi";
import { Button, Row } from "antd";
import { SaenForm } from "../from/SaenFrom";
import { SaenInput } from "../from/SaenInput";

export const AddProduct: React.FC = () => {
  const user = useAppSelector(selectCurrentUser);
  const [addProduct] = useAddProductMutation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({});

  const onSubmit = async (input: FieldValues) => {
    const payload = {};

    try {
      const result = await addProduct(payload).unwrap();

      toast.success(result?.message, {
        position: "bottom-center",
      });
    } catch (error: any) {
      toast.error(error.data.message, {
        position: "bottom-center",
      });
    }
  };

  return (
    <div className="bg-[#f0f0f1] ">
      <div className="p-4">
        <div className="mx-auto   max-w-full">
          <Row>
            <SaenForm onSubmit={onSubmit} layout="horizontal">
              <div className="grid grid-cols-3 gap-6 items-center">
                <div>
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
                </div>
                <div></div>
              </div>

              <Button htmlType="submit">Login</Button>
            </SaenForm>
          </Row>
        </div>
      </div>
    </div>
  );
};
