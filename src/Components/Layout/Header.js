import React from "react";
import style from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = () => {
  return (
    <div className={style.header}>
      <h1>SandipMeals</h1>

      <HeaderCartButton />
    </div>
  );
};

export default Header;
