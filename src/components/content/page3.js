import { Background } from "../UI/background";


export const Page3 = ({ number }) => {
    return (
        <Background>
            <div className="z-40 relative">
                <div className="leading-normal text-xs indent-4 text-justify space-y-2">
                    <p>
                        Setelah beberapa saat menunggu dengan perasaan yang sangat jenuh di
                        depan kelas tanpa ada kepastian kuputuskan untuk mendatangi Wanita
                        tersebut dan berkata <i>“kamu kelas D juga?”</i> diapun menjawab
                        <i>“iya”</i> lalu kusambung <i>“ayo masuk kelas bareng”</i> aku
                        berfikir mengajaknya masuk kelas biar kalau di hukum atau di usir
                        sama dosen ada teman dan tidak malu sendiri.
                    </p>
                    <p>
                        Selanjutnya kami memutuskan untuk masuk kelas dimana saya sebagai
                        tumbal yang masuk diluan. Saya pun masuk diluan dan berkata
                        <i> “Assalamualaikum ibu”</i> sambil tersenyum palsu , ibu dosen
                        hanya melihat saya diam dan entah apa dalam pikirannya kemudian
                        kusambung “apakah boleh masuk ibu?” ibu pun menjawab{" "}
                        <i>“iya boleh”</i> kemudian kami pun masuk dan mencari tempat
                        kosong, Wanita yang numpang tumbal tadi tanpa berdosa sedikitpun
                        langsung jalan dengan cepat kearah belakang menuju kursi kosong yang
                        kebetulan tersisa satu di pojok, apesnya kursi yang kosong hanya
                        tersisa satu deret full dibagian depan tanpa ada mahasiswa lain
                        dibagian depan, karna hanya itu yang kosong jadi kuputuskan untuk
                        duduk di depan sendirian seperti orang yang tidak punya teman.
                    </p>
                </div>
            </div>
            <img
                className="absolute bottom-10 w-20 right-4 z-10"
                src={`${process.env.REACT_APP_PUBLIC_URL}/image/bird.svg`}
                alt="men"
            />
            <div className="w-8 h-8 absolute text-white z-20 bottom-1 left-1/2 rounded-full flex justify-center items-center bg-gray-800">
                {number}
            </div>
        </Background>
    );
};
