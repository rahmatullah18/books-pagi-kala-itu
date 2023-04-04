import { Background } from "../UI/background";


export const Page5 = ({ number }) => {
    return (
        <Background>
            <div className="z-40 relative">
                <div className="leading-normal text-xs indent-4 text-justify">
                    <p>
                        Selanjutnya dia menanyakan tentang soal algoritma yang dia tidak
                        ketahui dan langsung saja kujelaskan dengan suara yang ku
                        lembut-lembutkan muka senyum serta pura-pura pintar biar kesan
                        pertama bagus dan betul saja kesan pertama bagus, kenapa aku bisa
                        bilang begitu karna malammnya dia ngechat ke nomorku wkwk, walaupun
                        dia ngechatnya menannyakan tentang tugas. Setelah kejadian itu kami
                        pun rutin chat, hampir tiap hari selalu ada interaksi dan pada
                        tanggal 12-desember-2018{" "}
                        <i>(yang bertepatan pada hari belanja online nasional)</i>{" "}
                        kunyatakan perasaan yang kupendam ke dia dan akhirnya diterima.
                    </p>
                </div>
            </div>

            <img
                className="absolute bottom-20 w-48 right-4 z-10"
                src={`${process.env.REACT_APP_PUBLIC_URL}/image/men-left.svg`}
                alt="men"
            />
            <img
                className="absolute bottom-16 w-40 left-7 z-10"
                src={`${process.env.REACT_APP_PUBLIC_URL}/image/women-right.svg`}
                alt="men"
            />
            <div className="w-8 h-8 absolute text-white z-20 bottom-1 left-1/2 rounded-full flex justify-center items-center bg-gray-800">
                {number}
            </div>
        </Background>
    );
};
