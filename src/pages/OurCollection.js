import React, { useEffect, useState } from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import ProductCard from "../components/ProductCard";
import Container from "../components/Container";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../features/products/productSlice";

const OurCollection = () => {
    const [grid, setGrid] = useState(4);
    const productState= useSelector((state) => state.product.product);
    const dispatch = useDispatch();
    useEffect(() => {
        // getProducts();
        async function fetchProducts(){
            await dispatch(getAllProducts());
            console.log(dispatch)
        }
        fetchProducts();
    },[])
    // const getProducts = async () => {
    //     dispatch(getAllProducts());
    // };
    return (
        <>
            <Meta title={"Our Collection"} />
            <BreadCrumb title="Our Collection" />
            <Container class1='collection-wrapper home-wrapper-2 py-5'>
                <div className='row'>
                    <div className='col-3'>
                        <div className="filter-card mb-3">
                            <h3 className="filter-title">
                                Wine Type
                            </h3>
                            <div>
                                <ul className="ps-0">
                                    <li>Red Wine</li>
                                    <li>White Wine</li>
                                    <li>Rose Wine</li>
                                    <li>Sparkling Wine</li>
                                    <li>Dessert Wine</li>
                                </ul>
                            </div>
                        </div>
                        <div className="filter-card mb-3">
                            <h3 className="filter-title">
                                Filter By
                            </h3>
                            <div>
                                <div className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        value=""
                                        id=""
                                    />
                                    <label className="form-check-label" htmlFor="">
                                        1855 Bordeaux Classification
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        value=""
                                        id=""
                                    />
                                    <label className="form-check-label" htmlFor="">
                                        St.Emilion Grand Cru
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        value=""
                                        id=""
                                    />
                                    <label className="form-check-label" htmlFor="">
                                        Bordeaux
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        value=""
                                        id=""
                                    />
                                    <label className="form-check-label" htmlFor="">
                                        Burgundy
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        value=""
                                        id=""
                                    />
                                    <label className="form-check-label" htmlFor="">
                                        Premium Wine
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="filter-card mb-3">
                            <h3 className="filter-title">Tags</h3>
                            <div>
                                <div className="product-tags d-flex flex-wrap align-items-center gap-10">
                                    <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                                        2012
                                    </span>
                                    <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                                        2015
                                    </span>
                                    <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                                        2016
                                    </span>
                                    <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                                        2017
                                    </span>
                                    <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                                        2018
                                    </span>
                                    <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                                        2019
                                    </span>
                                    <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                                        2021
                                    </span>
                                    <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                                        Biodynamic
                                    </span>
                                    <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                                        Brut
                                    </span>
                                    <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                                        Cataclysm
                                    </span>
                                    <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                                        Chardonnav
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="filter-card mb-3">
                            <h3 className="filter-title">
                                Country
                            </h3>
                            <div>
                                <div className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        value=""
                                        id=""
                                    />
                                    <label className="form-check-label" htmlFor="">
                                        France
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        value=""
                                        id=""
                                    />
                                    <label className="form-check-label" htmlFor="">
                                        Italy
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        value=""
                                        id=""
                                    />
                                    <label className="form-check-label" htmlFor="">
                                        USA
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        value=""
                                        id=""
                                    />
                                    <label className="form-check-label" htmlFor="">
                                        Australia
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        value=""
                                        id=""
                                    />
                                    <label className="form-check-label" htmlFor="">
                                        Chile
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-9">
                        <div className="filter-sort-grid mb-4">
                            <div className="d-flex justify-content-between align-items-center">
                                <div className="d-flex align-items-center gap-10">
                                    <p className="mb-0 d-block" style={{ width: "100px" }}>
                                        Sort By:
                                    </p>
                                    <select
                                        name=""
                                        defaultValue={"manula"}
                                        className="form-control form-select"
                                        id=""
                                    >
                                        <option value="manual">Featured</option>
                                        <option value="best-selling">Best review</option>
                                        <option value="title-ascending">Alphabetically, A-Z</option>
                                        <option value="title-descending">
                                            Alphabetically, Z-A
                                        </option>
                                        <option value="created-ascending">Date, old to new</option>
                                        <option value="created-descending">Date, new to old</option>
                                    </select>
                                </div>
                                <div className="d-flex align-items-center gap-10">
                                    {/* <p className="totalproducts mb-0">1 Products</p>                                        
                                        <div className="d-flex gap-10 align-items-center grid">
                                            <img
                                                onClick={() => {
                                                    setGrid(3);
                                                }}
                                                src="images/gr4.svg"
                                                className="d-block img-fluid"
                                                alt="grid"
                                            />
                                            <img
                                                onClick={() => {
                                                    setGrid(4);
                                                }}
                                                src="images/gr3.svg"
                                                className="d-block img-fluid"
                                                alt="grid"
                                            />
                                            <img
                                                onClick={() => {
                                                    setGrid(6);
                                                }}
                                                src="images/gr2.svg"
                                                className="d-block img-fluid"
                                                alt="grid"
                                            />

                                            <img
                                                onClick={() => {
                                                    setGrid(12);
                                                }}
                                                src="images/gr.svg"
                                                className="d-block img-fluid"
                                                alt="grid"
                                            />
                                        </div>*/}
                                </div>
                            </div>
                        </div>
                        <div className="products-list pb-5">
                            <div className="d-flex gap-10 flex-wrap">
                                <ProductCard data={productState} grid={grid} />
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    );
};

export default OurCollection;
