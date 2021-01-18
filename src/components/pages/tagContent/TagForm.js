import React, { useState, useRef, useEffect } from 'react'
import "../../../css/tagForm.css"

export default function TagForm({ item, index, screen, setScreen, tags, setTags, tagActive, setTagActive, updateTag, priceOption, setPriceOption }) {
  let [advanceSetting, setAdvanceSetting] = useState(false)

  let [fieldDetail, setFieldDetail] = useState([{
    "title": false,
    "url": false,
    "subTitle": false,
    "price": false,
    "attributes": false,
  }])

  let [priceOptionVisibe, setPriceOptionVisibe] = useState(false)
  let [attriOptionVisibe, setAttriOptionVisibe] = useState(false)
  let [attriValueVisibe, setAttriValueVisibe] = useState(false)

  const setPriceOptionFun = (e) => {
    setPriceOption(e.target.innerHTML)
    updateTag("currency", tagActive, e.target.innerHTML)
  }

  const toggle = (field, index) => {
    let updated = [...tags]
    updated[index][field] = !updated[tagActive][field]
    setTags(updated)
  }

  const toggleFieldDetail = (field) => {
    let temp = [...fieldDetail]
    temp[field] = !fieldDetail[field]
    setFieldDetail(temp)
  }


  const [attri, setAttri] = useState([])

  let addAttri = () => {
    if (
      !attri.some(e => e[activeAttriOption] === activeAttriValue) &&
      activeAttriOption !== "" &&
      activeAttriValue !== ""
    ) {
      setAttri([...attri, { [activeAttriOption]: activeAttriValue }])
      setActiveAttriValue("")
    }
  }

  let deleteAttri = (e) => {
    let str = e.currentTarget.parentNode.childNodes[0].innerHTML.split(":")
    let option = str[0]
    let value = str[1].substring(1)

    let arr = []
    Object.entries(attri).map(([key, k]) => (
      Object.entries(k).map((v) => {
        if (v[0] === option && v[1] === value) { }
        else arr = [...arr, { [v[0]]: v[1] }]
      })
    ))
    setAttri(arr)
  }

  useEffect(() => (
    updateTag("attribute", index, attri)
  ), [attri])


  const attriOptopmSpan = useRef("");
  const [addAttriOptionToggle, setAddAttriOptionToggle] = useState(false)
  const [activeAttriOption, setActiveAttriOption] = useState("")
  const [attriOption, setAttriOption] = useState([])

  const [attriInputStyle, setSttriInputStyle] = useState({
    width: "50px",
    border: "none"
  })

  let attriOptionInputFunc = (e) => {
    setActiveAttriOption(e.target.value)
    setSttriInputStyle({
      minWidth: '50px',
      width: attriOptopmSpan.current.scrollWidth + 8,
      border: "none"
    })
  }

  let addAttriOptionFunc = () => {
    if (attriOption.includes(activeAttriOption) || activeAttriOption === "") {
      setAddAttriOptionToggle(false)
    } else {
      setAttriOption([...attriOption, activeAttriOption])
      setAddAttriOptionToggle(false)
    }
  }

  useEffect(() => (
    addAttriOptionToggle ? setAttriOptionVisibe(false) : () => { }
  ), [addAttriOptionToggle])


  const [activeAttriValue, setActiveAttriValue] = useState("")
  const [attriValue, setAttriValue] = useState([])

  let attriValueInputFunc = (e) => {
    if (e.key === 'Enter') {
      addAttriValueFunc(e)
      e.target.blur();
    } else {
      setActiveAttriValue(e.target.value)
    }
  }

  let addAttriValueFunc = (e) => {
    setActiveAttriOption("")
    e.target.value = null
    setAttriValueVisibe(false)
    if (!attriValue.includes(activeAttriValue) && activeAttriValue !== "") {
      setAttriValue([...attriValue, activeAttriValue])
    }
    addAttri()
  }

  let beforeSave = () => {
    let publish = true

    tags.map((v, i) => {
      if (v.error["titleError"] || v.error["urlError"]) {
        setTagActive(i)
        publish = false
        return
      }
    })

    publish && setScreen("publish")
  }

  useEffect(() => (
    setAttriOptionVisibe(false)
  ), [attriValueVisibe])

  return (
    <div className={`tag-detail-layer ${screen === "tags" ? tagActive === index ? "" : "d-none" : "d-none"}`} >
      <ul className="tag-status">
        <li>Tag Details</li>
        <li>
          <span></span>
        </li>
        <li>Enabled</li>
      </ul>
      <div className="field-area">
        <div className="field-label">
          <ul className="dual-section">
            <li>Display Title</li>
            <li className="align-right field-detail">
              <img
                onClick={() => toggleFieldDetail("title")}
                className={fieldDetail["title"] ? "active" : ""}
                src={require("./../../../images/main/tagContent/tagForm/info.svg").default}
                alt="Detail" />
              <p className="field-detail-popup">The most prominent text that <br />shows up on the tag.</p>
            </li>
          </ul>
        </div>
        <div className={`input-container input-container-error ${item.error.titleError ? "error" : ""}`}>
          <input
            type="text"
            placeholder="Title"
            onChange={(e) => updateTag("title", index, e.target.value)}
          />
          <span>25</span>
        </div>
      </div>
      <div className="field-area">
        <div className="field-label">
          <ul className="dual-section">
            <li>Destination URL</li>
            <li className="align-right field-detail">
              <img
                onClick={() => toggleFieldDetail("url")}
                className={fieldDetail["url"] ? "active" : ""}
                src={require("./../../../images/main/tagContent/tagForm/info.svg").default}
                alt="Detail" />
              <p className="field-detail-popup">The URL the tag links to when <br />clicked.</p>
            </li>
          </ul>
        </div>
        <div className={`input-container input-container-error ${item.error.urlError ? "error" : ""}`}>
          <input
            type="text"
            placeholder="URL"
            onChange={(e) => updateTag("url", index, e.target.value)}
          />
          <span>
            <span></span>
          </span>
        </div>
      </div>
      <div className="field-area field-area-radio">
        <div>
          <div className="field-label">
            <ul className="dual-section">
              <li>Sub Title</li>
              <li className="align-right field-detail">
                <img
                  onClick={() => toggleFieldDetail("subTitle")}
                  className={fieldDetail["subTitle"] ? "active" : ""}
                  src={require("./../../../images/main/tagContent/tagForm/info.svg").default}
                  alt="Detail" />
                <p className="field-detail-popup">Optional text under the Display <br />Title of your tag.</p>
              </li>
            </ul>
          </div>
          <div className={`input-container input-container-error ${item.error.subTitleError ? "error" : ""}`}>
            <input
              type="text"
              placeholder="Sub Title"
              onChange={(e) => updateTag("subTitle", index, e.target.value)}
            />
            <span>20</span>
          </div>
        </div>
        <div className="radio">
          <div
            className={`radio-button ${item.showSubTitle ? "" : "disable"}`}
            onClick={() => toggle('showSubTitle', index)}
          >
            <div className="radio-dot"></div>
          </div>
          <p className="radio-label">{item.showSubTitle ? "Visible" : "Hidden"}</p>
        </div>
      </div>
      <div className="field-area field-area-radio">
        <div>
          <div className="field-label">
            <ul className="dual-section">
              <li>Price</li>
              <li className="align-right field-detail">
                <img
                  onClick={() => toggleFieldDetail("price")}
                  className={fieldDetail["price"] ? "active" : ""}
                  src={require("./../../../images/main/tagContent/tagForm/info.svg").default}
                  alt="Detail" />
                <p className="field-detail-popup">Optional price field displayed in <br />the bottom right corner of a tag.</p>
              </li>
            </ul>
          </div>
          <div className="price-dropdown">
            <div
              className="price-select"
              onClick={() => { setPriceOptionVisibe(!priceOptionVisibe) }}
            >
              <img
                src={require("../../../images/main/tagContent/down-arrow.svg").default}
                alt="Open Menu"
              />
              <span>{item.currency}</span>
              <ul className={`price-option  ${priceOptionVisibe ? "" : "d-none"}`}>
                <li
                  className={priceOption === "$" ? "active" : ""}
                  onClick={(e) => { setPriceOptionFun(e) }}
                >$</li>
                <li
                  className={priceOption === "€" ? "active" : ""}
                  onClick={(e) => { setPriceOptionFun(e) }}
                >€</li>
                <li
                  className={priceOption === "£" ? "active" : ""}
                  onClick={(e) => { setPriceOptionFun(e) }}
                >£</li>
                <li
                  className={priceOption === "¥" ? "active" : ""}
                  onClick={(e) => { setPriceOptionFun(e) }}
                >¥</li>
              </ul>
            </div>
            <div className="input-container">
              <input
                type="text"
                placeholder="Price"
                onChange={(e) => updateTag("price", index, e.target.value)}
              />
            </div>
          </div>
        </div>
        <div className="radio">
          <div
            className={`radio-button ${item.showPrice ? "" : "disable"}`}
            onClick={() => toggle('showPrice', index)}
          >
            <div className="radio-dot"></div>
          </div>
          <p className="radio-label">{item.showPrice ? "Visible" : "Hidden"}</p>
        </div>
      </div>
      <div className="field-area">
        <div className="field-label">
          <ul className="dual-section">
            <li>Add Attributes</li>
            <li className="align-right field-detail">
              <img
                onClick={() => toggleFieldDetail("attribute")}
                className={fieldDetail["attribute"] ? "active" : ""}
                src={require("./../../../images/main/tagContent/tagForm/info.svg").default}
                alt="Detail" />
              <p className="field-detail-popup">Add important information as Attributes to your tag. <br />Some examples include: Brand, SKU, Type, or Model.</p>
            </li>
          </ul>
        </div>
        <div>
          <div className="attribute-dropdown">
            <div
              className="attribute-option-select"
              onClick={() => (addAttriOptionToggle ? () => { } : setAttriOptionVisibe(!attriOptionVisibe))}
            >
              <img
                onClick={() => { setAttriOptionVisibe(!attriOptionVisibe) }}
                src={require("../../../images/main/tagContent/down-arrow.svg").default}
                alt="Open Menu"
              />
              <span
                className={addAttriOptionToggle ? "position-absolute invisible" : ""}
                ref={attriOptopmSpan}
              >
                {activeAttriOption}
              </span>
              <span>
                <input
                  value={activeAttriOption}
                  type="text"
                  placeholder="Attr"
                  onChange={attriOptionInputFunc}
                  onBlur={addAttriOptionFunc}
                  style={attriInputStyle}
                  className={addAttriOptionToggle ? "" : "d-none"}
                />
              </span>

              <ul
                className={`attribute-option  ${attriOptionVisibe ? "" : "d-none"}`}>
                {attriOption.map((option, otionIndex) => {
                  return (
                    <li
                      key={otionIndex}
                      onClick={() => { setActiveAttriOption(option) }}
                    >{option}</li>
                  )
                })}
                <li onClick={(e) => { setAddAttriOptionToggle(true) }}>Create New</li>
              </ul>
            </div>

            <div className="input-container">
              <div className="attribute-value-select">
                <input
                  type="text"
                  placeholder="Attribute"
                  onKeyUp={attriValueInputFunc}
                  onBlur={addAttriValueFunc}
                  onFocus={() => (setAttriValueVisibe(true))}
                />
                <ul
                  className={`attribute-option  ${attriValueVisibe ? "" : "d-none"}`}>
                  {attriValue.map((value, valueIndex) => {
                    if (value.includes(activeAttriValue)) {
                      return (
                        <li
                          key={valueIndex}
                          onMouseDownCapture={() => { setActiveAttriValue(value) }}
                          onMouseUpCapture={() => { addAttri() }}
                        >{value}</li>
                      )
                    }
                  })}
                  <li>Create New</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="attribute-tag-area">
        {
          Object.entries(attri).map(([key, value]) => (
            Object.entries(value).map(([option, value]) => {
              return (
                <div
                  className="attribute-tag"
                ><p>{option}: {value.toString()}</p>
                  <span
                    onClick={(e) => { deleteAttri(e) }}
                  >
                    <img
                      src={require("../../../images/main/tagContent/tagForm/remove-attribute-tag.svg").default}
                      alt="Remove Attribute Tag"
                    />
                  </span>
                </div>
              )
            })
          ))
        }
      </div>
      <div className="advance-setting-area">
        <div className="advance-setting-toggle">
          <span className="secondary">Advanced Settings</span>
          <button>
            <img
              className={advanceSetting ? "active" : ""}
              onClick={() => { setAdvanceSetting(!advanceSetting) }}
              src={require("../../../images/main/tagContent/right-arrow.svg").default}
              alt="Expend"
            />
          </button>
          <p className={`secondary ${advanceSetting ? "" : "d-none"}`}>
            Please note changes to UTM campaign name, term and content
            will overwrite any tracking settings Scopa automatically
            generates for your tag.
                </p>
        </div>
        <div className={`field-area ${advanceSetting ? "" : "d-none"}`}>
          <div className="field-label">UTM Campaign Name</div>
          <div className="input-container">
            <input
              type="text"
              placeholder="Local Optimist, Crewneck Sweatshirt, White, Urban"
            />
          </div>
        </div>
        <div className={`field-area ${advanceSetting ? "" : "d-none"}`}>
          <div className="field-label">UTM Campaign Name</div>
          <div className="input-container">
            <input
              type="text"
              placeholder="Local Optimist, Crewneck Sweatshirt, White, Urban"
            />
          </div>
        </div>
      </div>
      <div className="form-action">
        <input
          className="primary-btn"
          type="button"
          value="Save"
          onClick={() => { beforeSave() }}
        />
        <input
          className="secondary-btn"
          onClick={() => { setScreen("home") }}
          type="button"
          value="Cancel"
        />
      </div>
    </div >
  )
}
