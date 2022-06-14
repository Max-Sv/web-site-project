import "../styles/footer.scss";
import React from "react";
import { Logo } from "../common/logo";

export const Footer = ({ isDark }) => {
  return (
    <>
      {isDark ? (
        <div className="footer_top">
          <Logo></Logo>
        </div>
      ) : (
        <div className="footer_wrapper">
          <img src="../assets/main_logo.svg" alt="logo" className="footer__logo-image" />
          {/* <!--    <img src="../assets/big_love.svg" alt="big love" className="footer__big-love">--> */}
        </div>
      )}
    </>
  );
};
