import React from "react";
import "../styles/exhibitions.scss";
import { useTranslation } from "react-i18next";

export const Exhibition = () => {
  const { t } = useTranslation("common");
  const exhibitionItems = t("exhibitions", { returnObjects: true }).map(item => {
    return item;
  });
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
              <p className="w700">{item.gallery}</p>
              <p className="w700">{item.location}</p>
              <p className="w400">
                {item.text} (Sculpture: {item.artworkName})
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
