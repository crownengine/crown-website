import { graphql } from "gatsby"
import React from "react"
import {
  Col,
  Container,
  Dropdown,
  Jumbotron,
  Row,
  SplitButton,
} from "react-bootstrap"
import Image from "../components/image"
import Layout from "../components/layout"
import SEO from "../components/seo"

export default function Home({ data }) {
  console.log(JSON.stringify(data))

  return (
    <Layout pageInfo={{ pageName: "index" }}>
      <SEO title="Home" />
      <Jumbotron fluid className="bg-dark">
        <Container className="text-center text-light">
          <h1>The Flexible Game Engine</h1>
          <SplitButton
            href="https://github.com/dbartolini/crown/releases/latest"
            variant="primary"
            title="Download"
          >
            <Dropdown.Item href="https://aur.archlinux.org/packages/crown/">
              Arch Linux
            </Dropdown.Item>
          </SplitButton>
        </Container>
      </Jumbotron>
      <Container fluid className="center">
        <Row>
          <Col>
            <Image
              fileName="01-physics.png"
              alt="Physics"
              title="Physics"
            ></Image>
          </Col>
          <Col>
            <Image
              fileName="02-animation.png"
              alt="Animation"
              title="Animation"
            ></Image>
          </Col>
          <Col>
            <Image
              fileName="level-editor.png"
              alt="Level editor"
              title="Level editor"
            ></Image>
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}

export const query = graphql`
  query {
    markdownRemark(frontmatter: { type: { eq: "feature" } }) {
      html
      frontmatter {
        title
      }
    }
  }
`
