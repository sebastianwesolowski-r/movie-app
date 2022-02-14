import { selector } from 'recoil';
import genresAtom from './atom';

const withGenres = selector({
   key: 'getGenres',
   get: ({ get }) => get(genresAtom),
});

export default withGenres;
