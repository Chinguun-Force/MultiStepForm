import React from 'react';
const Button = () => {
    return (
        <div className='w-full bg-red-800 py-2.5 rounded-lg'>
            <button className="before:content-['<']">
                Back
            </button>
            <button className="after:content-['>']">
                Continue
            </button>
        </div>
    );
};
export default Button;