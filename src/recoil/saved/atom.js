import { atom } from 'recoil';

export const savedAtom = atom({
   key: 'savedAtom',
   default: {
      savedMovies: [],
   },
});

export default savedAtom;
