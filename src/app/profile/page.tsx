import {
    AiOutlineLeft,
    AiOutlineRight,
    AiFillStepBackward,
    AiFillStepForward,
  } from 'react-icons/ai';
  import {BiShuffle,BiSolidMicrophoneAlt,} from 'react-icons/bi';
  
  import {BsFillPlayFill,BsMusicNoteList,BsFillVolumeUpFill} from 'react-icons/bs';
  import { CiRepeat, CiMaximize1 } from 'react-icons/ci';
  import { HiDesktopComputer } from 'react-icons/hi';
  import Image from 'next/image';
  import { Aside } from '@/components/aside';
  
  export default function Profile() {
    return (
      <div className="h-screen flex flex-col">
        <div className="flex flex-1">
          <Aside />
  
          <main className="flex-1 p-10">
            <div className="flex gap-12">
              <div className="rounded-[2rem] w-72 h-56 bg-zinc-700">
                <img
                  className="w-full h-full rounded-[2rem]"
                  width={400}
                  height={400}
                  src="/medium.jpg"
                  alt="image"
                />
              </div>

              <div className="max-w-[30rem] text-justify flex flex-col gap-7"> 
                <h2 className="text-xl font-bold ">Hottest Hip Hop</h2>
                <p className="text-zinc-500 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                  Modi, temporibus tenetur, cumque, quas voluptatum itaque
                  Perspiciatis ullam eveniet aspernatur velit culpa maxime.</p>
                <div className='flex gap-5'>
                  <button className='bg-green-600 px-5 py-2 rounded-md text-sm flex'>
                    <BsFillPlayFill size={20} className="" />
                    Play
                  </button>
                  <button className='text-sm px-5 py-2 rounded-md border border-solid border-zinc-500'>Add Playlist</button>
                </div>
              </div>
            </div>

            

<div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-10">
    <table className="w-full text-sm text-left rtl:text-right text-gray-400">
        <thead className="text-xs uppercase bg-gray-800 text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3">
                    Product name
                </th>
                <th scope="col" className="px-6 py-3">
                    Color
                </th>
                <th scope="col" className="px-6 py-3">
                    Category
                </th>
                <th scope="col" className="px-6 py-3">
                    Price
                </th>
                <th scope="col" className="px-6 py-3">
                    Action
                </th>
            </tr>
        </thead>
        <tbody>
            <tr className="border-border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Apple MacBook Pro 17"
                </th>
                <td className="px-6 py-4">
                    Silver
                </td>
                <td className="px-6 py-4">
                    Laptop
                </td>
                <td className="px-6 py-4">
                    $2999
                </td>
                <td className="px-6 py-4">
                    <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                </td>
            </tr>
            <tr className=" odd:bg-gray-900  even:bg-gray-800 border-b border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Google Pixel Phone
                </th>
                <td className="px-6 py-4">
                    Gray
                </td>
                <td className="px-6 py-4">
                    Phone
                </td>
                <td className="px-6 py-4">
                    $799
                </td>
                <td className="px-6 py-4">
                    <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                </td>
            </tr>
            <tr>
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Apple Watch 5
                </th>
                <td className="px-6 py-4">
                    Red
                </td>
                <td className="px-6 py-4">
                    Wearables
                </td>
                <td className="px-6 py-4">
                    $999
                </td>
                <td className="px-6 py-4">
                    <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                </td>
            </tr>
        </tbody>
    </table>
</div>

          </main>
        </div>
       </div>
    );
  }
  