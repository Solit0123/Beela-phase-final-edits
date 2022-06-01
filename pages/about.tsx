import type { NextPage } from "next"
import Head from "next/head"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
const About: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Beela</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="container-fluid p-0 m-0 border" id="wrapper">
          <Navbar />
          {/* Hero */}
          <div className="container">
            <div className="container" id="hero">
              <div className="container row">
                <div className="col p-lg-5 m-4">

                    <div className="col" id="about-beela">
                      <h1>About Beela</h1>
                    </div>
                    <div className="col-12" id="about-paragraph">
                      <p>
                        [OUR STORY / VISION / MISSION] Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                      </p>

                    </div>

                  <div className="container">
                    <button type="button" className="btn btn-dark float-start mx-5">CTA</button>
                  </div>
                </div>
                <div className="col p-lg-5 m-4" id="about=picture">
                  <div className="container flex-row" id="picture">
                    <div className="m-5">
                      <div className="rectangle"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* About Beela */}
          {/* Team */}
          {/* Get Voulnted*/}
          <Footer />
        </div>
      </main>
    </div>
  )
}
export default About