import { useState } from "react";
import Image from "../../components/Image";
import { SvgIcon } from "../../utils/SvgIcon";
import { OutLateButton } from "../../utils/Button";

export const MyOrder: React.FC = () => {
  const [count, setCount] = useState(1);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <>
      <section id="my-order">
        <div className="container mx-auto">
          <div className="flex p-2 bg-white border border-yellow-200 mt-4">
            <img
              width="20"
              height="20"
              src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/cart/094f639ce7dff28ced5b.png"
              alt="fs-icon"
            />
            <span className="UqssKR">
              Apply free shipping to enjoy more savings
            </span>
          </div>
        </div>

        <div className="container mx-auto">
          <div className="flex p-4 bg-white  mt-4">
            <div className="flex justify-between w-full">
              <div className="flex gap-4 w-2/5">
                <div>
                  <label>
                    <input
                     
                      type="checkbox"
                      role="checkbox"
                      aria-label="Click here to select all products"
                    />
                    <div className="stardust-checkbox__box"></div>
                  </label>
                </div>
                <div className="jX4z5R">Product</div>
              </div>
              <div className="grid grid-cols-4 gap-4 w-3/5 justify-around">
                <div>Unit Price</div>
                <div>Quantity</div>
                <div>Total Price</div>
                <div>Actions</div>
              </div>
            </div>
          </div>
          {/* product cards  */}
          <div className="flex p-4 bg-white  mt-4">
            <div className="flex justify-between w-full">
              <div className="flex gap-4 w-2/5 items-center">
                <div>
                  <label>
                    <input
                      type="checkbox"
                      role="checkbox"
                      aria-label="Click here to select all products"
                    />
                  </label>
                </div>
                {/* product */}
                <div className="flex gap-4 items-center">
                  <Image
                    className="h-32"
                    imgSrc="https://down-my.img.susercontent.com/file/sg-11134201-7rbl0-lo3w91z9zzc562"
                  ></Image>
                  <p className="line-clamp-2 overflow-hidden">
                    RangeVoyage Storage Bags For Camping Chair Portable Durable
                    Replacement Cover Picnic Folding Chair Carrying Bag Storage
                    Box Outdoor Gear Boutique
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-4 gap-4 w-3/5 justify- items-center">
                <div className=" grid grid-cols-3 gap-4 items-center">
                  <p>RM6.04</p>
                </div>
                <div>
                  <form>
                    <div className="flex items-center">
                      <button
                        type="button"
                        onClick={handleDecrement}
                        className="w-6 text-xl outline-none p-[2px] border"
                      >
                        -
                      </button>

                      <input
                        type="text"
                        id="quantity"
                        name="quantity"
                        value={count}
                        readOnly
                        className="w-14 h-4 outline-none rounded-0 p-4 text-center"
                      />
                      <button
                        onClick={handleIncrement}
                        type="button"
                        className="w-6 text-xl outline-none p-[2px] border"
                      >
                        +
                      </button>
                    </div>
                  </form>
                </div>
                <div className="text-red-500">RM24.16</div>
                <div className="flex gap-1">
                  <SvgIcon
                    className="text-red-500 !h-8 !w-8 border p-2 rounded-full hover:bg-red-500 hover:text-white"
                    path="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                  ></SvgIcon>
                  <SvgIcon
                    className="text-blue-500  !h-8 !w-8 border p-2 rounded-full hover:bg-blue-500 hover:text-white"
                    path="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  ></SvgIcon>
                </div>
              </div>
            </div>
          </div>
          <div className="flex p-4 bg-white  mt-4">
            <div className="flex justify-between w-full">
              <div className="flex gap-4 w-2/5 items-center">
                <div>
                  <label>
                    <input
                      type="checkbox"
                      role="checkbox"
                      aria-label="Click here to select all products"
                    />
                  </label>
                </div>
                {/* product */}
                <div className="flex gap-4 items-center">
                  <Image
                    className="h-32"
                    imgSrc="https://down-my.img.susercontent.com/file/sg-11134201-7rbl0-lo3w91z9zzc562"
                  ></Image>
                  <p className="line-clamp-2 overflow-hidden">
                    RangeVoyage Storage Bags For Camping Chair Portable Durable
                    Replacement Cover Picnic Folding Chair Carrying Bag Storage
                    Box Outdoor Gear Boutique
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-4 gap-4 w-3/5 justify- items-center">
                <div className=" grid grid-cols-3 gap-4 items-center">
                  <p>RM6.04</p>
                </div>
                <div>
                  <form>
                    <div className="flex items-center">
                      <button
                        type="button"
                        onClick={handleDecrement}
                        className="w-6 text-xl outline-none p-[2px] border"
                      >
                        -
                      </button>

                      <input
                        type="text"
                        id="quantity"
                        name="quantity"
                        value={count}
                        readOnly
                        className="w-14 h-4 outline-none rounded-0 p-4 text-center"
                      />
                      <button
                        onClick={handleIncrement}
                        type="button"
                        className="w-6 text-xl outline-none p-[2px] border"
                      >
                        +
                      </button>
                    </div>
                  </form>
                </div>
                <div className="text-red-500">RM24.16</div>
                <div className="flex gap-1">
                  <SvgIcon
                    className="text-red-500 !h-8 !w-8 border p-2 rounded-full hover:bg-red-500 hover:text-white"
                    path="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                  ></SvgIcon>
                  <SvgIcon
                    className="text-blue-500  !h-8 !w-8 border p-2 rounded-full hover:bg-blue-500 hover:text-white"
                    path="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  ></SvgIcon>
                </div>
              </div>
            </div>
          </div>
          <div className="flex p-4 bg-white  mt-4">
            <div className="flex justify-between w-full">
              <div className="flex gap-4 w-2/5 items-center">
                <div>
                  <label>
                    <input
                      type="checkbox"
                      role="checkbox"
                      aria-label="Click here to select all products"
                    />
                  </label>
                </div>
                {/* product */}
                <div className="flex gap-4 items-center">
                  <Image
                    className="h-32"
                    imgSrc="https://down-my.img.susercontent.com/file/sg-11134201-7rbl0-lo3w91z9zzc562"
                  ></Image>
                  <p className="line-clamp-2 overflow-hidden">
                    RangeVoyage Storage Bags For Camping Chair Portable Durable
                    Replacement Cover Picnic Folding Chair Carrying Bag Storage
                    Box Outdoor Gear Boutique
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-4 gap-4 w-3/5 justify- items-center">
                <div className=" grid grid-cols-3 gap-4 items-center">
                  <p>RM6.04</p>
                </div>
                <div>
                  <form>
                    <div className="flex items-center">
                      <button
                        type="button"
                        onClick={handleDecrement}
                        className="w-6 text-xl outline-none p-[2px] border"
                      >
                        -
                      </button>

                      <input
                        type="text"
                        id="quantity"
                        name="quantity"
                        value={count}
                        readOnly
                        className="w-14 h-4 outline-none rounded-0 p-4 text-center"
                      />
                      <button
                        onClick={handleIncrement}
                        type="button"
                        className="w-6 text-xl outline-none p-[2px] border"
                      >
                        +
                      </button>
                    </div>
                  </form>
                </div>
                <div className="text-red-500">RM24.16</div>
                <div className="flex gap-1">
                  <SvgIcon
                    className="text-red-500 !h-8 !w-8 border p-2 rounded-full hover:bg-red-500 hover:text-white"
                    path="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                  ></SvgIcon>
                  <SvgIcon
                    className="text-blue-500  !h-8 !w-8 border p-2 rounded-full hover:bg-blue-500 hover:text-white"
                    path="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  ></SvgIcon>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto z-100 sticky bottom-0 w-full">
        <div className="p-4 bg-white  mt-4">
          <div className="grid grid-cols-4 justify-end mb-4">
            <div></div>
            <div></div>
            <div className="text-[18px] font-semibold">Voucher / Discount</div>
            <button className="text-[#05a] flex justify-end">
              Select or enter code
            </button>
          </div>

          <div className="border"></div>
          <div className="flex justify-between items-center mt-4">
            <div className="flex gap-2">
              <label>
                <input
                  type="checkbox"
                  aria-checked="false"
                  aria-disabled="false"
                  role="checkbox"
                  aria-label="Click here to select all products"
                />
                <div></div>
              </label>
              <button>Select All (3)</button>
              <button>Delete</button>
              <button className="text-[#ee4d2d]">Move to Links</button>
            </div>

            <div className="flex justify-between gap-2 items-center">
              <div className="flex items-end flex-col">
                <div className="flex">
                  <p>Total (2 items) : </p>
                  <p className="text-xl text-[#ee4d2d]">RM17.78</p>
                </div>
                <p>
                  Saved <span className="text-[#ee4d2d]"> RM12 </span>
                </p>
              </div>
              <OutLateButton
                title="Check Out"
                className="!px-14 !py-1 !text-[16px]"
              ></OutLateButton>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
