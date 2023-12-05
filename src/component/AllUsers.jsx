import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useLogin } from "../context/Context";
import Table from "./Table";
import { API_URL } from "../utill/envConfig.js"

const AllUsers = () => {
  const [data, setData] = useState([]);
  const [login, setLogin] = useLogin();
  const { jwtToken, tokenObject } = login;
  // console.log(import.meta.env.VITE_BASE_URL)

  useEffect(() => {
    axios({
      method: "get",
      url: `${API_URL}users`,

      headers: {
        Authorization: jwtToken,
      },
    })
      .then((res) => {
        // console.log("Response:", res);
        setData(res?.data?.data);
        // toast.success("Login Successfully!");
      })
      .catch((error) => {
        if (error?.response?.data?.message) {
          toast.error(error?.response?.data?.message);
          return;
        }

        // toast.error(error.message);
        console.error("Error:", error);
      });
  }, []);

  return <div>
    <h1 className="w-[90%] mx-auto mt-4 text-xl font-serif font-bold">All users list</h1>
    <Table  data={data} />

  </div>;
};

export default AllUsers;
