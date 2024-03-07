/* eslint-disable @typescript-eslint/no-explicit-any */
import { FieldValues, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useAppSelector } from "../../redux/hooks";
import { selectCurrentUser } from "../../redux/features/auth/authSlice";
import { useAddProductMutation } from "../../redux/features/product/productApi";

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
          <form className=" mb-2 w-full" onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col gap-4">
              <input
                id="product_name"
                {...register("title", { required: "Title is required" })}
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              />
              {errors.title && (
                <p className="text-red-500">{errors.title.message as any}</p>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
