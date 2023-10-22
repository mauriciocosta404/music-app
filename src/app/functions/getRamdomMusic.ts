import { MusicType } from "@/types/musicItem";

export function getTwoRandomElements(arr:MusicType[]) {
    if (arr.length < 2) {
      return null; // Retorna null se o array não tiver pelo menos 2 elementos.
    }
  
    const randomIndexes : number[] = [];
  
    // Gere dois índices aleatórios únicos.
    while (randomIndexes.length < 2) {
      const randomIndex = Math.floor(Math.random() * arr.length);
      if (!randomIndexes.includes(randomIndex)) {
        randomIndexes.push(randomIndex);
      }
    }
  
    // Pegue os elementos nos índices aleatórios.
    const randomElements = randomIndexes.map(index => arr[index]);
  
    return randomElements;
  }