'use client'
import { HiSearch } from 'react-icons/hi';
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

export default function Home() {
  const { musicData }: any = getSiger('LANDRICK');
  const {isModalOpened}:any = useMusicContext(); 
  
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        {isModalOpened && (<ModalPlayer />)}
        
        <Aside />

        <main className="flex-1 p-5">
          <header className="flex lg:flex-row flex-col items-center justify-between gap-2">
            <div className="flex rounded bg-zinc-700 p-3 w-96">
              <input
                className="bg-zinc-700 flex-1 outline-none"
                type="text"
                name=""
                id=""
                placeholder="pesquisar"
              />
              <HiSearch size={24} />
            </div>

            <div className="flex gap-4">
              <div className="flex rounded bg-zinc-700 gap-2 max-w-sm p-3">
                <span>Angola</span>
                <img
                  className="rounded-full"
                  width={25}
                  height={25}
                  src="/angola.jpeg"
                  alt="country"
                />
              </div>

              <div className="flex items-center gap-2">
                <span>Mauricio Costa</span>
                <img
                  className="rounded-full"
                  width={25}
                  height={25}
                  src="/banner2.png"
                  alt=""
                />
              </div>
            </div>
          </header>

          <div className="rounded mt-5 flex-1 h-56 bg-zinc-700">
            <Image
              className="w-full h-full rounded-md"
              width={400}
              height={400}
              src="/banner.png"
              alt=""
            />
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

          <div className="mt-5">
            <ArtistSpace/>
          </div>
        </main>
      </div>
    </div>
  );
}
