import './Detail.css';
import { useParams } from 'react-router-dom';
import products from '../../../Assets/Data/Product';
import Helmet from '../../HELMET/Helmet';
import CommonSection from '../../UI/CommonSection';
import { motion } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import ProductsList from '../../UI/ProductsList';
import { useDispatch } from 'react-redux';
import { cartActions } from '../../../Redex/Slices/CardSlice';
import { toast } from 'react-toastify';
import productData from '../../../Assets/Data/Product'
import FadeLoader from "react-spinners/FadeLoader";
const override = {
    display: "block",
    margin: "300px auto",
};




const Detail = () => {
    let [loading, setLoading] = useState(true);
    const reviewUser = useRef('')
    const reviewMsg = useRef('')
    const dispatch = useDispatch()


    const submitHandel = (e)=>{
        e.preventDefault()
        const reviewUserName = reviewUser.current.value
        const reviewUserMsg = reviewMsg.current.value
        
        const reviewobj= {
            userName : reviewUserName,
            text: reviewUserMsg,
            rating,
        }

        console.log(reviewobj)
        toast.success('Review Submitted')
    }

    const addToCart = ( )=>{
        dispatch(cartActions.additem({
            id,
            imgUrl : imgUrl,
            productName,
            price,
        }));
        toast.success('Product added successfully')
    }





    const [tab, setTab]=useState('desc')
    const [rating, setRating]=useState(null)
    const { id } = useParams()
    const product = products.find(item => item.id === id)
    const { imgUrl, productName, price, avgRating, reviews, description, shortDesc, category } = product;

   const reletedProducts = products.filter(item => item.category === category)

    console.log(imgUrl, 12);

    useEffect(()=>{
        window.scrollTo(0, 0)
    }, [product])

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
            <Helmet title={productName}>
                <CommonSection title={productName} />

                <section className='detail__section'>
                    <div className="detail__container">
                        <div className="detail__row">
                            <div className="detail__col">
                                <img src={imgUrl} alt="" />
                            </div>
                            <div className="detail__col">
                            <div className='product__detail'>
                                <h2>{productName}</h2>
                                <div className="product__ration">
                                    <div>
                                        <span><i className='ri-star-s-fill'></i></span>
                                        <span ><i className='ri-star-s-fill'></i></span>
                                        <span ><i className='ri-star-s-fill'></i></span>
                                        <span><i className='ri-star-s-fill'></i></span>
                                        <span><i className='ri-star-half-s-line'></i></span>
                                    </div>
                                    <p>(<span>{avgRating}</span> ratings)</p>
                                </div>
                                <div className='price-set'>
                                <span className='product__price'>${price}</span>
                               <span>Category :- {category.toUpperCase()}</span>
                                </div>
                                <p className='products__des'>{shortDesc}</p>

                                <motion.button whileTap={{scale: 1.2}} className='cart__button' onClick={addToCart}>Add to Cart</motion.button>
                            </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section>
                    <div className="container">
                        <div className="row">
                              <div className="tab__wrapper">
                                <h5 className={`${tab==='desc' ? 'active__tab' : " " }`} onClick={()=> setTab('desc')}>Description</h5>
                                <h5 className={`${tab==='rev' ? 'active__tab' : " " }`} onClick={()=> setTab('rev')}>Reviews ({reviews.length})</h5>
                              </div>
                              {
                                tab === 'desc' ? (
                                    <div className="tab__content">
                                <p>{description}</p>
                              </div>
                                ) : (
                                    <div className='product__review'>
                                    <div className="review__wrapper">
                                        <ul>
                                            {
                                                reviews?.map((item, index)=>(
                                                    <li key={index}>
                                                    <h6>Jhon Deo</h6>
                                                    <span>{item.rating} (rating)</span>
                                                    <p>{item.text}</p>
                                                    </li>
                                                ))
                                            }
                                        </ul>
                                        <div className="review__form">
                                        <h4>Leave your experience</h4>
                                            <form onSubmit={submitHandel}>
                                                <div className="form__group">
                                                    <input type="text" placeholder='Enter name' ref={reviewUser}  required/>
                                                </div>
                                                <div className="from__group">
                                                    <span onClick={()=> setRating(1)}>1<i className='ri-star-s-fill'></i></span>
                                                    <span onClick={()=> setRating(2)}>2<i className='ri-star-s-fill'></i></span>
                                                    <span onClick={()=> setRating(3)}>3<i className='ri-star-s-fill'></i></span>
                                                    <span onClick={()=> setRating(4)}>4<i className='ri-star-s-fill'></i></span>
                                                    <span onClick={()=> setRating(5)}>5<i className='ri-star-s-fill'></i></span>
                                                </div>
                                                <div className="form__group">
                                                    <textarea rows={4} type="text" placeholder='Review Message...' ref={reviewMsg} required />
                                                </div>
                                                <button type='submit' className='cart__button' >Submit</button>
                                            </form>
                                        </div>
                                    </div>

                                    </div>
                                )
                              }
                              
                        <div className='col'>
                            <h2 className='related__title'>You might also like</h2>
                        </div>
                        </div>

                   <div className='pro-set'>
                        <ProductsList data={reletedProducts}/>
                        </div>
                    </div>
                </section>
            </Helmet>
         }
        </>
    )
}
export default Detail;