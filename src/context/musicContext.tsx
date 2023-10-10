import { createContext, useContext } from "react";

const MusicContext = createContext({})

export const MusicProvider = ({ children }:{children:React.ReactNode}) => {
    return (
        <MusicContext.Provider value={{}}>
            {children}
        </MusicContext.Provider>
    )
}

export const useMusicContext = () => useContext(MusicContext);