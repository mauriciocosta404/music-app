import { mainAPI } from '@/api/api';
import { MusicType } from '@/types/musicType';

type MusicResponse={
  data:MusicType[];
}

async function getSiger(artist: string) : Promise<MusicType[]> {
  const response = await fetch(`${mainAPI}${artist}`, {
    method: 'GET',
    headers: {
      'x-rapidapi-host': 'deezerdevs-deezer.p.rapidapi.com',
      'x-rapidapi-key': '0bd4b5da77msh27fe477abac7ceep19c3b8jsn91d822e0a82d',
    },
  });

  const data : MusicResponse = await response.json();
  const musicData = data.data;
  return musicData;
}

export { getSiger };
