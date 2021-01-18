import { Link } from "react-router-dom";
export default function GalleryItem({ images: image, baseUrl: BaseUrl }) {
  return (
    <div className="gallery-item">
      <Link to={`/Tag Content/Tag Image/${image}`}>
        <div className="tag-count">
          {/* <img src="./images/main/tagContent/tagImage/icons/tag.svg" alt="Tags" /> */}
          <img src={require("../../../images/main/tagContent/tagImage/icons/tag.svg").default} alt="Tags" />
          <span>2</span>
        </div>
        <img src={`${BaseUrl + image}`} alt="gallery" />
      </Link>
    </div >
  );
}