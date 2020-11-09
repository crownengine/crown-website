import React from "react"
import { Nav, Navbar } from "react-bootstrap"
import { FaGithub } from "react-icons/fa"
import pepperLogo from "../images/pepper.svg"
import styles from "./header.module.css"

const Header = ({ siteTitle, pageInfo }) => (
  <Navbar bg="light" variant="light" expand="lg" sticky="top">
    <Navbar.Brand href="/" className={styles.title}>
      <img
        alt=""
        src={pepperLogo}
        width="35"
        height="35"
        className="d-inline-block align-top"
      />{" "}
      {siteTitle}
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav
        className="mr-auto align-items-center"
        activeKey={pageInfo && pageInfo.pageName}
      >
        <Nav.Link href="https://github.com/dbartolini/crown/releases/latest">
          Download
        </Nav.Link>
        <Nav.Link
          href="https://github.com/dbartolini/crown"
          style={{ display: "inline-block" }}
        >
          <FaGithub size="30" color="black" />
        </Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)

export default Header
