import React from "react"
import { SplitButton, Dropdown, Container, Jumbotron } from "react-bootstrap"
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
    </Layout>
  )
}

export const mdQuery = graphql`
  query GetMDByTitle($title: String!) {
    markdownRemark(frontmatter: { title: { eq: $title } }) {
      html
      frontmatter {
        title
      }
    }
  }
`
