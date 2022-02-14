const sortByPopularity = (a, b) => b.popularity - a.popularity;

const sortByReleaseDate = (a, b) =>
   new Date(b.release_date) - new Date(a.release_date);

const sortByRating = (a, b) => b.vote_average - a.vote_average;

export const sortItems = (items, option) => {
   switch (option) {
      case 'popularity':
         items = items.sort(sortByPopularity);
         break;
      case 'releaseDate':
         items = items.sort(sortByReleaseDate);
         break;
      case 'rating':
         items = items.sort(sortByRating);
         break;
      default:
         return items;
   }
   return items;
};

export const filterItemsGenre = (items, option) =>
   items.filter((item) => item.genre_ids.includes(parseInt(option)));

export const filterItemsReleaseYear = (items, option) =>
   items.filter(
      (item) => new Date(item.release_date).getFullYear() === parseInt(option)
   );
