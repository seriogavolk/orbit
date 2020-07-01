import React from "react"
import { Link } from "gatsby"
import Hero from '../components/hero';
// import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"
import '../styles/main.css';
import Article from '../components/articles';




const IndexPage = () => (
  <>
    <SEO title="Home" />
    <Hero />
    <Article />
  </>
)

export default IndexPage
