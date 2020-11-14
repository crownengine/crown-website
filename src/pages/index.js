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
import FeatureCard from "../components/feature_card"
import Image from "../components/image"
import Layout from "../components/layout"
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
        <Row className="mt-3 row-cols-xs-1 row-cols-sm-1 row-cols-md-1 row-cols-lg-3 row-cols-xl-3">
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
            <FeatureCard
              title={"Fast-iteration times"}
              text={
                "Every game asset is hot-reloadable, code included. Evaluate modifications and adjustments on-the-fly without having to reboot the game every time."
              }
            ></FeatureCard>
          </Col>
        </Row>
        <Row className="mt-3 row-cols-xs-1 row-cols-sm-1 row-cols-md-1 row-cols-lg-3 row-cols-xl-3">
          <Col>
            <FeatureCard
              title={"Cross-platform editor"}
              text={
                "It runs and looks equally well both on Linux and Windows. Designed to be as fail-safe as possible to never lose your work if crashes should occur."
              }
            ></FeatureCard>
          </Col>
          <Col>
            <FeatureCard
              title={"Lightweight codebase"}
              text={
                "Engine plus tools amounts to less than 100K LOC. Written in simple 'C-style' C++. It is easy for anyone to understand and make modifications."
              }
            ></FeatureCard>
          </Col>
          <Col>
            <FeatureCard
              title={"Free and Open Source"}
              text={
                "All the code is released under the very permissive MIT license and can be downloaded via GitHub by anyone."
              }
            ></FeatureCard>
          </Col>
        </Row>
        <Row className="mt-3 row-cols-xs-1 row-cols-sm-1 row-cols-md-1 row-cols-lg-3 row-cols-xl-3">
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
