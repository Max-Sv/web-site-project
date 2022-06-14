import React from "react";
import "../styles/artwork.scss";
import "../styles/slider.scss";
import { useTranslation } from "react-i18next";
import Slider from "react-slick";

export const Artwork = ({ match }) => {
  const {
    params: { artworkId },
  } = match;
  const { t, i18n } = useTranslation("common");
  const artworks = t("artworks", { returnObjects: true }).map(item => {
    return item;
  });
  const [artwork, setArtwork] = React.useState(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    className: "center",
  };

  console.log("artwork:", artwork);
  // .map(item => {
  //   console.log("item:", item);
  // });

  // React.useEffect(() => {
  //   console.log("artworkId:", artworkId);
  //   if (!artworkId) {
  //     return;
  //   }
  //   setArtwork(getCurrentArtwork());
  // }, [artworkId]);

  React.useEffect(() => {
    console.log("artworks:", artworks);
    if (!artworkId) {
      return;
    }
    setArtwork(getCurrentArtwork);
  }, [artworks]);

  const getCurrentArtwork = () => artworks.find(item => item.id === Number(artworkId));

  return (
    <>
      {artwork ? (
        <div className="artwork__wrapper wrapper">
          <div className="artwork__slider-block">
            <Slider {...settings}>
              {artwork.sliderImages.map(item => (
                <div className="slide__item">
                  <div className="item">
                    <img src={`../../assets/${item.url}`} />
                  </div>
                </div>
              ))}
            </Slider>
          </div>
          <div className="artwork__main">
            <div className="artwork__left">
              <p className="artwork__title w700">«{artwork.title}»</p>
              <p className="artwork__year w400">{artwork.year}</p>
            </div>
            <div className="artwork__right">
              <p className="year">{artwork.text}</p>
            </div>
          </div>
        </div>
      ) : (
        <p>loading...</p>
      )}
    </>
  );
};
