import Helmet from '../../HELMET/Helmet';
import CommonSection from '../../UI/CommonSection';
import { motion } from 'framer-motion';
import { cartActions } from '../../../Redex/Slices/CardSlice'
import { useSelector, useDispatch } from 'react-redux';
import './Cart.css';
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../../firebase';
import productData from '../../../Assets/Data/Product'
import FadeLoader from "react-spinners/FadeLoader";
import { useEffect, useState } from 'react';
const override = {
    display: "block",
    margin: "300px auto",
};


const Cart = () => {
    let [loadings, setLoadings] = useState(true);
    const [userss,loading]=useAuthState(auth)

    const {userData,cartitems,totalAmount} = useSelector((state) => state.cart)
    console.log(userData,'user data')


 useEffect(() => {
    (productData?.length > 0) ? setLoadings(false) : setLoadings(true)
}, [productData]);


useEffect(()=>{
    window.scrollTo(0, 0)
}, [productData])


    return (
        <>
        {
                loadings ? <FadeLoader
                    loading={true}
                    color={'#000'}
                    cssOverride={override}
                    size={150}
                /> :
            <Helmet title={" Cart "} >
                <CommonSection title={'Shopping Cart'} />
                <section>
                    <div className='cart__container'>
                        <div className="cart__row">
                            <div className="cart__col">
                                {
                                    cartitems.length === 0 ? (<h2 className='cart__table'>No item added to the cart</h2>
                                    ) : (
                                        <table className='table__border'>
                                            <thead>
                                                <tr>
                                                    <th>Image</th>
                                                    <th>Title</th>
                                                    <th>Price</th>
                                                    <th>Qty</th>
                                                    <th>Delete</th>
                                                </tr>
                                            </thead>

                                            <tbody>
                                                {
                                                    cartitems.map((item, index) => (
                                                        <Tr item={item} key={index} />
                                                    ))
                                                }
                                            </tbody>
                                        </table>
                                    )
                                }
                            </div>
                            <div className="cart__col">
                                     <div className='cart__total'>
                                        <h5>Total Price</h5>
                                        <span>$ {totalAmount}</span>
                                     </div>
                                     <p>taxes and shipping will calculate in checkout</p>
                                     <div className='cart__btn_style'>
                                     {
                                        
                                        userss  ?
                                     
                                        <button className='continue__btn'><Link to="/checkout"> Checkout</Link></button>:
                                        
                                        <button className='continue__btn'><Link to="/login"> Checkout</Link></button>}
                                        <br />
                                        <button className='continue__btn'><Link to="/shop">Continue Shopping </Link></button>
                                     </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Helmet>
        }
        </>
    )
};

const Tr =  ({item})=>{

    const dispatch = useDispatch()

    const deleteProduct = ()=>{
        dispatch(cartActions.deleteItem(item.id))
    }
    return <tr>
    <td><img src={item.imgUrl} alt="" /></td>
    <td>{item.productName}</td>
    <td>${item.price}</td>
    <td>{item.quantity}px</td>
    <td>
    <motion.i  whileTap={{scale: 1.2}} 
    onClick={deleteProduct}
    className='ri-delete-bin-line'/></td>
</tr>
}

export default Cart;