import React, { Component } from "react";
import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";

class Landing extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
    
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }

  render() {
    return (
      <div>
      <section className="hero">
            <div className="hero-inner">
                <h1 className="hero-title">Forget Shopping Carts Forever.</h1>
                <p className="hero-desc">Pantriful is your own personal shopper. We create unique grocery lists tailored to you and deliver them to your doorstep.</p>
                <div className="button-white">
                    <Link to="/register">Sign Up</Link>
                </div>
            </div> 
        </section>
        <section className="how container">
            <h1>It’s grocery shopping made effortless.</h1>
            
            <div>
                <div className="how-1 how-row">
                    <div className="how-img-container">
                        <img className="how-img" src="images/create-image.png" alt=""/>
                    </div>
                    <div>
                        <h3><img className="how-icon" src="images/create-icon.png" alt=""/>Create</h3>
                        <h2 className="how-title">Create a customized grocery experience.</h2>
                        <p className="how-item-desc">By creating a customized experience for you we are able to create tailor made shopping
                            lists just for you. Forget making shopping lists again. We’ll take care of it for you. </p>
                    </div>
                    
                </div>

                <div className="how-2 how-row">
                    <div className="how-img-container">
                        <img className="how-img" src="images/convenience-image.png" alt=""/>
                    </div>
                    <div>
                        <h3 ><img className="how-icon" src="images/convenience-icon.png" alt=""/>Convenience</h3>
                        <h2 className="how-title">Never step into a grocery again.</h2>
                        <p className="how-item-desc">After creating a customized grocery list for you we will be able to deliver it to you
                            where ever or whenever you want. Going to the grocery will be a thing of the past.</p>
                    </div>
                    
                </div>

                <div className="how-3 how-row">
                    <div className="how-img-container">
                        <img className="how-img" src="images/improve-image.png" alt=""/>
                    </div>
                    <div>
                        <h3><img className="how-icon" src="images/improve-icon.png" alt=""/>Improve</h3>
                        <h2 className="how-title">Learn about and improve your diet.</h2>
                        <p className="how-item-desc">Truly take hold of your diet and explore how you can improve and expand what you eat.
                            Stop thinking about your food and start enjoying it again.</p>
                    </div>
                </div>
            </div>  
        </section>

        <div className="features-container">
            <div className="features container">
                <h1>Features of Pantriful</h1>
                <p className="features-desc">With Pantriful we are hoping to make a comprehensive platform that not only saves you time but makes you healthier and more in tune with the food you eat.</p>
                <div className="features-items">
                    <div className="features-row">
                        <div className="features-item">
                            <div>
                                <img src="images/diet-analysis-icon.png" alt=""/>
                            </div>
                            <div>
                                <h2>Diet Analysis</h2>
                                <p className="feature-description">Forget scanning or tracking, by using Pantriful you will be able to dig deep into your diet and see how you are eating effortlessly. </p>
                            </div>
                        </div>
                        <div className="features-item">
                            <div>
                                <img src="images/goal-tracking-icon.png" alt=""/>
                            </div>
                            <div>
                                <h2>Goal Tracking</h2>
                                <p className="feature-description">Have a goal in mind? By using your custom made food profile we will be able to craft a
                                    tailor made list that canhelp you reach any goal. </p>
                            </div>
                        </div>
                    </div>
                    <div className="features-row">
                        <div className="features-item">
                            <div>
                                <img src="images/experiment-discover-icon.png" alt=""/>
                            </div>
                            <div>
                                <h2>Experiment and Discover</h2>
                                <p className="feature-description">Want to try new things? With Pantriful we make it easy to find and try new things.
                                    Discover new recipes or foods that match what you like.</p>
                            </div>
                        </div>
                        <div className="features-item">
                            <div>
                                <img src="images/save-time-icon.png" alt=""/>
                            </div>
                            <div>
                                <h2>Save time and Money</h2>
                                <p className="feature-description">Travelling this week? Don’t worry, Pantriful lets you pause or adjust your weekly amount
                                    with just the flip of the switch. Never waste food again.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
  }
}

Landing.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(Landing);
