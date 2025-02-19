import React from 'react';
const Button = (props) => {
    const nextStep = (event) => {
        event.preventDefault();
        if (props.currentStep+1 < props.stepsLength) {
            props.setCurrentStep(props.currentStep + 1);
        }
    }
    const backStep = (event) => {
        event.preventDefault();
        if (props.currentStep > 0) {
            props.setCurrentStep(props.currentStep - 1);
        }
    }
    return (
        <div className='flex gap-2 text-white'>
            {props.currentStep !== 0 && (
                <button className="before:content-['<\00a0\00a0'] w-1/3 py-2.5 rounded-lg bg-[#121316]"
                    onClick={backStep}
                >
                    Back
                </button>
            )}
            <button className={`${props.currentStep != 0 ? "w-full" : "w-full"} ${props.currentStep != props.stepsLength-1 ? `after:content-['']` : ""} py-2.5 rounded-lg bg-[#121316]`}
                onClick={nextStep}
            >
                {props.currentStep != props.stepsLength-1 ? `Continue ${props.currentStep + 1}/${props.stepsLength}` : "Submit"}
            </button>
        </div>
    );
};
export default Button;