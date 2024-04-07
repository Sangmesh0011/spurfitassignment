import React from "react";

const WorkBox = ({ isAdmin, id, title, d1, d2, d3, onRemove, onEdit }) => {
  const handleRemove = () => {
    onRemove(id);
  };
  const handleEdit = () => {
    onEdit(id);
  };

  return (
    <div className="w-[300px] h-fit shadow-2xl bg-yellow-100 flex flex-col justify-start items-start p-2 pl-12 pt-6">
      <span className="text-3xl mb-6">{title}</span>
      <ol className="">
        <li className="mb-4">1. {d1}</li>
        <li className="mb-4">2. {d2}</li>
        <li className="mb-4">3. {d3}</li>
      </ol>
      <div className="ml-[-40px] flex justify-center items-center p-6 gap-6">
        {isAdmin && (
          <h1
            className="p-3 w-24 text-center h-fit bg-red-600 cursor-pointer rounded-3xl text-white"
            onClick={handleRemove}
          >
            Remove
          </h1>
        )}
        {isAdmin && (
          <h1
            className="p-3 w-24 text-center h-fit bg-yellow-500 cursor-pointer rounded-3xl text-white"
            onClick={handleEdit}
          >
            Edit
          </h1>
        )}
      </div>
    </div>
  );
};

export default WorkBox;
