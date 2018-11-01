import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
	render() {
		return (
			<div className="main-container">
				<section className="hero">
					<img className="tablet-image" src="images/tablet-hero.png" alt="" />
					<img className="mobile-image" src="images/phone-hero.png" alt="" />
					<div className="container columns">
						<div className="left-hero column">
							<h1 className="has-text-centered-mobile">Forget Shopping Carts Forever.</h1>
							<p className="has-text-centered-mobile">
								Pantriful takes the effort out of shopping for your food by using machine learning to predict and deliver your groceries without you having to think about it.
							</p>
							<Link className="has-text-centered-mobile signup-link" to="/register">
								<div>
									<p id="signup-text">Sign up to be part of our first batch!</p>
									<img src="images/right-arrow.png" alt="" />
								</div>
							</Link>
							<img className="down-arrow" src="images/down-arrow.png" alt="" />
						</div>
						<div className="right-hero column ">
							<img className="right-image" src="images/shopping-cart.png" alt="" />
						</div>
					</div>
				</section>

				{/* <!-- The Problem --> */}

				<section className="problem">
					<div className="container">
						<div className="columns problem-content">
							<div className="column">
								<h4>THE PROBLEM</h4>
								<h1>Grocery Shopping Sucks</h1>
								<p>
									Up until now it was something you had to invest time and energy into. With Pantriful we use machine learning to help us predict, buy, and deliver the food that
									you want every week without you having to think about it. <br />
									<br /> We want Pantriful to help you get the food you need so you can focus on the food that you want. Stop thinking about your food and start enjoying it.
								</p>
							</div>
							<div className="column center">
								<img className="shopping-cart" src="images/pantriful-shopping-cart.png" alt="" />
							</div>
						</div>
					</div>
				</section>

				{/* <!-- The Solution --> */}

				<section className="solution">
					<div className="container">
						<div className="columns solution-content">
							<div className="column center">
								<img src="images/pantriful-computer.png" alt="" />
							</div>
							<div className="column solution-content-2">
								<h4>THE SOLUTION</h4>
								<h1>How Pantriful Works</h1>
								<p>
									Pantriful works by gradually building a custom food profile for you. This food profile will help us determine what you like, dislike and love. As you give us
									feedback and help us build your food profile we will be able to predict, buy and deliver your groceries without you ever having to think about it again.
								</p>
							</div>
						</div>
					</div>
				</section>

				{/* <!-- The Features --> */}

				<section className="features">
					<div className="container">
						<h4>THE FEATURES</h4>
						<h1>
							Save time and improve the way you eat. <br />
							We only need 5 minutes.
						</h1>
						<p className="features-p">
							With Pantriful we not only aim to save you time but to also help you improve the way you eat. By crafting a unique food profile for you we will be able to help you
							refine the way you eat on your terms. <br />
							<br /> Here are some of the things we are working on.
						</p>
						<div className="columns mobile-margin features-content">
							<div className="column is-2 center">
								<img src="images/diet-analysis.png" alt="" />
							</div>
							<div className="column has-text-centered-mobile feature-desc">
								<h5>Diet Analysis</h5>
								<p>By leveraging your food profile we can give you an in-depth look into how you are eating and where you can improve.</p>
							</div>
							<div className="column is-2 center">
								<img src="images/set-a-goal.png" alt="" />
							</div>
							<div className="column has-text-centered-mobile">
								<h5>Set a goal</h5>
								<p>Have a goal in mind? By using your custom made food profile we will be able to craft a tailor made list that can help you reach any goal.</p>
							</div>
						</div>
						<div className="columns features-bottom-column">
							<div className="column is-2 center">
								<img src="images/recommendations.png" alt="" />
							</div>
							<div className="column has-text-centered-mobile">
								<h5>Recommendations</h5>
								<p>Are you bored of the food you eat? We can help you spice it up by recommending new things to try.</p>
							</div>
							<div className="column is-2 center">
								<img src="images/cooking-challenges.png" alt="" />
							</div>
							<div className="column has-text-centered-mobile">
								<h5>Cooking Challenges</h5>
								<p>Do you want to level up your cooking? We can help you by suggesting new recipes to try and add in new ingredients each week.</p>
							</div>
						</div>
					</div>
				</section>

				{/* <!-- Mission & Vision --> */}

				<section className="mission">
					<div className="container">
						<h4>MISSION & VISION</h4>
						<h1>Why We Do It</h1>
						<p className="mission-p">
							Pantriful was started to help us solve our own problem but quickly grew into a passion for helping others not only save time but also improve the way they eat. We
							want to build something that not only helps you but also is a resource for your daily life.{' '}
						</p>
						<h4>Core Values</h4>
						<div className="columns has-text-centered-mobile">
							<div className="column">
								<h6>Build Something Useful</h6>
								<p>We want Pantriful to be useful. Our priorities will always point towards building something that you find useful and amazing.</p>
							</div>
							<div className="column">
								<h6>Open communication</h6>
								<p>Open communication is something we deeply care about. If you have something to say or want to give feedback we are excited to hear from you!</p>
							</div>
						</div>
						<div className="columns has-text-centered-mobile">
							<div className="column">
								<h6>Passion</h6>
								<p>Pantriful is our passion. We care about building the best product for not only ourselves but for you as well.</p>
							</div>
							<div className="column">
								<h6>Have fun</h6>
								<p>Life is too short to be boring. We are an adventurous team looking to build cool things and have a lot of fun doing so.</p>
							</div>
						</div>
					</div>
				</section>

				{/* <!-- Contact --> */}

				<section className="contact">
					<div className="container">
						<div className="columns has-text-centered-mobile contact-content">
							<div className="column">
								<h3>Forget going to the grocery today</h3>
								<p className="contact-p">
									We are excited to share Pantriful with the world. We are looking for people to join our next batch of users to give us feedback and try out what we have built.{' '}
									<br />
									<br />
									Sign up today to join our next batch of users!
								</p>
								<div className="columns contact-info">
									<div className="column">
										<p>Call</p>
										<p>626-392-0633</p>
									</div>
									<div className="column">
										<p>Email</p>
										<p>hello@pantriful.com</p>
									</div>
								</div>
							</div>
							{/* <div className="column">
               <form action="#" method="post" name="sign up for beta form">
                   <input className="email-input" type="text" placeholder="Email"/>
                   <textarea name="" id="" placeholder="Tell us about yourself"></textarea>
                   <button>Find out More!</button>
               </form>
           </div> */}
						</div>
					</div>
				</section>
			</div>
		);
	}
}

export default Home;
