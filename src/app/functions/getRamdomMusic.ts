import { MusicType } from "@/types/musicType";

export function getTwoRandomElements(arr:MusicType[], imagesNamber:number) {
    if (arr.length < imagesNamber) {
      return null; // Retorna null se o array não tiver pelo menos 2 elementos.
    }
  
    const randomIndexes : number[] = [];
  
    // Gere dois índices aleatórios únicos.
    while (randomIndexes.length < imagesNamber) {
      const randomIndex = Math.floor(Math.random() * arr.length);
      if (!randomIndexes.includes(randomIndex)) {
        randomIndexes.push(randomIndex);
      } 
    }
  
    // Pegue os elementos nos índices aleatórios.
    const randomElements = randomIndexes.map(index => arr[index]);
  
    return randomElements;
  }