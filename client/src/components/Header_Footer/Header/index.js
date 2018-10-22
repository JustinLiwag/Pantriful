import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

import { connect } from 'react-redux'
import { logoutUser } from '../../../actions/user_actions'

class Header extends Component {
  state = {
    page: [
      {
        name: 'Home',
        linkTo:'/',
        public: true
      },
      {
        name: 'Guitars',
        linkTo:'/shop',
        public: true
      }
    ],
    user: [
      // {
      //   name: 'My Cart',
      //   linkTo:'/user/cart',
      //   public: false
      // },
      {
        name: 'My Account',
        linkTo:'/user/dashboard',
        public: false,
        loggedIn: false
      },
      {
        name: 'Sign up',
        linkTo:'/register',
        public: true,
        loggedIn: true
      },
      {
        name: 'Log in',
        linkTo:'/login',
        public: true
      },
      {
        name: 'Log out',
        linkTo:'/user/logout',
        public: false,
        loggedIn: false
      }
    ]
  }

  logoutHandler = () => {
    this.props.dispatch(logoutUser()).then(response => {
      console.log(response);
      if(response.payload.success) {
        this.props.history.push('/')
      }
    })
  }

  // cartLink = (item, i) => {
  //   const user = this.props.user.userData;
  //
  //   return (
  //       <div className="cart_link" key={i}>
  //         <span>{user.cart ? user.cart.length : 0}</span>
  //         <Link to={item.linkTo}>
  //           {item.name}
  //         </Link>
  //       </div>
  //   )
  // }

  defaultLink = (item, i) => (
    item.name === 'Log out' ?
      <div
        className="navbar-item"
        key={i}
        onClick={() => this.logoutHandler()}
      >
        {item.name}
      </div>
      :
      <Link className="navbar-item" to={item.linkTo} key={i} style={{"paddingLeft": "25px"}}>
        {item.name}
      </Link>
  )

  showLinks = (type) => {
    let list = [];

    if(this.props.user.userData) {
      type.forEach((item) => {
        if(!this.props.user.userData.isAuth) {
          if(item.public === true) {
            list.push(item)
          }
        } else {
          if(item.name !== 'Log in' && item.name !== "Sign up") {
            list.push(item)
          }

        }
      });
    }

    return list.map((item, i) => {
      if(item.name !== 'Sign up') {
        return this.defaultLink(item, i)
      }
      return this.defaultLink(item, i)
    })
  }

  render() {

    return (
      <nav className="container navbar is-transparent">
          <div className="navbar-brand">
              <Link className="logo navbar-item" to="/">
                <img src={require('./Pantriful-logo-1.svg')} alt="" width="112" height="28"/>
              </Link>
              <div className="navbar-burger burger" data-target="navbarExampleTransparentExample">
                  <span></span>
                  <span></span>
                  <span></span>
              </div>
          </div>

          <div id="navbarExampleTransparentExample" className="navbar-menu">
              <div className="navbar-end center">
                  {/* <a class="navbar-item" href="register.html">Sign Up</a>
                  <a class="navbar-item" href="#">Login</a> */}
                  {this.showLinks(this.state.user)}
              </div>
          </div>
      </nav>
    );
  }
}



function mapStateToProps(state) {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(withRouter(Header));
