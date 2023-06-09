import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { BsSearch } from 'react-icons/bs';

const Header = () => {
  return (
    <>
      <header className='header-top-strip py-3'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-6'>
              <p className='text-white mb-0'>
                A Unique Wine Collection For You
              </p>
            </div>
          </div>
        </div>
      </header>
      <header className='header-upper py-3'>
        <div className='container-xxl'>
          <div className='row align-items-center'>
            <div className='col-2'>
              <h2>
                <Link className='text-white'>Wine.</Link>
              </h2>
            </div>
            <div className='col-5'>
              <div className="input-group">
                <input type="text" className="form-control py-2" placeholder="Find your interest..." aria-label="Find your interest..." aria-describedby="basic-addon2" />
                <span className="input-group-text p-3" id="basic-addon2"><BsSearch className='fs-6' /></span>
              </div>
            </div>
            <div className='col-5'>
              <div className='header-upper-links d-flex align-items-center justify-content-between'>
                <div>
                  <Link to='/wishlist' className='d-flex align-items-center gap-10 text-white'>
                    <img src="/images/wishlist.png" alt="wishlist" />
                    <p className='mb-0'>
                      Favourite <br /> Products
                    </p>
                  </Link>
                </div>
                <div>
                  <Link to='/login' className='d-flex align-items-center gap-10 text-white'>
                    <img src="/images/user.png" alt="user" />
                    <p className='mb-0'>
                      Login <br /> My Account
                    </p>
                  </Link>
                </div>
                <div>
                  <Link to='/mycol' className='d-flex align-items-center gap-10 text-white'>
                    <img src="/images/collect.png" alt="collect" />
                    <p className='mb-0'>
                      My <br /> Collection
                    </p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <header className='header-bottom py-3'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <div className='menu-bottom d-flex align-items-center gap-30'>
                <div>
                  <div className="dropdown">
                    <button className="btn btn-secondary dropdown-toggle bg-transparent border-0 gap-15 d-flex align-items-center" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                      <img src="/images/menu.png" alt='' /> 
                      <span className='me-5 d-inline-block'>Wine Categories</span>                      
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                      <li>
                        <Link className="dropdown-item text-white" to="">
                          Red Wine
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item text-white" to="">
                          White Wine
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item text-white" to="">
                          Rose Wine
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item text-white" to="">
                          Sparkling Wine
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item text-white" to="">
                          Dessert Wine
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className='menu-links'>
                  <div className='d-flex align-items-center gap-30'>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/product">Our Collection</NavLink>
                    <NavLink to="/contact">Contact</NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header