import React from "react";

const Home = () => {
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
          This browser is not allowed. <br />
          You need to use <strong>&quot;NEKOSENbrowser&quot;</strong>
        </p>
      </div>
    </div>
  );
};

export default Home;
