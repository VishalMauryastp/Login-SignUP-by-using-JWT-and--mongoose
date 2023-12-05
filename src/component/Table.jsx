// CustomPaginationTable.js

import React, { useState } from "react";

//

const itemsPerPage = window.screen.width > 768 ? 12 : 7;

const CustomPaginationTable = ({ data }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(data.length / itemsPerPage);

  const start = (currentPage - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  const paginatedData = data.slice(start, end);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    const pageNumbers = Array.from(
      { length: totalPages },
      (_, index) => index + 1
    );

    return (
      <div className=" flex justify-center  mt-4">
        {pageNumbers.map((page) => (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            className={`px-3 py-2 mx-1 ${
              currentPage === page
                ? "bg-blue-500 text-white"
                : "bg-gray-300 text-gray-700"
            } rounded`}
          >
            {page}
          </button>
        ))}
      </div>
    );
  };

  return (
    <div className="">
      <div className="container mx-auto mt-4 max-md:overflow-x-scroll ">
        <table className="table-auto border w-full lg:w-[90%] lg:mx-auto  px-4">
          <thead>
            <tr>
              <th className="px-4 py-2">Full Name</th>
              <th className="px-4 py-2">Email</th>
              <th className="px-4 py-2">Created At</th>
            </tr>
          </thead>
          <tbody>
            {paginatedData.map((item, index) => (
              <tr key={index} className="border-t">
                <td className="px-4 py-2 text-center whitespace-nowrap">
                  {item.fullName}
                </td>
                <td className="px-4 py-2 text-center">{item.email}</td>
                <td className="px-4 py-2 text-center">{item.createdAt}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mb-4">
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default CustomPaginationTable;
