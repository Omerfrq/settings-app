import React, { useState } from 'react'
import Draggable from "react-draggable"
import { useLocation } from "react-router-dom"
import "../../../css/imagePanel.css"

export default function ImagePanel({ setScreen, tagActive, setTagActive, tags, updateTag, setTags, priceOption }) {
  let location = useLocation()
  const image = location.pathname.split("/")
  const imgElement = React.useRef(null)
  const [theme, setTheme] = useState("dark-")
  const [tagMessage, setTagMessage] = useState(false)
  const [tagDirection, setTagDirection] = useState(false)

  const eventLogger = (e, data) => {
    console.log("Event: ", e)
    console.log("Data: ", data)

    updateTag("x", tagActive, data.x)
    updateTag("y", tagActive, data.y)
  }
  const addTag = (y, x) => {
    let tag = {
      title: "New Tag",
      url: "url",
      subTitle: "Sub Text",
      price: "0",
      currency: priceOption,
      attribute: [],
      x,
      y,
      direction: "up",
      showSubTitle: true,
      showPrice: false,
      error: {
        error: true,
        titleError: true,
        urlError: true,
        subTitleError: false
      }
    }
    setTags([...tags, tag])
    setTagActive(tags.length)
    setScreen("tags")
  }

  const deleteTag = (index) => {
    index === tags.length - 1 && setTagActive(tags.length - 2)
    var arr = [...tags]
    arr = arr.filter((item, i) => i !== index)
    setTags(arr)
  }

  React.useEffect(() => {
    tags.length > 0
      ? setScreen("tags")
      : setScreen("home")
  }, [tagActive])

  return (
    <div className="image-detail">
      <div
        className={`theme dark-theme ${theme === "dark-" ? "active" : ""}`}
        onClick={() => { setTheme("dark-") }}
      >
      </div>
      <div
        className={`theme light-theme ${theme === "light-" ? "active" : ""}`}
        onClick={() => { setTheme("light-") }}
      >
      </div>
      <div className="brush">
        <img src={require("../../../images/main/tagContent/tagImage/icons/brush.svg").default} alt="Brush" />
      </div>
      <div
        className={`bin ${tagMessage ? "active" : ""}`}
        onClick={() => { setTagMessage(!tagMessage) }}
      >
        <img src={require("../../../images/main/tagContent/tagImage/icons/bin.svg").default} alt="Bin" />
      </div>
      <div
        className={`tag-direction ${tagDirection ? "active" : ""}`}
        onClick={() => { setTagDirection(!tagDirection) }}
      >
        <img src={require("../../../images/main/tagContent/tagImage/icons/tag-direction.svg").default} alt="Bin" />
      </div>
      <div className="imageContainer">
        <div
          className="tag-area" id="tag-area" onClick={() => { setScreen("tags") }}>
          {tags.map((item, index) => {
            return (
              <Draggable
                key={index}
                bounds="parent"
                defaultPosition={{ x: item.x, y: item.y }}
                position={{ x: item.x, y: item.y }}
                scale={1}
                onStop={eventLogger}
              >
                <div
                  key={index}
                  className={`tag ${index === tagActive ? "active " + theme + "green" : theme} ${item.direction === "up" ? "direction-up" : "direction-down"}`}
                  onMouseDownCapture={() => { setTagActive(index) }}
                >
                  <div
                    className={`direction-toggle up ${tagDirection && tagActive === index ? "" : "d-none"}`}
                    onClick={() => { updateTag("direction", tagActive, "up") }}
                  ></div>
                  <div>
                    <p>{item.title}</p>
                    <p>
                      {item.showSubTitle && item.subTitle}
                      <span className="pl-2">{item.showPrice && item.currency + item.price}</span>
                    </p>
                  </div>
                  <div className={`message ${item.error.error ? "" : "d-none"}`}>
                    <img src={require("../../../images/main/tagContent/tagImage/icons/error.svg").default} alt="Error In Tag" />
                  </div>
                  <div className="message">
                    <img
                      className={tagMessage ? "" : "d-none"}
                      onClick={() => { deleteTag(index) }}
                      src={require("../../../images/main/tagContent/tagImage/icons/delete.svg").default}
                      alt="Delete Tag"
                    />
                  </div>
                  <div
                    className={`direction-toggle down ${tagDirection ? "" : "d-none"}`}
                    onClick={() => { updateTag("direction", tagActive, "down") }}
                  ></div>
                </div>
              </Draggable>
            )
          })}
          <img
            className="workingImage"
            onClick={(e) => addTag(e.nativeEvent.offsetY, e.nativeEvent.offsetX)}
            ref={imgElement}
            src={`../../../images/main/tagContent/gallery/${image[3]}`}
            alt="tag-img"
          />
          <div className={`tag-icon ${theme === "light-" ? "tag-icon-light" : "tag-icon-dark"}`} >
            <img src={require("../../../images/main/tagContent/tagImage/icons/tag.svg").default} alt="Brush" />
          </div>
        </div>
      </div>
    </div>
  )
}

