import "./index.css";
import {useSelector,useDispatch} from 'react-redux';
import {toggle} from 'redux/Slices/sidebarSlice';
import {increment,decrement,incrementByAmount} from 'redux/Slices/counterSlice';

function ReduxPage(){
    const sidebarStatus = useSelector(state=>state.sidebar.value);
    const counterStatus = useSelector(state=>state.counter.value);
    const dispatch  = useDispatch();

    return(
       <div className="login-container">
           <div className="login-form">
                  <div className="login-title">后台管理系统redux测试页</div>
                  <div>获取sidebar state变量:{sidebarStatus.toString()}</div>
                  <button onClick={()=>dispatch(toggle())}>点击测试</button>
                  <div>获取counter state变量:{counterStatus.toString()}</div>
                  <button onClick={()=>dispatch(increment())}>增加+1</button>
                  <button onClick={()=>dispatch(decrement())}>减少-1</button>
                  <button onClick={()=>dispatch(incrementByAmount(5))}>增加指定数量5</button>
           </div>
       </div>
    )  
}

export default ReduxPage