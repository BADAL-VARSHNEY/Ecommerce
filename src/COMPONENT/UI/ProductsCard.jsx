import './ProductsCard.css'
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { cartActions } from '../../Redex/Slices/CardSlice';
import { toast } from 'react-toastify';

const ProductsCard = ({ item }) => {

    const dispatch = useDispatch()

    const addToCart = () => {
        dispatch(cartActions.additem({
            id: item.id,
            productName: item.productName,
            price: item.price,
            imgUrl: item.imgUrl,
        })
        );
        toast.success("product added successfully")
    };

    return (
        <>
            <div className="product__item" key={item.id}>
            <Link to={`/detail/${item.id}`} >
                <div className="product__img">
                    <motion.img whileHover={{ scale: 0.9 }} src={item.imgUrl} alt="" />
                </div>
                <div className='product__info'>
                    <h3 className="product__name"> {item.productName}</h3>
                    <span>{item.category}</span>
                </div>
                </Link>
                <div className="product__card-btn">
                    <span className="price">${item.price}</span>
                    <motion.span whileTap={{ scale: 1.2 }} onClick={addToCart} >
                        <i className="ri-add-line"></i>
                    </motion.span>
                </div>
            
            </div>
        </>
    )
}

export default ProductsCard