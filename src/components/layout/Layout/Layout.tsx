import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import classNames from "classnames";
import ProgressBar from "../ProgressBar/ProgressBar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <ProgressBar />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
