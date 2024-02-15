import axios from 'axios'

const $host = axios.create({
	baseUrl: 'http://localhost:4444'
})

$host.interceptors.request.use(config => {
	config.headers.Authorization = window.localStorage.getItem('token')
	return config
})

export default $host 



