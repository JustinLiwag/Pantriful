import React, { Component } from "react";
import { Link } from "react-router-dom";

class Landing extends Component {
  render() {
    return (
      <div>
        <section className="hero">
          <div className="hero-inner container">
            <h1 className="hero-title">Forget Shopping Carts Forever.</h1>
            <p className="hero-desc">
              Pantriful is your own personal shopper. We create unique grocery
              lists tailored to you and deliver them to your doorstep. It’s
              grocery shopping made effortless.
            </p>
            <p className="button hero-btn">
              <Link to="register">Sign up today!</Link>
            </p>
          </div>
        </section>

        <section className="how container">
          <h1>
            How does <span className="pantriful-orange">Pantriful</span> work?
          </h1>
          <p className="how-desc">
            By creating a truly customized service for you we are able to create
            unique shopping lists for you and deliver it to your doorstep
            effortlessly.
          </p>

          <div className="how-1 how-row">
            <div>
              <h2 className="how-title">
                <span className="number">1</span> Create your food profile
              </h2>
              <p className="how-item-desc">
                We first help you create your own unique food profile. This
                helps us find out what you like and don’t like.
              </p>
            </div>
            <div className="how-img-container">
              <img className="how-img" src="images/how-1.png" alt="" />
            </div>
          </div>

          <div className="how-2 how-row">
            <div>
              <h2 className="how-title">
                <span className="number">2</span> Set your delivery details
              </h2>
              <p className="how-item-desc">
                After setting your food profile you will set where you want us
                to deliver your groceries, when you want it delivered and how
                much you want to spend each week.
              </p>
            </div>
            <div className="how-img-container">
              <img className="how-img" src="images/how-2.png" alt="" />
            </div>
          </div>

          <div className="how-3 how-row">
            <div>
              <h2 className="how-title">
                <span className="number">3</span> We delivery your groceries
              </h2>
              <p className="how-item-desc">
                On the day that you set we will get your groceries and deliver
                them to you. All you have to do is be there when we deliver!
              </p>
            </div>
            <div className="how-img-container">
              <img className="how-img" src="images/how-3.png" alt="" />
            </div>
          </div>

          <div className="how-4 how-row">
            <div>
              <h2 className="how-title">
                <span className="number">4</span> Build up your profile
              </h2>
              <p className="how-item-desc">
                Your food profile will be a visual representation of your diet
                that will allow you to undestand and make changes with the flip
                of a switch.{" "}
              </p>
            </div>
            <div className="how-img-container">
              <img className="how-img" src="images/how-4.png" alt="" />
            </div>
          </div>
        </section>

        <div className="features-container">
          <section className="features container">
            <h1>
              Features of <span className="pantriful-orange">Pantriful</span>
            </h1>
            <p className="features-desc">
              With Pantriful we are hoping to make a comprehensive platform that
              not only saves you time but makes you healthier and more in tune
              with the food you eat.
            </p>
            <ul className="cards">
              <li className="cards__item">
                <div className="card">
                  <div className="card__image card__image--goal" />
                  <div className="card__content">
                    <div className="card__title">Goal Tracking</div>
                    <p className="card__text">
                      Have a goal in mind? By using your custom made food
                      profile we will be able to craft a tailor made list that
                      can help you reach any goal.{" "}
                    </p>
                  </div>
                </div>
              </li>
              <li className="cards__item">
                <div className="card">
                  <div className="card__image card__image--diet" />
                  <div className="card__content">
                    <div className="card__title">Diet Analysis</div>
                    <p className="card__text">
                      By leveraging your food profile we can give you an
                      in-depth look into how you are eating and where you can
                      improve.
                    </p>
                  </div>
                </div>
              </li>
              <li className="cards__item">
                <div className="card">
                  <div className="card__image card__image--cooking" />
                  <div className="card__content">
                    <div className="card__title">Improve your cooking</div>
                    <p className="card__text">
                      Do you want to level up your cooking? We can help you by
                      suggesting new recipes to try and add in new ingredients
                      each week.
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </section>
        </div>
        <section className="about container">
          <div className="about-inner container">
            <div className="about-image">
              <img src="images/about-image.png" alt="" />
            </div>
            <div className="about-text">
              <h2>
                I hated grocery shopping so much that I created a{" "}
                <span className="pantriful-orange underline">company</span>.
              </h2>
              <p>
                I started <span className="pantriful-orange">Pantriful</span>{" "}
                because I wanted to find any reason not to go to the grocery.
              </p>
              <p>
                Grocery shopping is a pain and is always the last thing on my
                mind whenever I came home from work. I wanted to find something
                that would get me the groceries I wanted without all the effort.{" "}
              </p>
              <p>
                Thus, <span className="pantriful-orange">Pantriful</span> was
                born. We want to forget shopping carts forever.
              </p>
              <p id="founder">
                Justin Liwag
                <br />
                Founder of <span className="pantriful-orange">Pantriful</span>
              </p>
              <p />
            </div>
          </div>
          <Link className="button about-button" to="register">
            Sign up today!
          </Link>
        </section>

        <section className="info container">
          <div>
            <Link className="info-img" to="/">
              <img src="images/pantriful-logo.png" alt="" />
            </Link>
          </div>
          <div className="info-menu">
            <h3>Menu</h3>
            <p>
              <Link to="/">Home</Link>
            </p>
            <p>
              <Link to="/register">Sign Up</Link>
            </p>
            <p>
              <Link to="/login">Login</Link>
            </p>
          </div>
          <div className="info-contact">
            <h3>Contact Us</h3>
            <p>hello@pantriful.com</p>
            <p>Pasadena, California</p>
          </div>
        </section>
      </div>
    );
  }
}

export default Landing;
