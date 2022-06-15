import "../styles/home.scss";
import React from "react";
import { ArtworkItem } from "../components/artwork-item";

export const Home = ({ artworkItems }) => {
  return (
    <>
      <div className="news__wrapper">
        <div className="news-details__wrapper">
          <h1 className="title">Victoria Yakusheva</h1>
          <div className="news-details__title">
            <span>Event Horizon</span>
          </div>
          <div className="news-details__description">
            <span>2020</span>
          </div>
          <div className="news-details__button">
            <span>About artwork</span>
          </div>
        </div>
      </div>

      <div className="artworks__wrapper">
        <div className="artworks__title">
          <span>artworks</span>
        </div>
        <div className="artworks-list__wrapper">
          {artworkItems.map(item => (
            <ArtworkItem key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
};
