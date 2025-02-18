import React from 'react'

const MyInput = (props) => {
  return (
    <div className='space-y-2'>
      <label className='text-sm font-semibold'>
        {props.name === "firstName" ? "First name" : props.name === "lastName" ? "Last name" : props.name === "userName" ? "User name" : props.name === "eMail" ? "Email" : props.name === "phoneNumber" ? "Phone number" : props.name === "password" ? "Password" : props.name === "rePassword" ? "Confirm password" : ""}
        <span className="text-red-700 font-bold">*</span>
      </label>
      <input
        name="text"
        placeholder={props.name === "firstName" ? "Your first name" : props.name === "lastName" ? "Your last name" : props.name === "userName" ? "Your user name" : props.name === "eMail" ? "Your email" : props.name === "phoneNumber" ? "Your phone number" : props.name === "password" ? "Your password" : props.name === "rePassword" ? "Confirm password" : ""}
        className="w-full border-2 border-[#CBD5E1] rounded-lg p-3 focus:border-[#0CA5E9]"
      />
    </div>
  )
}

export default MyInput
