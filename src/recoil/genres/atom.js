import { atom } from 'recoil';

export const genresAtom = atom({
   key: 'genresAtom',
   default: {
      genres: [],
   },
});

export default genresAtom;
