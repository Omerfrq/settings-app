import { Row, Col, Dropdown } from "react-bootstrap"
import { Link } from "react-router-dom"
import React, { useState } from "react"
import "../../css/header.css"

export default function Header({ visible: Visible }) {
  const [isActive, setActive] = useState("false")

  const notificationToggle = () => {
    setActive(!isActive)
  }
  return (
    <header className={Visible ? "" : "d-none"}>
      <Row className="m-0 p-0">
        <Col>
          <div className="logo">
            <img
              src={require("../../images/header/logo.png").default}
              alt="Logo"
            />
          </div>
        </Col>
        <Col className="text-end">
          <div className="profile-section">
            <div className="notification">
              <Dropdown alignRight>
                <div
                  className={`icon ${isActive ? "" : "active"}`}
                  onClick={notificationToggle}
                >
                  <Dropdown.Toggle variant="none">
                    <div className="count">
                      <p>2</p>
                    </div>
                    <img
                      src={require("../../images/header/bell.svg").default}
                      alt="Notifications"
                    />
                  </Dropdown.Toggle>
                </div>

                <Dropdown.Menu className="ahm_dropdown">
                  <Dropdown.Item>
                    <div className="new"></div>
                    <span>
                      Notification 1 message text here in sentence form.
                    </span>
                    <div className="info">
                      <span>45 min</span>
                    </div>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <div className="new"></div>
                    <span>
                      Notification 2 message text here in sentence form.
                    </span>
                    <div className="info">
                      <span>2 hrs</span>
                    </div>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <div className="new"></div>
                    <span>
                      Notification 3 message text here in sentence form.
                    </span>
                    <div className="info">
                      <span>2 days</span>
                    </div>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>

            <Link to="/Tag Content" className="button-1">
              <button>
                <span>Tag Content</span>
              </button>
            </Link>

            <div className="profile-picture">
              <Dropdown alignRight>
                <Dropdown.Toggle variant="none">
                  <img
                    src={require("../../images/header/profile.svg").default}
                    alt="Profile Pictire"
                  />
                </Dropdown.Toggle>
                <Dropdown.Menu className="ahm_dropdown">
                  <Dropdown.Item href="#/action-1">
                    Dropdown Item 1
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-2">
                    Dropdown Item 2
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3">
                    Dropdown Item 3
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-4">
                    Dropdown Item 4
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-5">Last Item 5</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </div>
        </Col>
      </Row>
    </header>
  )
}
