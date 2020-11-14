import { graphql } from "gatsby"
import React from "react"
import {
  Card,
  Col,
  Container,
  Dropdown,
  Fade,
  Jumbotron,
  Row,
  SplitButton,
} from "react-bootstrap"
import Image from "../components/image"
import Layout from "../components/layout"
import FeatureCard from "../components/feature_card"
import SEO from "../components/seo"

export default function Home({ data }) {
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
        <Row xs={1} sm={1} md={1} lg={3} xl={3}>
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
        <Row className="mt-3">
          <Col>
            <FeatureCard
              title={"Data-driven design"}
              text={
                "Every aspect of the game is controlled through configuration files. Text files are human-readable for easy inspection and play nicely with version control systems. Before shipping, configuration files are compiled to fast and compact platform-specific binary blobs."
              }
            ></FeatureCard>
          </Col>
          <Col>
            <FeatureCard
              title={"Data-oriented design"}
              text={
                "Data in memory is organized to achive maximum performance possible on every platform. We all have supercomputers in our pocket that are never used to its fullest."
              }
            ></FeatureCard>
          </Col>
          <Col>
            <Card border="dark">
              <Card.Body>
                <Card.Title>Fast-iteration times</Card.Title>
                <Card.Text>
                  Every game asset is hot-reloadable, code included. Evaluate
                  modifications and adjustments on-the-fly without having to
                  reboot the game every time.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col>
            <Card border="dark">
              <Card.Body>
                <Card.Title>Cross-platform editor</Card.Title>
                <Card.Text>
                  It runs and looks equally well both on Linux and Windows.
                  Designed to be as fail-safe as possible to never lose your
                  work if crashes should occur.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card border="dark">
              <Card.Body>
                <Card.Title>Lightweight codebase</Card.Title>
                <Card.Text>
                  Engine plus tools amounts to less than 100K LOC. Written in
                  simple "C-style" C++. It is easy for anyone to understand and
                  make modifications.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card border="dark">
              <Card.Body>
                <Card.Title>Free and Open Source</Card.Title>
                <Card.Text>
                  All the code is released under the very permissive MIT license
                  and can be downloaded via GitHub by anyone.
                </Card.Text>
              </Card.Body>
            </Card>
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
