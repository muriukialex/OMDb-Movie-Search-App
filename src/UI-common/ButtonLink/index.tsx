import Link from 'next/link'
import styles from './styles.module.css'

interface ButtonProps {
	title: string
	bgColor: string
	href: string
	width?: number
	height?: number
	disabled?: boolean
	border?: string
	borderRadius?: number
}

const ButtonLink = ({ title, href, bgColor, disabled = false, border, borderRadius }: ButtonProps) => {
	return (
		<Link className={styles.button} href={href} passHref style={{ borderRadius: borderRadius }}>
			<button style={{ backgroundColor: bgColor, border: border }} disabled={disabled}>
				{title}
			</button>
		</Link>
	)
}

export default ButtonLink
