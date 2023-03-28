import Helmet from '../../HELMET/Helmet';
import './Shop.css';

import CommonSection from '../../UI/CommonSection';
import products from '../../../Assets/Data/Product';
import ProductsList from '../../UI/ProductsList';
import { useState, useEffect } from 'react';
import FadeLoader from "react-spinners/FadeLoader";
import productData from '../../../Assets/Data/Product'

const override = {
    display: "block",
    margin: "300px auto",
};

const Shop = () => {
    const [productsData, setProductesData] = useState(products)
    let [loading, setLoading] = useState(true);

    const handleFilter = (e) => {
        const filterValue = e.target.value;
        if (filterValue === "sofa") {
            const filterrdProducts = products.filter(
                (item) => item.category === "sofa"
            );
            setProductesData(filterrdProducts)
        }

        if (filterValue === "Curtain") {
            const filterrdProducts = products.filter(
                (item) => item.category === "Curtain"
            );
            setProductesData(filterrdProducts)
        }

        if (filterValue === "chair") {
            const filterrdProducts = products.filter(
                (item) => item.category === "chair"
            );
            setProductesData(filterrdProducts)
        }

        if (filterValue === "fan") {
            const filterrdProducts = products.filter(
                (item) => item.category === "fan"
            );
            setProductesData(filterrdProducts)
        }

        if (filterValue === "LightLamp") {
            const filterrdProducts = products.filter(
                (item) => item.category === "LightLamp"
            );
            setProductesData(filterrdProducts)
        }

        if (filterValue === "table") {
            const filterrdProducts = products.filter(
                (item) => item.category === "table"
            );
            setProductesData(filterrdProducts)
        }

        if (filterValue === "bed") {
            const filterrdProducts = products.filter(
                (item) => item.category === "bed"
            );
            setProductesData(filterrdProducts)
        }
    }


    const handleSearch = (e) => {
        const searchbar = e.target.value;
        const searchProducts = products.filter(item => item.productName.toLocaleLowerCase().includes(searchbar.toLowerCase()));

        setProductesData(searchProducts)
    }

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
                    <Helmet title={" Shop "} >
                        <CommonSection title="products" />

                        <section>
                            <div className='shop__container'>
                                <div className="shop__row">
                                    <div className="shop__col">
                                        <div className="filter__widget">
                                            <select onChange={handleFilter}>
                                                <option>Filter By Category</option>
                                                <option value="sofa"> Sofa</option>
                                                <option value="Curtain">Curtain</option>
                                                <option value="chair">Chair</option>
                                                <option value="fan">Fan</option>
                                                <option value="LightLamp">LightLamp</option>
                                                <option value="table">Table</option>
                                                <option value="bed">Bed</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="shop__col">
                                        <div className="filter__widget">
                                            <select>
                                                <option>Sort By</option>
                                                <option value="ascending"> Ascending</option>
                                                <option value="descending">Descending</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="shop__col">
                                        <div className='search__box'>
                                            <input type="text" placeholder='Search.....' onChange={handleSearch} />
                                            <span><i className='ri-search-line'></i></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section className='sec__data'>
                            <div className="data__container">
                                <div className="data__row">
                                    {
                                        productsData.length === 0 ? (
                                            <h1 className='heading__change'>No products are found!</h1>
                                        ) : (
                                            <ProductsList data={productsData} />
                                        )
                                    }
                                </div>
                            </div>
                        </section>

                    </Helmet>
            }
        </>
    )
}
export default Shop;