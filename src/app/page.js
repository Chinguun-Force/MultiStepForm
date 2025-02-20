'use client'
import Button from "@/components/Button";
import MyInput from "@/components/MyInput";
import MyForm from "@/components/Tetso";
import { useState } from "react";


export default function Home() {
  const [currentStep, setCurrentStep] = useState(0)
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
        <MyInput name = "firstName"/>
        <MyInput name = "lastName"/>
        <MyInput name = "userName"/>
      </div>
    )
  }
  const StepTwo = () => {
    return(
      <div className="space-y-3">
        <MyInput name = "eMail"/>
        <MyInput name = "phoneNumber"/>
        <MyInput name = "password"/>
        <MyInput name = "rePassword"/>
      </div>
    )
  }
  const StepThree = () => {
    return(
      <div className="space-y-3">
        <MyInput name = "dob"/>
        <MyInput name = "file"/>
      </div>
    )
  }
  const steps = [<StepOne/>, <StepTwo/>, <StepThree/>]
  return (
    <div className="bg-white rounded-xl p-8 h-[655px] shadow-lg flex flex-col justify-between">
      <div className="flex flex-col gap-2 mb-7">
        <img
          src="https://s3-alpha-sig.figma.com/img/48cb/cd1f/b0c85cb83db9b8c1218a4675117f8e3f?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=RK6~GXUmKu3M2Nk65Wfc3he-IlIzShmGYavswAC9kLgekW1GtkXzkISmXrI2jBQar0XKxe9cuwi5K9cpy9aKvP7ERwOMn-EIOa0HmjkC87EM7f8diEev4TvW8ZUJXO2vUqaTCYg3~q2fSfv1XMlET3Uel~gh0zRPi4i5PGJrFnB40~pjgHaoDLUOXXyBLSfYUCXx7sFA-bSRCk75xF951jYom3goICBzPfk9oGkiR7W-0WFcMqCS9KQdFrASYs-CNDlWiuLc101nBA-ZHed9CWaIGnNBi3nCqJ~uIH0yX7rF8yk6LWNSaWGH9r8wYnUh913dqOW-wSt1U6wupKNk4g__"
          className="w-14 h-14"
        />
        <h1 className="text-2xl font-bold">Join Us! 😎</h1>
        <span className="text-lg text-[#8E8E8E] font-semibold">Please provide all current information accurately.</span>
      </div>
        {steps[currentStep]}
        <Button stepsLength = {steps.length} currentStep = {currentStep} setCurrentStep = {setCurrentStep}/>
        {/* <MyForm/> */}
    </div>
  );
}
