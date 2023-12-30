import axios from 'axios';

const API_URL='';//this is the backend url

const API_GMAIL= async (urlObject,payload,type)=>{
    return await axios({ //send a request to the backend url
        method:urlObject.method,
        url: `${API_URL}/${urlObject.endpoint}/${type}`,
        data: payload
    })
}

export default API_GMAIL;