// All the pages pass through this
import Script from 'next/script'
import Navbar from '../components/Navbar'
import 'bootstrap/dist/css/bootstrap.css'
import '../styles/globals.css'
import Footer from '../components/Footer'
import Search from '../components/Search'
import { useEffect } from 'react'

function MyApp({ Component, pageProps,props }) {
  useEffect(() => {
    const threeScript = document.createElement("script")
    threeScript.setAttribute("id","threescript")
    threeScript.setAttribute("src","https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js")
    document.getElementsByTagName("head")[0].appendChild(threeScript)
    return ()=>{
      if(threeScript){
        threeScript.remove()
      }
    }
  }, [])
  
  return (
    <div>
      <Navbar></Navbar>
  <Component {...pageProps} />
    <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-pprn3073KE6tl6bjs2QrFaJGz5/SUsLqktiwsUTF55Jfv3qYSDhgCecCxMW52nD2" crossorigin="anonymous"></Script>
    <Footer></Footer>
    </div>)
}



export default MyApp
