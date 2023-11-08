import { useMusicContext } from '@/context/musicContext';
import { MusicType } from '@/types/musicType';

type Music = {
  musicProps: MusicType;
};

const MusicItem: React.FC<Music> = ({ musicProps }) => {
  const {setIsModalOpened,setCurrentMusicPlaying}:any = useMusicContext(); 
  return (
    <li  onClick={()=>{setIsModalOpened(true),setCurrentMusicPlaying(musicProps)}} className="flex justify-between items-center border-b border-zinc-400 p-2 cursor-pointer hover:bg-zinc-800 transition-colors mt-2">
      <div className="max-w-6 h-full">
        <img src={musicProps.artist.picture} width={60} height={60} alt="" />
      </div>

      <div className="flex flex-col">
        <span className="text-zinc-300">{musicProps.title}</span>
      </div>

      <div>
      <small className="text-xs text-zinc-400">{musicProps.artist.name}</small>
      </div>

      <div>
        <span className="text-zinc-300">{musicProps.duration}</span>
      </div>
    </li>
  );
};

export default MusicItem;
