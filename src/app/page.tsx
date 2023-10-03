import { FaIgloo } from "react-icons/fa";
import {
  AiOutlineLeft,
  AiOutlineRight,
  AiFillStepBackward,
  AiFillStepForward,
} from "react-icons/ai";
import {
  BiLibrary,
  BiSearchAlt,
  BiShuffle,
  BiSolidMicrophoneAlt,
} from "react-icons/bi";
import { SiYoutubemusic } from "react-icons/si";
import {
  BsFillPlayFill,
  BsMusicNoteList,
  BsFillVolumeUpFill,
} from "react-icons/bs";
import { CiRepeat, CiMaximize1 } from "react-icons/ci";
import { HiDesktopComputer } from "react-icons/hi";
import Image from "next/image";
import { Aside } from "@/components/aside";

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        
      <Aside/>

        <main className="flex-1">
          <div className=" p-6 bg-gradient-to-r from-zinc-700 to-[#33663e]">
            <div className="flex items-center gap-3">
              <button className="rounded-full bg-black/40 p-2">
                <AiOutlineLeft />
              </button>
              <button className="rounded-full bg-black/40 p-2">
                <AiOutlineRight />
              </button>
            </div>

            <h1 className="font-semibold text-3xl mt-4">Seja Bem vindo/a!</h1>

            <div className="grid grid-cols-3 gap-4 mt-6">
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
            </div>
          </div>

          <h2 className="font-semibold text-2xl mt-6">
            Feito por Mauricio Costa!
          </h2>

          <div className="grid grid-cols-5 gap-4 mt-4">
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
            <a
              href="#"
              className="bg-white/5 group p-3 rounded hover:bg-white/10 relative"
            >
              <Image
                src="/full.jpg"
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
            <a
              href="#"
              className="bg-white/5 group p-3 rounded hover:bg-white/10 relative"
            >
              <Image
                src="/ai.jpg"
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
            <a
              href="#"
              className="bg-white/5 group p-3 rounded hover:bg-white/10 relative"
            >
              <Image
                src="/medium.jpg"
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
          </div>
        </main>
      </div>
      <footer className="bg-zinc-800 border-t border-zinc-700 p-2 flex items-center justify-between">
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
    </div>
  );
}
