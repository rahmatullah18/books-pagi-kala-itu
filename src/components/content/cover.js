import React from "react";

export const Cover = () => {
    return (
        <div className="relative h-full">
            <img
                src={`${process.env.REACT_APP_PUBLIC_URL}/image/cover.svg`}
                className="fixed inset-0"
                alt="cover"
            />
        </div>
    );
};
