import React from "react";
import { Fragment, useState } from "react";

export default function RegisterVendor() {
  const [name, setName] = useState("");

  /* const handleSubmit=async (e)=>{
    e.preventDefault();
    try {
      const body={name};
      const res=await fetch("http://localhost:5000/vendorReg",{
        method:"POST",
        headers:{"Content-type":"application/json"},
        body:JSON.stringify(body)
      });
      
    } catch (err) {
      console.error(err.message);
      
    }
  } */
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [phNum, setPhNum] = useState("");
  const [shopName, setShopName] = useState("");
  const [shopAddr, setShopAddr] = useState("");
  const [resiAddr, setResiAddr] = useState("");
  const [passwd, setPasswd] = useState("");
  const [retypePw, setRetypePw] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const body = {
        name,
        email,
        age,
        phNum,
        shopName,
        shopAddr,
        resiAddr,
        passwd,
      };
      fetch("http://localhost:5000/vendorReg");
    } catch (err) {
      console.error(err.message);
    }
  };
  return (
    <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <img
            className="mx-auto h-12 w-auto"
            src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
            alt="Workflow"
          />
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Register as Vendor
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Or{" "}
            <a
              href="#"
              className="font-medium text-indigo-600 hover:text-indigo-500"
            >
              Login
            </a>
          </p>
        </div>
        <form
          className="mt-8 space-y-6"
          action="http://localhost:5000/vendorReg"
          method="POST"
          onSubmit={handleSubmit}
        >
          <input type="hidden" name="remember" defaultValue="true" />
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="name" className="sr-only">
                Name
              </label>
              <input
                id="name"
                name="name"
                value={name}
                type="text"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Name"
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </div>

            <div>
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                value={email}
                type="email"
                autoComplete="email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Email address"
              />
            </div>
            <div>
              <label htmlFor="age" className="sr-only">
                Age
              </label>
              <input
                id="age"
                name="age"
                type="number"
                value={age}
                onChange={(e) => {
                  setAge(e.target.value);
                }}
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Age"
              />
            </div>
            <div>
              <label htmlFor="phone-number" className="sr-only">
                Phone Number
              </label>
              <input
                id="ph-num"
                name="ph-num"
                value={phNum}
                type="tel"
                pattern="[0-9]{10}"
                required
                className="appearance-none relative rounded-none block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Phone number (eg: 1234567890)"
                onChange={(e) => {
                  setPhNum(e.target.value);
                }}
              />
            </div>
            <div>
              <label htmlFor="shop-name" className="sr-only">
                Shop Name
              </label>
              <input
                id="shop-name"
                name="shop-name"
                value={shopName}
                type="text"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Shop Name"
                onChange={(e) => {
                  setShopName(e.target.value);
                }}
              />
            </div>

            {/*  <div>
              <label htmlFor="business-type" className="sr-only">
                Business Type
              </label>
              <input
                id="business-type"
                name="business-type"
                type="text"
                autoComplete="current-password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Business Type"
              />
            </div> */}

            <div>
              <label htmlFor="shop-address" className="sr-only">
                Shop Address
              </label>
              <input
                id="shop-address"
                value={shopAddr}
                name="shop-address"
                type="text"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Shop address"
                onChange={(e) => {
                  setShopAddr(e.target.value);
                }}
              />
            </div>
            <div>
              <label htmlFor="residential-address" className="sr-only">
                Residential Address
              </label>
              <input
                id="residential-address"
                value={resiAddr}
                name="residential-address"
                type="text"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Residential Address"
                onChange={(e) => {
                  setResiAddr(e.target.value);
                }}
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                value={passwd}
                type="password"
                autoComplete="password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Password"
                onChange={(e) => {
                  setPasswd(e.target.value);
                }}
              />
            </div>
            <div>
              <label htmlFor="Retype-passowrd" className="sr-only">
                Retype Password
              </label>
              <input
                id="Retype-Password"
                name="Retyep-password"
                value={retypePw}
                type="password"
                autoComplete="password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Retype Password"
                onChange={(e) => {
                  setRetypePw(e.target.value);
                }}
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <span className="absolute left-0 inset-y-0 flex items-center pl-3"></span>
              Sign up
            </button>
          </div>
          <p>{message}</p>
        </form>
      </div>
    </div>
  );
}
