import { Background } from "../UI/background";
import { Title } from "../UI/title";


export const Page4 = ({ number }) => {
    return (
        <Background>
            <div className="z-40 relative">
                <Title>Bab II Interaksi</Title>
                <div className="leading-normal text-xs indent-4 text-justify">
                    <p>
                        hari terus berputar akhirnya ada kesempatan untuk dapat berinteraksi
                        dengan “Afni” nama yang indah yang kutau saat absen kelas. Kebetulan
                        hari itu kuliah pelajaran Algoritma pemrograman, pelajaran yang
                        benar-benar ku kuasai karna dari SMK sudah pernah kupelajarin. Saat
                        matkul tersebut kebetulan posisi duduknya belakang kursiku jadi
                        untuk berinteraksi mudah. Momen interaksi pertama pun tiba, dia
                        tiba-tiba memanggilku <i>“mamat”</i> entah dari mana dia tau nama
                        pendekku aku pun langsung menoleh tanpa basa basi kearahnya dan
                        memandangnya, bagi kalian yang pernah jatuh cinta pasti pernah
                        merasakan perasaan senang dan takut secara bersamaan saat sedang
                        interaksi dengan gebetan, nh itu yang kualami saat itu. Senang dapat
                        berinteraksi dan takut karna siapa tau kesan pertama buruk
                        terhadapnya.
                    </p>
                </div>
            </div>

            <img
                className="absolute bottom-5 w-20 right-4 z-10"
                src={`${process.env.REACT_APP_PUBLIC_URL}/image/women.svg`}
                alt="men"
            />
            <div className="w-8 h-8 absolute text-white z-20 bottom-1 left-1/2 rounded-full flex justify-center items-center bg-gray-800">
                {number}
            </div>
        </Background>
    );
};
