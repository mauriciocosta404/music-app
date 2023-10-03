import { FaIgloo } from "react-icons/fa";

import {
  BiLibrary,
  BiSearchAlt,
} from "react-icons/bi";
import { SiYoutubemusic } from "react-icons/si";


export const Aside = ()=>{
    return(
        <aside className="lg:w-72 xs:w-10 bg-zinc-950 p-6">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>

          <nav className="space-y-5 mt-10">
            <a
              href="/home"
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
    )
}