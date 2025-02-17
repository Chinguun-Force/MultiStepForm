import React from 'react'

const MyInput = (props) => {
  return (
    <div className='space-y-2'>
      <label className='text-sm font-semibold'>
        {props.type === "firstName" ? "First name" : props.type === "lastName" ? "Last name" : props.type === "userName" ? "User name" : props.type === "eMail" ? "Email" : props.type === "phoneNumber" ? "Phone number" : props.type === "password" ? "Password" : props.rePassword === "rePassword" ? "Confirm password" : ""}
        <span className="text-red-700 font-bold">*</span>
      </label>
      <input
        type="text"
        placeholder={props.type === "firstName" ? "Your first name" : props.type === "lastName" ? "Your last name" : props.type === "userName" ? "Your user name" : props.type === "eMail" ? "Your email" : props.type === "phoneNumber" ? "Your phone number" : props.type === "password" ? "Your password" : props.rePassword === "rePassword" ? "Confirm password" : ""}
        className="w-full border-2 border-[#CBD5E1] rounded-lg p-3 focus:border-[#0CA5E9]"
      />
    </div>
  )
}

export default MyInput
