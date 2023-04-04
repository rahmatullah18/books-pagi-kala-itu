import React from "react";

export const CoverEnd = () => {

    return (
        <div className="relative h-full">
            <img
                src={`${process.env.REACT_APP_PUBLIC_URL}/image/penutup.svg`}
                className="fixed inset-0"
                alt="cover"
            />
        </div>
    );
};
