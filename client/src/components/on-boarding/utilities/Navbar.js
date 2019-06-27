import React, { Component } from "react";
import { Link } from "react-router-dom";
// import PropTypes from "prop-types";
import { connect } from "react-redux";

class Navbar extends Component {
  render() {

    return (
      <header className="md:px-16 px-6 bg-white flex flex-wrap items-center md:py-10 py-6">
        <div className="flex-1 flex justify-between items-center">
          <Link to="/">
            <svg width="172" height="35" viewBox="0 0 172 35" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 4.17614C0 1.86972 1.86972 0 4.17614 0H30.8239C33.1303 0 35 1.86972 35 4.17614V30.8239C35 33.1303 33.1303 35 30.8239 35H4.17614C1.86972 35 0 33.1303 0 30.8239V4.17614Z" fill="#EE9986" />
              <path d="M5.17041 26.1009C5.17041 24.9202 6.12753 23.9631 7.30819 23.9631H14.865C16.0457 23.9631 17.0028 24.9202 17.0028 26.1009V27.294C17.0028 28.4747 16.0457 29.4318 14.865 29.4318H7.30819C6.12753 29.4318 5.17041 28.4747 5.17041 27.294V26.1009Z" fill="white" />
              <path fillRule="evenodd" clipRule="evenodd" d="M14.865 24.4602H7.30819C6.4021 24.4602 5.66757 25.1948 5.66757 26.1009V27.294C5.66757 28.2001 6.4021 28.9347 7.30819 28.9347H14.865C15.7711 28.9347 16.5056 28.2001 16.5056 27.294V26.1009C16.5056 25.1948 15.7711 24.4602 14.865 24.4602ZM7.30819 23.9631C6.12753 23.9631 5.17041 24.9202 5.17041 26.1009V27.294C5.17041 28.4747 6.12753 29.4318 7.30819 29.4318H14.865C16.0457 29.4318 17.0028 28.4747 17.0028 27.294V26.1009C17.0028 24.9202 16.0457 23.9631 14.865 23.9631H7.30819Z" fill="white" />
              <path d="M5.27002 16.9531C5.27002 15.7725 6.22714 14.8153 7.4078 14.8153H27.5925C28.7731 14.8153 29.7302 15.7725 29.7302 16.9531V18.1463C29.7302 19.327 28.7731 20.2841 27.5925 20.2841H7.4078C6.22714 20.2841 5.27002 19.327 5.27002 18.1463V16.9531Z" fill="white" />
              <path fillRule="evenodd" clipRule="evenodd" d="M27.5925 15.3125H7.4078C6.50171 15.3125 5.76718 16.047 5.76718 16.9531V18.1463C5.76718 19.0524 6.50171 19.7869 7.4078 19.7869H27.5925C28.4986 19.7869 29.2331 19.0524 29.2331 18.1463V16.9531C29.2331 16.047 28.4986 15.3125 27.5925 15.3125ZM7.4078 14.8153C6.22714 14.8153 5.27002 15.7725 5.27002 16.9531V18.1463C5.27002 19.327 6.22714 20.2841 7.4078 20.2841H27.5925C28.7731 20.2841 29.7302 19.327 29.7302 18.1463V16.9531C29.7302 15.7725 28.7731 14.8153 27.5925 14.8153H7.4078Z" fill="white" />
              <path d="M5.27002 7.8054C5.27002 6.62473 6.22714 5.66761 7.4078 5.66761H27.5925C28.7731 5.66761 29.7302 6.62473 29.7302 7.8054V8.99858C29.7302 10.1792 28.7731 11.1364 27.5925 11.1364H7.4078C6.22714 11.1364 5.27002 10.1792 5.27002 8.99858V7.8054Z" fill="white" />
              <path fillRule="evenodd" clipRule="evenodd" d="M27.5925 6.16477H7.4078C6.50171 6.16477 5.76718 6.89931 5.76718 7.8054V8.99858C5.76718 9.90467 6.50171 10.6392 7.4078 10.6392H27.5925C28.4986 10.6392 29.2331 9.90467 29.2331 8.99858V7.8054C29.2331 6.89931 28.4986 6.16477 27.5925 6.16477ZM7.4078 5.66761C6.22714 5.66761 5.27002 6.62473 5.27002 7.8054V8.99858C5.27002 10.1792 6.22714 11.1364 7.4078 11.1364H27.5925C28.7731 11.1364 29.7302 10.1792 29.7302 8.99858V7.8054C29.7302 6.62473 28.7731 5.66761 27.5925 5.66761H7.4078Z" fill="white" />
              <path d="M26.4987 19.0909C27.3499 19.0909 28.0399 18.4009 28.0399 17.5497C28.0399 16.6985 27.3499 16.0085 26.4987 16.0085C25.6475 16.0085 24.9575 16.6985 24.9575 17.5497C24.9575 18.4009 25.6475 19.0909 26.4987 19.0909Z" fill="#EE9986" />
              <path d="M52.6174 16.6014C53.4761 16.6014 54.2072 16.4739 54.8106 16.2188C55.4257 15.9638 55.9247 15.6102 56.3077 15.158C56.6906 14.6942 56.9691 14.1493 57.1432 13.5233C57.3289 12.8856 57.4217 12.1842 57.4217 11.419C57.4217 10.8857 57.3463 10.3987 57.1954 9.95816C57.0445 9.506 56.8125 9.11761 56.4991 8.79298C56.1974 8.46835 55.8086 8.21908 55.3329 8.04518C54.8687 7.87127 54.3174 7.78431 53.6792 7.78431H50.7548L49.6582 16.6014H52.6174ZM54.1666 3.95834C55.6288 3.95834 56.8821 4.13805 57.9265 4.49746C58.9709 4.84527 59.8297 5.33221 60.5027 5.95828C61.1874 6.58435 61.6864 7.32636 61.9998 8.1843C62.3247 9.04225 62.4872 9.97555 62.4872 10.9842C62.4872 12.3523 62.2725 13.616 61.8431 14.7754C61.4253 15.9232 60.7871 16.9203 59.9283 17.7666C59.0812 18.6014 58.0077 19.2564 56.708 19.7318C55.4083 20.2071 53.8823 20.4448 52.13 20.4448H49.1882L48.1089 29.1924H43.0957L46.1767 3.95834H54.1666Z" fill="#EE9986" />
              <path d="M73.5803 14.358C73.4759 14.3464 73.3714 14.3406 73.267 14.3406C73.1626 14.3406 73.0581 14.3406 72.9537 14.3406C72.0253 14.3406 71.1724 14.5493 70.3948 14.9667C69.6173 15.3841 68.9443 15.9522 68.3756 16.671C67.8186 17.3898 67.3776 18.2246 67.0527 19.1753C66.7394 20.126 66.5827 21.1288 66.5827 22.1839C66.5827 23.3896 66.7684 24.265 67.1397 24.8099C67.5111 25.3432 67.9985 25.6099 68.6019 25.6099C69.0313 25.6099 69.4549 25.4533 69.8726 25.1403C70.302 24.8273 70.7024 24.3983 71.0737 23.8534C71.4451 23.3085 71.7874 22.6708 72.1007 21.9404C72.4141 21.1984 72.6868 20.41 72.9189 19.5753L73.5803 14.358ZM72.3967 25.8185C71.6307 26.9432 70.772 27.8301 69.8204 28.4793C68.8804 29.1286 67.8418 29.4532 66.7045 29.4532C66.0431 29.4532 65.4106 29.3257 64.8072 29.0706C64.2153 28.804 63.6931 28.4098 63.2405 27.8881C62.788 27.3547 62.4282 26.6881 62.1613 25.8881C61.906 25.0765 61.7784 24.1316 61.7784 23.0534C61.7784 21.9752 61.9118 20.9317 62.1787 19.9231C62.4456 18.9028 62.8286 17.9463 63.3276 17.0536C63.8266 16.1609 64.43 15.3435 65.1379 14.6015C65.8574 13.8479 66.6523 13.2044 67.5227 12.6711C68.4046 12.1378 69.3562 11.7262 70.3774 11.4364C71.4103 11.1349 72.4953 10.9842 73.6326 10.9842C74.4681 10.9842 75.3036 11.048 76.1392 11.1755C76.9747 11.2915 77.7986 11.5001 78.611 11.8016L76.4525 29.1924H73.8937C73.5919 29.1924 73.3366 29.1518 73.1277 29.0706C72.9305 28.9895 72.768 28.8793 72.6404 28.7402C72.5243 28.6011 72.4431 28.4388 72.3967 28.2533C72.3502 28.0678 72.327 27.8649 72.327 27.6446L72.3967 25.8185Z" fill="#EE9986" />
              <path d="M86.3011 14.6711C87.1946 13.4189 88.1694 12.4914 89.2255 11.8885C90.2931 11.2857 91.4013 10.9842 92.5502 10.9842C93.2929 10.9842 93.966 11.1349 94.5694 11.4364C95.1729 11.7378 95.6719 12.1784 96.0664 12.7581C96.4726 13.3378 96.7569 14.0508 96.9194 14.8971C97.0818 15.7435 97.0934 16.7116 96.9542 17.8014L95.5964 29.1924H90.8095L92.1498 17.8014C92.2891 16.7232 92.2369 15.9638 91.9932 15.5232C91.7495 15.071 91.3201 14.845 90.7051 14.845C90.2641 14.845 89.8115 14.9783 89.3473 15.245C88.8831 15.5 88.4363 15.8652 88.007 16.3406C87.5776 16.8159 87.183 17.3898 86.8233 18.0623C86.4635 18.7347 86.1734 19.4825 85.9529 20.3057L84.9607 29.1924H80.1564L82.3149 11.2451H84.7693C85.2683 11.2451 85.657 11.3668 85.9355 11.6103C86.214 11.8538 86.3533 12.2422 86.3533 12.7755L86.3011 14.6711Z" fill="#EE9986" />
              <path d="M100.439 25.436C100.439 25.3548 100.439 25.262 100.439 25.1577C100.439 25.0418 100.444 24.8794 100.456 24.6708C100.479 24.4505 100.508 24.1664 100.543 23.8186C100.589 23.4592 100.647 22.9954 100.717 22.4273L101.674 14.7058H100.108C99.8758 14.7058 99.6843 14.6247 99.5334 14.4624C99.3942 14.3001 99.3477 14.0566 99.3942 13.732L99.6204 11.8538L102.336 11.332L103.816 6.6887C103.978 6.16697 104.332 5.90611 104.877 5.90611H107.454L106.775 11.3668H110.97L110.569 14.7058H106.374L105.452 22.1665C105.394 22.6418 105.347 23.0186 105.313 23.2969C105.278 23.5751 105.249 23.7896 105.226 23.9403C105.214 24.0911 105.208 24.1954 105.208 24.2534C105.208 24.2998 105.208 24.3345 105.208 24.3577C105.208 24.7635 105.301 25.0881 105.487 25.3316C105.672 25.5635 105.951 25.6794 106.322 25.6794C106.531 25.6794 106.711 25.6562 106.862 25.6099C107.013 25.5519 107.14 25.4939 107.245 25.436C107.361 25.3664 107.465 25.3084 107.558 25.262C107.651 25.2041 107.75 25.1751 107.854 25.1751C108.005 25.1751 108.115 25.2099 108.185 25.2794C108.254 25.3374 108.324 25.4417 108.394 25.5925L109.438 27.8881C108.765 28.4098 108.028 28.804 107.227 29.0706C106.427 29.3373 105.62 29.4706 104.808 29.4706C103.485 29.4706 102.435 29.117 101.657 28.4098C100.891 27.691 100.485 26.6997 100.439 25.436Z" fill="#EE9986" />
              <path d="M117.919 15.2623C118.372 14.4276 118.848 13.7146 119.347 13.1233C119.857 12.532 120.385 12.074 120.931 11.7494C121.476 11.4132 122.033 11.2219 122.602 11.1755C123.17 11.1175 123.745 11.2161 124.325 11.4712L123.455 15.9754C122.77 15.6855 122.126 15.5638 121.523 15.6102C120.931 15.6565 120.38 15.8884 119.869 16.3058C119.37 16.7232 118.917 17.3319 118.511 18.1318C118.105 18.9318 117.751 19.9405 117.449 21.1578L116.475 29.1924H111.757L113.933 11.2451H116.405C116.904 11.2451 117.293 11.3668 117.571 11.6103C117.85 11.8538 117.989 12.2422 117.989 12.7755L117.919 15.2623Z" fill="#EE9986" />
              <path d="M131.284 11.2625L129.143 29.1924H124.409L126.55 11.2625H131.284ZM132.329 6.16697C132.329 6.57276 132.242 6.94956 132.068 7.29737C131.905 7.64519 131.685 7.95242 131.406 8.21908C131.139 8.48574 130.826 8.69443 130.466 8.84515C130.118 8.99587 129.758 9.07123 129.387 9.07123C129.016 9.07123 128.656 8.99587 128.308 8.84515C127.971 8.69443 127.67 8.48574 127.403 8.21908C127.147 7.95242 126.938 7.64519 126.776 7.29737C126.625 6.94956 126.55 6.57276 126.55 6.16697C126.55 5.77278 126.631 5.40178 126.793 5.05396C126.956 4.69455 127.165 4.38152 127.42 4.11486C127.687 3.8482 127.989 3.63951 128.325 3.48879C128.673 3.32648 129.033 3.24532 129.404 3.24532C129.787 3.24532 130.153 3.32068 130.501 3.4714C130.861 3.62212 131.174 3.83081 131.441 4.09747C131.708 4.36413 131.923 4.67716 132.085 5.03657C132.248 5.38439 132.329 5.76119 132.329 6.16697Z" fill="#EE9986" />
              <path d="M140.63 14.7058L138.977 28.3924L138.054 31.5575C137.857 32.172 137.567 32.6473 137.184 32.9835C136.812 33.3198 136.279 33.4879 135.582 33.4879H133.65L135.913 14.7232L134.677 14.4624C134.375 14.3812 134.132 14.2537 133.946 14.0798C133.76 13.8943 133.691 13.6276 133.737 13.2798L133.981 11.3668H136.331L136.47 10.1842C136.598 9.16398 136.87 8.24227 137.288 7.41911C137.718 6.58435 138.257 5.88292 138.907 5.31483C139.569 4.73513 140.329 4.28877 141.187 3.97574C142.046 3.6627 142.975 3.50618 143.973 3.50618C144.355 3.50618 144.715 3.53517 145.052 3.59314C145.4 3.63951 145.742 3.71487 146.079 3.81922L145.644 6.28871C145.586 6.55537 145.423 6.72927 145.156 6.81043C144.889 6.87999 144.605 6.91478 144.303 6.91478C143.851 6.91478 143.433 6.97275 143.05 7.08868C142.679 7.20462 142.354 7.40172 142.075 7.67997C141.797 7.94663 141.565 8.30024 141.379 8.74081C141.193 9.16978 141.066 9.6973 140.996 10.3234L140.874 11.3668H144.721L144.268 14.7058H140.63Z" fill="#EE9986" />
              <path d="M162.143 11.2625L159.967 29.1924H157.53C156.393 29.1924 155.825 28.6532 155.825 27.575L155.877 25.9577C154.995 27.1402 154.032 28.0214 152.987 28.6011C151.954 29.1692 150.881 29.4532 149.767 29.4532C149.013 29.4532 148.334 29.3025 147.73 29.0011C147.127 28.6996 146.628 28.2591 146.233 27.6794C145.839 27.0997 145.56 26.3924 145.398 25.5577C145.235 24.7113 145.224 23.7433 145.363 22.6534L146.703 11.2625H151.508L150.15 22.6534C150.022 23.7317 150.074 24.4968 150.306 24.949C150.55 25.3896 150.985 25.6099 151.612 25.6099C152.03 25.6099 152.459 25.4939 152.9 25.262C153.353 25.0186 153.782 24.6766 154.188 24.236C154.606 23.7954 154.989 23.2679 155.337 22.6534C155.697 22.0274 155.993 21.3317 156.225 20.5665L157.356 11.2625H162.143Z" fill="#EE9986" />
              <path d="M163.741 29.1924L166.892 3.26271H171.627L168.459 29.1924H163.741Z" fill="#EE9986" />
            </svg>
          </Link>
        </div>

        <div className=" md:flex md:items-center md:w-auto" id="menu">
          <nav>
            <Link to="/dashboard">
                <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="1.5" y="1.5" width="32" height="32" rx="3.5" stroke="#CACACA" strokeWidth="3"/>
                    <path d="M23.619 25H21.72C21.582 25 21.471 24.964 21.387 24.892C21.303 24.814 21.237 24.733 21.189 24.649L17.85 19.33C17.802 19.48 17.745 19.609 17.679 19.717L14.43 24.649C14.37 24.733 14.301 24.814 14.223 24.892C14.145 24.964 14.046 25 13.926 25H12.135L16.554 18.349L12.324 12.076H14.223C14.361 12.076 14.463 12.097 14.529 12.139C14.595 12.181 14.652 12.244 14.7 12.328L17.967 17.395C18.015 17.239 18.081 17.095 18.165 16.963L21.225 12.364C21.279 12.268 21.339 12.196 21.405 12.148C21.471 12.1 21.555 12.076 21.657 12.076H23.484L19.227 18.268L23.619 25Z" fill="#CACACA"/>
                </svg>
            </Link>
          </nav>
        </div>

      </header>    
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  {}
)(Navbar);