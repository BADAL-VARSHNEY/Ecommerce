import './Detail.css';
import { useParams } from 'react-router-dom';
import products from '../../../Assets/Data/Product';
import Helmet from '../../HELMET/Helmet';
import CommonSection from '../../UI/CommonSection';


const Detail = () => {
    const { id } = useParams()
    const product = products.find(item => item.id === id)
    const { imgUrl, productName, price, avgRating, review, description } = product;

    console.log(imgUrl, 12);
    return (
        <>
            <Helmet title={'Detail'}>
                <CommonSection title="products Detail" />

                <section>
                    <div className="detail__container">
                        <div className="detail row">
                            <div className="detail__col">
                                <img src={imgUrl} alt="" />
                            </div>
                            <div className="detail__col">
                                <h1>hello</h1>
                            </div>
                        </div>
                    </div>
                </section>
            </Helmet>
        </>
    )
}
export default Detail;