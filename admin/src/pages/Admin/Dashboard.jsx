import React, { useContext, useEffect } from "react";
import { AdminContext } from "../../context/AdminContext";
import { assets } from "../../assets/assets";

const Dashboard = () => {
  const { aToken, getDashData, dashData, cancelAppointment } =
    useContext(AdminContext);

  useEffect(() => {
    if (aToken) {
      getDashData();
    }
  }, [aToken]);

  return (
    dashData && (
      <div className="m-5">
        <div className="flex flex-wrap gap-3">
          <div className="flex items-center gap-2 bg-white p-4 min-w-52 rounded-lg border-2 border-gray-100 cursor-pointer hover:scale-105 hover:bg-purple-300 transition-all">
            <img src={assets.doctor_icon} alt="" />
            <div>
              <p>{dashData.doctors}</p>
              <p>Doctors</p>
            </div>
          </div>

          <div className="flex items-center gap-2 bg-white p-4 min-w-52 rounded-lg border-2 border-gray-100 cursor-pointer hover:scale-105 hover:bg-purple-300 transition-all">
            <img src={assets.appointments_icon} alt="" />
            <div>
              <p>{dashData.appointments}</p>
              <p>Appointments</p>
            </div>
          </div>

          <div className="flex items-center gap-2 bg-white p-4 min-w-52 rounded-lg border-2 border-gray-100 cursor-pointer hover:scale-105 hover:bg-purple-300 transition-all">
            <img src={assets.patients_icon} alt="" />
            <div>
              <p>{dashData.patients}</p>
              <p>Patients</p>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default Dashboard;
