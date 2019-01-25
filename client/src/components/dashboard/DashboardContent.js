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

  // const findNestedValue = value =>
  //   findProp(profile, "protein.chickenLegQuarters").value;

  const value = findProp(profile, "protein.chickenLegQuarters");

  const chickenLegQuarters = keyify(profile.protein.chickenLegQuarters);
  const chickenLegQuartersDisplay = chickenLegQuarters.map(item => (
    <p key={item}>
      {item}: {value[item].toString()}
    </p>
  ));

  return (
    <div>
      <div>
        <h1>Basic Details</h1>
        <p>Username: {profile.username}</p>
        <p>Age: {profile.age}</p>
        <p>Height: {profile.height}</p>
        <p>Weight: {profile.weight}</p>
        <p>Diet Orientation: {profile.dietOrientation}</p>
      </div>
      <div>
        <h1>Food Profile</h1>
        <h2>Chicken Leg Quarters</h2>
        <p>{chickenLegQuartersDisplay}</p>
      </div>
    </div>
  );
};

export default DashboardContent;
