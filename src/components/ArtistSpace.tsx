import { getSiger } from '@/hooks/useFetch';
import { useEffect, useState } from 'react';
import { MusicType } from '@/types/musicType';
import { getTwoRandomElements } from '@/functions/getRamdomMusic';
import { CircleImage } from './circleImage';

export const ArtistSpace = () => {
  const [music,setMusic] = useState<MusicType[] | null>([]);
  
  useEffect(()=>{
      const musicData  = getSiger('beautifull').then((data)=>{
        const twoElements = getTwoRandomElements(data,7);
        setMusic(twoElements);
      }).catch((erro)=>{
        console.error(erro);
      });
  },[])
  
  return (
    <div className="w-full"> 
      <nav className="mt-4 pt-6 border-t border-zinc-800 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-3">
        {music?.map((item:MusicType)=>(<CircleImage key={item.id} item={item}/>))}
      </nav>
    </div>
  );
};
