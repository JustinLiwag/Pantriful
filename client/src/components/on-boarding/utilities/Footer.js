import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class Footer extends Component {
  render() {
    const {first, last, modal, none} = this.props
    return (
      <div className="fixed z-20 bottom-0 w-full py-4 border-t-2 border-gray-200 bg-white">
        {modal 
            ? <div>
                <div onClick={this.props.open} className="md:hidden absolute shopping-cart-button">

                  <svg width="78" height="78" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle className="fill-current text-green-400 shadow-lg" cx="39" cy="29" r="24" filter="url(#filter0_dd)" />
                    <path d="M34.1476 21.2622h14.6885c.1797-.0013.3568.0465.5142.1387.1573.0923.2898.2259.3845.3882.0948.1622.1488.3477.1568.5384.0079.1908-.0304.3806-.1112.5511l-4.1968 8.9181c-.088.1855-.223.3412-.3898.4495-.1669.1084-.3589.165-.5544.1636H34.1476c-.2783 0-.5452-.1175-.7419-.3265-.1968-.2091-.3073-.4926-.3073-.7883v-8.918c0-.2957.1105-.5792.3073-.7883.1967-.209.4636-.3265.7419-.3265z" fill="#fff" />
                    <path d="M45.4052 37.9835c.185.3389.2827.7236.2833 1.1153.0006.3918-.096.7768-.2801 1.1162-.184.3395-.4489.6214-.7682.8175-.3192.196-.6814.2993-1.0501.2993s-.7309-.1033-1.0501-.2993c-.3192-.1961-.5841-.478-.7682-.8175-.184-.3394-.2806-.7244-.28-1.1162.0005-.3917.0983-.7764.2833-1.1153h-5.8125c.1853.3429.2816.7319.2788 1.1273-.0028.3953-.1045.7828-.2947 1.1226-.1901.3399-.4619.6199-.7875.8113-.3256.1915-.6932.2875-1.0652.2783-.372-.0093-.735-.1235-1.0518-.3309-.3168-.2074-.576-.5006-.751-.8495-.175-.349-.2595-.741-.2449-1.1361.0146-.3951.1279-.7789.3281-1.1121-.6624-.1655-1.2566-.5547-1.6933-1.1091-.4368-.5545-.6927-1.2444-.7293-1.9664-.0366-.722.1479-1.4372.5261-2.0383.3781-.6011.9294-1.0559 1.5713-1.2961V21.2622h-2.0984c-.2783 0-.5451-.1174-.7419-.3265-.1968-.209-.3073-.4926-.3073-.7882 0-.2957.1105-.5792.3073-.7883.1968-.209.4636-.3265.7419-.3265h3.1475c.2783 0 .5452.1175.7419.3265.1968.2091.3073.4926.3073.7883V31.295h11.541c.2783 0 .5451.1175.7419.3265.1967.2091.3073.4926.3073.7883 0 .2956-.1106.5792-.3073.7882-.1968.2091-.4636.3265-.7419.3265H33.0983c-.2782 0-.5451.1175-.7418.3265-.1968.2091-.3073.4926-.3073.7883 0 .2956.1105.5792.3073.7882.1967.2091.4636.3265.7418.3265h12.5902c.2783 0 .5451.1175.7419.3265.1967.2091.3073.4926.3073.7883 0 .2956-.1106.5792-.3073.7882-.1968.2091-.4636.3265-.7419.3265h-.2833z" fill="#fff" />
                    <defs>
                      <filter id="filter0_dd" x="0" y="0" width="78" height="78" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                        <feOffset dy="4" />
                        <feGaussianBlur stdDeviation="3" />
                        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
                        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow" />
                        <feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                        <feOffset dy="10" />
                        <feGaussianBlur stdDeviation="7.5" />
                        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
                        <feBlend in2="effect1_dropShadow" result="effect2_dropShadow" />
                        <feBlend in="SourceGraphic" in2="effect2_dropShadow" result="shape" />
                      </filter>
                    </defs>
                  </svg>


                  {/* <img onClick={this.props.open} className="shadow-xl h-12 w-12 block md:hidden p-3" src="/images/on-boarding/modalButton.png" alt=""></img> */}
                </div>
                <div className="md:hidden h-6 w-6 block absolute shopping-cart-button-quantity text-white leading-loose text-center rounded-full bg-red-500 font-bold text-xs">{this.props.length}</div>
              </div>
            : ""}

        <div className="flex justify-around ">
          {first 
          ? (none ? null : <Link to="/" className="px-8 sm:px-12 py-2 rounded-full bg-white border-2 border-gray-400 text-gray-500 hover:border-gray-500 hover:text-gray-600">Back</Link>)
          : <button className="px-8 sm:px-12 py-2 rounded-full bg-white border-2 border-gray-400 text-gray-500 hover:border-gray-500 hover:text-gray-600" onClick={this.props.back}>Back</button>}

          {last
          ? <button className="px-8 sm:px-12 py-2 rounded-full bg-green-400 text-white font-bold hover:bg-green-500" onClick={this.props.submit}>Submit</button> 
          : <button className="px-8 sm:px-12 py-2 rounded-full bg-green-400 text-white font-bold hover:bg-green-500" onClick={this.props.continue}>Continue</button>}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  {}
)(Footer);
