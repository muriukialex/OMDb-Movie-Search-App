import styles from './styles.module.css'
import { useState } from 'react'
import Image from 'next/image'
import { MdOutlineLocalMovies } from 'react-icons/md'
import { capitalize } from '@/utils'

import ButtonLink from '../ButtonLink'

interface MovieCardProps {
	imageAlt: string
	imageSrc: string
	title: string
	releaseDate: string
	buttonLink: string
	movieGenre: string
}

const MovieCard = ({ imageAlt, imageSrc, title, releaseDate, buttonLink, movieGenre }: MovieCardProps) => {
	const [imageLoadError, setImageLoadError] = useState(false)

	const handleImageError = () => {
		setImageLoadError(true)
	}
	return (
		<section className={styles.movieCard}>
			<div className={styles.movieCard__Image}>
				<Image
					alt={imageAlt}
					src={
						imageLoadError || imageSrc === 'N/A'
							? 'https://www.cvent-assets.com/brand-page-guestside-site/assets/images/venue-card-placeholder.png'
							: imageSrc
					}
					width={350}
					height={345}
					onError={handleImageError}
				/>
			</div>
			<div className={styles.movieCard__Details}>
				<div className={styles.movieCard__Details__title}>
					<strong>Title: </strong> <span className={styles.movieCard__Details__title__text}>{title}</span>
				</div>
				<div className={styles.movieCard__Details__releaseDate}>
					<div className={styles.movieCard__Details__title}>
						<strong>Released:</strong>
						<span className={styles.movieCard__Details__title__text}>{releaseDate}</span>
					</div>
				</div>
				<ButtonLink
					title='View More Details...'
					bgColor='#fff'
					border='none'
					borderRadius={4}
					width={40}
					height={40}
					href={'details/' + buttonLink}
				/>
			</div>
			<div className={styles.movieCard__Genre}>
				<span className={styles.movieCard__Genre__title}>{capitalize(movieGenre)}</span>
				<span className={styles.movieCard__Genre__icon}>
					<MdOutlineLocalMovies color='#F5C518' size={25} />
				</span>
			</div>
		</section>
	)
}

export default MovieCard
