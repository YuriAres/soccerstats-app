import Axios from 'axios'

const API = Axios.create({
    baseURL: 'https://api-football-standings.azharimm.site'
})

export default API;