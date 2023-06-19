import { useState } from 'react'
import Image from 'next/image'
import { MovieDetailsType } from '@/types'
import styles from './styles.module.css'
import { FaFilm } from 'react-icons/fa'

type MovieDetailsPageProps = MovieDetailsType

const MovieDetailsPage = ({ Title, Released, Genre, Actors, imdbRating, Plot, Poster }: MovieDetailsPageProps) => {
	const [imageLoadError, setImageLoadError] = useState(false)

	const handleImageError = () => {
		setImageLoadError(true)
	}
	return (
		<section>
			<div className={styles.container}>
				<div className={styles.card}>
					<div className={styles.card__image}>
						<Image
							src={
								imageLoadError || Poster === 'N/A'
									? 'https://www.cvent-assets.com/brand-page-guestside-site/assets/images/venue-card-placeholder.png'
									: Poster
							}
							alt={Title}
							width={300}
							height={300}
							onError={handleImageError}
						/>
					</div>
					<h2 className={styles.title}>{Title}</h2>
					<p className={styles.releaseDate}>
						<span className={styles.releaseDate__title}>Released Date: </span>
						{Released}
					</p>
					<p className={styles.plot}>
						<span className={styles.plot__title}>Summary Plot: </span>
						{Plot}
					</p>
					<p className={styles.actors}>
						<span className={styles.actors__title}>Actors: </span>
						{Actors}
					</p>
					<p className={styles.imdbRating}>
						<span className={styles.imdbRating__title}>IMDb Rating:</span>
						{imdbRating}
					</p>
					<p className={styles.genre}>
						<span className={styles.genre__text}>{Genre} </span>
						<span className={styles.genre__icon}>
							<FaFilm color='#f5c518' size={25} />
						</span>
					</p>
				</div>
			</div>
		</section>
	)
}

export default MovieDetailsPage
