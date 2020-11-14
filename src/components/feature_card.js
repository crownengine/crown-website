import React from "react"
import { Card } from "react-bootstrap"

const FeatureCard = ({ title, text }) => {
  return (
    <>
      <Card border="dark" className={"h-100"}>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{text}</Card.Text>
        </Card.Body>
      </Card>
    </>
  )
}

export default FeatureCard
