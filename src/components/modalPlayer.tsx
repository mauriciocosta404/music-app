import { FaTimes, FaBars } from "react-icons/fa";
import Image from 'next/image';
import { AiFillStepBackward, AiFillStepForward } from 'react-icons/ai';
import { BiShuffle } from 'react-icons/bi';
import { BsFillPlayFill, BsPlay } from 'react-icons/bs';
import { CiRepeat } from 'react-icons/ci';
import { useMusicContext } from "@/context/musicContext";
import { useEffect, useState } from "react";

export const ModalPlayer = () => {
    const { setIsModalOpened, currentMusicPlaying }: any = useMusicContext();
    const [isPlaying, setIsPlaying] = useState(false);
    const [audio] = useState(new Audio(currentMusicPlaying?.preview));

  // Pré-carregar o áudio
    useEffect(() => {
        audio.preload = 'auto';
        return () => {
            audio.pause();
            audio.src = '';
        };
    }, [audio, currentMusicPlaying?.preview]);

    const handlePlay = () => {
        isPlaying ? audio.pause() : audio.play();   
        setIsPlaying(!isPlaying);
    };

    return (
        <div className="fixed bg-black bg-opacity-70 w-full h-full flex justify-center items-center">
            <div className="bg-zinc-800 w-80 rounded px-4 py-10">
                <header className="flex justify-between">
                    <div className="p-3 bg-zinc-700 rounded-full shadow-md">
                        <FaBars />
                    </div>
                    <div
                        onClick={() => { setIsModalOpened(false) }}
                        className="p-3 bg-zinc-700 rounded-full shadow-md cursor-pointer">
                        <FaTimes />
                    </div>
                </header>

                <div className={isPlaying ? "flex justify-center my-5 animate-spin infinite duration-1000": "flex justify-center my-5"}>
                    <div className="rounded mt-5 w-48 h-48">
                        <img
                            className="w-full h-full rounded-full shadow-xl"
                            width={400}
                            height={400}
                            src={currentMusicPlaying?.artist?.picture}
                            alt="image"
                        />
                    </div>
                </div>

                <div className="flex flex-col items-center ">
                    <span className="text-zinc-300">{currentMusicPlaying?.artist?.name}</span>
                    <small className="text-zinc-500">{currentMusicPlaying?.title}</small>
                </div>

                <div className="mt-6">
                    <div className="flex flex-col items-center">
                        <div className="flex items-center gap-6">
                            <BiShuffle size={20} className="text-zinc-200" />
                            <AiFillStepBackward size={20} className="text-zinc-200" />

                            <button onClick={handlePlay} className="p-2 rounded-full bg-white text-black text-xl">
                                {isPlaying ? <BsFillPlayFill size={20} className="" /> : <BsPlay size={20} className="" />}
                            </button>

                            <AiFillStepForward size={20} className="text-zinc-200" />
                            <CiRepeat size={20} className="text-zinc-200" />
                        </div>

                        <div className="flex items-center gap-2 mt-5">
                            <span className="text-xs text-zinc-400">0:61</span>
                            <div className="h-1 rounded-full w-36 bg-zinc-600">
                                <div className="bg-zinc-200 w-20 h-1 rounded"></div>
                            </div>
                            <span className="text-xs text-zinc-400">0:61</span> 
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};
