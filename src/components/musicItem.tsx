import { MusicType } from "@/types/musicItem";
import Image from "next/image";
import { type } from "os";

type Music={
    musicProps:MusicType;
}

const MusicItem:React.FC<Music>=({musicProps})=>{
    return(
        <li className="flex justify-between items-center border-b-2 border-zinc-400 p-2">
              <span className="text-zinc-300">{musicProps.id}</span>

              <div className="max-w-6 h-full">
                <Image src={musicProps.coverImage} width={80} height={80} alt="" />
              </div>

              <div className="flex flex-col">
                <span className="text-zinc-300">{musicProps.name}</span>
                <small className="text-xs text-zinc-400">{musicProps.author}</small>
              </div>

              <div>
                <span className="text-zinc-300">{musicProps.date}</span>
              </div>

              <div>
                <span className="text-zinc-300">{musicProps.time}</span>
              </div>
            </li>
    )
}

export default MusicItem;