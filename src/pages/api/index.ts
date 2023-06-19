import { fetcher, defaultParams } from '@/utils'

export const API_Endpoint = 'https://www.omdbapi.com/'

export const getMovieDetails = async (slug: string | string[] | undefined) => {
	try {
		const data = await fetcher({ url: API_Endpoint, params: { ...defaultParams, i: slug } })
		return data
	} catch (error) {
		console.error(error)
		return JSON.stringify(error)
	}
}
