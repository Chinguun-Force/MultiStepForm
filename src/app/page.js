'use client'
import Button from "@/components/Button";
import MyInput from "@/components/MyInput";
import { useState } from "react";

export default function Home() {
  const [myFormValue, setMyFormValue] = useState({
    firstName: "",
    lastName: "",
    userName: "",
    eMail: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
    DoB: "",
    proPic: ""
  });
  const StepOne = () => {
    return(
      <div className="space-y-3">
        <MyInput type = "firstName"/>
        <MyInput type = "lastName"/>
        <MyInput type = "userName"/>
      </div>
    )
  }
  const StepTwo = () => {
    return(
      <div className="space-y-3">
        <MyInput type = "eMail"/>
        <MyInput type = "phoneNumber"/>
        <MyInput type = "password"/>
        <MyInput type = "rePassword"/>
      </div>
    )
  }
  const StepThree = () => {
    return(
      <div className="space-y-3">
        <MyInput type = "dob"/>
        <MyInput type = "file"/>
      </div>
    )
  }
  const Steps = [<StepOne/>, <StepTwo/>]
  return (
    <div className="bg-white rounded-xl p-8 h-[655px] shadow-lg">
      <div className="flex flex-col gap-2 mb-7">
        <img
          src="https://s3-alpha-sig.figma.com/img/48cb/cd1f/b0c85cb83db9b8c1218a4675117f8e3f?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=RK6~GXUmKu3M2Nk65Wfc3he-IlIzShmGYavswAC9kLgekW1GtkXzkISmXrI2jBQar0XKxe9cuwi5K9cpy9aKvP7ERwOMn-EIOa0HmjkC87EM7f8diEev4TvW8ZUJXO2vUqaTCYg3~q2fSfv1XMlET3Uel~gh0zRPi4i5PGJrFnB40~pjgHaoDLUOXXyBLSfYUCXx7sFA-bSRCk75xF951jYom3goICBzPfk9oGkiR7W-0WFcMqCS9KQdFrASYs-CNDlWiuLc101nBA-ZHed9CWaIGnNBi3nCqJ~uIH0yX7rF8yk6LWNSaWGH9r8wYnUh913dqOW-wSt1U6wupKNk4g__"
          className="w-14 h-14"
        />
        <h1 className="text-2xl font-bold">Join Us! 😎</h1>
        <span className="text-lg text-[#8E8E8E] font-semibold">Please provide all current information accurately.</span>
      </div>
        {Steps[0]}
        <Button/>
    </div>
  );
}
