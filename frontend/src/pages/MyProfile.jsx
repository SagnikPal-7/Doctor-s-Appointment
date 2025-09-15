import React from "react";
import { assets } from "../assets/assets";

const MyProfile = () => {
  const [userData, setUserData] = React.useState({
    name: "Edward Vincent",
    image: assets.profile_pic,
    email: "edward.vincent@example.com",
    phone: "+91 5677 654 321",
    address: {
      line1: "123 Main, Richardson",
      line2: "Circle, Church Road, London",
    },
    gender: "Male",
    dob: "2000-05-15",
  });

  const [isEdit, setIsEdit] = React.useState(false);

  return (
    <div className="max-w-lg flex flex-col gap-2 text-sm">
      <img className="w-24 h-24 rounded-full" src={userData.image} alt="" />
      {isEdit ? (
        <input
          className="bg-gray-100 text-3xl font-medium mt-4 px-1"
          style={{
            width: `${userData.name.length + 1}ch`,
            minWidth: "4ch",
            maxWidth: "100%",
          }}
          type="text"
          value={userData.name}
          onChange={(e) =>
            setUserData((prev) => ({ ...prev, name: e.target.value }))
          }
        />
      ) : (
        <p className="font-medium text-3xl text-neutral-800 mt-4">
          {userData.name}
        </p>
      )}

      <hr className="bg-zinc-400 h-[1px] border-none" />

      <div>
        <p className="text-neutral-500 underline mt-3">CONTACT INFORMATION</p>

        <div className="grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-700">
          <p className="font-medium">Email id:</p>
          <p className="text-blue-500">{userData.email}</p>

          <p className="font-medium">Phone:</p>
          {isEdit ? (
            <input
              className="bg-gray-100 px-1"
              style={{
                width: `${userData.phone.length + 1}ch`,
                minWidth: "8ch",
                maxWidth: "100%",
              }}
              type="text"
              value={userData.phone}
              onChange={(e) =>
                setUserData((prev) => ({ ...prev, phone: e.target.value }))
              }
            />
          ) : (
            <p className="text-blue-500">{userData.phone}</p>
          )}

          <p className="font-medium">Address:</p>
          {isEdit ? (
            <p>
              <input
                className="bg-gray-100 px-1"
                style={{
                  width: `${userData.address.line1.length + 1}ch`,
                  minWidth: "8ch",
                  maxWidth: "100%",
                }}
                onChange={(e) =>
                  setUserData((prev) => ({
                    ...prev,
                    address: { ...prev.address, line1: e.target.value },
                  }))
                }
                value={userData.address.line1}
                type="text"
              />
              <br />
              <input
                className="bg-gray-100 px-1 mt-1"
                style={{
                  width: `${userData.address.line2.length + 1}ch`,
                  minWidth: "8ch",
                  maxWidth: "100%",
                }}
                onChange={(e) =>
                  setUserData((prev) => ({
                    ...prev,
                    address: { ...prev.address, line2: e.target.value },
                  }))
                }
                value={userData.address.line2}
                type="text"
              />
            </p>
          ) : (
            <p className="text-gray-500">
              {userData.address.line1}
              <br />
              {userData.address.line2}
            </p>
          )}
        </div>
      </div>

      <div>
        <p className="text-neutral-500 underline mt-3">BASIC INFORMATION</p>
        <div className="grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-700">
          <p className="font-medium">Gender</p>
          {isEdit ? (
            <select
              className="bg-gray-100 px-1"
              style={{
                width: `${userData.gender.length + 2}ch`,
                minWidth: "8ch",
                maxWidth: "100%",
              }}
              value={userData.gender}
              onChange={(e) =>
                setUserData((prev) => ({ ...prev, gender: e.target.value }))
              }
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          ) : (
            <p className="text-gray-500">{userData.gender}</p>
          )}

          <p className="font-medium">Date of Birth</p>
          {isEdit ? (
            <input
              className="bg-gray-100 px-1"
              style={{ width: "15ch", minWidth: "8ch", maxWidth: "100%" }}
              type="date"
              value={userData.dob}
              onChange={(e) =>
                setUserData((prev) => ({ ...prev, dob: e.target.value }))
              }
            />
          ) : (
            <p className="text-gray-500">{userData.dob}</p>
          )}
        </div>
      </div>

      <div className="mt-10">
        {isEdit ? (
          <button
            className="border border-primary px-8 py-2 rounded-full hover:bg-primary hover:text-white transition-all hover:shadow-lg hover:scale-105"
            onClick={() => setIsEdit(false)}
          >
            Save information
          </button>
        ) : (
          <button
            className="border border-primary px-8 py-2 rounded-full hover:bg-primary hover:text-white transition-all hover:shadow-lg hover:scale-105"
            onClick={() => setIsEdit(true)}
          >
            Edit
          </button>
        )}
      </div>
    </div>
  );
};

export default MyProfile;
