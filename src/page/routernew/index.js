import Demo from 'page/demo'
import AxiosPage from 'page/axios'
import RoutePage from 'page/router'
import Navone from 'component/navone'
import Testvant from 'page/testvant'

const allRoutes = [
    {
      maintitle:'基础组件',
      routes:[
          {
            title:'演示组件',
            path: "/demo",
            component: <Demo/>
           },{
            title:'Axios组件',
            path: "/axios",
            component: <AxiosPage/>
           },{
            title:'Router组件',
            path: "/router",
            component: <RoutePage/>
           },{
            title:'Testvant',
            path: "/testvant",
            component: <Testvant/>
           }
      ]
    },
    {
      maintitle:'页面组件',
      subtitle:'Myshop',
      routes:[
          {
          title:'演示组件',
          path: "/demo",
          component: <Demo/>
         }
      ]
    }
    
  ]

function RouternewPage(){
   return( 
      <Navone routes={allRoutes} /> 
   )
}

export default RouternewPage