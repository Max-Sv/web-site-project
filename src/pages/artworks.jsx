import React from "react";
import "../styles/artworks.scss";
import { ArtworkItem } from "../components/artwork-item";

export const Artworks = ({ artworkItems }) => {
  return (
    <div className="artworks__wrapper">
      <div className="artworks-list__wrapper">
        {artworkItems.map(item => (
          <ArtworkItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};
