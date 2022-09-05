import { post } from 'axios/axios.js'

window.$msg=(info)=>{alert(info)}
window.$post=(url,data)=>{return post(url,data);}
