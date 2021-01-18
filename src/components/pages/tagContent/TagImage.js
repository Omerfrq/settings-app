import React, { useState } from "react"
import TagForm from "./TagForm"
import TagPublishTag from "./TagPublishTag"
import ImagePanel from "./ImagePanel"
import "../../../css/tagImage.css"

let data = []

export default function TagImage() {
  let [screen, setScreen] = useState("home")
  let [tags, setTags] = useState([...data])
  let [tagActive, setTagActive] = useState(-1)
  let [priceOption, setPriceOption] = useState("$")

  const updateTag = (field, index, value) => {
    if (value !== "x" || value !== "y")
      formValidate(field, index, value)

    let updated = [...tags]
    updated[index][field] = value
    setTags(updated)
  }

  const formValidate = (field, index, value) => {
    let updated = [...tags]

    updated[index]["error"]["error"] = false
    if (field === "title") {
      value.length > 25 || value.length === 0
        ? updated[index]["error"]["titleError"] = true
        : updated[index]["error"]["titleError"] = false
    }
    else if (field === "subTitle") {
      value.length > 20
        ? updated[index]["error"]["subTitleError"] = true
        : updated[index]["error"]["subTitleError"] = false
    }
    else if (field === "url") {
      var pattern = new RegExp('^(https?:\\/\\/)?' +
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' +
        '((\\d{1,3}\\.){3}\\d{1,3}))' +
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' +
        '(\\?[;&a-z\\d%_.~+=-]*)?' +
        '(\\#[-a-z\\d_]*)?$', 'i')

      if (pattern.test(value) === true) {
        updated[index]["error"]["urlError"] = false
      } else {
        updated[index]["error"]["urlError"] = true
      }
    }

    if (
      updated[index]["error"]["titleError"] ||
      updated[index]["error"]["urlError"] ||
      updated[index]["error"]["subTitleError"]
    ) {
      updated[index]["error"]["error"] = true
    }
  }
  return (
    <div className="tag-image h-100">
      <div className={`tag-image-layer ${screen !== "home" && "d-none"}`}>
        <ul className="tag-status">
          <li>Tag Image</li>
        </ul>
        <p>There are no tags currently on this image.</p>
        <p>First click on the part of the image you want to add a tag.</p>
        <p>Then fill out the tag details like the title and destination URL you want to send traffic to.</p>
        <p>Once your finished making your tags, make sure you Save and Publish.</p>
        <div className="form-action">
          <input className="secondary-btn" type="button" value="Cancel" />
        </div>
      </div>

      {tags.map((item, index) => (
        <TagForm
          key={index}
          item={item}
          index={index}
          screen={screen}
          setScreen={setScreen}
          tags={tags}
          setTags={setTags}
          tagActive={tagActive}
          setTagActive={setTagActive}
          updateTag={updateTag}
          priceOption={priceOption}
          setPriceOption={setPriceOption}
        ></TagForm>
      ))}

      <TagPublishTag
        screen={screen}
        setScreen={setScreen}
        tags={tags}
      ></TagPublishTag>

      <ImagePanel
        setScreen={setScreen}
        tagActive={tagActive}
        setTagActive={setTagActive}
        tags={tags}
        updateTag={updateTag}
        setTags={setTags}
        priceOption={priceOption}
      ></ImagePanel>

    </div>
  )
}
