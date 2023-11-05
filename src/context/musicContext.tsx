'use client'
import { MusicType } from "@/types/musicType";
import { createContext, useContext, useState } from "react";

const MusicContext = createContext({})


interface isModalOpened{
    isModalOpened: boolean;
    setIsModalOpened: React.Dispatch<React.SetStateAction<boolean>>;
}

export const MusicProvider = ({ children }:{children:React.ReactNode}) => {
    const [isModalOpened, setIsModalOpened] = useState<boolean>(false);
    const [currentMusicPlaying, setCurrentMusicPlaying] = useState<MusicType>();
    return (
        <MusicContext.Provider 
            value={{isModalOpened,setIsModalOpened,currentMusicPlaying,setCurrentMusicPlaying}}
        >
            {children}
        </MusicContext.Provider>
    )
}

export const useMusicContext = () => useContext(MusicContext);