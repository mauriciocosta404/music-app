import { mainAPI } from '@/api/api';

async function getSiger(artist: string) {
  const response = await fetch(`${mainAPI}${artist}`, {
    method: 'GET',
    headers: {
      'x-rapidapi-host': 'deezerdevs-deezer.p.rapidapi.com',
      'x-rapidapi-key': '0bd4b5da77msh27fe477abac7ceep19c3b8jsn91d822e0a82d',
    },
  });

  const data = await response.json();
  console.log('data', data.data);
  return { musicData: data.data };
}

export { getSiger };
