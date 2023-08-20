import { FaIgloo } from "react-icons/fa";
import {
  AiOutlineLeft,
  AiOutlineRight,
  AiFillStepBackward,
  AiFillStepForward,
} from "react-icons/ai";
import { BiLibrary, BiSearchAlt, BiShuffle } from "react-icons/bi";
import { BsFillPlayFill } from "react-icons/bs";
import { CiRepeat } from "react-icons/ci";
import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <aside className="w-72 bg-zinc-950 p-6">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>

          <nav className="space-y-5 mt-10">
            <a
              href=""
              className="flex items-center  gap-2 text-xl font-semibold text-zinc-200"
            >
              <FaIgloo />
              Home
            </a>
            <a
              href=""
              className="flex items-center  gap-2 text-xl font-semibold text-zinc-200"
            >
              <BiSearchAlt />
              Search
            </a>
            <a
              href=""
              className="flex items-center  gap-2 text-xl font-semibold text-zinc-200"
            >
              <BiLibrary />
              Your Library
            </a>
          </nav>

          <nav className="mt-6 pt-6 border-t border-zinc-800 flex flex-col gap-3">
            <a href="text-sm text-zinc-400 hover:text-zinc-100">
              Banda Maravilha Angola
            </a>
            <a href="text-sm text-zinc-400 hover:text-zinc-100">
              Groove Is The Future
            </a>
            <a href="text-sm text-zinc-400 hover:text-zinc-100">
              Os Irmãos Calemas
            </a>
            <a href="text-sm text-zinc-400 hover:text-zinc-100">
              Banda União Murro Bento
            </a>
            <a href="text-sm text-zinc-400 hover:text-zinc-100">
              Geração Church
            </a>
          </nav>
        </aside>
        <main className="flex-1 p-6">
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
      <footer className="bg-zinc-800 border-t border-zinc-700 p-4 flex items-center justify-between">
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
          <div className="flex items-center gap-2"></div>
        </div>
        <div></div>
      </footer>
    </div>
  );
}
