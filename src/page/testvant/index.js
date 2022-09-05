import { useState } from 'react';
import { Tabbar } from 'react-vant';

function Testvant(){
  const [active, setActive] = useState(0);
  return (
    <Tabbar value={active} onChange={setActive} activeColor='#FA614F'>
      <Tabbar.Item icon="wap-home">首页</Tabbar.Item>
      <Tabbar.Item icon="todo-list">订单</Tabbar.Item>
      <Tabbar.Item icon="manager">我的</Tabbar.Item>
    </Tabbar>
  );
};

export default Testvant
