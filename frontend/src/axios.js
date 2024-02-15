import axios from 'axios'

const $host = axios.create({
	baseUrl: 'REACT_APP_API_URL'
})

$host.interceptors.request.use(config => {
	config.headers.Authorization = window.localStorage.getItem('token')
	return config
})

export default $host 



