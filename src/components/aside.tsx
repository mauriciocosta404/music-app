'use client'
import { FaIgloo } from 'react-icons/fa';
import { BiLibrary, BiSearchAlt } from 'react-icons/bi';
import { SiYoutubemusic } from 'react-icons/si';
import { AsideMusicItem } from './asideMusicItem';
import { getSiger } from '@/hooks/useFetch';
import { useEffect, useState } from 'react';
import { MusicType } from '@/types/musicType';
import { getTwoRandomElements } from '@/functions/getRamdomMusic';

export const Aside = () => {
  const [music,setMusic] = useState<MusicType[] | null>([]);
  
  useEffect(()=>{
      const musicData  = getSiger('te amo').then((data)=>{
        const twoElements = getTwoRandomElements(data,3);
        setMusic(twoElements);
      }).catch((erro)=>{
        console.error(erro);
      });
  },[])
  
  return (
    <aside className="lg:w-72 md:w-60 md:block hidden w-10 bg-zinc-950 p-6">
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
          <SiYoutubemusic size={24} className="text-green-500" />
          <div className='hidden sm:block'>
            musicas
            <span className="text-green-500"> da banda</span>
          </div>
        </a>
        <a
          href=""
          className="flex items-center  gap-2 text-xl font-semibold text-zinc-200"
        >
          <FaIgloo />
          <div className='hidden sm:block'>
            Home
          </div>
        </a>
        <a
          href=""
          className="flex items-center  gap-2 text-xl font-semibold text-zinc-200"
        >
          <BiSearchAlt />
          <div className='hidden sm:block'>
            Search
          </div>
        </a>
        <a
          href=""
          className="flex items-center  gap-2 text-xl font-semibold text-zinc-200"
        >
          <BiLibrary />
          <div className='hidden sm:block'>
            Your Library
          </div>
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
      </nav>

      <nav className="mt-2 pt-2 border-t border-zinc-800 flex flex-col gap-3">
        {music?.map((item:MusicType)=>(<AsideMusicItem key={item.id} item={item}/>))}
      </nav>
    </aside>
  );
};
