import styles from './styles.module.css'

interface ButtonProps {
	title: string
	bgColor: string
	width?: number
	height?: number
	disabled?: boolean
	border?: string
	borderRadius?: number
}

const Button = ({ title, bgColor, width = 100, height = 100, disabled = false, border, borderRadius }: ButtonProps) => {
	return (
		<button
			className={styles.button}
			style={{ width: width, height: height, backgroundColor: bgColor, border: border, borderRadius: borderRadius }}
			disabled={disabled}
		>
			{title}
		</button>
	)
}

export default Button
