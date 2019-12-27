import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const AddUser = () => {
  return (
    <>
      <Header />
      <div className="content gray-bg">
        <div className="container">
          <div className="row">
            <div className="col-md-9">
              <h1>Title</h1>
              <img src="post-img" src="../img/pdt-logo.png" alt="img" />
            </div>
          </div>
        </div>
      </div>
      <footer className="zindex-100 navbar navbar-transparent footer2 mb-0">
        <Footer />
      </footer>
    </>
  );
};
export default AddUser;
