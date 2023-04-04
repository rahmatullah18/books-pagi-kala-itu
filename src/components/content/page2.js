import { Background } from "../UI/background";
import { Title } from "../UI/title";


export const Page2 = ({ number }) => {
    return (
        <Background>
            <div className="z-40 relative">
                <Title>Bab I Pertemuan</Title>
                <div className="flex justify-center">
                    <img
                        className=" w-16 z-10"
                        src={`${process.env.REACT_APP_PUBLIC_URL}/image/flower1.svg`}
                        alt="flower"
                    />
                </div>
                <div className="leading-normal text-xs indent-4 text-justify space-y-2">
                    <p>
                        Aku masih ingat pada pagi itu dimana pada hari pertama masuk kampus.
                        Aku datang terburu-buru karena jam matakuliah pertama telah dimulai.
                        Saat sampai di depan kelas, aku mengintip di jendela, dosen sedang
                        menjelaskan dan banyak mahasiswa baru yang telah masuk kelas. Pada
                        kondisi tersebut aku benar-benar gugup untuk menyelonong masuk
                        sendirian apalagi kondisi saat itu lagi terlambat dan kuputuskan
                        menunggu di depan kelas sambil jongkok kek orang bego dan berfikir
                        masuk kelas atau bolos saja. Tiba-tiba ada seorang Wanita
                        terbirit-birit datang sambil membawa totebag dengan paras imut dan
                        cantik lalu berhenti di depan kelas yang sama seperti kelasku, dan
                        dia melakukan hal yang mirip dengan ku saat datang terlambat tadi,
                        tapi bedannya dia tidak jongkok tapi berdiri depan kelas kek orang
                        bego.
                    </p>
                    <p>
                        Setelah beberapa saat menunggu dengan perasaan yang sangat jenuh di
                        depan kelas tanpa ada kepastian kuputuskan untuk mendatangi Wanita
                        tersebut dan berkata <i>“kamu kelas D juga?”</i> diapun menjawab
                        <i>“iya”</i> lalu kusambung <i>“ayo masuk kelas bareng”</i> aku
                        berfikir mengajaknya masuk kelas biar kalau di hukum atau di usir
                        sama dosen ada teman dan tidak malu sendiri.
                    </p>
                </div>
            </div>
            <div className="w-8 h-8 absolute text-white z-20 bottom-1 left-1/2 rounded-full flex justify-center items-center bg-gray-800">
                {number}
            </div>
        </Background>
    );
};
