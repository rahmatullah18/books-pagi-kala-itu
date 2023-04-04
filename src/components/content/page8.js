import { Background } from "../UI/background";
import { Title } from "../UI/title";


export const Page8 = ({ number }) => {
    return (
        <Background>
            <div className="z-40 relative">
                <Title>Bab IV Selamat Ulang Tahun</Title>
                <div className="leading-normal text-xs indent-4 text-justify">
                    <p>
                        Selamat ulang tahun yang ke-23, sayang! moga-moga di usia yang baru
                        ini, kamu bisa meraih semua impianmu dan menggapai kesuksesan yang
                        kamu inginkan. Yaa semoga aku bisa selalu berada di sampingmu,
                        mendukungmu dan mencintaimu tanpa syarat. Selamat ulang tahun!!
                    </p>
                </div>
                <div className="flex justify-center mt-10">
                    <img
                        className=" bottom-10 w-40 right-4 z-10"
                        src={`${process.env.REACT_APP_PUBLIC_URL}/image/gandengan.svg`}
                        alt="men"
                    />
                </div>
            </div>
            <div className="w-8 h-8 absolute text-white z-20 bottom-1 left-1/2 rounded-full flex justify-center items-center bg-gray-800">
                {number}
            </div>
        </Background>
    );
};
