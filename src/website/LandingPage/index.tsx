import styles from './styles.module.css'
import { useState } from 'react'
import { AxiosError, isAxiosError } from 'axios'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useMutation } from 'react-query'
import { FcSearch } from 'react-icons/fc'
import { fetcher, defaultParams, years, movieTypes } from '@/utils'
import { MovieDetailsType, fetchSearchResultsProps, movieTypesType, MovieTypes } from '@/types'
import MovieCard from '@/UI-common/MovieCard'

const API_Endpoint = 'http://www.omdbapi.com/'

const LandingPage = () => {
	const { register, handleSubmit } = useForm<{ title: string }>()
	const [searchText, setSearchText] = useState('')
	const [loadingState, setLoadingState] = useState(false)
	const [searchResults, setSearchResults] = useState<
		{ Search: []; totalResults: number; Response: boolean; Error?: string } | undefined
	>()
	const [params, updateParams] = useState(defaultParams)
	const [currentPage, setCurrentPage] = useState(1)
	const [currentYear, setCurrentYear] = useState<string | undefined>('2023')
	const [movieTypeState, setMovieTypeState] = useState<movieTypesType>(movieTypes)
	const [apiError, setApiError] = useState<string | null>(null)
	const fetchSearchResults = async ({ searchText, page, y, type }: fetchSearchResultsProps) => {
		setLoadingState(true)
		try {
			const data = await fetcher({
				url: API_Endpoint,
				params: { ...params, s: searchText, page: page, y: y, type: type },
			})
			return data || []
		} catch (error: any | AxiosError) {
			if (isAxiosError(error)) {
				console.log('error.message: ', error)
				setApiError(error.message + ' : ' + error.response?.data.Error)
			} else {
				setApiError(JSON.stringify(error))
			}
		}
	}

	const searchMovies = useMutation(fetchSearchResults)
	const handleScrollTop = () => {
		window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
	}

	const handleNextPage = () => {
		const nextPage = currentPage + 1
		setCurrentPage(prevPage => prevPage + 1)

		searchMovies
			.mutateAsync({ searchText: searchText, page: nextPage })
			.then(data => {
				setSearchResults(data)
			})
			.finally(() => {
				setLoadingState(false)
				handleScrollTop()
			})
	}

	const handlePreviousPage = () => {
		const prevPage = currentPage - 1
		setCurrentPage(prevPage => prevPage - 1)

		searchMovies
			.mutateAsync({ searchText: searchText, page: prevPage })
			.then(data => {
				setSearchResults(data)
			})
			.finally(() => {
				setLoadingState(false)
				handleScrollTop()
			})
	}

	const handleYearChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
		const searchPage = 1
		const selectedYear = event.target.value
		setCurrentYear(selectedYear)
		setMovieTypeState(movieTypes)

		searchMovies
			.mutateAsync({ searchText: searchText, page: searchPage, y: selectedYear })
			.then(data => {
				setSearchResults(data)
			})
			.finally(() => {
				setLoadingState(false)
				handleScrollTop()
			})
	}

	const handleMovieTypeChange = (type: MovieTypes) => {
		const searchPage = 1

		const updatedMovieTypeState = movieTypeState.map(movieType => {
			if (movieType.type === type) {
				return { ...movieType, isChecked: movieType.type === type }
			}
			return { ...movieType, isChecked: false }
		})
		setMovieTypeState(updatedMovieTypeState)

		searchMovies
			.mutateAsync({
				searchText: searchText,
				page: searchPage,
				type: type,
			})
			.then(data => {
				setSearchResults(data)
			})
			.finally(() => {
				setLoadingState(false)
				handleScrollTop()
			})
	}

	const handleSearchSubmit: SubmitHandler<{ title: string }> = async data => {
		const searchPage = 1
		setCurrentPage(searchPage)
		setMovieTypeState(movieTypes)
		const title = data.title
		setLoadingState(true)
		setSearchText(title)

		searchMovies
			.mutateAsync({ searchText: title, page: searchPage })
			.then(data => {
				setSearchResults(data)
				console.log('data: ', data)
			})
			.catch(error => {
				setApiError(error)
				console.log('Error fetching search results:', error)
			})
			.finally(() => {
				setLoadingState(false)
			})
	}

	return (
		<div className={styles.container}>
			<form className={styles.container__form} onSubmit={handleSubmit(handleSearchSubmit)}>
				<input
					{...register('title')}
					type='text'
					placeholder='Search for a movie title'
					className={styles.container__form__input}
				/>
				<input type='submit' value='Search' className={styles.container__form__submit} />
			</form>

			<div>
				<div className={styles.searchResults}>
					{searchResults?.Search?.length && (
						<>
							<div className={styles.searchResults__filterBy}>
								<div className={styles.searchResults__filterBy__title}>Filter By</div>
								<div className={styles.searchResults__filterBy__year}>
									<div className={styles.searchResults__filterBy__year__title}>Year of Release</div>
									<select value={currentYear} onChange={handleYearChange}>
										<option value='' disabled>
											Select Year of Release
										</option>
										{years.map(year => (
											<option key={year} value={year}>
												{year}
											</option>
										))}
									</select>
								</div>
								<div className={styles.searchResults__filterBy__movieType}>
									<div className={styles.searchResults__filterBy__movieType__title}>Type of Movie</div>
									<div className={styles.searchResults__filterBy__movieType__container}>
										{movieTypeState.map(movieType => (
											<div
												key={movieType.type}
												className={styles.searchResults__filterBy__movieType__container__item}
											>
												<input
													type='checkbox'
													name='movie type'
													id='movie type'
													value={movieType.type}
													checked={movieType.isChecked}
													onChange={() => handleMovieTypeChange(movieType.type)}
												/>
												<div className={styles.searchResults__filterBy__movieType__container__text}>
													{movieType.title}
												</div>
											</div>
										))}
									</div>
								</div>
							</div>
							<div className={styles.searchResults__container}>
								{searchResults?.Search.map((movie: MovieDetailsType) => (
									<MovieCard
										key={movie.imdbID}
										imageSrc={movie.Poster}
										imageAlt={movie.Title}
										title={movie.Title}
										releaseDate={movie.Year}
										buttonLink={movie.imdbID}
										movieGenre={movie.Type}
									/>
								))}
							</div>
						</>
					)}
					{searchResults?.Error && (
						<div className={styles.APIresponse}>
							<FcSearch size={40} />
							{searchResults.Error}
						</div>
					)}

					{apiError && <div>{apiError}</div>}
				</div>
				{searchResults?.Search?.length && searchResults?.totalResults && (
					<div className={styles.pagination__container}>
						<button
							className={styles.pagination__container__prev}
							onClick={() => handlePreviousPage()}
							disabled={currentPage <= 1}
						>
							{'<--'} Previous
						</button>
						<button
							className={styles.pagination__container__next}
							onClick={() => handleNextPage()}
							disabled={currentPage >= Math.floor(searchResults?.totalResults / 10)}
						>
							Next {'-->'}{' '}
						</button>
					</div>
				)}
				<div>{/*recently searched movies*/}</div>
			</div>
		</div>
	)
}

export default LandingPage