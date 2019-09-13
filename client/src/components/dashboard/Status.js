import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getCurrentProfile } from "../../actions/profileActions";
import { getLists } from "../../actions/listActions";

class Status extends Component {   
    statusBoxText = () => {
      
      // Pantriful Setup 
      if (this.props.profile.profile.shoppingListOne.length === 0) {
        return(
          <div className="max-w-lg mt-6 bg-white shadow-lg mx-auto rounded-lg">
            <h3 className="bg-green-400 py-2 text-white text-lg font-bold text-center rounded-t-lg">Pantriful Setup</h3>
            <div className="px-2 pt-2 pb-4 text-center mx-auto">
              <p className="">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo, feugiat viverra luctus tellus quam massa cursus. </p>
              <Link to="/create-shopping-list" className="inline-block mt-2 bg-green-400 text-white px-6 py-2 rounded-full font-bold sm:hover:bg-green-500">Setup Shopping List</Link>
            </div>
          </div>
        )
      }

      // Pantriful Assistant
      return(
       <div className="mt-6 bg-green-500 rounded-lg">
          <div className="flex items-center justify-around px-6">
            <svg className="h-24 w-24" width="71" height="71" viewBox="0 0 71 71" fill="none" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink">
              <path d="M36 64.623C52.0163 64.623 65 51.7237 65 35.8115C65 19.8994 52.0163 7 36 7C19.9837 7 7 19.8994 7 35.8115C7 51.7237 19.9837 64.623 36 64.623Z" fill="#9AE6B4" />
              <mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="7" y="7" width="58" height="58">
                <path d="M36 64.623C52.0163 64.623 65 51.7237 65 35.8115C65 19.8994 52.0163 7 36 7C19.9837 7 7 19.8994 7 35.8115C7 51.7237 19.9837 64.623 36 64.623Z" fill="#C6F6D5" />
              </mask>
              <g mask="url(#mask0)">
                <rect x="25.1865" y="25.0684" width="43.7457" height="43.4614" fill="url(#pattern0)" />
                <mask id="mask1" mask-type="alpha" maskUnits="userSpaceOnUse" x="25" y="25" width="44" height="44">
                  <rect x="25.1865" y="25.0684" width="43.7457" height="43.4614" fill="url(#pattern1)" />
                </mask>
                <g mask="url(#mask1)">
                  <rect x="25.1865" y="25.0684" width="43.7457" height="43.4614" fill="#EE9986" />
                </g>
                <rect x="31.8525" y="31.6909" width="31.247" height="29.8021" fill="url(#pattern2)" />
                <mask id="mask2" mask-type="alpha" maskUnits="userSpaceOnUse" x="31" y="31" width="33" height="31">
                  <rect x="31.8525" y="31.6909" width="31.247" height="29.8021" fill="url(#pattern3)" />
                </mask>
                <g mask="url(#mask2)">
                  <rect x="31.8525" y="31.6909" width="31.247" height="29.8021" fill="white" />
                </g>
                <rect x="56.4336" y="45.3503" width="3.74963" height="3.72525" fill="url(#pattern4)" />
                <mask id="mask3" mask-type="alpha" maskUnits="userSpaceOnUse" x="56" y="45" width="5" height="5">
                  <rect x="56.4336" y="45.3503" width="3.74963" height="3.72525" fill="url(#pattern5)" />
                </mask>
                <g mask="url(#mask3)">
                  <rect x="56.4336" y="45.3503" width="3.74963" height="3.72525" fill="#EE9986" />
                </g>
              </g>
              <circle cx="35.5" cy="35.5" r="34" stroke="#9AE6B4" stroke-width="3" />
              <defs>
                <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                  <use href="#image0" transform="scale(0.00284091)" />
                </pattern>
                <pattern id="pattern1" patternContentUnits="objectBoundingBox" width="1" height="1">
                  <use href="#image0" transform="scale(0.00284091)" />
                </pattern>
                <pattern id="pattern2" patternContentUnits="objectBoundingBox" width="1" height="1">
                  <use href="#image1" transform="scale(0.00404858 0.0041841)" />
                </pattern>
                <pattern id="pattern3" patternContentUnits="objectBoundingBox" width="1" height="1">
                  <use href="#image1" transform="scale(0.00404858 0.0041841)" />
                </pattern>
                <pattern id="pattern4" patternContentUnits="objectBoundingBox" width="1" height="1">
                  <use href="#image2" transform="scale(0.0322581)" />
                </pattern>
                <pattern id="pattern5" patternContentUnits="objectBoundingBox" width="1" height="1">
                  <use href="#image2" transform="scale(0.0322581)" />
                </pattern>
                <image id="image0" width="352" height="352" href="data:image/png;base64,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" />
                <image id="image1" width="247" height="239" href="data:image/png;base64,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" />
                <image id="image2" width="31" height="31" href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB8AAAAfCAYAAAAfrhY5AAAAAXNSR0IArs4c6QAAAhhJREFUSA3Fl79O3EAQxmfGSEcbHUkRBFWegYKOiEikSZkyBSehVDwAf6STgDxAKhooUqakSaRESUeRZ6A6BAUQ0XIS9jDfoL04jnMsur2zG9vr2e+3s38/M0VeV5vvZ/Oi/4Y5e0VazBPTcyVtM/FvUjonlp5q/i2T1tHM3v5ZjCw/FHS58W5JaWqHVBeVDPnAZQFKzMdMt9tPP3z6OSz8v2IX3c4LutGPyvp6mMCwb6z8haZ5/Vn34KQurhZ+tbW6XOT02br1SV2lx5TZsFxLRm9ndg+/V+tJteBio7Na5Po1BRja0IEedKusvzK/zxhgyqqBo74bKJeMV8o9MID7GPf1V6qM6xqLIaAWL4Q58KfbMbkSjHEdNJS5vnHCu2eO5VRo9iMUjvsunL/EMvTMfR2Pm1jSDzzGzlUU/dOYDaRUf6RH624Vac1NYcs0pcHEG0k1sjISBVd8r46slDIMXPFDIqVqrJYdToLTKTY+aZxxxdZeO6lopBi44udxZIWUYeDamJsRaOIyro259JpggyuwPk3AwRV4Luw4k2wAeOCKmz3zXJOEw+OB6wcLzN4k4YHncBxvbvYm0AJwgqt1uDPNZbrTGGMDXN84ATGAw9rAZdpkyMPHlHfoQj9YKGgP4Hhxc8eylroBrme6ZfMInpX/ezXm29EUb6G5zFEnodc3nWrGId3azMNH3Bv5Vys3AM/j+Eu9A0wL6ms/KEIqAAAAAElFTkSuQmCC" />
              </defs>
            </svg>
            <p className="ml-4 text-lg font-bold text-white leading-snug">Meet your Pantriful assistant.</p>
          </div>
          <div className="group bg-green-700 sm:hover:bg-green-800 rounded-b-lg cursor-pointer">
            <button className="block mx-auto text-green-400 text-center py-1 font-bold sm:group-hover:text-green-300">Learn more about me</button>
          </div>
       </div>
      )
    } 

