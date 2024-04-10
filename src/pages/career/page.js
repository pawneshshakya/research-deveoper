"use client"
import React,{useRef} from 'react'
import emailjs from "emailjs-com";
const Page = ({children}) => {

  const formRef = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        // Service Id
        "service_apqc54u",
        // Template Id 
        "template_2a0ko4c",
        formRef.current,
        "12kou2J7vUF80r7C2"
      )
      .then((result) => {
        console.log("Email successfully sent", result.text);
        console.log(result)
      })
      .catch((error) => {
        console.error("Email sending failed:", error);
      });
    e.target.reset();
  };
  return (

    <div className="w-full mt-16 px-5 sm:px-16 lg:px-36 min-h-[380px]">
      <div  className="max-w-screen-xl mx-auto">
        <div className="col-span-2 border p-5 rounded bg-gray-100 ">
          <h1 className="text-[#0176bc] text-xl">
            <b>Your Information</b>
          </h1>
          <hr className="mt-3" />
          <form ref ={formRef} onSubmit={sendEmail}>
          <div className="md:px-5">
            <div className="mt-5 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <label
                  for="firstname"
                  className="block text-lg font-medium leading-6 text-gray-900"
                >
                  First Name
                </label>
                <div className="mt-5">
                  <input
                    type="text"
                    name="firstname"
                    id="firstname"
                    className="block bg-gray-300 w-full rounded-md border-0 py-2 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-200 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label
                  for="lastname"
                  className="block text-lg font-medium leading-6 text-gray-900"
                >
                  Last Name
                </label>
                <div className="mt-5">
                  <input
                    type="text"
                    name="lastname" 
                    id="lastname"
                    className="block bg-gray-300  w-full rounded-md border-0 py-2 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-200 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>
            <div className="mt-5 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <label
                  for="email"
                  className="block  text-lg font-medium leading-6 text-gray-900"
                >
                  Email
                </label>
                <div className="mt-5">
                  <input 
                    type="email"
                    name="email" 
                    id="email"
                    className="block bg-gray-300  w-full rounded-md border-0 px-3 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-200 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label
                  for="phone"
                  className="block text-lg font-medium leading-6 text-gray-900"
                >
                  Phone
                </label>
                <div className="mt-5">
                  <input 
                    type="number"
                    name="mobile" 
                    className="block bg-gray-300  w-full rounded-md border-0 py-2 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-200 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>
            <div className="mt-5 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <label
                  for="username"
                  className="block  text-lg font-medium leading-6 text-gray-900"
                >
                   Resume
                </label>
                <div className="mt-5">
                  <input 
                    type="file"
                    name="resume"
                    id="qualification"
                    className="block w-full bg-gray-300  rounded-md border-0 px-3 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-200 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label
                  for="otherQualification"
                  className="block text-lg font-medium leading-6 text-gray-900"
                >
                  Which Post You Want to apply
                </label>
                <div className="mt-5">
                  {/* <input 
                    type="file"
                    name="otherQualification"
                    id="otherQualification"
                    className="block w-full bg-gray-300  rounded-md border-0 py-2 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-200 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  /> */}
                  <select className='block w-full bg-gray-300  rounded-md border-0 py-3 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-200 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'>
                    <option></option>
                    <option></option>
                    <option></option>
                    <option></option>
                    <option></option>
                    <option></option>
                  </select>
                </div>
              </div>
            </div>
            
            <button
              type="submit"
              className="w-full text-lg text-white hover:bg-sky-500 py-2 rounded-md my-10 bg-gradient-to-r from-[#0176bc] via-purple-500 to-[#e82e5d]"
            >
              Submit
            </button>
          </div>
          </form>
         
        </div>
        {children}
      </div>
    </div>
  
  )
}

export default Page
