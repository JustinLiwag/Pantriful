import React from 'react';
import { Link } from 'react-router-dom';

const links = [
  {
    name: 'My account',
    linkTo: '/user/dashboard'
  },
  {
    name: 'User information',
    linkTo: '/user/user_profile'
  },
  {
    name: 'My cart',
    linkTo: '/user/cart'
  },
  {
    name: 'My Profile',
    linkTo: '/user/cart'
  }
]

const UserLayout = (props) => {
  const generateLinks = (links) => (
    links.map((item, i) => (
      <Link to={item.linkTo} key={i}>
        {item.name}
      </Link>
    ))
  )

  return (
    <div className="container">
      <div className="columns">
        <div className="column">
          <h2>My account</h2>
          <div className="links">
            {generateLinks(links)}
          </div>
        </div>
        <div className="column">
          {props.children}
        </div>
      </div>
    </div>
  )
};

export default UserLayout;
