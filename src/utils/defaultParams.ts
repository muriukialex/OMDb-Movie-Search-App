import { ParamsType } from '@/types'

const defaultParams: ParamsType = {
	page: 1,
	apikey: process.env.NEXT_PUBLIC_API_KEY,
}

export default defaultParams
