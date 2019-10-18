import React, { Component } from "react";
import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";
import Navbar from "./Navbar"
import Footer from "./Footer"

class Landing extends Component {
    state = {
        menuOpen: false,
        }

    componentDidMount() {
        window.scrollTo(0, 0);

        if (this.props.auth.isAuthenticated) {
            this.props.history.push("/dashboard");
        }
    }

    toggleMenu = () => {
        this.setState({
            menuOpen: !this.state.menuOpen
        })
    }

    closeMenuClick = () => {
        return (this.state.menuOpen === true ? this.setState({menuOpen: false}) : null,
        this.state.notificationsOpen === true ? this.setState({ notificationsOpen: false }) : null)
      }

  render() {
    return (
        <div>
            <header className="mt-8 mx-4 sm:mx-8 flex justify-between items-center xl:max-w-5xl xl:mx-auto">
                {/* Logo */}
                <Link to="/">
                    <svg width="146" height="30" viewBox="0 0 146 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 3.53001C0 1.58044 1.58044 0 3.53001 0H26.0548C28.0044 0 29.5848 1.58044 29.5848 3.53001V26.0548C29.5848 28.0044 28.0044 29.5848 26.0548 29.5848H3.53001C1.58044 29.5848 0 28.0044 0 26.0548V3.53001Z" fill="#EE9986"/>
                        <path d="M4.37061 22.3567C4.37061 21.1962 5.31134 20.2555 6.4718 20.2555H12.2711C13.4316 20.2555 14.3723 21.1962 14.3723 22.3567V22.7769C14.3723 23.9374 13.4316 24.8781 12.2711 24.8781H6.4718C5.31134 24.8781 4.37061 23.9374 4.37061 22.7769V22.3567Z" fill="white"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M12.2711 20.6757H6.4718C5.54343 20.6757 4.79084 21.4283 4.79084 22.3567V22.7769C4.79084 23.7053 5.54343 24.4579 6.4718 24.4579H12.2711C13.1995 24.4579 13.952 23.7053 13.952 22.7769V22.3567C13.952 21.4283 13.1995 20.6757 12.2711 20.6757ZM6.4718 20.2555C5.31134 20.2555 4.37061 21.1962 4.37061 22.3567V22.7769C4.37061 23.9374 5.31134 24.8781 6.4718 24.8781H12.2711C13.4316 24.8781 14.3723 23.9374 14.3723 22.7769V22.3567C14.3723 21.1962 13.4316 20.2555 12.2711 20.2555H6.4718Z" fill="white"/>
                        <path d="M4.45459 14.6244C4.45459 13.4639 5.39533 12.5232 6.55578 12.5232H23.0291C24.1896 12.5232 25.1303 13.4639 25.1303 14.6244V15.0446C25.1303 16.2051 24.1896 17.1458 23.0291 17.1458H6.55578C5.39533 17.1458 4.45459 16.2051 4.45459 15.0446V14.6244Z" fill="white"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M23.0291 12.9434H6.55578C5.62742 12.9434 4.87483 13.696 4.87483 14.6244V15.0446C4.87483 15.973 5.62742 16.7256 6.55578 16.7256H23.0291C23.9575 16.7256 24.7101 15.973 24.7101 15.0446V14.6244C24.7101 13.696 23.9575 12.9434 23.0291 12.9434ZM6.55578 12.5232C5.39533 12.5232 4.45459 13.4639 4.45459 14.6244V15.0446C4.45459 16.2051 5.39533 17.1458 6.55578 17.1458H23.0291C24.1896 17.1458 25.1303 16.2051 25.1303 15.0446V14.6244C25.1303 13.4639 24.1896 12.5232 23.0291 12.5232H6.55578Z" fill="white"/>
                        <path d="M4.45459 6.89197C4.45459 5.73151 5.39533 4.79077 6.55578 4.79077H23.0291C24.1896 4.79077 25.1303 5.73151 25.1303 6.89197V7.3122C25.1303 8.47266 24.1896 9.4134 23.0291 9.4134H6.55578C5.39533 9.4134 4.45459 8.47266 4.45459 7.3122V6.89197Z" fill="white"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M23.0291 5.21101H6.55578C5.62742 5.21101 4.87483 5.9636 4.87483 6.89197V7.3122C4.87483 8.24057 5.62742 8.99316 6.55578 8.99316H23.0291C23.9575 8.99316 24.7101 8.24057 24.7101 7.3122V6.89197C24.7101 5.9636 23.9575 5.21101 23.0291 5.21101ZM6.55578 4.79077C5.39533 4.79077 4.45459 5.73151 4.45459 6.89197V7.3122C4.45459 8.47266 5.39533 9.4134 6.55578 9.4134H23.0291C24.1896 9.4134 25.1303 8.47266 25.1303 7.3122V6.89197C25.1303 5.73151 24.1896 4.79077 23.0291 4.79077H6.55578Z" fill="white"/>
                        <path d="M22.3989 16.1372C23.1184 16.1372 23.7017 15.554 23.7017 14.8345C23.7017 14.115 23.1184 13.5317 22.3989 13.5317C21.6794 13.5317 21.0962 14.115 21.0962 14.8345C21.0962 15.554 21.6794 16.1372 22.3989 16.1372Z" fill="#EE9986"/>
                        <path d="M44.5137 14.2292C45.2393 14.2292 45.8571 14.1214 46.367 13.9057C46.8867 13.6899 47.3083 13.3909 47.6319 13.0085C47.9555 12.6162 48.1908 12.1554 48.3379 11.6259C48.4948 11.0866 48.5732 10.4933 48.5732 9.84616C48.5732 9.3951 48.5095 8.98326 48.382 8.61065C48.2546 8.22824 48.0584 7.89975 47.7937 7.62519C47.5388 7.35064 47.2103 7.13982 46.8082 6.99273C46.416 6.84565 45.9502 6.77211 45.4109 6.77211H42.9399L42.0133 14.2292H44.5137ZM45.8228 3.53627C47.0583 3.53627 48.1173 3.68826 48.9998 3.99223C49.8823 4.2864 50.6079 4.69823 51.1766 5.22773C51.7551 5.75723 52.1768 6.38479 52.4415 7.1104C52.7161 7.83601 52.8534 8.62536 52.8534 9.47845C52.8534 10.6355 52.672 11.7043 52.3092 12.6849C51.9562 13.6556 51.4169 14.4989 50.6912 15.2147C49.9754 15.9207 49.0684 16.4747 47.9702 16.8767C46.872 17.2788 45.5825 17.4798 44.1019 17.4798H41.6162L40.7043 24.8781H36.4683L39.0716 3.53627H45.8228Z" fill="#EE9986"/>
                        <path d="M62.2267 12.3319C62.1385 12.3221 62.0502 12.3172 61.962 12.3172C61.8737 12.3172 61.7855 12.3172 61.6972 12.3172C60.9128 12.3172 60.1921 12.4937 59.5351 12.8467C58.8781 13.1997 58.3094 13.6801 57.8289 14.2881C57.3583 14.896 56.9857 15.602 56.7111 16.4061C56.4463 17.2101 56.314 18.0583 56.314 18.9506C56.314 19.9704 56.4709 20.7107 56.7846 21.1716C57.0984 21.6226 57.5103 21.8482 58.0201 21.8482C58.3829 21.8482 58.7408 21.7158 59.0939 21.451C59.4567 21.1863 59.7949 20.8235 60.1087 20.3626C60.4225 19.9018 60.7118 19.3625 60.9765 18.7447C61.2413 18.1172 61.4717 17.4504 61.6678 16.7444L62.2267 12.3319ZM61.2266 22.0247C60.5794 22.9758 59.8538 23.7259 59.0497 24.2751C58.2555 24.8242 57.3779 25.0987 56.4169 25.0987C55.858 25.0987 55.3236 24.9909 54.8137 24.7751C54.3136 24.5496 53.8724 24.2162 53.49 23.775C53.1076 23.3239 52.8036 22.7601 52.578 22.0835C52.3623 21.3971 52.2545 20.598 52.2545 19.686C52.2545 18.7741 52.3672 17.8916 52.5928 17.0385C52.8183 16.1757 53.1419 15.3667 53.5635 14.6117C53.9851 13.8566 54.495 13.1653 55.0932 12.5378C55.7011 11.9004 56.3728 11.3562 57.1082 10.9052C57.8534 10.4541 58.6575 10.106 59.5204 9.86086C60.3931 9.60592 61.3099 9.47845 62.2709 9.47845C62.9769 9.47845 63.6829 9.53238 64.3889 9.64024C65.0949 9.73829 65.7911 9.91479 66.4774 10.1697L64.6536 24.8781H62.4915C62.2365 24.8781 62.0208 24.8438 61.8443 24.7751C61.6776 24.7065 61.5403 24.6133 61.4325 24.4957C61.3344 24.378 61.2658 24.2407 61.2266 24.0838C61.1873 23.927 61.1677 23.7554 61.1677 23.5691L61.2266 22.0247Z" fill="#EE9986"/>
                        <path d="M72.9753 12.5966C73.7303 11.5376 74.554 10.7532 75.4463 10.2433C76.3484 9.73339 77.2849 9.47845 78.2556 9.47845C78.8832 9.47845 79.4519 9.60592 79.9618 9.86086C80.4717 10.1158 80.8933 10.4884 81.2267 10.9787C81.5699 11.469 81.8101 12.072 81.9474 12.7878C82.0847 13.5036 82.0945 14.3224 81.9768 15.2441L80.8296 24.8781H76.7848L77.9173 15.2441C78.035 14.3322 77.9909 13.6899 77.785 13.3173C77.579 12.9349 77.2162 12.7437 76.6965 12.7437C76.3239 12.7437 75.9415 12.8565 75.5493 13.082C75.1571 13.2977 74.7795 13.6066 74.4167 14.0086C74.0539 14.4106 73.7205 14.896 73.4166 15.4647C73.1126 16.0335 72.8675 16.6659 72.6812 17.3621L71.8428 24.8781H67.7833L69.6071 9.69907H71.681C72.1026 9.69907 72.4311 9.80203 72.6664 10.0079C72.9018 10.2139 73.0194 10.5424 73.0194 10.9934L72.9753 12.5966Z" fill="#EE9986"/>
                        <path d="M84.921 21.7011C84.921 21.6325 84.921 21.554 84.921 21.4658C84.921 21.3677 84.9259 21.2304 84.9357 21.0539C84.9554 20.8676 84.9799 20.6274 85.0093 20.3332C85.0485 20.0292 85.0975 19.637 85.1564 19.1565L85.9653 12.626H84.6416C84.4455 12.626 84.2837 12.5574 84.1562 12.4201C84.0385 12.2828 83.9993 12.0769 84.0385 11.8024L84.2297 10.2139L86.5242 9.77261L87.7745 5.84548C87.9117 5.40423 88.2108 5.18361 88.6717 5.18361H90.8485L90.2749 9.80203H93.8196L93.4813 12.626H89.9366L89.157 18.9359C89.108 19.3379 89.0688 19.6566 89.0394 19.892C89.01 20.1273 88.9854 20.3087 88.9658 20.4362C88.956 20.5636 88.9511 20.6519 88.9511 20.7009C88.9511 20.7401 88.9511 20.7696 88.9511 20.7892C88.9511 21.1324 89.0296 21.4069 89.1865 21.6128C89.3433 21.809 89.5787 21.907 89.8925 21.907C90.069 21.907 90.2209 21.8874 90.3484 21.8482C90.4759 21.7991 90.5838 21.7501 90.672 21.7011C90.7701 21.6423 90.8583 21.5932 90.9367 21.554C91.0152 21.505 91.0985 21.4805 91.1868 21.4805C91.3143 21.4805 91.4074 21.5099 91.4662 21.5687C91.5251 21.6177 91.5839 21.706 91.6428 21.8335L92.5253 23.775C91.9565 24.2162 91.3339 24.5496 90.6573 24.7751C89.9807 25.0007 89.2992 25.1134 88.6128 25.1134C87.495 25.1134 86.6076 24.8144 85.9506 24.2162C85.3034 23.6083 84.9603 22.7699 84.921 21.7011Z" fill="#EE9986"/>
                        <path d="M99.6917 13.0967C100.074 12.3907 100.476 11.7877 100.898 11.2876C101.329 10.7875 101.775 10.4002 102.236 10.1256C102.697 9.84125 103.168 9.67946 103.648 9.64024C104.129 9.59121 104.614 9.67456 105.104 9.89028L104.369 13.6997C103.79 13.4546 103.246 13.3516 102.736 13.3909C102.236 13.4301 101.77 13.6262 101.339 13.9792C100.917 14.3322 100.535 14.847 100.192 15.5236C99.8486 16.2002 99.5495 17.0532 99.2945 18.0828L98.4709 24.8781H94.4849L96.3235 9.69907H98.412C98.8337 9.69907 99.1622 9.80203 99.3975 10.0079C99.6328 10.2139 99.7505 10.5424 99.7505 10.9934L99.6917 13.0967Z" fill="#EE9986"/>
                        <path d="M110.985 9.71378L109.176 24.8781H105.175L106.984 9.71378H110.985ZM111.867 5.40423C111.867 5.74743 111.794 6.06611 111.647 6.36027C111.509 6.65444 111.323 6.91429 111.088 7.13982C110.862 7.36535 110.597 7.54185 110.293 7.66932C109.999 7.79679 109.695 7.86053 109.381 7.86053C109.068 7.86053 108.764 7.79679 108.47 7.66932C108.185 7.54185 107.93 7.36535 107.705 7.13982C107.489 6.91429 107.313 6.65444 107.175 6.36027C107.048 6.06611 106.984 5.74743 106.984 5.40423C106.984 5.07084 107.053 4.75706 107.19 4.4629C107.327 4.15893 107.504 3.89417 107.719 3.66865C107.945 3.44312 108.2 3.26662 108.484 3.13915C108.778 3.00187 109.082 2.93323 109.396 2.93323C109.72 2.93323 110.029 2.99696 110.323 3.12444C110.627 3.25191 110.892 3.42841 111.117 3.65394C111.343 3.87947 111.524 4.14422 111.661 4.44819C111.799 4.74236 111.867 5.06104 111.867 5.40423Z" fill="#EE9986"/>
                        <path d="M118.882 12.626L117.484 24.2015L116.705 26.8784C116.538 27.3981 116.293 27.8002 115.969 28.0845C115.656 28.3689 115.205 28.5111 114.616 28.5111H112.984L114.896 12.6407L113.851 12.4201C113.597 12.3515 113.391 12.2436 113.234 12.0965C113.077 11.9396 113.018 11.7141 113.057 11.42L113.263 9.80203H115.249L115.366 8.80186C115.474 7.93897 115.705 7.15943 116.058 6.46323C116.421 5.75723 116.876 5.164 117.426 4.68352C117.984 4.19324 118.627 3.81573 119.352 3.55098C120.078 3.28623 120.862 3.15385 121.706 3.15385C122.029 3.15385 122.333 3.17837 122.618 3.22739C122.912 3.26662 123.201 3.33035 123.485 3.4186L123.118 5.50719C123.069 5.73272 122.931 5.8798 122.706 5.94844C122.48 6.00727 122.24 6.03669 121.985 6.03669C121.603 6.03669 121.25 6.08572 120.926 6.18378C120.612 6.28183 120.338 6.44853 120.103 6.68386C119.867 6.90939 119.671 7.20846 119.514 7.58107C119.357 7.94387 119.249 8.39003 119.191 8.91953L119.088 9.80203H122.338L121.956 12.626H118.882Z" fill="#EE9986"/>
                        <path d="M137.059 9.71378L135.221 24.8781H133.162C132.201 24.8781 131.72 24.4221 131.72 23.5102L131.764 22.1423C131.019 23.1425 130.205 23.8877 129.323 24.378C128.45 24.8585 127.543 25.0987 126.602 25.0987C125.964 25.0987 125.391 24.9713 124.881 24.7163C124.371 24.4614 123.949 24.0887 123.616 23.5985C123.283 23.1082 123.047 22.51 122.91 21.804C122.773 21.0882 122.763 20.2695 122.881 19.3478L124.013 9.71378H128.073L126.925 19.3478C126.817 20.2597 126.862 20.9068 127.058 21.2893C127.264 21.6619 127.631 21.8482 128.161 21.8482C128.514 21.8482 128.877 21.7501 129.249 21.554C129.632 21.3481 129.994 21.0588 130.338 20.6862C130.691 20.3136 131.014 19.8674 131.308 19.3478C131.612 18.8183 131.862 18.2299 132.059 17.5827L133.015 9.71378H137.059Z" fill="#EE9986"/>
                        <path d="M138.41 24.8781L141.072 2.94794H145.072L142.396 24.8781H138.41Z" fill="#EE9986"/>
                    </svg>
                </Link>

                {/* Default Menu */}
                <div className="hidden sm:block sm:flex sm:items-center">
                    <Link to="/login" className="block text-gray-600">Login</Link>
                    <Link to="/register" className="block ml-6 rounded border-2 border-green-400 py-2 px-8 text-green-400">Get Started</Link>
                </div>

                {/* Menu */}
                <div className="sm:hidden">
                    {this.state.menuOpen === false 
                    ? 
                    <svg onClick={this.toggleMenu} width="20" height="14" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 0H20V2H0V0ZM0 6H20V8H0V6ZM0 12H20V14H0V12Z" fill="#4A5568"/>
                    </svg> 
                    : 
                    <svg onClick={this.toggleMenu} width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.99965 7.58589L1.92865 0.514893L0.514648 1.92889L7.58565 8.99989L0.514648 16.0709L1.92865 17.4849L8.99965 10.4139L16.0706 17.4849L17.4846 16.0709L10.4136 8.99989L17.4846 1.92889L16.0706 0.514893L8.99965 7.58589Z" fill="#4A5568"/>
                    </svg>
                    }
                    {/* Menu Modal */}
                    <div className={"mt-2 mr-8 px-4 py-2 absolute right-0 origin-top-right bg-white shadow-lg rounded-lg border border-gray-100 z-40 " + (this.state.menuOpen === false ? "hidden" : "absolute")}>
                        <Link to="/login" className="block text-lg text-gray-700 text-right py-2 px-4">Login</Link>
                        <Link to="/register" className="block text-lg text-green-400 py-2 px-4">Sign Up</Link>
                    </div>

                    {/* Close Menu Buttons. Opacity is 0 on display */}
                    <div className={"inset-0 opacity-0 w-full h-full z-10 " + (this.state.menuOpen || this.state.notificationsOpen ? "fixed" : "hidden")} onClick={this.closeMenuClick}></div>
                </div>
            </header>
            
            {/* Hero */}
            <div className="mt-12 md:mt-0 mx-4 md:flex md:items-center xl:justify-around xl:max-w-5xl xl:justify-between xl:mx-auto">
                <div className="max-w-xs sm:max-w-xl md:max-w-xs lg:max-w-md xl:max-w-lg mx-auto">
                    {/* Pill */}
                    <div className="max-w-xs sm:max-w-sm md:max-w-xs lg:max-w-md flex items-center bg-indigo-600 rounded-full text-white text-sm">
                        <div className="hidden sm:block md:hidden lg:block md:text-center my-2 ml-2 sm:ml-4py-1 px-2 bg-teal-500 font-bold rounded-full">NEW</div>
                        <div className="mx-auto sm:mx-0 sm:ml-2 md:ml-4 font-bold mx-2 my-1">Delivery now available to Los Angeles Area!</div>
                    </div>

                    {/* Hero Title */}
                    <div className="text-gray-700 mt-2 text-3xl lg:text-4xl font-black">Get healthier <span className="text-orange-base">without</span> diets or meal plans.</div>

                    {/* Hero Description */}
                    <div className="mt-2 text-gray-600 lg:text-lg leading-loose">
                        We create unique grocery lists <span className="italic">tailored</span> to you and your goals and deliver them to your doorstep for <span className="text-orange-base font-bold">$8 a week</span>.
                    </div>

                    {/* CTA Button */}
                    <Link to="/register" className="block max-w-xs text-center mt-3 bg-green-400 py-3 px-8 rounded-lg text-white font-bold hover:bg-green-500 lg:text-xl lg:tracking-wide">Get Started Today!</Link>
                </div>

                {/* Hero Image */}
                <div className="mt-4 max-w-xs mx-auto sm:max-w-md md:max-w-sm lg:max-w-md xl:max-w-xl">
                    <img className="mx-auto" src="images/new-landing-page/heroImage.png"></img>
                </div>
            </div>
            {/* /Hero */}

            <main>

                {/* Why use Pantriful */}
                <div className="my-12 py-12 lg:py-24 bg-blue-400 xl:my-24">
                    <div className="mx-4">
                        <div className="mx-auto text-2xl lg:text-4xl text-center max-w-xs lg:max-w-md text-white font-black">Finally, you can get healthy on your terms.</div>
                        <div className="text-center mt-4 text-white max-w-sm mx-auto lg:text-lg lg:leading-loose lg:max-w-md">We got tired of all the new diets, trends, and meal plans and built a way for you to create your own unique system that works for you.</div>
                    </div>
                    <div className="md:flex md:justify-between md:mx-4 lg:max-w-4xl lg:mx-auto">
                        <div className="mt-12 md:mt-8 md:ml-4 py-8 px-6 mx-auto rounded-lg shadow-lg max-w-xs sm:max-w-sm md:max-w-xs bg-white">
                            <img src="images/new-landing-page/icon-1.png"></img>
                            <div className="mt-4 text-xl font-bold text-gray-700">Diets are difficult to maintain</div>
                            <div className="mt-2 text-gray-600">Diets were never made for individuals. We want to change that and make something just for you.</div>
                        </div>
                        <div className="mt-8 md:ml-4 py-8 px-6 mx-auto rounded-lg shadow-lg max-w-xs sm:max-w-sm md:max-w-xs bg-white">
                            <img src="images/new-landing-page/icon-2.png"></img>
                            <div className="mt-4 text-xl font-bold text-gray-700">No more reading labels again</div>
                            <div className="mt-2 text-gray-600">Figuring out what is in food has never been more complicated. We figure out whats right for you to eat.</div>
                        </div>
                        <div className="mt-8 md:ml-4 py-8 px-6 mx-auto rounded-lg shadow-lg max-w-xs sm:max-w-sm md:max-w-xs bg-white">
                            <img src="images/new-landing-page/icon-3.png"></img>
                            <div className="mt-4 text-xl font-bold text-gray-700">Forget shopping carts forever</div>
                            <div className="mt-2 text-gray-600">Our drivers are trained to get you the best quality foods from your favorite grocery store. We pick what we want to eat.</div>
                        </div>
                    </div>
                </div>

                {/* How it works */}
                <div className="mx-4 lg:mt-24 xl:max-w-5xl xl:mx-auto">
                    <div className="font-black text-center mx-4 text-3xl lg:text-4xl text-gray-700">This is how <span className="text-orange-base">Pantriful</span> works</div>
                    
                    <div className="mt-12 lg:mt-24 md:flex md:justify-around md:flex-row-reverse md:items-center md:mx-8">
                        <img className="sm:max-w-sm sm:mx-auto md:max-w-xs lg:max-w-md md:ml-4 md:mx-auto" src="images/new-landing-page/how-1.png"></img>
                        <div className="mt-4 sm:max-w-md sm:mx-auto md:max-w-sm xl:max-w-md">
                            <div className="text-center md:text-left text-3xl xl:text-4xl text-gray-700 font-bold"><span className="text-orange-base">Create</span> your profile</div>
                            <div className="mt-2 text-center md:text-left text-lg mx-4 md:mx-0 text-gray-600 leading-loose">This profile will help us figure out how to make a plan just for you. Your profile will help us create tailor made shopping lists just for you. Take back control of your health like never before.</div>
                        </div>
                    </div>
                    
                    <div className="mt-20 md:flex md:justify-around md:items-center md:mx-8">                    
                        <img className="sm:max-w-sm sm:mx-auto md:max-w-xs lg:max-w-md md:mr-4 md:mx-auto" src="images/new-landing-page/how-2.png"></img>
                        <div className="mt-4 sm:max-w-md sm:mx-auto xl:max-w-md">
                            <div className="text-center md:text-left text-3xl xl:text-4xl text-gray-700 font-bold"><span className="text-orange-base">Schedule</span> your delivery</div>
                            <div className="mt-2 text-center md:text-left text-lg mx-4 md:mx-auto text-gray-600 leading-loose">After creating a customized grocery list for you we will be able to deliver it to you where ever or whenever you want. Going to the grocery will be a thing of the past and you can forget shopping carts forever.</div>
                        </div>
                    </div>
                    
                    <div className="mt-20 md:flex md:justify-around md:flex-row-reverse md:items-center md:mx-8">
                        <img className="sm:max-w-sm sm:mx-auto md:max-w-xs lg:max-w-md md:ml-4 md:mx-auto" src="images/new-landing-page/how-3.png"></img>
                        <div className="mt-4 sm:max-w-md sm:mx-auto xl:max-w-md">
                            <div className="text-center md:text-left text-3xl xl:text-4xl text-gray-700 font-bold"><span className="text-orange-base">Learn</span> about and improve your health</div>
                            <div className="mt-2 text-center md:text-left text-lg mx-4 md:mx-auto text-gray-600 leading-loose">WIth Pantriful you can either set it and forget it or really dig deep and learn about yourself and make changes as you see fit. You set the rules and we figure out how to best serve you.</div>
                        </div>
                    </div>

                    {/* CTA Button */}
                    <Link to="/register" className="block max-w-xs text-center mt-8 block mx-auto mt-3 bg-green-400 py-3 px-8 rounded-lg text-2xl text-white font-bold hover:bg-green-500">Get Started Today!</Link>
                </div>

                {/* Quote */}
                <div className="mt-20 bg-orange-400">
                    <div className="py-12 px-4 ">
                        <div className="text-white text-2xl lg:text-3xl text-center leading-snug sm:max-w-md sm:mx-auto">“It’s like your healthy best friend got your groceries for you!”</div>
                        <div className="mt-2 text-orange-100 text-lg lg:text-xl text-center">Elyse Johnson | El Segundo, CA</div>
                    </div>
                </div>

                {/* Last CTA */}
                <div className="mt-20">
                    <img className="block mx-auto shadow-lg" src="images/new-landing-page/logoIcon.png"></img>
                    <div className="-mt-6 px-4 py-8 lg:px-12 mx-auto max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl bg-white shadow-lg rounded">
                        <div className="mt-2 text-2xl lg:text-4xl font-bold text-gray-700 text-center">Ready to forget shopping carts forever?</div>
                        <div className="mt-4 text-gray-600 text-center leading-relaxed text-xl lg:text-2xl">Stop thinking about your food and start enjoying it again.</div>
                        {/* CTA Button */}
                        <Link to="/register" className="block max-w-xs text-center mt-8 block mx-auto mt-3 bg-green-400 py-3 px-8 rounded-lg text-2xl text-white font-bold hover:bg-green-500">Get Started Today!</Link>
                    </div>
                </div>

                {/* Groceries */}
                <div className="mt-12 lg:my-20">
                <div className=" text-3xl text-gray-600 font-bold text-center max-w-xs mx-auto">Local delivery from stores you love.</div>
                    <div className="md:flex md:flex-wrap md:items-center md:max-w-lg lg:max-w-3xl md:mx-auto">
                        <img className="lg:w-1/4 mt-4 block mx-auto" src="images/new-landing-page/grocery-1.png"></img>
                        <img className="lg:w-1/4 mt-4 block mx-auto" src="images/new-landing-page/grocery-2.png"></img>
                        <img className="lg:w-1/4 mt-4 block mx-auto" src="images/new-landing-page/grocery-4.png"></img>
                        <img className="lg:w-1/4 mt-4 block mx-auto" src="images/new-landing-page/grocery-3.png"></img>
                    </div>
                </div>

                {/* Footer */}
                <div className="mt-12 p-4 bg-orange-base text-center">
                    <img className="mt-4 block mx-auto" src="images/new-landing-page/iconWhite.png"></img>
                    <div className="mt-4 text-white lg:text-xl">Your own smart personal grocery shopper</div>
                    <div className="mt-2 text-white opacity-50">© 2019 Pantriful</div>
                </div>
            </main>

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


