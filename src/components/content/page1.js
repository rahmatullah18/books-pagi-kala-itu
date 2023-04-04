import React from "react";
import { Background } from "../UI/background";
import { Title } from "../UI/title";

export const Page1 = ({ number }) => {
    return (
        <Background>
            <div className="z-40 relative">
                <Title>Kata Pengantar</Title>
                <div className="leading-normal text-xs indent-4 text-justify">
                    <p>
                        Halo, terimakasih telah mau meluangkan waktu untuk membaca buku
                        “Pagi Kala itu”. Buku singkat ini saya buat sebagai kado ulang tahun
                        buat seseorang. Disclaimer untuk pembaca buku ini mungkin akan
                        berisi kata-kata cringe, yang akan membuat belakang leher anda agak
                        sedikit geli serta kata-kata yang mungkin aneh dan kureng, tapi
                        terlepas dari itu buku ini saya buat dengan sepenuh hati tanpa ada
                        campur tangan orang lain.
                    </p>
                </div>
            </div>
            <img
                className="absolute top-1 w-20 right-0 z-10"
                src={`${process.env.REACT_APP_PUBLIC_URL}/image/flower1.svg`}
                alt="flower"
            />
            <img
                className="absolute bottom-0 w-40 left-0 z-10"
                src={`${process.env.REACT_APP_PUBLIC_URL}/image/men-sitdown.svg`}
                alt="men"
            />
            <div className="w-8 h-8 absolute text-white z-20 bottom-1 left-1/2 rounded-full flex justify-center items-center bg-gray-800">
                {number}
            </div>
        </Background>
    );
};
