import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const AddUser = () => {
  return (
    <>
      <Header />
      <div className="content gray-bg pdtb-150">
        <div className="container">
          <form className="row maxw-500">
            <div className="col-12">
              <h4 className="text-center text-primary font-weight-normal">
                Add User
              </h4>
            </div>
            <div className="col-6 col-xs-12">
              <div className="input-group mb-2">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <i className="fa fa-user" />
                  </span>
                </div>
                <input
                  type="text"
                  className="form-control"
                  placeholder="First Name"
                />
              </div>
            </div>
            <div className="col-6 col-xs-12">
              <div className="input-group mb-2">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <i className="fa fa-user" />
                  </span>
                </div>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Last Name"
                />
              </div>
            </div>
            <div className="col-6 col-xs-12">
              <div className="input-group mb-2">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <i className="fa fa-phone" />
                  </span>
                </div>
                <input
                  type="number"
                  className="form-control"
                  placeholder="Phone"
                />
              </div>
            </div>
            <div className="col-6 col-xs-12">
              <div className="input-group mb-2">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <i className="fa fa-envelope" />
                  </span>
                </div>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                />
              </div>
            </div>
            <div className="col-12 col-xs-12">
              <div className="input-group mb-2">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <i className="fa fa-fa-orgchart" />
                  </span>
                </div>
                <select
                  type="date"
                  className="form-control"
                  placeholder="Department"
                >
                  <option>A</option>
                  <option>B</option>
                  <option>C</option>
                </select>
              </div>
            </div>
            <div className="col-12 col-xs-12">
              <div className="input-group mb-2">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <i className="fa fa-key" />
                  </span>
                </div>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Employee ID"
                />
              </div>
            </div>
            <div className="col-6 col-xs-12">
              <div className="input-group mb-2">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <i className="fa fa-key" />
                  </span>
                </div>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                />
              </div>
            </div>
            <div className="col-6 col-xs-12">
              <div className="input-group mb-2">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <i className="fa fa-key" />
                  </span>
                </div>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Confirm Password"
                />
              </div>
            </div>
            <div className="col-12 text-right">
              <div className="form-group mt-3">
                <div
                  className="g-recaptcha"
                  data-sitekey="6LfA7MkUAAAAAB5lWa-0jCUJTyJ4Ssr4iW6wNik4"
                  data-callback="verifyRecaptchaCallback"
                  data-expired-callback="expiredRecaptchaCallback"
                />
                <input
                  className="form-control d-none"
                  data-recaptcha="true"
                  data-error="Please complete the Captcha"
                />
                <div className="help-block with-errors" />
              </div>
            </div>
            <div className="col-12 text-right">
              <input type="submit" className="btn btn-primary" required />
            </div>
          </form>
        </div>
      </div>
      <footer className="zindex-100 navbar navbar-transparent footer2 mb-0">
        <Footer />
      </footer>
    </>
  );
};

export default AddUser;
