import {Routes,Route,HashRouter as Router} from "react-router-dom";
import store from 'redux/store'

import Index from 'page/index'
import Orderlist from 'page/orderlist'
import My from 'page/my'
import Login from 'page/login'

function AuthRoutes(props){
    const authToken=store.getState().user.token
    const routelist=props.children.map((route)=><Route path={route.props.path} element={authToken===''?<Login/>:route.props.element} key={route.props.path}/>)
    return(
        <Router>
          <Routes>
            {routelist}
          </Routes>
        </Router>    
    )
}

function RouterView(){ 
    return(
        <AuthRoutes> 
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Index />} />
            <Route path="/index" element={<Index />} />
            <Route path="/orderlist" element={<Orderlist />} />
            <Route path="/my" element={<My />} />
        </AuthRoutes> 
    )  
}

export default RouterView