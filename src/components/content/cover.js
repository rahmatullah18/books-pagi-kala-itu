import React from "react";

export const Cover = () => {
    return (
        <div className="relative h-full">
            <img
                src={`${process.env.REACT_APP_PUBLIC_URL}/image/cover.jpg`}
                className="fixed inset-0 object-contain h-full"
                alt="cover"
            />
        </div>
    );
};
