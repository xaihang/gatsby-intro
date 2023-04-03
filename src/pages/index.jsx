import React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../components/Layout";
import "../styles/home.css";
import Img from "gatsby-image";

export default function Home({ data }) {
  // console.log(data);

  return (
    <Layout>
      <section className="header">
        <div>
          <h2>Design</h2>
          <h3>Develop & Deploy</h3>
          <p>Full Stack Software Developer based in Minneapolis, MN</p>
          <Link className="btn" to="/projects">
            My Portfolio Projects
          </Link>
        </div>
        <Img
          className="profile-img"
          fluid={data.file.childImageSharp.fluid}
          alt="profile"
          style={{ maxWidth: "300px" }}
        />
      </section>
    </Layout>
  );
}

export const query = graphql`
  query Profile {
    file(relativePath: { eq: "profile.jpeg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
