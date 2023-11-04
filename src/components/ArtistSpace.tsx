import { FaIgloo } from 'react-icons/fa';
import { BiLibrary, BiSearchAlt } from 'react-icons/bi';
import { SiYoutubemusic } from 'react-icons/si';
import { AsideMusicItem } from './asideMusicItem';
import { getSiger } from '@/hooks/useFetch';
import { useEffect, useState } from 'react';
import { MusicType } from '@/types/musicType';
import { getTwoRandomElements } from '@/app/functions/getRamdomMusic';

export const ArtistSpace = () => {
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
    <div className="w-full"> 
      <nav className="mt-2 pt-2 border-t border-zinc-800 flex gap-3">
        {music?.map((item:MusicType)=>(<AsideMusicItem key={item.id} item={item}/>))}
      </nav>
    </div>
  );
};
