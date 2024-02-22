import {BsFillPlayFill} from 'react-icons/bs';
import Image from 'next/image';

export const MinMusicCard = () => {
    return(
        <a
            href="#"
            className="bg-white/5 group rounded overflow-hidden flex items-center gap-4 hover:bg-white/20 transition-colors"
        >
            <Image src="/dj.jpg" width={104} height={104} alt="" />
            <strong>Rest in peace</strong>
            <button className="p-2 rounded-full invisible group-hover:visible bg-green-400 text-black text-xl ml-auto mr-8">
                <BsFillPlayFill />
            </button>
        </a>
    )
}