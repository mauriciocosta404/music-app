import { MinCardType } from "@/types/minCardType"
import { ReactNode } from "react"

export const MinCard=(props:MinCardType)=>{

    const myClass = `flex rounded gap-24 ${props.color} p-5`

    return(
        <div className={myClass}>
            <span>{props.title}</span>
            {props.icon}
        </div>
    )
}