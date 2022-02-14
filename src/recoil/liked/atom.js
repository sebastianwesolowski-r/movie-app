import { atom } from 'recoil';

export const likedAtom = atom({
   key: 'likedAtom',
   default: {
      likedMovies: [],
   },
});

export default likedAtom;
