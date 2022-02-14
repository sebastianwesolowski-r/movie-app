import { selector } from 'recoil';
import likedAtom from './atom';

const withLiked = selector({
   key: 'getLiked',
   get: ({ get }) => get(likedAtom),
});

export default withLiked;
