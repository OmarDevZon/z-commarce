import CountUp from "react-countup";
import Card from "../../utils/Card";
import { SvgIcon } from "../../utils/SvgIcon";
import ApexChart from "../../utils/ApexChart";
import { Table } from "../../utils/Table";
import { motion } from "framer-motion";
import { OutLineButton } from "../../utils/Button";
// import ApexChart, { TChartData } from "../../utils/ApexChart";

export const Dashboard = () => {
  const data = [
    { x: "Category 1", y: 30 },
    { x: "Category 2", y: 40 },
    { x: "Category 3", y: 25 },
    { x: "Category 4", y: 50 },
    { x: "Category 1", y: 30 },
    { x: "Category 2", y: 40 },
    { x: "Category 3", y: 25 },
    { x: "Category 4", y: 50 },
    { x: "Category 1", y: 30 },
    { x: "Category 2", y: 40 },
    { x: "Category 3", y: 25 },
    { x: "Category 4", y: 50 },
    { x: "Category 1", y: 30 },
    { x: "Category 2", y: 40 },
    { x: "Category 3", y: 25 },
    { x: "Category 4", y: 50 },
  ];
  const data2 = [
    { x: "Category 15", y: 310 },
    { x: "Category 25", y: 410 },
    { x: "Category 35", y: 215 },
    { x: "Category 45", y: 510 },
    { x: "Category 15", y: 310 },
    { x: "Category 25", y: 410 },
    { x: "Category 35", y: 215 },
    { x: "Category 45", y: 510 },
    { x: "Category 15", y: 310 },
    { x: "Category 25", y: 410 },
    { x: "Category 35", y: 215 },
    { x: "Category 45", y: 510 },
    { x: "Category 15", y: 310 },
    { x: "Category 25", y: 410 },
    { x: "Category 35", y: 215 },
    { x: "Category 45", y: 510 },
  ];

  const series = [
    {
      name: "Series 1",
      data: data.map((item) => item.y),
    },
    {
      name: "Series 2",
      data: data2.map((item) => item.y),
    },
  ];

  const tableHeaders = [
    "Order No",
    "Order Date",
    "Customer",
    "Grand Total",
    "Status",
    "Action",
  ];
  return (
    <div className="p-4 bg-[#f4f5fa]">
      <div className="flex gap-4">
        <Card className="bg-white">
          <div className="flex justify-between">
            <div>
              <h2 className="text-xl font-semibold">Total Visitors</h2>
              <CountUp
                end={30500}
                className="text-[#1b65b6] text-2xl font-bold"
              ></CountUp>
            </div>
            <SvgIcon
              className="w-8 h-8 text-[#1b65b6]"
              path="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"
            ></SvgIcon>
          </div>
        </Card>
        <Card className="bg-white">
          <div className="flex justify-between">
            <div>
              <h2 className="text-xl font-semibold">Total Product</h2>
              <CountUp
                end={30500}
                className="text-[#ff7f77] text-2xl font-bold"
              ></CountUp>
            </div>

            <SvgIcon
              className="w-8 h-8 text-[#ff7f77]"
              path="m21 7.5-9-5.25L3 7.5m18 0-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9"
            ></SvgIcon>
          </div>
        </Card>
        <Card className="bg-white">
          <div className="flex justify-between">
            <div>
              <h2 className="text-xl font-semibold">Orders Completed</h2>
              <CountUp
                end={130850}
                className="text-[#1281f1] text-2xl font-bold"
              ></CountUp>
            </div>
            <SvgIcon
              className="w-8 h-8 text-[#1281f1]"
              path="M20.25 14.15v4.25c0 1.194-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.006Z"
            />
          </div>
        </Card>
        <Card className="bg-white">
          <div className="flex justify-between">
            <div>
              <h2 className="text-xl font-semibold">Order in Process</h2>
              <CountUp
                end={260}
                className="text-[#dc2e64] text-2xl font-bold"
              ></CountUp>
            </div>

            <SvgIcon
              className="w-8 h-8 text-[#dc2e64]"
              path="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"
            />
          </div>
        </Card>
      </div>
      {/* product chart  */}
      <div className="mt-4 grid grid-cols-4 w-full gap-4 ">
        <div className="col-span-3 ">
          <div className="rounded-md shadow-md hover:shadow-lg transition-all duration-300 bg-white">
            <div className="flex justify-between items-center px-4">
              <h2 className="text-xl text-[#000047] py-2 "> Lasted Seals </h2>
              <OutLineButton
                title="Views all"
                className="bg-[#000047] text-white hover:bg-white hover:text-[#000047]"
              />
            </div>
            <ApexChart
              data={data}
              height={350}
              className="bg-white w-[99.99%] p-4 rounded-md shadow-md hover:shadow-lg transition-all duration-300"
              chartType="bar"
              series={series}
            />
          </div>

          {/* Best user  */}

          <div className=" mt-4 rounded-md shadow-md hover:shadow-lg transition-all duration-300 bg-white ">
            <div className="flex justify-between items-center px-4">
              <h2 className="text-xl text-[#000047] py-2 "> Lasted Order </h2>
              <OutLineButton
                title="Views all"
                className="bg-[#000047] text-white hover:bg-white hover:text-[#000047]"
              />
            </div>

            <Table headers={tableHeaders}>
              <motion.tr
                animate={{ scale: 1 }}
                whileHover={{ scale: 0.99 }}
                className="overflow-hidden"
              >
                <td className={`px-6 py-4 whitespace-nowrap`}>01</td>
                <td className={`px-6 py-4 whitespace-nowrap`}>1112220021</td>
                <td className={`px-6 py-4 whitespace-nowrap`}>12-12-2023</td>
                <td className={`px-6 py-4 whitespace-nowrap`}>Omar Faruk</td>
                <td className={`px-6 py-4 whitespace-nowrap`}>1000</td>
                <td className={`px-6 py-4 whitespace-nowrap`}>Padding</td>

                <td className={`px-6 py-4 whitespace-nowrap`}>
                  <div className="flex g-6 justify-between items-center">
                    {/* view details for single product */}

                    <SvgIcon
                      className="w-6 h-6 text-[#0eb77a] cursor-pointer"
                      path="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                    ></SvgIcon>
                  </div>
                </td>
              </motion.tr>
              <motion.tr
                animate={{ scale: 1 }}
                whileHover={{ scale: 0.99 }}
                className="overflow-hidden"
              >
                <td className={`px-6 py-4 whitespace-nowrap`}>01</td>
                <td className={`px-6 py-4 whitespace-nowrap`}>1112220021</td>
                <td className={`px-6 py-4 whitespace-nowrap`}>12-12-2023</td>
                <td className={`px-6 py-4 whitespace-nowrap`}>Omar Faruk</td>
                <td className={`px-6 py-4 whitespace-nowrap`}>1000</td>
                <td className={`px-6 py-4 whitespace-nowrap`}>Padding</td>

                <td className={`px-6 py-4 whitespace-nowrap`}>
                  <div className="flex g-6 justify-between items-center">
                    {/* view details for single product */}
                    <SvgIcon
                      className="w-6 h-6 text-[#0eb77a] cursor-pointer"
                      path="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                    ></SvgIcon>
                  </div>
                </td>
              </motion.tr>
              <motion.tr
                animate={{ scale: 1 }}
                whileHover={{ scale: 0.99 }}
                className="overflow-hidden"
              >
                <td className={`px-6 py-4 whitespace-nowrap`}>01</td>
                <td className={`px-6 py-4 whitespace-nowrap`}>1112220021</td>
                <td className={`px-6 py-4 whitespace-nowrap`}>12-12-2023</td>
                <td className={`px-6 py-4 whitespace-nowrap`}>Omar Faruk</td>
                <td className={`px-6 py-4 whitespace-nowrap`}>1000</td>
                <td className={`px-6 py-4 whitespace-nowrap`}>Padding</td>

                <td className={`px-6 py-4 whitespace-nowrap`}>
                  <div className="flex g-6 justify-between items-center">
                    {/* view details for single product */}
                    <SvgIcon
                      className="w-6 h-6 text-[#0eb77a] cursor-pointer"
                      path="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                    ></SvgIcon>
                  </div>
                </td>
              </motion.tr>
              <motion.tr
                animate={{ scale: 1 }}
                whileHover={{ scale: 0.99 }}
                className="overflow-hidden"
              >
                <td className={`px-6 py-4 whitespace-nowrap`}>01</td>
                <td className={`px-6 py-4 whitespace-nowrap`}>1112220021</td>
                <td className={`px-6 py-4 whitespace-nowrap`}>12-12-2023</td>
                <td className={`px-6 py-4 whitespace-nowrap`}>Omar Faruk</td>
                <td className={`px-6 py-4 whitespace-nowrap`}>1000</td>
                <td className={`px-6 py-4 whitespace-nowrap`}>Padding</td>

                <td className={`px-6 py-4 whitespace-nowrap`}>
                  <div className="flex g-6 justify-between items-center">
                    {/* view details for single product */}
                    <SvgIcon
                      className="w-6 h-6 text-[#0eb77a] cursor-pointer"
                      path="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                    ></SvgIcon>
                  </div>
                </td>
              </motion.tr>
              <motion.tr
                animate={{ scale: 1 }}
                whileHover={{ scale: 0.99 }}
                className="overflow-hidden"
              >
                <td className={`px-6 py-4 whitespace-nowrap`}>01</td>
                <td className={`px-6 py-4 whitespace-nowrap`}>1112220021</td>
                <td className={`px-6 py-4 whitespace-nowrap`}>12-12-2023</td>
                <td className={`px-6 py-4 whitespace-nowrap`}>Omar Faruk</td>
                <td className={`px-6 py-4 whitespace-nowrap`}>1000</td>
                <td className={`px-6 py-4 whitespace-nowrap`}>Padding</td>

                <td className={`px-6 py-4 whitespace-nowrap`}>
                  <div className="flex g-6 justify-between items-center">
                    {/* view details for single product */}
                    <SvgIcon
                      className="w-6 h-6 text-[#0eb77a] cursor-pointer"
                      path="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                    ></SvgIcon>
                  </div>
                </td>
              </motion.tr>
            </Table>
          </div>
        </div>
        <div>
          <div className="">
            <div className="flex flex-col gap-4 p-4 rounded-md shadow-md hover:shadow-lg transition-all duration-300 bg-white">
              <h3 className="text-xl font-semibold">Most Viewed Products</h3>
              <Card className="p-[10px] bg-slate-400">
                <div className="flex gap-3 text-[#000047] font-semibold">
                  <img src="" className="w-14 h-14 bg-red-500" alt="" />
                  <p>This is a new product </p>
                </div>
              </Card>
              <Card className="p-[10px] bg-slate-400">
                <div className="flex gap-3 text-[#000047] font-semibold">
                  <img src="" className="w-14 h-14 bg-red-500" alt="" />
                  <p>This is a new product </p>
                </div>
              </Card>
              <Card className="p-[10px] bg-slate-400">
                <div className="flex gap-3 text-[#000047] font-semibold">
                  <img src="" className="w-14 h-14 bg-red-500" alt="" />
                  <p>This is a new product </p>
                </div>
              </Card>
              <Card className="p-[10px] bg-slate-400">
                <div className="flex gap-3 text-[#000047] font-semibold">
                  <img src="" className="w-14 h-14 bg-red-500" alt="" />
                  <p>This is a new product </p>
                </div>
              </Card>
              <button className="border w-full uppercase py-1">
                view all product
              </button>
            </div>
            <div className="mt-4 flex flex-col gap-4 p-4 rounded-md shadow-md hover:shadow-lg transition-all duration-300 bg-white">
              <h3 className="text-xl font-semibold">Most Viewed Products</h3>
              <Card className="p-[10px] bg-slate-400">
                <div className="flex gap-3 text-[#000047] font-semibold">
                  <img src="" className="w-14 h-14 bg-red-500" alt="" />
                  <p>This is a new product </p>
                </div>
              </Card>
              <Card className="p-[10px] bg-slate-400">
                <div className="flex gap-3 text-[#000047] font-semibold">
                  <img src="" className="w-14 h-14 bg-red-500" alt="" />
                  <p>This is a new product </p>
                </div>
              </Card>
              <Card className="p-[10px] bg-slate-400">
                <div className="flex gap-3 text-[#000047] font-semibold">
                  <img src="" className="w-14 h-14 bg-red-500" alt="" />
                  <p>This is a new product </p>
                </div>
              </Card>
              <Card className="p-[10px] bg-slate-400">
                <div className="flex gap-3 text-[#000047] font-semibold">
                  <img src="" className="w-14 h-14 bg-red-500" alt="" />
                  <p>This is a new product </p>
                </div>
              </Card>
              <button className="border w-full uppercase py-1">
                view all product
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
