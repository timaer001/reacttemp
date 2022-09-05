  import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";
  import './index.css'
  import {useState,useEffect} from 'react'

  function Navone(props){
     const [selectval,setselectval]=useState('')

     let routecon=[] 
     let defaultRoute
     let isDefaultRouteSet=false
     let defaultTitle    
     
    // eslint-disable-next-line
     useEffect(()=>setselectval(defaultTitle),[isDefaultRouteSet])

     const sidecon=props.routes.map((item)=>{
          const head1='maintitle' in item?<div className='navone-maintitle' key={'h1_'+item.maintitle}>{item.maintitle}</div>:''
          const head2='subtitle' in item? <div className='navone-subtitle' key={'h2_'+item.maintitle}>{item.subtitle}</div>:''
          const routes=item.routes.map((route,index)=>{
              if(index===0 && !isDefaultRouteSet) { 
                defaultRoute=<Route key={'de_'+route.title} path='/'>{route.component}</Route> 
                isDefaultRouteSet=true
                defaultTitle=route.title
              }
              const itemStyle=selectval===route.title?'navone-selected':''
              routecon.push(<Route key={'ru_'+route.title} path={route.path}>{route.component}</Route>)
              return (<li key={'li_'+route.title}><Link className={itemStyle} onClick={()=>setselectval(route.title)} to={route.path}>{route.title}</Link></li>)
            } 
          ) 
          return(
              <div className='navone-sidenavcon' key={'s_'+item.maintitle}>
                {head1}{head2}
                <ul key={'ul_'+item.maintitle}>{routes}</ul>
              </div>
          )
       }
     )
     
     routecon.push(defaultRoute)
     return( 
        <Router>
          <div className='navone-app'>  
              <div  className='navone-maincontent'> 
                      <div className='navone-left'>  
                          {sidecon}
                      </div>
                      <div className='navone-right'>    
                          <Routes>{routecon}</Routes> 
                      </div>
              </div>
         </div> 
        </Router>   
     )
  }
  
  export default Navone