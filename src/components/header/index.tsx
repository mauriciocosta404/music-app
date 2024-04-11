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

            <div className="flex gap-6">
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

                <div className="relative">
                    <div className="flex items-center gap-2">
                        <span>Conta</span>

                        <img
                        className="rounded-full"
                        width={25}
                        height={25}
                        src="/banner2.png"  
                        alt=""
                        />
                    </div>

                    <div className="absolute rounded right-[.5rem]">
                        <div id="dropdown" className=" bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                            <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                            <li>
                                <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                            </li>
                            <li>
                                <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">PlayList</a>
                            </li>
                            <li>
                                <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</a>
                            </li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>
        </header>
    )
}