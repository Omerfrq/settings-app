import React, { useState } from 'react'
import "../../../css/tagPublish.css"

export default function TagPublishTag({ screen, setScreen, tags }) {

  let [tagDisableLength, setTagDisableLength] = useState(0)

  React.useEffect(() => {
    if (tags.length > 0) {
      let temp = 0
      tags.map(v => (v.error.error && temp++))
      setTagDisableLength(temp)
    } else if (tags.length === 0) { setScreen("home") }
  }, [tags])

  return (
    <div className={`tag-unpublish-layer ${screen !== "publish" && "d-none"}`} >
      <ul className="tag-status">
        <li>
          {` 
            ${tags.length - tagDisableLength} Tag Unpublished  
            ${tagDisableLength > 0 && tagDisableLength + " Disabled"} 
            `}
        </li>
      </ul>
      <p>Click on the image to continue adding or editing tags. </p>
      <p>Once your finished making your tags, make sure to Save and then Publlish.</p>
      <div className="form-action">
        <input className="primary-btn" type="button" value="Publish" />
        <input
          className="secondary-btn"
          type="button"
          value="Back"
          onClick={
            tags.length < 1
              ? () => { setScreen("home") }
              : () => { setScreen("tags") }
          }
        />
      </div>
    </div>
  )
}
