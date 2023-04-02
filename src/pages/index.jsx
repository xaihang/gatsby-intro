import React from "react";
import { Link } from "gatsby";
import Layout from "../components/Layout";
import "../styles/home.css";

export default function Home() {
  return (
    <Layout>
      <section className="header">
        <div>
          <h2>Design</h2>
          <h3>Develop & Deploy</h3>
          <p>Full Stack Software Developer from Minneapolis, MN</p>
          <Link className="btn" to="/projects">
            My Portfolio Projects
          </Link>
        </div>
        <img
          src="/profile.jpeg"
          alt="profile"
          style={{ maxWidth: "300px", borderRadius: "50%" }}
        />
      </section>
    </Layout>
  );
}
