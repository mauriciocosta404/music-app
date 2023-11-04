import { MusicType } from '@/types/musicType';
import Image from 'next/image';

interface AsideMusicItemProps {
  item: MusicType; 
}

export const CircleImage = ({item}:AsideMusicItemProps) =>{
    return(
        <div className='flex items-center  gap-5'>
        <div className="rounded-full w-10 h-10 bg-zinc-700">
          
        </div>
      </div>
    )
}