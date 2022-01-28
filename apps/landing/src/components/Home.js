// imports
import React from "react"
import Nav from './Nav'
import Hero from "./Hero";
import Problem from "./Problem";
import Solution from "./Solution";
import Features from "./Features";
import Join from "./Join";
import Preview from "./Preview";
import Footer from "./Footer";
import Trustworthy from "./Trustworthy";

// export
const Home = () => {
  return (
    <main>
      <Nav />
      <Hero />
      <Problem />
      <Solution />
      <Features />
      <Join />
      <Preview />
      <Trustworthy />
      <Footer />
    </main>
  )
}

export default Home;