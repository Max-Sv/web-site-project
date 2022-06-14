import React from "react";
import "../styles/artworks.scss";
import { useTranslation } from "react-i18next";
import { ArtworkItem } from "../components/artwork-item";

export const Artworks = () => {
  const { t, i18n } = useTranslation("common");
  const artworks = t("artworks", { returnObjects: true }).map(item => {
    return item;
  });
  return (
    <div className="artworks__wrapper">
      <div className="artworks-list__wrapper">
        {artworks.map(item => (
          <ArtworkItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};
