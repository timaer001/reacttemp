import axios from 'axios'
import qs from 'qs'
//此处从redux获取系统userid以构造登陆令牌，放到headers里

const config={
    baseURL: 'http://localhost/reacttemp',
    timeout: 10000
  }

async function get(url,data){
    config['url']=url
    config['headers']={'token':'abc','Content-Type':'application/x-www-form-urlencoded'}
    config['method']='get'
    const result=await axios.post(url,qs.stringify(data),config)
    return result.data
}

async function post(url,data){
    config['url']=url
    config['headers']={'token':'abc','Content-Type':'application/x-www-form-urlencoded'}
    config['method']='post'
    const result=await axios.post(url,qs.stringify(data),config)
    return result.data
}

export {get,post} 