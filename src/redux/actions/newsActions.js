export const FETCH_ARTICLES = 'FETCH_ARTICLES';
export const TOGGLE_FAVORITES = 'TOGGLE_FAVORITES';

export const fetchArticles = () => {
  return async (dispatch) => {
    // using dispatch  we can add logic to our data
    const result = await fetch(
      'https://newsapi.org/v2/everything?q=tesla&from=2022-04-23&sortBy=publishedAt&apiKey=365a5ade4ae24b4b9f12d55e5c084168'
    );

    const resultData = await result.json();

    dispatch({
      type: FETCH_ARTICLES,
      payload: resultData,
    });
  };
};

export const toggleFavorites = (url) => {
  return {
    type: TOGGLE_FAVORITES,
    payload: url,
  };
};
