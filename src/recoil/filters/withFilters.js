import { selector } from 'recoil';
import filtersAtom from './atom';

const withFilters = selector({
   key: 'getFilters',
   get: ({ get }) => get(filtersAtom),
});

export default withFilters;
