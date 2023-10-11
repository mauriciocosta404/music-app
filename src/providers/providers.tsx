import { MusicProvider } from "@/context/musicContext"

export const Providers = ({children}:{children:React.ReactNode}) =>{
    return(
        <MusicProvider>
            {children}
        </MusicProvider>
    )
}  