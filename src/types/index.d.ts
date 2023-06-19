export type MovieTypes = 'movie' | 'episode' | 'series'

export type ParamsType = {
	i?: string // A valid IMDb ID (e.g. tt1285016), movie id
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
