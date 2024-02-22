import {
    AiFillStepBackward,
    AiFillStepForward,
  } from 'react-icons/ai';
  
  import {BiShuffle,BiSolidMicrophoneAlt,} from 'react-icons/bi';
  import {BsFillPlayFill,BsMusicNoteList,BsFillVolumeUpFill} from 'react-icons/bs';
  import { CiRepeat, CiMaximize1 } from 'react-icons/ci';
  import { HiDesktopComputer } from 'react-icons/hi';
  import Image from 'next/image';

export const Footer = () =>{
    return(
        <footer className="w-full bg-zinc-800 border-t border-zinc-700 p-2 flex items-center justify-between">
            <div className="flex items-center gap-3">
            <Image src="/dj.jpg" width={60} height={60} alt="" />
            <div className="flex flex-col">
                <strong className="font-normal">Groove Is The Future</strong>
                <span className="text-xs text-zinc-400">Mauricio Costa</span>
            </div>
            </div>
            <div className="flex flex-col items-center">
            <div className="flex items-center gap-6">
                <BiShuffle size={20} className="text-zinc-200" />
                <AiFillStepBackward size={20} className="text-zinc-200" />
                <button className="p-2 rounded-full bg-white text-black text-xl">
                <BsFillPlayFill size={20} className="" />
                </button>
                <AiFillStepForward size={20} className="text-zinc-200" />
                <CiRepeat size={20} className="text-zinc-200" />
            </div>
            <div className="flex items-center gap-2">
                <span className="text-xs text-zinc-400">0:61</span>
                <div className="h-1 rounded-full w-96 bg-zinc-600">
                <div className="bg-zinc-200 w-40 h-1 rounded"></div>
                </div>
                <span className="text-xs text-zinc-400">0:61</span>
            </div>
            </div>
            <div className="flex items-center gap-4">
            <BiSolidMicrophoneAlt size={24} className="text-zinc-200" />
            <BsMusicNoteList size={24} className="text-zinc-200" />
            <HiDesktopComputer size={24} className="text-zinc-200" />
            <div className="flex items-center gap-2">
                <BsFillVolumeUpFill size={24} className="text-zinc-200" />
                <div className="h-1 rounded-full w-24 bg-zinc-600">
                <div className="bg-zinc-200 w-10 h-1 rounded"></div>
                </div>
            </div>
            <CiMaximize1 size={24} className="text-zinc-200" />
            </div>
      </footer>
    );
}