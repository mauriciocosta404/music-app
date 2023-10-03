import { FaIgloo } from "react-icons/fa";

import {
  BiLibrary,
  BiSearchAlt,
} from "react-icons/bi";
import { SiYoutubemusic } from "react-icons/si";

import { HiSearch } from "react-icons/hi";
import {GiGuitarBassHead,GiDrumKit,GiSaxophone,GiGrandPiano} from "react-icons/gi"
import Image from "next/image";
import MusicItem from "@/components/musicItem";
import { MusicItemMock } from "@/mock/musicItem";
import { MusicType } from "@/types/musicItem";

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
        <main className="flex-1 p-5">
          <header className="flex justify-between gap-2">

            <div className="flex rounded bg-zinc-700 p-3 w-96">
              <input className="bg-zinc-700 flex-1 outline-none" type="text" name="" id="" placeholder="pesquisar" />
              <HiSearch size={24} />
            </div>

            <div className="flex gap-4">
              <div className="flex rounded bg-zinc-700 gap-2 max-w-sm p-3">
                <span>Angola</span>
                <img className="rounded-full" width={25} height={25} src="/angola.jpeg" alt="country" />
              </div>

              <div className="flex items-center gap-2">
                <span>Mauricio Costa</span>
                <img className="rounded-full"
                  width={25}
                  height={25}
                  src="/banner2.png" alt="" 
              />  
              </div>
            </div>

          </header>

          <div className="rounded mt-5 w-full h-56 bg-zinc-700">
            <Image className="w-full h-full rounded-md"
                width={400}
                height={400}
                 src="/banner.png" alt="" 
            />
          </div>

          <h1 className="m-3">Browse All</h1>

          <div className="flex justify-between gap-2 mt-5">
            <div className="flex rounded bg-yellow-500 p-5  gap-24">
              <span>Jazz</span>
              <GiGuitarBassHead size={24}/>
            </div>
            <div className="flex rounded bg-green-500 p-5 gap-24">
              <span>Blues</span>
              <GiDrumKit size={24}/>
            </div>
            <div className="flex rounded bg-red-500 p-5 gap-24">
              <span>Pop</span>
              <GiSaxophone size={24}/>
            </div>
            <div className="flex rounded bg-zinc-700 p-5 gap-24">
              <span>Groove</span>
              <GiGrandPiano size={24}/>
            </div>
          </div>

          <ul className="mt-5">
            {MusicItemMock.map((music:MusicType)=>(
              <MusicItem 
                musicProps={music} 
                key={music.id}
                />
            ))}            
          </ul>
        </main>
      </div>
      
    </div>
    )
}