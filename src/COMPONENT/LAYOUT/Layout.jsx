import Routers from '../../ROUTERS/Routers'
import Footer from '../FOOTER/Footer'
import Header from '../HEADER/Header'
import './Layout.css'

const Layout = () => {
  return (
    <>
        <Header/>
        <div>
            <Routers/>
        </div>
        <Footer/>
    </>
  )
}

export default Layout