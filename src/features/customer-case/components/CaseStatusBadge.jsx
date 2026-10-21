"use client";

const CaseStatusBadge = ({ status }) => {
  const statusArray = [
    {
      id: 1,
      statusName: "Not Starting",
      className: "bg-gray-100 text-gray-600",
    },
    {
      id: 2,
      statusName: "Processing",
      className: "bg-yellow-100 text-yellow-600",
    },
    {
      id: 3,
      statusName: "Success",
      className: "bg-green-100 text-green-600",
    },
    {
      id: 4,
      statusName: "Terminated",
      className: "bg-red-100 text-red-600",
    },
  ];

  const currentStatus = statusArray.find((el) => el.id == status);

  return (
    <span className={`${currentStatus?.className} text-nowrap rounded-full px-4 py-1`}>
      {currentStatus?.statusName}
    </span>
  );
};

export default CaseStatusBadge;
