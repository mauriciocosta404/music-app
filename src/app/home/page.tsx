'use client'

import {
  GiGuitarBassHead,
  GiDrumKit,
  GiSaxophone,
  GiGrandPiano,
} from 'react-icons/gi';
import Image from 'next/image';
import { getSiger } from '@/hooks/useFetch';
import { Aside } from '@/components/aside';
import { MinCard } from '@/components/minCard';
import { ModalPlayer } from '@/components/modalPlayer';
import { useMusicContext } from '@/context/musicContext';
import { ArtistSpace } from '@/components/ArtistSpace';
import { useEffect, useState } from 'react';
import MusicItem from '@/components/musicItem';
import { MusicType } from '@/types/musicType';
import { ArtistMobileStatus } from '@/components/artistMobileStatus';
import { Header } from '@/components/header';

export default function Home() {
  const {isModalOpened}:any = useMusicContext();
  const [search,setSearch] = useState(""); 
  const [musicData,setMusicData] = useState<MusicType[]>([]);

  const handleInputChange = (event:React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value); 
  };
  
  useEffect(()=>{
    const mucic  = getSiger(search).then((data)=>{
      setMusicData(data);
    }).catch((erro)=>{
      console.error(erro);
    });
},[search])

  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        {isModalOpened && (<ModalPlayer />)}
        
        <Aside />

        <main className="flex-1 p-5">
          <Header handleInputChange={handleInputChange} search={search} />          

          {search ?
            musicData?.map((item)=>(<MusicItem musicProps={item} />))
          :
          
          <div>
            <div className="rounded mt-5 flex-1 h-56 bg-zinc-700">
              <Image
                className="w-full h-full rounded-md"
                width={400}
                height={400}
                src="/texture-treble-clef-dark-background-isolated-generative-ai.jpg"
                alt=""
              />
            </div>

            <h1 className="m-3 block md:hidden">Artists</h1>
            
            <div className="mt-5 md:hidden block">
              <ArtistMobileStatus/>
            </div>

            <h1 className="m-3">Browse All</h1>

            <div className="lg:flex lg:flex-row flex-col space-y-2 justify-between gap-2 mt-5">
              <MinCard
                color="bg-yellow-500"
                title="Jazz"
                icon={<GiGuitarBassHead size={24} />}
              />
              <MinCard
                color="bg-green-500"
                title="Blues"
                icon={<GiDrumKit size={24} />}
              />
              <MinCard
                color="bg-red-500"
                title="Pop"
                icon={<GiSaxophone size={24} />}
              />
              <MinCard
                color="bg-zinc-700"
                title="Groove"
                icon={<GiGrandPiano size={24} />}
              />
            </div>

            <div className="mt-5 hidden md:block">
              <ArtistSpace/>
            </div>
          </div>
          }

        </main>
      </div>
    </div>
  );
}
