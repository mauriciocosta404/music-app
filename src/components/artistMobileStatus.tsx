import { getSiger } from '@/hooks/useFetch';
import { useEffect, useState } from 'react';
import { MusicType } from '@/types/musicType';
import { getTwoRandomElements } from '@/functions/getRamdomMusic';
import { CircleImage } from './circleImage';

export const ArtistMobileStatus = () =>{
    const [music,setMusic] = useState<MusicType[] | null>([]);
  
    useEffect(()=>{
        const musicData  = getSiger('love').then((data)=>{
            const twoElements = getTwoRandomElements(data,5);
            setMusic(twoElements);
        }).catch((erro)=>{
            console.error(erro);
        });
    },[])
    return(
        <div className="w-full"> 
            <nav className="mt-4 border-b border-zinc-800 flex gap-3 justify-between">
                {music?.map((item:MusicType)=>(<CircleImage key={item.id} item={item}/>))}
            </nav >
        </div>
    )
}