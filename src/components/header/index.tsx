import React from "react"
import { HiSearch } from "react-icons/hi"
import { HeaderProps } from "./types"

export const Header:React.FC<HeaderProps> = ({handleInputChange, search}) =>{
    return(        
        <header className="flex lg:flex-row flex-col items-center justify-between gap-2">
            <div className="flex rounded bg-zinc-700 p-3 md:w-96 w-full">
            <input
                className="bg-zinc-700 flex-1 outline-none"
                type="text"
                name=""
                value={search}
                onChange={handleInputChange}
                id=""
                placeholder="pesquisar"
            />
            <HiSearch size={24} />
            </div>

            <div className="flex gap-4">
            <div className="flex rounded bg-zinc-700 gap-2 max-w-sm p-3">
                <span>Angola</span>
                <img
                className="rounded-full"
                width={25}
                height={25}
                src="/angola.jpeg"
                alt="country"
                />
            </div>

            <div className="flex items-center gap-2">
                <span>Mauricio Costa</span>
                <img
                className="rounded-full"
                width={25}
                height={25}
                src="/banner2.png"  
                alt=""
                />
            </div>
            </div>
        </header>
    )
}