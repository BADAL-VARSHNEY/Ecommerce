import Cart from "../COMPONENT/Pages/CART/Cart";
import CheckOut from "../COMPONENT/Pages/CHECKOUT/CheckOut";
import Detail from "../COMPONENT/Pages/DETAIL/Detail";
import Home from "../COMPONENT/Pages/HOME/Home";
import Login from "../COMPONENT/Pages/LOGIN/Login";
import Shop from "../COMPONENT/Pages/SHOP/Shop";
import Signup from "../COMPONENT/Pages/SIGNUP/Signup";
import { Routes ,Route, Navigate } from "react-router-dom";


const Routers = () =>{
    return(
        <>
        <Routes>
        <Route path="/" element={<Navigate to='home' />} />
            <Route path="home" element={<Home/>} />
            <Route path="shop" element={<Shop/>} />
            <Route path="cart" element={<Cart/>} />
            <Route path="detail" element={<Detail/>} />
            <Route path="checkout" element={<CheckOut/>} />
            <Route path="login" element={<Login/>} />
            <Route path="signup" element={<Signup/>} />
        </Routes>
        </>
    )
}
export default Routers;