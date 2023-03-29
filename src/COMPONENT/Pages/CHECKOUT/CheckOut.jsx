import './CheckOut.css';
import Helmet from '../../HELMET/Helmet'
import CommonSection from '../../UI/CommonSection'
import { useSelector } from 'react-redux';

const CheckOut =()=>{

    const  totalQty = useSelector(state => state.cart.totalQuantity)
    const  totalAmount = useSelector(state => state.cart.totalAmount)

    return(
        <>
            <Helmet title="Checkout" >
                 <CommonSection title="Checkout" />
                 <section>
                    <div className="check__container">
                        <div className="check__row">
                            <div className="check__col">
                                <h4>Billing Infomation</h4>
                                <form action="" className='check__form'>
                                    <input type="text" placeholder="Enter your name" /> <br />
                                    <input type="email" placeholder="Enter your email" /> <br />
                                    <input type="number" placeholder="Phone number" /> <br />
                                    <input type="text" placeholder="street address" /> <br />
                                    <input type="text" placeholder="City" /> <br />
                                    <input type="text" placeholder="Postal code" /> <br />
                                    <input type="text" placeholder="Country" />
                                </form>
                            </div>
                            <div className="check__col">
                                <div className='checkout__cart'>
                                    <h5>Total Qty: <span>{totalQty}</span> </h5>
                                    <h5>Subtotal: <span>$ {totalAmount}</span></h5>
                                    <h5>Shipping: <span>$ 0</span> </h5>
                                    <h5>Free shipping</h5>
                                    <h3>Total Cost: <span>$ {totalAmount} </span></h3>
                                <button className='checkout__btn'>Place an order</button>
                                </div>
                            </div>
                        </div>
                    </div>
                 </section>
            </Helmet>
        </>
    )
}
export default CheckOut;