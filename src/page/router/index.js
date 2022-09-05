import React from "react";
import {
  HashRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import App from 'page/app'
import ReduxPage from 'page/redux'
import AxiosPage from 'page/axios'


import './index.css'

function RouterPage(){
   return( 
      <Router>
        <div className='app'>  
            <div  className='maincontent'> 
                    <div  className='sidenav'>  
                        <ul>
                            <li>
                                <Link to='/'>登陆页</Link>
                            </li>
                            <li>
                                <Link to='/axios'>Axios页</Link>
                            </li>
                            <li>
                                <Link to='/app'>Demo页</Link>
                            </li>
                           
                        </ul>
                    </div>
                    <div className='rightcontent'>    
                        <Routes>
                            <Route exact path='/'>
                                <ReduxPage/>
                            </Route>
                            <Route path='/axios'>
                                <AxiosPage/>
                            </Route>
                            <Route path='/app'>
                                <App />
                            </Route>
                        </Routes>
                    </div>
            </div>
       </div> 
      </Router>   
   )
}

export default RouterPage