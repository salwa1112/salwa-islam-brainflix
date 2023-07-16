import axios from "axios";

//not using the api key here but I just kept it so that I can try to use it later
const apiKey = 'bb34e143-3fee-4d1b-8132-285f565b95ee';

const axiosInstance = axios.create({
    baseURL: "http://localhost:5000",
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
export const postComment = (videoId, payload)=> {
    return axiosInstance.post('/videos/' + videoId + '/comments', payload)
}

export const deleteComment = (videoId, commentId)=> {
    return axiosInstance.delete('/videos/' + videoId + '/comments/' + commentId)
}

export const addLikes = (videoId) => {
    return axiosInstance.put('/videos/' + videoId + '/likes')
}

export const postVideo = (video) => {
    return axiosInstance.post('/videos/', video)
}

const ApiUtils = {
    getVideos,
    getVideoDetails,
    postComment,
    deleteComment,
    addLikes,
    postVideo
}


export default ApiUtils;