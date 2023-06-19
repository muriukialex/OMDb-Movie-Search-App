import Head from 'next/head'
import { Inter } from 'next/font/google'
import LandingPage from '@/website/LandingPage'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
	return (
		<>
			<Head>
				<title>Movie Search App | Search for your favorite movies</title>
				<meta
					name='description'
					content='Movie Search Application using the OMDb API | | Search for your favorite movies'
				/>
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<div className={`${inter.className}`}>
				<LandingPage />
			</div>
		</>
	)
}
