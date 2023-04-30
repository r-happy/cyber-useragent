import React from "react";
import dynamic from "next/dynamic";
const Home = dynamic(() => import("../components/Home"), { ssr: false });
const Flag = dynamic(() => import("../components/Flag"), { ssr: false });

function Main() {
  let useragent = navigator.userAgent;
  return (
    <div>
      <div>{useragent === "NEKOSENbrowser" ? <Flag /> : <Home />}</div>
    </div>
  );
}

export default Main;
