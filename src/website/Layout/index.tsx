import styles from './styles.module.css'
import NavigationBar from '../NavigationBar'
interface LayoutProps {
	children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
	return (
		<main>
			<NavigationBar />
			<div className={styles.layout}>{children}</div>
		</main>
	)
}

export default Layout
