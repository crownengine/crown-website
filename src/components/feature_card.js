import React from "react"
import { Card, Fade } from "react-bootstrap"

const FeatureCard = ({ title, text }) => {
  const [isShown, setIsShown] = React.useState(false)

  const show = () => {
    setIsShown(true)
  }

  const hide = () => {
    setIsShown(false)
  }

  return (
    <>
      <Card border="dark">
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Fade appear={false} in={isShown}>
            <Card.Text onMouseEnter={show} onMouseLeave={hide}>
              {text}
            </Card.Text>
          </Fade>
        </Card.Body>
      </Card>
    </>
  )
}

export default FeatureCard
