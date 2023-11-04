import { MusicType } from '@/types/musicType';
import Image from 'next/image';

interface AsideMusicItemProps {
  item: MusicType; 
}

export const AsideMusicItem = ({item}:AsideMusicItemProps) =>{
    return(
        <div className='flex items-center  gap-5'>
        <div className="rounded w-10 h-10 bg-zinc-700">
          <img
            className="w-full h-full rounded-md"
            width={400}
            height={400}
            src={item?.album?.cover}
            alt="image"
          />
        </div>

        <div className='flex flex-col '>
          <span className="text-zinc-300">{item.artist.name}</span>
          <small className="text-zinc-500">{item.title}</small>
        </div>

      </div>
    )
}