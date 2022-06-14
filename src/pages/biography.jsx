import React from "react";
import "../styles/biography.scss";
import { useTranslation } from "react-i18next";

export const Biography = ({ biographyItems }) => {
  const { t } = useTranslation("common");
  return (
    <div className="biography__wrapper wrapper">
      <div className="biography-foto">
        <img src="../../assets/avatar.jpg" alt="Victoria Yakusheva" />
      </div>
      <div className="biography-list__wrapper">
        <p className="biography-title">{t("biography.title")}</p>
        {/* {biographyItems.map(item => (
          <div key={item.id}>
            <p className="biography-year">{item.year}</p>
            <p className="biography-text">{item.text}</p>
          </div>
        ))} */}
        <p className="biography-text">{t("biography.text")}</p>
      </div>
    </div>
  );
};
