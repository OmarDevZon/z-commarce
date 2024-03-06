/* eslint-disable @typescript-eslint/no-explicit-any */
// DynamicTable.tsx
import React from "react";

interface DynamicTableProps {
  headers: string[];
  children: any;
}

export const Table: React.FC<DynamicTableProps> = ({ headers, children }) => {
  return (
    <div className="overflow-x-auto ">
      <table className=" divide-gray-200 w-full">
        <thead className="bg-gray-50">
          <tr className="bg-gray-300">
            <th
              scope="col"
              className={`px-6 py-3 text-left text-md font-semibold text-gray-500 `}
            >
              SL
            </th>

            {headers.map((header, index) => (
              <th
                key={index}
                scope="col"
                className="px-6 py-3 text-left text-md font-semibold text-gray-500"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">{children}</tbody>
      </table>
    </div>
  );
};
