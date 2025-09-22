import React, { useContext, useEffect } from "react";
import { AdminContext } from "../../context/AdminContext";

const DoctorList = () => {
  const { doctors, aToken, getAllDoctors } = useContext(AdminContext);

  useEffect(() => {
    if (aToken) {
      getAllDoctors();
    }
  }, [aToken]);

  return (
    <div className="w-3/4 flex flex-col items-center pt-8 px-8 max-h-[90vh] overflow-y-auto">
      <h1 className="text-2xl font-semibold mb-6 self-start">All Doctors</h1>
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 justify-items-center pr-5">
        {doctors.map((item, index) => (
          <div
            className="bg-white border border-indigo-100 rounded-2xl shadow-md w-56 min-h-[320px] flex flex-col items-center overflow-hidden cursor-pointer group transition-all duration-300 hover:shadow-lg"
            key={index}
          >
            <div className="w-full h-48 flex items-center justify-center bg-indigo-50 group-hover:bg-indigo-100 transition-all duration-300">
              <img
                className="object-contain h-52 w-40"
                src={item.image}
                alt={item.name}
              />
            </div>
            <div className="w-full px-4 py-3 flex flex-col items-start">
              <p className="text-neutral-900 text-lg font-semibold leading-tight truncate w-full">
                {item.name}
              </p>
              <p className="text-indigo-600 text-sm font-medium mb-2 w-full truncate">
                {item.speciality}
              </p>
              <div className="flex items-center gap-2 mt-1">
                <input
                  type="checkbox"
                  checked={item.available}
                  readOnly
                  className="accent-indigo-500"
                />
                <span className="text-zinc-700 text-sm">Available</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DoctorList;
