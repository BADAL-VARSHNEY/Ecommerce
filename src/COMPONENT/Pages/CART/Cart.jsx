import Helmet from '../../HELMET/Helmet';
import CommonSection from '../../UI/CommonSection';
import { motion } from 'framer-motion';
import { cartActions } from '../../../Redex/Slices/CardSlice'
import { useSelector, useDispatch } from 'react-redux';
import './Cart.css';
import { Link } from 'react-router-dom';


const Cart = () => {

    const cartitems = useSelector((state) => state.cart.cartitems)
    const totalAmount = useSelector((state) => state.cart.totalAmount)
    return (
        <>
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
                                        <button className='continue__btn'><Link to="/checkout"> Checkout</Link></button>
                                        <br />
                                        <button className='continue__btn'><Link to="/shop">Continue Shopping </Link></button>
                                     </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Helmet>
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