import React from 'react'
import Layout from  "../../componenets/Layout"
import * as styles from "../../styles/project.module.css"

const Projects = () => {
  return (
    <Layout>
      <div className={styles.portfolio}>
        <h2>Portfolio</h2>
        <h3>Projects & Websites I've Created</h3>
      </div>
    </Layout>
  );
}
 
export default Projects