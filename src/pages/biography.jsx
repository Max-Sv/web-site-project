import React from "react";
import "../styles/biography.scss";

export const Biography = ({ biographyItems }) => {
  return (
    <div className="biography__wrapper wrapper">
      <div className="biography-foto">
        <img src="../../assets/avatar.jpg" alt="Victoria Yakusheva" />
      </div>
      <div className="biography-list__wrapper">
        <p className="biography-title">Victoria Yakusheva</p>
        {biographyItems.map(item => (
          <div key={item.id}>
            <p className="biography-year">{item.year}</p>
            <p className="biography-text">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
