import './index.css'
import Icon from 'component/icon'
import { Button } from 'react-vant';
import {useRef} from 'react'
import { useNavigate } from "react-router-dom";
import {useDispatch} from 'react-redux';
import {doLoginAction} from 'redux/Slices/userSlice';

function Login(){
   let navigate = useNavigate()
   const dispatch  = useDispatch()
   const usernameInput=useRef('')
   const passwordInput=useRef('') 
   const doLogin=()=>{
      const username=usernameInput.current.value
      const password=passwordInput.current.value  
      if(username===''){
           window.$msg("用户名不能为空");return;
      }
      if(password===''){
           window.$msg("密码不能为空");return;
      }
      dispatch(doLoginAction({username:username,password:password})).then((result)=>{
        let data=result.payload
        if(data.result.success){
            navigate('/index')
        }else{
            window.$msg(data.result.info)
        }
      })
   } 
   return(
       <div id='login'>
                <div className='logo'>
                    <Icon src='login' className='logoimg'/>
                </div>
                <div className='title'>ReactTemp</div>
                <div className='subtitle'>用户名:ReactTemp 密码:ReactTemp</div>
                <div className='loginform'>
                    <div className='login-input'>
                        <div className='login-input-icon'><Icon src='user' className='login-input-svg'/></div><div className='login-input-content'> <input type='text' defaultValue='reactshop' ref={usernameInput}/></div>
                    </div>
                    <div className='login-input'>
                        <div className='login-input-icon'><Icon src='password' className='login-input-svg'/></div><div className='login-input-content'> <input type='password' defaultValue='reactshop' ref={passwordInput} /></div>
                    </div>
                    <div className='login-btn'>
                        <Button color="#FF8A7A" block onClick={doLogin}>登  陆</Button>
                    </div> 
                    <div className='forget_password'>
                        忘记密码?
                    </div>    
                </div>    
                <div className='bottomwords'>copyright@2021</div>
     </div> 
   )
}

export default Login