import { Background } from "../UI/background";


export const Page7 = ({ number }) => {
    return (
        <Background>
            <div className="z-40 relative">
                <div className="leading-normal text-xs indent-4 text-justify">
                    <p>
                        Dia mempunyai kepribadian yang lucu dan mudah tertawa entah itu hal
                        absurd sampai aneh dan juga saat tertawa dia mempunyai lesung pipi
                        dibagian kiri dan kanan yang membuatnya tambah lucu saat tertawa.
                        Dia ini orangnya pandai menyampaikan sesuatu sehingga sangat cocok
                        dengan aku yang tidak pandai berkata-kata dan terkesan pendiam.
                        Entah senang aja kalau bersamannya terasa semua hal gampang di
                        utarakan tanpa ada keraguan. Selain dari semua itu hal yang paling
                        kusuka darinnya adalah suarannya. Entah hanya aku yang merasa atau
                        teman-temannya juga kalau ngobrol biasa suarannya agak cempreng tapi
                        kalau nyanyi suarannya merdu sekali, benar-benar hal yang bertolak
                        belakang.
                    </p>
                </div>
                <div className="flex justify-center mt-10">
                    <img
                        className=" bottom-10 w-24 right-4 z-10"
                        src={`${process.env.REACT_APP_PUBLIC_URL}/image/flower2.svg`}
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
