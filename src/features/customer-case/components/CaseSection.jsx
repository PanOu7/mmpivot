"use client";

import { HiSearch, HiX } from "react-icons/hi";
import { HiPlus } from "react-icons/hi2";
import Link from "next/link";
import CaseEmptyStage from "./CaseEmptyStage";
import CaseRow from "./CaseRow";
import Pagination from "../../../components/Pagination";
import Sortable from "../../../components/Sortable";
import useCase from "../hooks/useCase";
import CaseSkeletonLoader from "./CaseSkeletonLoader";

const CaseSection = () => {
  const {
    searchRef,
    data,
    isLoading,
    handleSearchInput,
    handleSort,
    handleLimit,
    handlePaginate,
    clearSearchInput,
    params,
  } = useCase();

  return (
    <section>
      <div className="flex justify-between mb-5">
        <div className="">
          <div className="relative ">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
              <HiSearch className="w-4 h-4 text-gray-500 dark:text-gray-400" />
            </div>
            <input
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search Case"
              onChange={handleSearchInput}
              ref={searchRef}
            />
            {params?.get("q") && (
              <div
                className="absolute inset-y-0 end-0 flex items-center pe-3.5 cursor-pointer"
                onClick={clearSearchInput}
              >
                <HiX className="w-4 h-4 text-gray-500 dark:text-gray-400" />
              </div>
            )}
          </div>
        </div>
        <div className="">
          <Link
            href="/dashboard/customer-case/create"
            className="text-white h-full flex justify-center items-center gap-3 bg-blue-600 hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-400 dark:hover:bg-blue-500 dark:focus:ring-blue-600"
          >
            Add Case
            <HiPlus />
          </Link>
        </div>
      </div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg mb-5">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-5">
                <Sortable handleSort={handleSort} sort_by={`id`}>
                  #
                </Sortable>
              </th>
              <th scope="col" className="px-6 py-5">
                <Sortable handleSort={handleSort} sort_by={`title`}>
                  Case
                </Sortable>
              </th>

              <th scope="col" className="px-6 py-5">
                <Sortable handleSort={handleSort} sort_by={`status`}>
                  status
                </Sortable>
              </th>
              <th scope="col" className="px-6 py-5">
                <Sortable handleSort={handleSort} sort_by={`start_date`}>
                  Service
                </Sortable>
              </th>

              <th scope="col" className="px-6 py-5">
                Customer
              </th>

              <th scope="col" className="px-6 py-5 text-end">
                Created
              </th>

              <th scope="col" className="px-6 py-5 text-end">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {isLoading ? (
              <CaseSkeletonLoader />
            ) : data?.data?.length === 0 ? (
              <CaseEmptyStage />
            ) : (
              data?.data?.map((el) => <CaseRow case={el} key={el.id} />)
            )}
          </tbody>
        </table>
      </div>
      {
        <Pagination
          links={data?.links}
          meta={data?.meta}
          handlePaginate={handlePaginate}
          handleLimit={handleLimit}
        />
      }
    </section>
  );
};

export default CaseSection;
