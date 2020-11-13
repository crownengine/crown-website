import React from "react"
import { Navbar } from "react-bootstrap"

const Footer = () => (
  <Navbar bg="dark" variant="light" fixed="bottom">
    <Navbar.Text className="text-light">
      The Crown Foundation © {new Date().getFullYear()}
    </Navbar.Text>
  </Navbar>
)

export default Footer
