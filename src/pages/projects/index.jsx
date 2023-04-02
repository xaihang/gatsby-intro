import { graphql, Link } from "gatsby";
import React from "react";
import Layout from "../../components/Layout";
import '../../styles/projects.css';
import Img from "gatsby-image";

export default function Projects({data}) {
  console.log('data', data)
  const projects = data.allMarkdownRemark.nodes
  
  return (
    <Layout>
      <div className="portfolio">
        <h2>Portfolio</h2>
        <h3>Projects & Websites I've Created</h3>
        <div className="projects">
          {projects.map(project => (
            <Link to={"/projects" + project.frontmatter.slug} key={project.id}>
              <div>
              <Img fluid={project.frontmatter.thumb.childImageSharp.fluid} />
                <h3>{project.frontmatter.title}</h3>
                <p>{project.frontmatter.stack}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  );
}

// export page query
export const query = graphql`
  query ProjectsPage {
    allMarkdownRemark(sort: {order: DESC, fields: frontmatter___date}) {
      nodes {
        frontmatter {
          slug
          stack
          title
          thumb {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        id
      }
    }
  }
`