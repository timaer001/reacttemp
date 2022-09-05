import './index.css'
import {useState} from 'react'
import {post} from 'axios/axios'

function AxiosPage(){
      const [receivedata,setreceivedata]=useState({'title':'','body':'',"postdata":''})
      function getdata(){
        post('/react',{postdata:'hello react'}).then((data)=>{
          setreceivedata(data)
        })
      } 
      return (
        <div className='axios_sample'>
            <button onClick={getdata}>Click to get data</button>
            <div>Data from server :</div>
            <div>{receivedata.title}</div>
            <div>{receivedata.body}</div>
            <div>{receivedata.postdata}</div>
        </div>
      ) 
}

export default AxiosPage