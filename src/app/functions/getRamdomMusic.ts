import { MusicType } from "@/types/musicType";

export function getTwoRandomElements(arr:MusicType[], imagesNamber:number) {
    if (arr.length < imagesNamber) {
      return null; 
    }
  
    const randomIndexes : number[] = [];
  
    while (randomIndexes.length < imagesNamber) {
      const randomIndex = Math.floor(Math.random() * arr.length);
      if (!randomIndexes.includes(randomIndex)) {
        randomIndexes.push(randomIndex);
      } 
    }
  
    const randomElements = randomIndexes.map(index => arr[index]);
  
    return randomElements;
  }