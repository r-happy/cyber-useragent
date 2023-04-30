import React from "react";

const Flag = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "100svh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          backgroundColor: "#301E67",
          padding: "32px",
          borderRadius: "24px",
        }}
      >
        <p>
          Hello!
          <br />
          <span style={{color: "#B6EADA", fontWeight: "bold"}}>{`NEKOSEN{yes_this_browser_is_allowed}`}</span>
        </p>
      </div>
    </div>
  );
};

export default Flag;
