import React from 'react';
// import UserLayout from '../../hoc/user'
// import MyButton from '../utils/button';

const UserDashboard = ({user}) => {
  return (
    <div className="container">
      <h1 className="center" style={{"paddingTop": "50px"}}>Welcome to Pantriful</h1>
      <p style={{"width": "50%", "minWidth": "350px" ,"margin": "25px auto", "textAlign": "center"}}>Thank you for signing up. We will be launching our beta on <strong>November 5th</strong> and begin opening up profiles to test. We can't wait to show you what we have been working on! <br/><br/> -The Pantriful Team</p>
    </div>

  )
}

export default UserDashboard;
