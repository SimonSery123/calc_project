import React, { useState } from 'react';

const Button = ({ value, onClick }) => {
    const [isClicked, setIsClicked] = useState(false);

    const handleClick = (e) => {
        setIsClicked(true);
        onClick(e);
        setTimeout(() => setIsClicked(false), 30);
    };

    return (
        <button 
            className={`
                border-none text-2xl text-white font-bold 
                cursor-pointer rounded-lg outline-none
                transition-colors duration-100 ease-in-out
                ${value === "=" 
                    ? "bg-[#f33d1d] hover:bg-[#e4270f] active:bg-[#ff5e41]" 
                    : "bg-[#3cacd1] hover:bg-[#2890ad] active:bg-[#4dbfe4]"}
                ${isClicked ? 'animate-blink' : ''}
            `}
            onClick={handleClick}
                >
            {value}
        </button>
    );
};

export default Button;