import React, { Component } from "react";
import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";
import Navbar from "./Navbar"
import Footer from "./Footer"

class Landing extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
    
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }

  render() {
    return (
      <div className="border-t-4 border-orange-base font-sans w-12/12">
        <Navbar />
        <main>
            <div className="hero">
                <div className="container flex mx-auto">
                    <div className="lg:w-1/3 hidden lg:block"></div>
                    <div className="lg:w-2/3 pt-12 sm:pt-20 mx-auto">
                        <div className="w-3/4 mx-auto text-center">

                            <div className="text-sm py-2 px-3 bg-indigo-800 items-center text-indigo-100 leading-none rounded-full flex inline-flex" role="alert">
                                <span className="flex rounded-full bg-teal-500 uppercase py-2 px-3 text-xs font-extrabold mr-3">New</span>
                                <span className="font-semibold mr-2 text-left flex-auto">Delivery now available to Los Angeles Area!</span>
                            </div>

                            <h2 className="pt-4 pb-3 font-black text-3xl sm:text-4xl text-orange-base leading-tight mx-auto xl:text-5xl">Your own smart <span className="border-b-8 border-blue-300 border-opacity-50">personal</span> grocery shopper.</h2>
                            <p className="text-gray-600 max-w-md mx-auto text-xl leading-loose pb-6 xl:text-2xl">We create unique grocery lists tailored to you and deliver them to your doorstep for <span className="text-orange-base">$<span className="font-bold text-lg">8</span> a week</span>.</p>

                            <div className="mx-auto">
                                <Link to="/register" className="block mx-auto max-w-xs text-center font-bold text-white text-weight-bold bg-green-400 hover:bg-green-500 py-3 px-12 rounded-lg shadow-md xl:text-xl">Get Started Today!</Link>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <section className="container">

                <div className="text-center mt-12 sm:mt-0">
                    <p className="text-xl text-gray-500">How it works</p>
                    <h3 className="font-extrabold md:text-4xl text-3xl text-gray-700 sm:w-2/3 mx-auto xl:text-4xl">It's grocery shopping made <span className="italic text-orange-base">effortless</span>.</h3>
                </div>

                <div className="md:flex justify-around mt-24 px-6 text-center md:text-left md:flex-row-reverse md:mx-auto">

                    <div className="max-w-sm mx-auto md:mx-0 md:self-center lg:max-w-md pb-6 md:pb-0">
                        <img src="/images/landing-page/how-it-works/create.png" alt=""></img>
                    </div>

                    <div className="self-center">
                        <h2 className="md:text-6xl text-5xl font-black text-orange-200 leading-none mb-3 xl:text-7xl">CREATE</h2>
                        <div className="flex">
                            <div>
                                <img className="md:w-auto hidden md:block" src="/images/landing-page/how-it-works/createIcon.png" alt=""></img>
                            </div>
                            <div className="md:max-w-sm xl:max-w-lg leading-tight">
                                <h3 className="md:pl-4 mb-3 md:text-3xl text-2xl text-gray-700 font-bold xl:text-4xl">Create a customized grocery profile.</h3>
                                <p className="md:pl-4 leading-loose text-gray-600 xl:text-xl">By creating a customized profile for you we are able to create tailor made shopping lists just for you. Forget making shopping lists again. We’ll take care of it.</p>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="md:flex justify-around mt-32 md:mt-48 px-6 text-center md:text-left md:mx-auto">

                    <div className="max-w-sm mx-auto md:mx-0 md:self-center lg:max-w-md pb-6 md:pb-0">
                        <img src="/images/landing-page/how-it-works/schedule.png" alt=""></img>
                    </div>

                    <div className="self-center">
                        <h2 className="md:text-6xl text-5xl font-black text-orange-200 leading-none mb-3 xl:text-7xl">SCHEDULE</h2>
                        <div className="flex">
                            <div>
                                <img className="md:w-auto hidden md:block" src="/images/landing-page/how-it-works/scheduleIcon.png" alt=""></img>
                            </div>
                            <div className="md:max-w-sm xl:max-w-lg leading-tight">
                                <h3 className="md:pl-4 mb-3 md:text-3xl text-2xl text-gray-700 font-bold xl:text-4xl">Tell us when you want your groceries.</h3>
                                <p className="md:pl-4 leading-loose text-gray-600 xl:text-xl">After creating a customized grocery list for you we will be able to deliver it to you where ever or whenever you want. Going to the grocery will be a thing of the past.</p>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="md:flex justify-around mt-32 md:mt-48 px-6 text-center md:text-left md:flex-row-reverse md:mx-auto">

                    <div className="max-w-sm mx-auto md:mx-0 md:self-center lg:max-w-md pb-6 md:pb-0">
                        <img src="/images/landing-page/how-it-works/improve.png" alt=""></img>
                    </div>

                    <div className="self-center">
                        <h2 className="md:text-6xl text-5xl font-black text-orange-200 leading-none mb-3 xl:text-7xl">IMPROVE</h2>
                        <div className="flex">
                            <div>
                                <img className="md:w-auto hidden md:block" src="/images/landing-page/how-it-works/improveIcon.png" alt=""></img>
                            </div>
                            <div className="md:max-w-sm xl:max-w-lg leading-tight">
                                <h3 className="md:pl-4 mb-3 md:text-3xl text-2xl text-gray-700 font-bold xl:text-4xl">Learn about and improve your diet.</h3>
                                <p className="md:pl-4 leading-loose text-gray-600 xl:text-xl">Truly take hold of your diet and explore how you can improve and expand your diet. Stop thinking about your food and start enjoying it again.</p>
                            </div>
                        </div>
                    </div>
                </div>

            </section>

            <section className="md:flex features md:p-48 md:my-32 py-40 px-3 my-24 bg-teal-400">
                <div className="mb-12 self-center text-white container">

                    {/* Features Title and description */}
                    <div className="mb-12 text-center">
                        <h3 className="text-4xl xl:text-5xl">Features of <span className="italic font-black">Pantriful</span></h3>
                        <p className="max-w-lg mx-auto leading-loose xl:text-xl xl:max-w-xl">
                            With Pantriful we are hoping to make a comprehensive platform that not only saves you time but makes you healthier and more in tune with the food you eat.</p>
                    </div>
                    <div className="md:flex flex-wrap container mx-auto md:justify-center">

                        <div className="md:flex md:w-1/2 md:px-4 text-center md:text-left mb-12">
                            <div className="md:mr-4">
                                <img className="mx-auto pb-4 md:pb-0" src="/images/landing-page/features/dietAnalysis.png" alt=""></img>
                            </div>
                            <div className="max-w-xs xl:max-w-lg mx-auto">
                                <h4 className="font-extrabold text-xl xl:text-2xl">Diet Analysis</h4>
                                <p className="leading-loose xl:text-xl">Forget scanning or tracking, by using Pantriful you will be able to dig deep into your diet and see how you are eating effortlessly.</p>
                            </div>
                        </div>

                        <div className="md:flex md:w-1/2 md:px-4 text-center md:text-left mb-12">
                            <div className="md:mr-4">
                                <img className="mx-auto pb-4 md:pb-0" src="/images/landing-page/features/goalTracking.png" alt=""></img>
                            </div>
                            <div className="max-w-xs xl:max-w-lg mx-auto">
                                <h4 className="font-extrabold text-xl xl:text-2xl">Goal Tracking</h4>
                                <p className="leading-loose xl:text-xl">Have a goal in mind? By using your custom made food profile we will be able to craft a tailor made list that can help you reach any goal.</p>
                            </div>
                        </div>

                        <div className="md:flex md:w-1/2 md:px-4 text-center md:text-left mb-12">
                            <div className="md:mr-4">
                                <img className="mx-auto pb-4 md:pb-0" src="/images/landing-page/features/goalTracking.png" alt=""></img>
                            </div>
                            <div className="max-w-xs xl:max-w-lg mx-auto">
                                <h4 className="font-extrabold text-xl xl:text-2xl">Experiment and Discover</h4>
                                <p className="leading-loose xl:text-xl">With Pantriful we make it easy to find and try new things. Discover new recipes or foods that match what you like.</p>
                            </div>
                        </div>

                        <div className="md:flex md:w-1/2 md:px-4 text-center md:text-left mb-12">
                            <div className="md:mr-4">
                                <img className="mx-auto pb-4 md:pb-0" src="/images/landing-page/features/save.png" alt=""></img>
                            </div>
                            <div className="max-w-xs xl:max-w-lg mx-auto">
                                <h4 className="font-extrabold text-xl xl:text-2xl">Save time and money</h4>
                                <p className="leading-loose xl:text-xl">Travelling this week? Don’t worry, Pantriful lets you pause or adjust your weekly amount with just the flip of the switch. Never waste food again.</p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <section>
                <div className="mb-48 container md:flex px-8 justify-center">
                    <div>
                        <img className="hidden md:block" src="/images/landing-page/org-food.png" alt=""></img>
                    </div>
                    <div className="lg:ml-12 flex items-center">
                        <div className="md:min-w-lg mt-8 md:mt-0 md:ml-8 text-center md:text-left mx-auto">

                            <div className="text-sm py-2 px-3 bg-indigo-800 items-center text-indigo-100 leading-none rounded-full flex inline-flex" role="alert">
                                <span className="flex rounded-full bg-teal-500 uppercase py-2 px-3 text-xs font-extrabold mr-3">New</span>
                                <span className="font-semibold mr-2 text-left flex-auto">Delivery now available to Los Angeles Area!</span>
                            </div>

                            <h3 className='mb-2 mt-4 md:mt-0 text-4xl md:text-2xl max-w-md mx-auto font-extrabold text-gray-700 lg:text-3xl xl:text-4xl'>Ready to forget shopping carts <span className="italic text-orange-base">forever</span>?</h3>
                            <p className="mb-4 text-md max-w-md mx-auto leading-loose text-gray-700 xl:text-xl">Create your unique grocery profile and we will take care of the rest. It takes only a couple of minutes!</p>
                            <div className="mx-auto">
                                <Link to="/register" className="block mx-auto max-w-xs text-center font-bold text-white text-weight-bold bg-green-400 hover:bg-green-500 py-3 px-12 rounded-lg shadow-md xl:text-xl">Get Started Today!</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        
            <section className="container md:flex flex-wrap justify-around border-t border-gray-300 p-8 md:p-12 items-center w-5/6 md:w-full">
                <h3 className="md:text-4xl mb-6 text-2xl text-gray-400 max-w-sm md:max-w-full mx-auto text-center w-full">Local delivery from stores you love.</h3>
                <img className="h-full mx-auto md:mx-0 py-4 md:py-0 md:px-2" src="/images/landing-page/grocery-icons/vons.png" alt=""></img>
                <img className="h-full mx-auto md:mx-0 py-4 md:py-0 md:px-2" src="/images/landing-page/grocery-icons/ralphs.png" alt=""></img>
                <img className="h-full mx-auto md:mx-0 py-4 md:py-0 md:px-2" src="/images/landing-page/grocery-icons/albertsons.png" alt=""></img>
                <img className="h-full mx-auto md:mx-0 py-4 md:py-0 md:px-2" src="/images/landing-page/grocery-icons/wholeFoods.png" alt=""></img>
            </section>
        </main>
        <Footer />
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
