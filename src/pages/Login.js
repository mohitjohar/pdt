import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer'

const Login = (p) => {

  const handleSubmit = () =>{
    p.history.push('/dashboard');
  }

    return (
      <div className="page-header login-page header-filter" filter-color="black" style={{backgroundImage:'url(img/loginbg.jpg)',backgroundSize:'cover',backgroundPosition:'top center',alignItems:'center'}} data-color="purple">

      <div className="container" style={{height:'auto',zIndex:'9999'}}>

    <div className="row align-items-center mb-50">
      <div className="col-lg-4 col-md-6 col-sm-8 ml-auto mr-auto">

        <form className="form" onSubmit={handleSubmit}>

          <div className="card card-login mb-3">

            <div className="card-header card-header text-center">
              <a className="navbar-brand" href="/"><img src="img/pdt-logo.png"/><div className="ripple-container"></div></a>
            </div>

            <div className="card-body">

              <div className="bmd-form-group is-filled">

                <div className="input-group">

                  <div className="input-group-prepend">

                    <span className="input-group-text">

                      <i className="material-icons">email</i>

                    </span>

                  </div>

                  <input type="email" name="email" className="form-control" placeholder="Email..." required=""/>

                </div>

                            </div>

              <div className="bmd-form-group mt-3 is-filled">

                <div className="input-group">

                  <div className="input-group-prepend">

                    <span className="input-group-text">

                      <i className="material-icons">lock_outline</i>

                    </span>

                  </div>

                  <input type="password" name="password" id="password" className="form-control" placeholder="Password..." required=""/>

                </div>

                            </div>

                            <div className="form-group">

                                <div className="g-recaptcha" data-sitekey="6LfA7MkUAAAAAB5lWa-0jCUJTyJ4Ssr4iW6wNik4" data-callback="verifyRecaptchaCallback" data-expired-callback="expiredRecaptchaCallback"></div>
                                <input className="form-control d-none" data-recaptcha="true" data-error="Please complete the Captcha"/>
                                <div className="help-block with-errors"></div>
                            </div>

              <div className="form-check mr-auto ml-3 mt-3 pl-0">

                <label className="form-check-label">

                  <input className="form-check-input invisible" type="checkbox" name="remember"/> Remember me

                  <span className="form-check-sign">

                    <span className="check"></span>

                  </span>

                </label>

              </div>

            </div>

            <div className="card-footer text-center">

              <input type="submit" className="btn btn-secondary btn-link btn-lg" value="Login"/>

            </div>

          </div>

        </form>

        <div className="row">

          <div className="col-6">

                              <a href="#" className="text-light f-pass">

                      <small>Forgot password?</small>

                  </a>

                      </div>

          

        </div>

      </div>

    </div>
    <footer className="zindex-100 navbar navbar-transparent footer1 mb-0">
      <Footer/>
  </footer>
  </div>
  </div>
    );
    }

export default Login;
