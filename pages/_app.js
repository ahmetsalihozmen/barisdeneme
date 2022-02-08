import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {SSRProvider} from 'react-bootstrap'
import Head from 'next/head';
import Link from 'next/link'

function MyApp({ Component, pageProps }) {
  return( 
  <SSRProvider>
    
    <Link classname="link" href="http://localhost:3000"><h1 className='m-auto text-center link'>Sahibinden.com Karşılaştır</h1></Link>
    <div>
      <Component {...pageProps} />
    </div>
  </SSRProvider>
  )

}

export default MyApp
