import React, { useState } from "react";
import GalleryItem from "./tagContent/GalleryItem"
import "../../css/tagContent.css"

const images = [
  "1.png",
  "2.png",
  "3.png",
  "4.png",
  "5.png",
  "6.png",
]

const TagContents = () => {
  const [sort, setSort] = React.useState("Size");
  const [sortClass, setSortClass] = React.useState("active");

  const setSortClassFunc = (e) => {
    (sort === e.target.innerHTML)
      ? sortClass === "active" ? setSortClass("active up") : setSortClass("active")
      : setSort(e.target.innerHTML)
  }

  const [zoomLevel, setZoomLevel] = useState(0),
    [isZoomOutActive, setZoomOutActive] = useState(true);

  const [isZoomInActive, setZoomInActive] = useState(false);

  const [galleryGridStyle, setGalleryGrid] = useState({
    gridTemplateColumns: "1fr 1fr 1fr",
  });

  const zoomAction = (e) => {
    if (e.currentTarget.alt === "Zoom In" && zoomLevel > 0) {
      setZoomLevel(zoomLevel - 1);
    } else if (e.currentTarget.alt === "Zoom Out" && zoomLevel < 2) {
      setZoomLevel(zoomLevel + 1);
    }
  };

  React.useEffect(() => {
    switch (zoomLevel) {
      case 0:
        setGalleryGrid({ gridTemplateColumns: "1fr 1fr 1fr" });
        setZoomInActive(false);
        break;
      case 1:
        setGalleryGrid({ gridTemplateColumns: "1fr 1fr 1fr 1fr" });
        setZoomInActive(true);
        setZoomOutActive(true);
        break;
      case 2:
        setGalleryGrid({ gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr" });
        setZoomOutActive(false);
        break;
      default:
        setGalleryGrid({ gridTemplateColumns: "1fr 1fr 1fr" });
        setZoomInActive(false);
        break;
    }
  }, [zoomLevel]);
  return (
    <div className="tag-content">
      <div className="input-area">
        <h5>Find Images from URL:</h5>
        <div className="input-field">
          <img
            src={require("../../images/main/tagContent/search.svg").default}
            alt="Search"
          />
          <input type="text" placeholder="Find Images from URL:" />
        </div>
        <p>
          These are the images from the URL path. <br />
          Click an image to add or edit tags.
        </p>
      </div>
      <div className="result-area">
        <div className="gallery-controls">
          <div className="sort-action">
            <ul>
              <li>
                <span>Sort:</span>
              </li>
              <li
                className={sort === "Size" ? sortClass : ""}
                onClick={(e) => setSortClassFunc(e)}
              >
                Size
              </li>
              <li
                className={sort === "Resolution" ? sortClass : ""}
                onClick={(e) => setSortClassFunc(e)}
              >
                Resolution
              </li>
              <li
                className={sort === "Type" ? sortClass : ""}
                onClick={(e) => setSortClassFunc(e)}
              >
                Type
              </li>
              <li
                className={sort === "Date Added" ? sortClass : ""}
                onClick={(e) => setSortClassFunc(e)}
              >
                Date Added
              </li>
            </ul>
          </div>
          <div className="zoom-control">
            <ul>
              <li>
                <img
                  className={`${isZoomOutActive ? "" : "disabled"}`}
                  onClick={zoomAction}
                  src={
                    require("../../images/main/tagContent/zoom-out.svg").default
                  }
                  alt="Zoom Out"
                />
              </li>
              <li>
                <img
                  className={`${isZoomInActive ? "" : "disabled"}`}
                  onClick={zoomAction}
                  src={
                    require("../../images/main/tagContent/zoom-in.svg").default
                  }
                  alt="Zoom In"
                />
              </li>
            </ul>
          </div>
        </div>
        <div className="separator"></div>
        <div className="gallery" style={galleryGridStyle}>
          {
            images.map((value, index) => (
              <GalleryItem
                key={index}
                images={value}
                baseUrl="../images/main/tagContent/gallery/thumbnail/"
              ></GalleryItem>
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default TagContents;

