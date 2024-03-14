import { useMusicContext } from '@/context/musicContext';
import { MusicType } from '@/types/musicType';
interface AsideMusicItemProps {
  item: MusicType; 
}

export const CircleImage = ({item}:AsideMusicItemProps) =>{
  const {isModalOpened , setIsModalOpened,setCurrentMusicPlaying}:any = useMusicContext(); 

    return(
        <div 
          className='flex items-center  gap-5 cursor-pointer' 
          onClick={()=>{setIsModalOpened(true),setCurrentMusicPlaying(item)}}
        >
        <div className="rounded-full w-14 h-14 md:w-24 md:h-24 bg-zinc-700 border-2 border-solid border-green-600">
          <img
            className="w-full h-full rounded-full"
            width={600}
            height={600}
            src={item?.artist?.picture}
            alt="image"
          />
        </div>
      </div>
    )
}