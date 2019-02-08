import React from "react";
// import PropTypes from "prop-types";

const DashboardContent = ({ profile }) => {
  function findProp(obj, prop, defval) {
    if (typeof defval == "undefined") defval = null;
    prop = prop.split(".");
    for (var i = 0; i < prop.length; i++) {
      if (typeof obj[prop[i]] == "undefined") return defval;
      obj = obj[prop[i]];
    }
    return obj;
  }

  const keyify = (obj, prefix = "") =>
    Object.keys(obj).reduce((res, el) => {
      if (Array.isArray(obj[el])) {
        return res;
      } else if (typeof obj[el] === "object" && obj[el] !== null) {
        return [...res, ...keyify(obj[el], prefix + el + ".")];
      } else {
        return [...res, prefix + el];
      }
    }, []);


  return (
    <div className="dashboard-container">
      <h1>Dashboard coming soon....</h1>
      <img className="dashboard-img" src="images/dashboard-mock-up.png" alt="" />
    </div>
  );
};

export default DashboardContent;
