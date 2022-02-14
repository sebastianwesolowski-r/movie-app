import { atom } from 'recoil';

export const filtersAtom = atom({
   key: 'filtersAtom',
   default: {
      sort: '',
      filter: {
         genre: 0,
         releaseYear: '',
      },
   },
});

export default filtersAtom;
