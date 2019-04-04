import React from "react";
import spinner from "./loading.gif";

export default () => {
  return (
    <div>
      <img
        src={spinner}
        style={{ width: "200px", margin: "300px auto 0", display: "block" }}
        alt="loading..."
      />
    </div>
  );
};
