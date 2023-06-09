import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from "../components/ProductCard";
import Container from '../components/Container';

const Home = () => {
  return (
    <>
      <Container class1='home-wrapper-1 py-5'>
        <div className='row'>
          <div className='col-6'>
            <div className='main-banner position-relative'>
              <img src='images/create.png' className='img-fluid rounded-3' alt='main banner' />
              <div className='main-banner-content position-absolute'>
                <h1>Create your <br /> New Collection</h1>
                <h5>Find the products you are interested in <br /> and add them to your inventory.</h5>
                <Link to="/create" className='button'> CREATE NOW</Link>
              </div>
            </div>
          </div>
          <div className='col-6'>
            <div className='d-flex flex-wrap gap-10 justify-content-between align-items-center'>
              <div className='small-banner position-relative'>
                <img src='images/red.png' className='img-fluid rounded-3' alt='main banner' />
                <div className='small-banner-content position-absolute'></div>
              </div>
              <div className='small-banner position-relative'>
                <img src='images/white.png' className='img-fluid rounded-3' alt='main banner' />
                <div className='small-banner-content position-absolute'></div>
              </div>
              <div className='small-banner position-relative'>
                <img src='images/rose.png' className='img-fluid rounded-3' alt='main banner' />
                <div className='small-banner-content position-absolute'></div>
              </div>
              <div className='small-banner position-relative'>
                <img src='images/sparkling.png' className='img-fluid rounded-3' alt='main banner' />
                <div className='small-banner-content position-absolute'></div>
              </div>
            </div>
          </div>
        </div>

      </Container>
      {/*  
      <section className='home-wrapper-2'>
        <div className='container-xxl'>
          <div className='row'>
          </div>
        </div>
      </section>
      <section className='home-wrapper-2 py-5'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <div className='categories d-flex justify-content-between align-items-center'>
                <div className="d-flex gap align-items-center">
                  <div>
                    <h6>Red Wine</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="images/wine1.png" alt="redwine" />
                </div>
                <div className="d-flex gap align-items-center">
                  <div>
                    <h6>White Wine</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="images/wine2.png" alt="whitewine" />
                </div>
                <div className="d-flex gap align-items-center">
                  <div>
                    <h6>Rose Wine</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="images/wine3.png" alt="rosewine" />
                </div>
                <div className="d-flex gap align-items-center">
                  <div>
                    <h6>Sparkling Wine</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="images/wine4.png" alt="sparklingwine" />
                </div>
                <div className="d-flex gap align-items-center">
                  <div>
                    <h6>Dessert Wine</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="images/wine5.png" alt="dessertwine" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>*/}
      <Container class1="redwine-col py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading text-white">Red Wine</h3>
          </div>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </Container>
      <Container class1="rosewine-col py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading text-white">Rose Wine</h3>
          </div>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </Container>
      <Container class1="sparklingwine-col py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading text-white">Sparkling Wine</h3>
          </div>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </Container>
      <Container class1="dessertwine-col py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading text-white">Dessert Wine</h3>
          </div>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </Container>
      <Container class1="popular-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading text-white">Our Popular Wine</h3>
          </div>
        </div>
        <div className="row">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </Container>
    </>
  );
};

export default Home