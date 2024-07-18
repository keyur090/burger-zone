import Header from "./Header"
import Footer from "./Footer";
import React from "react";
import Cart from "./Cart";

function Layout({ children }) {
  return (
    <>
      <Header />
      <div>{children}</div>
      <Footer/>
      <Cart/>
    </>
  );
}

export default Layout;
