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
import { HiDesktopComputer,HiSearch } from "react-icons/hi";
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
              className="flex items-center  gap-2 text-xl font-semibold"
            >
              <SiYoutubemusic size={24} className="text-green-500" /> musicas
              <span className="text-green-500">da banda</span>
            </a>
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
        <main className="flex-1">
          <header className="flex">

            <div className="flex rounded bg-zinc-700 max-w-sm p-3">
              <input className="bg-zinc-700 flex-1 outline-none" type="text" name="" id="" placeholder="pesquisar" />
              <HiSearch size={24} />
            </div>
          </header>

          <div className="">
            <img className="w-full h-50" src="/full.jpg" alt="" />
          </div>
        </main>
      </div>
      
    </div>
    )
}