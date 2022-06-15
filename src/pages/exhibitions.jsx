import React from "react";
import "../styles/exhibitions.scss";

export const Exhibition = ({ exhibitionItems }) => {
  return (
    <div className="exhibition__wrapper wrapper">
      <div className="exhibition-list__wrapper">
        {exhibitionItems.map(item => (
          <div className="exhibition-item" key={item.id}>
            <div className="exhibition-item__left w500">
              <span>
                {item.date} | {item.year}
              </span>
            </div>
            <div className="exhibition-item__right">
              <p className="w700">{item.name}</p>
              <p className="w700">{item.place}</p>
              <p className="w400">{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
