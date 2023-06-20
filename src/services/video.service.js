
// import { storageService } from './async-storage.service.js'
import { httpService } from './http.service.js'
import { utilService } from './util.service.js'
// import { userService } from './user.service.js'
import { API_KEY } from '../constants/api_key.js'
import axios from 'axios'

const STORAGE_KEY = 'video'

export const videoService = {
    query,
    // getById,
    // save,
    // remove,
    getEmptyVideo,
    // addVideoMsg,
    getRequestUrl,
    queryVideos
}
window.cs = videoService


async function query(filterBy = { txt: '', price: 0 }) {
    return httpService.get(STORAGE_KEY, filterBy)
}

// function getById(videoId) {
//     return httpService.get(`video/${videoId}`)
// }

// async function remove(videoId) {
//     return httpService.delete(`video/${videoId}`)
// }
// async function save(video) {
//     var savedVideo
//     if (video._id) {
//         savedVideo = await httpService.put(`video/${video._id}`, video)

//     } else {
//         savedVideo = await httpService.post('video', video)
//     }
//     return savedVideo
// }

// async function addVideoMsg(videoId, txt) {
//     const savedMsg = await httpService.post(`video/${videoId}/msg`, {txt})
//     return savedMsg
// }


function getEmptyVideo() {
    return {
        title: '',
        description: '',
        totalVotes: '',
        imgUrl: '' //thumbnail
    }
}


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
    console.log('res: ', res)
    const videos = res.data.items.map(video => ({
        title: video.snippet.title,
        description: video.snippet.description,
        img: video.snippet.thumbnails.default.url,
        videoId: video.id.videoId
    }))
    return videos
    
}