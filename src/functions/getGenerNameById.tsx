import genre from 'data/genre.json';

export function getGenreName(id:number) {
	const getGenreName = genre.filter((genre) =>
		genre.id === id ? true : false
	);
	if (getGenreName) {
		return getGenreName[0].name;
	}
	return null;
}