'use client'
import { createContext, useContext, useState } from "react";

const MusicContext = createContext({})


interface isModalOpened{
    isModalOpened: boolean;
    setIsModalOpened: React.Dispatch<React.SetStateAction<boolean>>;
}

export const MusicProvider = ({ children }:{children:React.ReactNode}) => {
    const [isModalOpened, setIsModalOpened] = useState(false);
    return (
        <MusicContext.Provider value={{isModalOpened,setIsModalOpened}}>
            {children}
        </MusicContext.Provider>
    )
}

export const useMusicContext = () => useContext(MusicContext);