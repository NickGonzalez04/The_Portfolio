import React from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"

export default function About() {
  return (
    <Layout>
      <h1>About</h1>
      <p>
        About me!
      </p>
      <Link to="/">Home</Link>
    </Layout>
  )
} 