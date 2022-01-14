import { MovieInterface } from "components/movies/index.interface";

export const isMovieFav = (id: number, favourites:any) => {
    if (favourites.length > 0) {
        const alreadyFav = favourites.filter((movie: MovieInterface) => {
            if (movie.id === id) {
                return true;
            }
            return false;
        });
        return alreadyFav.length > 0 ? true : false;
    }
    return false;
};