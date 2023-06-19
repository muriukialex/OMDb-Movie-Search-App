export type MovieTypes = 'movie' | 'episode' | 'series'

export type ParamsType = {
	i?: string | string[] | undefined // A valid IMDb ID (e.g. tt1285016), movie id
	s?: string // Movie title to search for.
	type?: MovieTypes // Movie type of result to return.
	y?: string // Year of release.
	page?: number // Pagination
	apikey?: string | number | undefined
}

export interface MovieDetailsType {
	Title: string
	Year: string
	imdbID: string
	Type: MovieTypes
	Poster: string
}

export interface fetchSearchResultsProps {
	searchText: string
	page: number
	y?: string
	type?: MovieTypes
}

export type movieTypesType = {
	type: MovieTypes
	title: string
	isChecked: boolean
}[]

export interface MovieDetailsType {
	Title: string
	Released: string
	Year: string
	imdbID: string
	Genre: string
	Actors: string
	imdbRating: string
	Plot: string
	// Type: string
	// Rated: string
	// Runtime: string
	// Director: string
	// Writer: string
	// Language: string
	// Country: string
	// Awards: string
	// Poster: string
	// Ratings: [
	// 	{
	// 		Source: string
	// 		Value: string
	// 	},
	// ]
	// Metascore: string
	// imdbVotes: string
	// DVD: string
	// BoxOffice: string
	// Production: string
	// Website: string
	// Response: string
}
