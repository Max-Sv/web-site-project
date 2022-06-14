import "../styles/artwork-item.scss";
import { Link } from "react-router-dom";
import React from "react";

export const ArtworkItem = ({ item }) => {
  const { title, year, bigImg, id, text, subTitle } = item;
  const titleRef = React.useRef(null);
  const descriptionRef = React.useRef(null);
  const layoutRef = React.useRef(null);

  const mouseEnter = () => {
    layoutRef.current.classList.remove("hidden");
    titleRef.current.style.setProperty("opacity", ".5");
    descriptionRef.current.style.setProperty("opacity", ".5");
  };
  const mouseLeave = () => {
    layoutRef.current.classList.add("hidden");
    titleRef.current.style.removeProperty("opacity");
    descriptionRef.current.style.removeProperty("opacity");
  };

  return (
    <Link to={{ pathname: `/artwork/${id}` }} className="artworks-item__link">
      <div className="artworks-item__wrapper" onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>
        <img className="artworks-item__image" src={`../../assets/${bigImg}`} alt={title} />
        <div className="artworks-item__image-layout hidden" ref={layoutRef}>
          <div className="artworks-item__image-layout-wrapper">
            <div className="artworks-item__image-layout-title">{title}</div>
            <div className="artworks-item__image-layout-subtitle">{subTitle}</div>
            <div className="artworks-item__image-layout-description">{text}</div>
          </div>
        </div>
        <div className="artworks-item__title" ref={titleRef}>
          <span>{title}</span>
        </div>
        <div className="artworks-item__description" ref={descriptionRef}>
          <span>{year}</span>
        </div>
      </div>
    </Link>
  );
};
