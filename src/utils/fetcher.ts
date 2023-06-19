import axios from 'axios'
import { ParamsType } from '@/types'

interface fetcherProps {
	url: string
	params: ParamsType
}

const fetcher = async ({ url, params }: fetcherProps) => {
	const response = await axios.get(url, { params })
	const result = response.data
	return result
}

export default fetcher
