import '../styles/globals.css'
import Sidebar from './sidebar'

function MyApp({ Component, pageProps }) {
  return(
    <div>
      <div className="" style={{margin:'2em'}}>
       <Sidebar/>
      </div>
      <div className='' style={{marginLeft:'20em'}}>
      <Component {...pageProps}/>
      </div>
      
    </div>
  )
    
}

export default MyApp
