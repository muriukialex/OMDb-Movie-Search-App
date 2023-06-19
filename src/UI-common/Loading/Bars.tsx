import { Bars } from 'react-loader-spinner'
import styles from './styles.module.css'

const LoadingBars = () => {
	return (
		<div className={styles.container}>
			<Bars
				height='150'
				width='150'
				color='#cccccc'
				ariaLabel='bars-loading'
				wrapperStyle={{}}
				wrapperClass=''
				visible={true}
			/>
		</div>
	)
}

export default LoadingBars
