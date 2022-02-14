import { selector } from 'recoil';
import savedAtom from './atom';

const withSaved = selector({
   key: 'getSaved',
   get: ({ get }) => get(savedAtom),
});

export default withSaved;
