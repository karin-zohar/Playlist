import { API_KEY } from '../constants/api_key.js'
import axios from 'axios'

const STORAGE_KEY = 'video'

export const videoService = {
    getRequestUrl,
    queryVideos
}
window.cs = videoService

function getRequestUrl(searchTerm) {
    const maxResults = 5
    const url = 'https://www.googleapis.com/youtube/v3/search';
    const requestUrl = `${url}?part=snippet&videoEmbeddable=true&type=video&key=${API_KEY}&q=${searchTerm}&maxResults=${maxResults}`
    console.log('requestUrl: ', requestUrl)
    return requestUrl
  }


async function queryVideos(requestUrl) {
    try {
        const res = await axios.get(requestUrl)
        const videos = makeData(res)
        return videos
    } catch (error) {
        console.log(error)
    }
}

function makeData(res) {
    const videos = res.data.items.map(video => ({
        title: video.snippet.title,
        description: video.snippet.description,
        img: video.snippet.thumbnails.default.url,
        videoId: video.id.videoId
    }))
    return videos
    
}