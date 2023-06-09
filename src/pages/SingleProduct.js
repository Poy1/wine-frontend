import React, { useState } from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import ProductCard from "../components/ProductCard";
import ReactStars from "react-rating-stars-component";
import Container from "../components/Container";

const SingleProduct = () => {
  const props = { width: 200, height: 500, zoomWidth: 600, img: "/images/francois-gaunoux.png" };

  const [orderedProduct, setorderedProduct] = useState(true);
  return (
    <>
      <Meta title={"Product Name"} />
      <BreadCrumb title={"Product Name"} />
      <Container class1="main-product-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-6">
            <div className="main-product-image">
              <img src="/images/francois-gaunoux.png"></img>

            </div>
          </div>
          <div className="col-6">
            <div className="main-product-details">
              <div className="border-bottom">
                <h3 className="title">
                  Casa Patronales ‘Chucaro’ Cabernet Sauvignon
                </h3>
              </div>
              <div className="border-bottom py-3">
                <p className="price">Burgundy</p>
                <div className="d-flex align-items-center gap-10">
                  <ReactStars
                    count={5}
                    size={24}
                    value={4}
                    edit={false}
                    activeColor="#ffd700"
                  />
                  <p className="mb-0 t-review">( 2 Reviews )</p>
                </div>
                <a className="review-btn" href="#review">
                  Write a Review
                </a>
              </div>
              <div className=" py-3">
                <div className="d-flex gap-10 align-items-center my-2">
                  <h3 className="product-heading">Country :</h3>
                  <p className="product-data">Chile</p>
                </div>
                <div className="d-flex gap-10 align-items-center my-2">
                  <h3 className="product-heading">Brand :</h3>
                  <p className="product-data">Maule Valley</p>
                </div>
                <div className="d-flex gap-10 align-items-center my-2">
                  <h3 className="product-heading">Category :</h3>
                  <p className="product-data">Red wine</p>
                </div>
                <div className="d-flex gap-10 align-items-center my-2">
                  <h3 className="product-heading">Tags :</h3>
                  <p className="product-data">2019</p>
                </div>
                <div className="d-flex gap-10 align-items-center my-2">
                  <h3 className="product-heading">Alcohol % :</h3>
                  <p className="product-data">13.5</p>
                </div>
                <div className="d-flex gap-10 flex-column mt-2 mb-3">
                  <h3 className="product-heading">Bottle Size :</h3>
                  <div className="d-flex flex-wrap gap-15">
                    <p className="product-data">750 ml</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15">
                  <div>
                    <a href="">
                      <img src="/images/heart.png" className="fs-5 me-2" /> Add to Wishlist
                    </a>
                  </div>
                </div>

                <div className="d-flex gap-10 align-items-center my-3">
                  <h3 className="product-heading">Product Link:</h3>
                  <a
                    href="javascript:void(0);"
                    onClick={() => {
                      copyToClipboard(
                        "https://www.montinore.com/all-wines/2012-cataclysm-pinot-noir"
                      );
                    }}
                  >
                    Casa Patronales ‘Chucaro’ Cabernet Sauvignon
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <div className="description-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h4>Description</h4>
              <div className="bg-white p-3">
                <p>
                  Casa Patronales ‘Chucaro’ ไวน์ที่มีสีเข้มเต็มไปด้วยผลไม้สดซึ่งทำให้มีความหวาน เป็นไวน์ที่มีน้ำหนักเบาดื่มสนุก เหมาะกับงานสังสรรค์หรือสนทนาพาเพลิน

                  Chúcaro represents wines with great intensity of colour and fresh fruit-filled youth, which leave Sweetness of, fresh memories on the palate. These are light, daringly soft wines, suitable for a wide range of occasions; enjoy them with food or during a conversation <br></br>
                  The powerful fruit structure of the 2012 vintage makes this the most muscular version of Cataclysm we've produced. The block we source for Cataclysm has some of the younger Pinot Noir vines at our estate (planted in 1999) and this vintage hints that the roots have wended and wound their way down through the upper layers of fine löess soil from the Missoula Floods (the "cataclysm" in question) and into the heavier volcanic soils below. Warm, dry weather that lasted late into the growing season contributes to a concentrated character and richness on the palate.
                  Wafts of black cherry, iron and a hint of pie spice, introduce raspberry, ripe cherry and mocha on the palate.
                  <br></br>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Container class1="reviews-wrapper home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h4>Reviews</h4>
            <div className="review-inner-wrapper">
              <div className="review-head d-flex justify-content-between align-items-end">
                <div>
                  <h4 className="mb-2">Customer Reviews</h4>
                  <div className="d-flex align-items-center gap-10">
                    <ReactStars
                      count={5}
                      size={24}
                      value='3'
                      edit={false}
                      activeColor="#ffd700"
                    />
                    <p className="mb-0">Based on 2 Reviews</p>
                  </div>
                </div>
                {orderedProduct && (
                  <div>
                    <a className="text-dark text-decoration-underline" href="">
                      Write a Review
                    </a>
                  </div>
                )}
              </div>
              <div className="review-form py-4">
                <h4>Write a Review</h4>
                <form action="" className="d-flex flex-column gap-15">
                  <div>
                    <textarea
                      name=""
                      id=""
                      className="w-100 form-control"
                      cols="30"
                      rows="4"
                      placeholder="Comments"
                    ></textarea>
                  </div>
                  <div className="d-flex justify-content-end">
                    <button className="button border-0">Submit Review</button>
                  </div>
                </form>
              </div>
              <div className="reviews mt-4">
                <div className="review">
                  <div className="d-flex gap-10 align-items-center">
                    <h6 className="mb-0">Kanokwan</h6>
                    <ReactStars
                      count={5}
                      size={24}
                      value='3'
                      edit={true}
                      activeColor="#ffd700"
                    />
                  </div>
                  <p className="mt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container >
      <Container class1="popular-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Our Popular Products</h3>
          </div>
        </div>
        <div className="row">
          <ProductCard />
        </div>
      </Container>
    </>
  );
};

export default SingleProduct;