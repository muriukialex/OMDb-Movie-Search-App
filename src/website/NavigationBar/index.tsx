import styles from './styles.module.css'
import Link from 'next/link'

const NavigationBar = () => {
	return (
		<nav className={styles.navbar}>
			<div className={styles.navbar__headingTitle}>
				<Link href='/'>OMDb Movie Search</Link>
			</div>
		</nav>
	)
}

export default NavigationBar
