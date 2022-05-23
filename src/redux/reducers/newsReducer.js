import { FETCH_ARTICLES, TOGGLE_FAVORITES } from '../actions/newsActions';

const initialState = {
  articles: [],
  favorites: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_ARTICLES:
      return {
        ...state,
        articles: action.payload.articles,
      };
    case TOGGLE_FAVORITES:
      const index = state.favorites.findIndex(
        (article) => article.url === action.payload
      );

      if (index >= 0) {
        const favorites = [...state.favorites];
        favorites.splice(index, 1);
        return {
          ...state,
          favorites,
        };
      } else {
        return {
          ...state,
          favorites: [
            ...state.favorites,
            state.articles.find((article) => article.url === action.payload),
          ],
        };
      }
  }
  return state;
}
