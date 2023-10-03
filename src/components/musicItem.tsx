import Image from "next/image";

const MusicItem=()=>{
    return(
        <li className="flex justify-between items-center border-b-2 border-zinc-400 p-2">
              <span className="text-zinc-300">01</span>

              <div className="max-w-6 h-full">
                <Image src="/dj.jpg" width={80} height={80} alt="" />
              </div>

              <div className="flex flex-col">
                <span className="text-zinc-300">Rush</span>
                <small className="text-xs text-zinc-400">Ayra starr</small>
              </div>

              <div>
                <span className="text-zinc-300">14 days ago</span>
              </div>

              <div>
                <span className="text-zinc-300">14:5</span>
              </div>
            </li>
    )
}

export default MusicItem;