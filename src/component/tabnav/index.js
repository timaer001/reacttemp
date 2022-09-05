import { useState } from 'react';
import { Tabbar } from 'react-vant';
import { useNavigate } from "react-router-dom";
function TabNav(){
  const [active, setActive] = useState('index');
  let navigate = useNavigate();
  return (
    <Tabbar value={active} onChange={(tabname)=>{setActive(tabname);navigate("/"+tabname);}} activeColor='#FA614F'>
      <Tabbar.Item icon="wap-home" name='index'>首页</Tabbar.Item>
      <Tabbar.Item icon="todo-list" name='orderlist'>订单</Tabbar.Item>
      <Tabbar.Item icon="manager" name='my'>我的</Tabbar.Item>
    </Tabbar>
  );
};

export default TabNav
