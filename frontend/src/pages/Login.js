import React from "react";
import useFetch from "./useFetch"
import LoginBox from "../components/LoginBox";

export default function () {
  const {data:inputs}=useFetch('http://localhost:5000/vendorReg')
  return (
    <div>
      <LoginBox />
    </div>
  );
}
