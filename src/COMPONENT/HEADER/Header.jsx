import './Header.css'
import logo from '../../Assets/images/eco-logo.png';
import user from '../../Assets/images/user-icon.png';
import { NavLink, useNavigate } from 'react-router-dom';
import { motion } from "framer-motion"
import { useRef, useEffect } from 'react';
import { useSelector } from 'react-redux';

const navLink = [
    {
        path: "home",
        display: "Home",
    }, {
        path: "shop",
        display: "Shop",
    }, {
        path: "cart",
        display: "Cart",
    }
]

const Header = () => {

const headerRef = useRef(null);
const menuRef = useRef(null);
const navigate = useNavigate()

const totalQuantity = useSelector(state=> state.cart.totalQuantity)

const stickyheader = ()=>{
    window.addEventListener('scroll', ()=>{
        if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80){
            headerRef.current.classList.add('sticky__header')
        }else{
            headerRef.current.classList.remove('sticky__header')
        }
    })
}

useEffect(()=>{
  stickyheader()

  return ()=> window.removeEventListener('scroll', stickyheader)
}, [])

const menuToggle = ()=> menuRef.current.classList.toggle('active__menu')


const navigateToCart = ()=>{
  navigate("/cart")
}

    return (
        <div className='header-container' ref={headerRef}>   
            <div className='header-row'>
                <div className='nav-wrapper'>
                    <div className='logo'>
                        <img src={logo} alt="" />
                        <div>
                            <h1>Cloudmart</h1>
                        </div>
                    </div>
                    <div className='navigation'  ref={menuRef}  onClick={menuToggle} >
                        <ul>
                            {navLink.map((item, index) => {
                                return <li key={index}>
                                    <NavLink to={item.path} className={(navclass) => navclass.isActive ? 'nav__active' : ' '} >{item.display}</NavLink>
                                </li>
                            })}

                        </ul>
                    </div>

                    <div className="nav__icon">
                        <span className='fav__icon'>
                            <i class="ri-heart-line"></i>
                            <span className='badge'>2</span>
                        </span>
                        <span className='cart__icon' onClick={navigateToCart} >
                        <i class="ri-shopping-bag-line"></i>
                            <span className='badge'>{totalQuantity}</span>
                        </span>
                        <span>
                            <motion.img whileTap={{ scale: 1.2 }} src={user} alt="" />
                        </span>
                    <div className='mobile_menu'>
                        <span onClick={menuToggle} ><i class="ri-menu-line"></i></span>
                    </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Header