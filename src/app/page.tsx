import {AiOutlineLeft,AiOutlineRight} from 'react-icons/ai';
import { Footer } from '@/components/footer';
import { Aside } from '@/components/aside';
import { MusicCard } from '@/components/musicCard';
import { MinMusicCard } from '@/components/minMusicCard';

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <Aside />

        <main className="flex-1">
          <div className=" p-6 bg-gradient-to-r from-zinc-700 to-[#33663e]">
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
              <MinMusicCard/>
              <MinMusicCard/>
              <MinMusicCard/>
              <MinMusicCard/>
              <MinMusicCard/>
              <MinMusicCard/>
            </div>
          </div>

          <h2 className="font-semibold text-2xl mt-6">
            Feito por Mauricio Costa!
          </h2>

          <div className="grid grid-cols-5 gap-4 mt-4">
            <MusicCard/>
            <MusicCard/>
            <MusicCard/>
            <MusicCard/>
            <MusicCard/>
          </div>
        </main>
      </div>

      <Footer/>      
    </div>
  );
}
