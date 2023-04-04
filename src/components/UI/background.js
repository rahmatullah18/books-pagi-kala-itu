import React from "react";

export const Background = ({ children }) => {
    return (
        <div className="bg-gradient-to-b relative from-[#FCE7F3] to-[#F9A8D4] to h-full p-8 shadow-md rounded-md font-fastHand">
            {children}
        </div>
    );
};
