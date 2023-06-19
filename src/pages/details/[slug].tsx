import Head from 'next/head'
import { Inter } from 'next/font/google'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { getMovieDetails } from '../api'
import { MovieDetailsType } from '@/types'
import MovieDetailsPage from '@/website/MovieDetailsPage'
import { LoadingBars } from '@/UI-common'

const inter = Inter({ subsets: ['latin'] })

export default function MovieDetails() {
	const router = useRouter()
	const { slug } = router.query
	const [isLoading, setIsLoading] = useState(false)
	const [movieDetails, setMovieDetails] = useState<MovieDetailsType | null>(null)
	const [APIerror, setAPIerror] = useState<unknown>(null)

	useEffect(() => {
		setIsLoading(true)
		if (slug) {
			// Fetch movie details based on the slug (movie ID)
			try {
				getMovieDetails(slug).then(data => {
					setMovieDetails(data)
					setIsLoading(false)
				})
			} catch (error) {
				setAPIerror(error)
				setIsLoading(false)
			}
		}
	}, [slug])

	if (APIerror !== null) {
		return <h3>Ooops! There was an error loading this movie</h3>
	}

	return (
		<>
			<Head>
				<title>{movieDetails?.Title ?? 'Movie Title 🎬'}</title>
				<meta name='description' content={movieDetails?.Plot ?? ''} />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<div className={`${inter.className}`}>
				{isLoading && <LoadingBars />}
				{movieDetails && (
					<MovieDetailsPage
						Title={movieDetails.Title}
						Year={movieDetails.Year}
						imdbID={movieDetails.imdbID}
						Type={movieDetails.Type}
						Poster={movieDetails.Poster}
						Released={movieDetails.Released}
						Genre={movieDetails.Genre}
						Actors={movieDetails.Actors}
						imdbRating={movieDetails.imdbRating}
						Plot={movieDetails.Plot}
					/>
				)}
			</div>
		</>
	)
}
