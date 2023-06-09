import { Link,} from 'react-router-dom';
import heroImg from '../../../Assets/images/hero-img.png';
import Helmet from '../../HELMET/Helmet';
import './Home.css';
import { motion } from "framer-motion";
import Services from '../../SERVICES/Services';
import ProductsList from '../../UI/ProductsList';
import { useEffect, useState } from 'react';
import productData from '../../../Assets/Data/Product'
import countImages from '../../../Assets/images/counter-timer-img.png'
import FadeLoader from "react-spinners/FadeLoader";
import Clock from '../../UI/Clock';
const override = {
    display: "block",
    margin: "300px auto",
};


const Home = () => {
    const year = new Date().getFullYear();
  
    let [loading, setLoading] = useState(true);
 const [trendingProduct, setTrendingProduct]=useState([])
 const [bestSalseProduct, setBestSalseProduct]=useState([])
 const [curtainProduct, setcurtainProduct]=useState([])
 const [fanProduct, setfanProduct]=useState([])
 const [tableProduct, settableProduct]=useState([])
 const [bedProduct, setbedProduct]=useState([])
 const [lightProduct, setlightProduct]=useState([])

 useEffect(()=>{
    const filteredTrendingProduct = productData.filter((item)=>{
       return  item.category === "chair"
    }) 
     const filteredBestSalseProduct = productData.filter((item)=>{
       return  item.category === "sofa"
    }) 
    const filteredCurtainProduct = productData.filter((item)=>{
       return  item.category === "Curtain" 
    }) 
    const filteredfanProduct = productData.filter((item)=>{
       return  item.category === "fan"
    })
    const filteredbedProduct = productData.filter((item)=>{
        return  item.category === "bed"
     })
     const filteredtableProduct = productData.filter((item)=>{
        return  item.category === "table"
     })
     const filteredlightProduct = productData.filter((item)=>{
        return  item.category === "LightLamp"
     })

    
    setTrendingProduct(filteredTrendingProduct);
    setBestSalseProduct(filteredBestSalseProduct);
    setcurtainProduct(filteredCurtainProduct);
    setfanProduct(filteredfanProduct);
    setbedProduct(filteredbedProduct);
    settableProduct(filteredtableProduct);
    setlightProduct(filteredlightProduct)

 }, [])


 useEffect(()=>{
    window.scrollTo(0, 0)
}, [productData])


 

 useEffect(() => {
    (productData?.length > 0) ? setLoading(false) : setLoading(true)
}, [productData]);


    return (
        <>
         {
                loading ? <FadeLoader
                    loading={true}
                    color={'#000'}
                    cssOverride={override}
                    size={150}
                /> :
            <Helmet title={" Home "}>
                <section className='home-container'>
                    <div className="home__row">
                        <div className="home__col">
                            <div className="home__content">
                                <p className="home__subtitle">
                                    Trending product in {year}
                                </p>
                                <h2>Make Your Interior More Minimalistic & Modern</h2>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam voluptatum provident aspernatur alias labore dicta sint quos temporibus sapiente consectetur?</p>
                                <Link to="/shop" ><motion.button whileTap={{ scale: 1.2 }} className="shop__btn"> SHOP NOW </motion.button></Link>
                            </div>
                        </div>

                        <div className="home__col">
                            <div className="home__img">
                                <img src={heroImg} alt="" />
                            </div>
                        </div>
                    </div>
                </section>
                <Services />
                <section className='trending__products'>
                    <div className="trending__container">
                        <div className="trending__col">
                            <h2 className='section__title'>Trending Products</h2>
                        </div>
                        <ProductsList data={trendingProduct} /> 
                    </div>
                </section> 
                
                <section className='trending__products'>
                    <div className="trending__container">
                        <div className="trending__col">
                            <h2 className='section__title'>Best Sales</h2>
                        </div>
                        <ProductsList data={bestSalseProduct} /> 
                    </div>
                </section>

                <section className='time__count'>
                    <div className="time__container">
                         <div className="time__col">
                         <div className="clock__top-content">
                            <h4>Limited Offers</h4>
                            <h3>Quality Armchair</h3>
                         </div>
                                 <Clock/>
                                 <motion.button whileTap={{scale: 1.2}} className='buy__btn'>
                                    <Link to="/shop">Visit Store</Link>
                                 </motion.button>
                         </div>
                         <div className="time__col">
                            <img src={countImages} alt="" />
                         </div>
                    </div>
                </section>

                <section className='trending__products'>
                    <div className="trending__container">
                        <div className="trending__col">
                            <h2 className='section__title'>New Arrivals</h2>
                        </div>
                        <ProductsList data={curtainProduct} /> 
                        <ProductsList data={tableProduct} /> 
                    </div>
                </section>
                
                <section className='trending__products'>
                    <div className="trending__container" >
                        <div className="trending__col" style={{marginBottom: "2rem"}}>
                            <h2 className='section__title'>Popular in Category</h2>
                        </div>
                        <ProductsList data={fanProduct} /> 
                        <ProductsList data={bedProduct} /> 
                        <ProductsList data={lightProduct} /> 
                    </div>
                </section>
            </Helmet>

            
         }
        </>
    )
}
export default Home;