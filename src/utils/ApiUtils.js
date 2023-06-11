import axios from "axios";

const apiKey = 'bb34e143-3fee-4d1b-8132-285f565b95ee';

const axiosInstance = axios.create({
    baseURL: "https://project-2-api.herokuapp.com",
    headers: {
        "Content-Type": "application/json"
    },
    params: {
        api_key: apiKey
    }
});

export const getVideos = ()=> {
 return axiosInstance.get('/videos');
}

export const getVideoDetails = (videoId)=> {
    return axiosInstance.get('/videos/' + videoId)
}

const ApiUtils = {
    getVideos,
    getVideoDetails
}


export default ApiUtils;