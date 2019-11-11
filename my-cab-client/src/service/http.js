import axios from 'axios'
import API_BASE_URL from '../config/config' 

const headers = {
    "headers":{
        'Authorization': 'Bearer '+sessionStorage.getItem('access-token')
    }
}
  
const httpGet=(url,cb)=>{
    axios.get(API_BASE_URL+url,headers).then(
        (resp)=>{
           //console.log("resp data",resp)
            cb(resp)
        },(err)=>{
           //console.log("Error",err.response)
            if(err.response.status==403)
            window.location.href = "/"
            cb(err.response)
        }
    )
}
const httpPost = (url,body,cb)=>{
    axios.post(API_BASE_URL+url,body,headers).then(
        (resp)=>{
           //console.log("resp post",resp)
            cb(resp)
         },(err)=>{
           //console.log("Add error",err.response)
            if(err.response.status==403)
            window.location.href = "/"
            cb(err.response)
        }
        )
}
export default {
    get:httpGet,
    post:httpPost
}