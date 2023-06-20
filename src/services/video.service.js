
// import { storageService } from './async-storage.service.js'
import { httpService } from './http.service.js'
import { utilService } from './util.service.js'
import { userService } from './user.service.js'


const STORAGE_KEY = 'video'

export const videoService = {
    query,
    getById,
    save,
    remove,
    getEmptyVideo,
    addVideoMsg
}
window.cs = videoService


async function query(filterBy = { txt: '', price: 0 }) {
    return httpService.get(STORAGE_KEY, filterBy)
}

function getById(videoId) {
    return httpService.get(`video/${videoId}`)
}

async function remove(videoId) {
    return httpService.delete(`video/${videoId}`)
}
async function save(video) {
    var savedVideo
    if (video._id) {
        savedVideo = await httpService.put(`video/${video._id}`, video)

    } else {
        savedVideo = await httpService.post('video', video)
    }
    return savedVideo
}

async function addVideoMsg(videoId, txt) {
    const savedMsg = await httpService.post(`video/${videoId}/msg`, {txt})
    return savedMsg
}


function getEmptyVideo() {
    return {
        songName: '',
        description: '',
        totalVotes: '',
        imgUrl: '' //thumbnail
    }
}





