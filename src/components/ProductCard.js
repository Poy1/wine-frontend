import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from "react-router-dom";

const ProductCard = (props) => {
  const { grid, data } = props;
  console.log(data);
  let location = useLocation();

  return (
    <>
      <div className={` ${location.pathname == "/store" ? `gr-${grid}` : "col-3"
        }`}>
        <Link to=":id" className="product-card position-relative">
          <div className="wishlist-icon position-absolute">

            <Link><img src="/images/wish.svg" alt="wishlist" /></Link>
          </div>
          <div className="product-image">
            <img src="/images/francois-gaunoux.png" alt="product-image" />
          </div>
          <div className="product-datails">
            <h6 className="brand">Burgundy</h6>
            <h5 className="product-title">
              Domaine Francois Gaunoux Pommard 1er Cru Les Epenots 2015
            </h5>
            <ReactStars count={5} size={24} value='3' edit={false} activeColor="#ffd700" />
          </div>
          <div className="action-bar position-absolute">
            <div className="d-flex flex-column gap-15">
              <button className="border-0 bg-transparent">
                <img src="/images/view.svg" alt="view" />
              </button>
              <button className="border-0 bg-transparent">
                <img src="/images/add-cart.svg" alt="addcart" />
              </button>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default ProductCard;
