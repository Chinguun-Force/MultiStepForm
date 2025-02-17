import React from 'react'

const MyInput = () => {
  return (
    <div className='flex flex-col gap-2'>
      <h4 className="text-sm font-semibold">First name <span className="text-red-700 font-bold">*</span></h4>
        <input
          type="text"
          placeholder="Your First Name"
          className="w-full border-2 border-[#CBD5E1] rounded-lg p-3 focus:border-[#0CA5E9]"
        />
    </div>
  )
}

export default MyInput
