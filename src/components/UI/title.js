import React from "react";

export const Title = ({ children }) => {
    return (
        <div className="text-center mb-5">
            <h1 className="text-2xl">{children}</h1>
        </div>
    );
};
