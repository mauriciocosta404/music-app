import Image from 'next/image';
export const AsideMusicItem = () =>{
    return(
        <div className='flex items-center  gap-5'>
        <div className="rounded w-10 h-10 bg-zinc-700">
          <Image
            className="w-full h-full rounded-md"
            width={400}
            height={400}
            src="/banner.png"
            alt=""
          />
        </div>

        <div className='flex flex-col '>
          <span className="text-zinc-300">Mauricio Costa</span>
          <small className="text-zinc-500">legião urbana</small>
        </div>

      </div>
    )
}