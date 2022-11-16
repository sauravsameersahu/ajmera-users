import axios from "axios"

export const apiCall = url =>
    axios.get(url)
        .then(response => response)

export const apiPostCall = (url, request) =>
    axios.post(url, request)
        .then(response => response)