export const endPoints = (apiKey: string, page: number, query: any) => {
  return {
    search: `http://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}&page=${page}`,
  };
};
