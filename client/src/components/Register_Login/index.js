import React from 'react';
import MyButton from '../utils/button';
import Login from './login'

const RegisterLogin = () => {
  return (
    <div className="page_wrapper" style={{"marginTop": "25px"}}>
      <div className="container">
        <div className="columns">
          <div className="column is-6 has-text-centered center-column">
            <h1>New Customers</h1>
            <p>Enter your personal details and start your<br/> new grocery experience with us.</p>
            <MyButton
              type="default"
              title="Create an account"
              linkTo="/register"
              addStyles={{
                margin:'10px 0 0 0'
              }}
            />
          </div>
          <div className="column is-6">
            <h1>Registered Customers</h1>
            <p>If you have an account please log in.</p>
            <Login />
          </div>
        </div>
      </div>
    </div>
  )
}

export default RegisterLogin;
