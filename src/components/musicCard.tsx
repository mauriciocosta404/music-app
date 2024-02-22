import {BsFillPlayFill} from 'react-icons/bs';
import Image from 'next/image';

export const MusicCard = () => {
    return(
        <a
            href="#"
            className="bg-white/5 group p-3 rounded hover:bg-white/10 relative"
        >
            <Image
                src="/dj.jpg"
                className="w-full"
                width={120}
                height={120}
                alt=""
            />

            <button className="absolute p-2 rounded-full invisible group-hover:visible bg-green-400 text-black text-xl ml-auto mr-8">
                <BsFillPlayFill />
            </button>

            <strong className="font-semibold block">My first love</strong>
              
            <span className="text-xs text-zinc-500">
                Mauricio Costa, feat MC El Pidro Muteka & Hori Jesus
            </span>
        </a>
    )
}