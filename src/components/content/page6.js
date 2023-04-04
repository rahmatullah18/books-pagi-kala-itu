import { Background } from "../UI/background";
import { Title } from "../UI/title";


export const Page6 = ({ number }) => {
    return (
        <Background>
            <div className="z-40 relative">
                <Title>Bab III Kepribadian</Title>
                <div className="leading-normal text-xs indent-4 text-justify">
                    <p>
                        Perjalanan 4 tahun membuatku mengerti bagaimana cara memahami
                        sifat-sifat apa saja darinnya, mulai dari sifat baik hingga sifat
                        buruk, pertengahan hubungan adalah masa-masa paling tidak mengenakan
                        dimana perasaan jenuh, bosan, amarah terkumpul menjadi satu. Ada
                        masa dimana saat kami saling tidak bicara, putus nyambung dan
                        kecemburuan yang membuat hubungan berantakan. Tapi aku menyadari
                        memang dalam suatu hubungan pasti akan melewati itu semua. Yang
                        membuatku dapat bertahan dari itu semua adalah kesadaran dan
                        komunikasi. Dimana pengalaman buruk dapat dikalahkan dengan
                        pengelaman baik yang telah dilalui bersama dan juga
                        mengkomunikasikan perasaan yang dimiliki satu sama lain menurutku
                        adalah kunci langgengnya hubungan.
                    </p>
                </div>
                <div className="flex justify-center mt-10">
                    <img
                        className=" bottom-10 w-20 right-4 z-10"
                        src={`${process.env.REACT_APP_PUBLIC_URL}/image/tangan.svg`}
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
