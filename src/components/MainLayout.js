import React from "react";

// import section
import Header from "./Header";
import Footer from "./Footer";

const MainLayout = props => {
  const { children, active } = props;
  return (
    <div>
      <Header />
      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default MainLayout;