    render () {
        return (
            <div className="relative mt-24 mx-4">
              
              <div className="text-center">
                <p className="text-lg font-bold text-white">Hi, {this.props.auth.user.name}!</p>
                <p className="text-base text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo.</p>
                {/* <button className="mt-2 bg-green-400 text-green-100 px-16 py-2 rounded-full font-bold">Approve List</button> */}
              </div>

              {this.statusBoxText()}

              {/* <div className="md:flex static md:max-w-md text-left md:mr-8 mx-auto">
                <img className="w-20 h-20 block md:inline-block mx-auto" src="./images/dashboard/profile.placeholder.png" alt="" />
                <div className="md:ml-4 text-center md:text-left mt-4 md:mt-0">
                  <p className="text-xl font-medium tracking-wide text-gray-700">Hi, {this.props.auth.user.name} {this.props.auth.user.lastName}</p>
                  <p className="text-xl text-orange-base tracking-wide">({this.props.profile.profile.username})</p>
                  {this.statusText()}
                </div>
              </div> */}

            {/* <div className="mt-4 md:mt-0 md:block md:w-1/2">
                {this.props.profile.profile.street
                ? <div className="shadow-lg rounded-lg max-w-sm">
                    <div className="bg-green-button flex items-center rounded-t-lg px-8 py-2 md:py-4 mx-auto mt-4 md:mt-0 mx-auto">
                      <img className="hidden md:block w-1/4 h-full mx-auto" src="./images/dashboard/assistant/profileImg.png" alt=""></img>
                      <div className="w-3/4 md:text-left md:ml-4 mx-auto">
                        <h3 className="text-white text-2xl font-bold md:tracking-wider">Julie Evans</h3>
                        <div className="md:flex text-xs text-white font-bold tracking-wider">
                          <p className="hidden md:block">{this.props.profile.profile.city}, {this.props.profile.profile.state}</p>
                          <p className="hidden md:block md:ml-4">(626) 658-7775</p>
                        </div>
                      <p className="hidden md:block text-green-700 italic">"French food fanatic</p>
                      </div>
                    </div>
                    <div className="py-6 px-8 text-gray-700 md:text-left">
                      <img className="md:hidden w-1/4 h-full mx-auto" src="./images/dashboard/assistant/profileImg.png" alt=""></img>
                      <p className="font-bold text-lg mb-1 text-gray-600">Hi {this.props.profile.profile.user.name}, I am your <span className="text-orange-base">Pantriful Assistant</span>.</p>
                      {this.assistantText()}
                    </div>
                  </div>
                : <div className="shadow-lg rounded-lg max-w-sm">
                  <h3 className="bg-green-button rounded-t-lg py-2 text-xl text-white font-bold">What do I do next? ({this.props.profile.profile.shoppingListOne.length > 0 && this.props.profile.profile.shoppingListTwo.length > 0 ? "2" : "1"}/3)</h3>
                  <ul className="text-left">
                    <li className="ml-4 mt-4">
                      <Link to="/dashboard">
                        <div className="flex items-center px-4">
                          <img className="h-8 w-9" src="./images/dashboard/checkmark.png" alt=""></img>
                          <div className="px-5 opacity-50">
                            <h4 className="text-sm text-orange-base tracking-wide font-bold"> Create Pantry</h4>
                            <p className="text-sm text-gray-700">so we can figure out what you like.</p>  
                          </div>
                        </div>
                      </Link>
                    </li>
                    <li className="ml-4 mt-4">
                      { this.props.profile.profile.shoppingListOne.length === 0 &&
                        this.props.profile.profile.shoppingListTwo.length === 0
                        ? <Link to="/create-shopping-list">
                            <div className="flex items-center px-4">
                              <img className="h-8 w-9" src="./images/dashboard/empty-checkmark.png" alt=""></img>
                              <div className="px-5">
                                <h4 className="text-sm text-orange-base tracking-wide font-bold">Create example shopping lists</h4>
                                <p className="text-sm text-gray-700">to let us know how often you eat things.</p>  
                              </div>
                            </div>
                          </Link>
                        : <Link to="/dashboard">
                            <div className="flex items-center px-4">
                              <img className="h-8 w-9" src="./images/dashboard/checkmark.png" alt=""></img>
                              <div className="px-5 opacity-50">
                                <h4 className="text-sm text-orange-base tracking-wide font-bold">Create example shopping lists</h4>
                                <p className="text-sm text-gray-700">to let us know how often you eat things.</p>  
                              </div>
                            </div>
                          </Link>
                      }
                    </li>
                    <li className="ml-4 py-4">
                      <Link to="/delivery-details">
                        <div className="flex items-center px-4">
                          <img className="h-8 w-9" src="./images/dashboard/empty-checkmark.png" alt=""></img>
                          <div className="px-5">
                            <h4 className="text-sm text-orange-base tracking-wide font-bold">Enter in delivery details</h4>
                            <p className="text-sm text-gray-700">so we can figure out where to send your food.</p>  
                          </div>
                        </div>
                      </Link>
                    </li>
                  </ul>
                </div>
              }
              </div> */}
            </div>
        )
};
}

const mapStateToProps = state => ({
  profile: state.profile,
  auth: state.auth,
  lists: state.lists
});

export default connect(
  mapStateToProps,
  { getCurrentProfile, getLists }
)(Status);
