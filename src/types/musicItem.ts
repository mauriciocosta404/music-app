import { StaticImageData, StaticImport } from "next/dist/shared/lib/get-img-props";
import { ReactNode } from "react";

export interface MusicType{
    id:string;
    coverImage:string;
    author:string;
    name:string;
    date:string;
    time:string;
}