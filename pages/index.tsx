import type { NextPage } from "next"
import Head from "next/head"
import Image from "next/image"
import avatar from "../public/avatar.png"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Beeela</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="container-fluid p-0 border" id="wrapper">
          <Navbar/>
      
          {/* Hero */}
          <div className="container-fluid justify-content-center overflow-hidden">
            <div className="row border text-center h-75" id="hero">
              <div className="col d-flex flex-column align-items-center border p-5">
                <div className="p-3">
                  <h1>It’s possible to get into tech!</h1>
                  <div className="p-3">
                    <p id="header-text">
                      We offer free resources to help women and non-binary Swedish immigrants start
                      tech careers.
                    </p>
                  </div>
                </div>

                <div className="p-3">
                  <button type="button" className="btn btn-dark">
                    Join Our Slack Community
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Transition steps */}
          <div className="row border text-center" id="steps">
            <div className="col align-items-center border p-5">
              <div className="d-flex flex-column">
                <div className="p-1">
                  <h2>3 steps to a new career</h2>
                </div>
                <div className="p-1">
                  <p id="header-text">
                    We’ve developed a proven, accessible method to pivot careers. We are here to
                    support you every step of the way.
                  </p>
                </div>
              </div>

              <div className="container">
                <div className="row row-cols-1 row-cols-md-3">
                  <div className="col mb-4">
                    <div className="card h-100">
                      <div className="card-body">
                        <p className="card-title">
                          <span>Gain Skills</span>
                        </p>
                        <p className="card-text">
                          Explore various tech fields and learn relevant skills.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col mb-4">
                    <div className="card h-100">
                      <div className="card-body">
                        <p className="card-title">
                          <span>Get Experience</span>
                        </p>
                        <p className="card-text">
                          Put your skills to work with projects from our partners.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col mb-4">
                    <div className="card h-100">
                      <div className="card-body">
                        <p className="card-title">
                          <span>Land a Job</span>
                        </p>
                        <p className="card-text">Receive unparalleled mentorship and resources.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Pollination */}
          <div className="row border text-center" id="pollination">
            <div className="col align-items-center p-5">
              <div className="d-flex flex-column ">
                <div className="p-1">
                  <h2>Pollination Mentoring Programme</h2>
                </div>
              </div>

              <div className="container align-content-center">
                <div
                  className="d-flex flex-row flex-wrap align-items-center justify-content-center flex-md-nowrap p-3"
                  id="video"
                >
                  <div className="m-3">
                    <div className="rectangle"></div>
                  </div>
                  <div className="m-3">
                    <p>Our flagship programme offers 1:1 mentorship, along with resources.</p>
                  </div>
                </div>
              </div>
              <hr />

              <div className="container">
                <div className="d-flex flex-row flex-wrap align-items-center justify-content-center flex-md-nowrap p-3">
                  <div className="p-3">
                    <span>Become a Mentee</span>
                    <p>
                      Whether you’re exploring a tech field or applying to jobs, a mentor can help
                      you with your individualized needs.
                    </p>
                    <a href="">
                      Learn more <i className="bi bi-arrow-right"></i>
                    </a>
                  </div>
                  <div className="p-3">
                    <span>Become a Mentor</span>
                    <p>
                      Share your experiences and make a difference in a mentee’s career. Continue to
                      learn through mentoring.
                    </p>
                    <a href="">
                      Learn more <i className="bi bi-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Testimonials */}
          <div className="row border text-center" id="testimonials">
            <div className="col align-items-center border p-5">
              <div className="d-flex flex-column">
                <div className="p-1">
                  <h2>They did it—and so can you</h2>
                </div>
                <div className="p-1">
                  <p id="header-text">
                    We are proud of our community members who have started their tech careers.
                  </p>
                </div>
              </div>

              <div className="container">
                <div className="card-deck d-flex flex-row flex-wrap flex-md-nowrap justify-content-center">
                  <div className="card m-3">
                    <div className="card-body">
                      <div className="card-title">
                        <div className="header">
                          <div className="avatar">
                            <Image src={avatar} alt="Avatar picture" id="avatar-image" />
                          </div>
                        </div>
                        <span>Jane Doe</span>
                        <p className="text-muted"> UX Designer</p>
                        <p className="card-text">
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                          veniam, quis nostrud exercitation.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="card m-3">
                    <div className="card-body">
                      <div className="card-title">
                        <div className="header">
                          <div className="avatar">
                            <Image src={avatar} alt="Avatar picture" id="avatar-image" />
                          </div>
                        </div>
                        <span>Jane Doe</span>
                        <p className="text-muted"> UX Designer</p>
                        <p className="card-text">
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                          veniam, quis nostrud exercitation.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="card m-3">
                    <div className="card-body">
                      <div className="card-title">
                        <div className="header">
                          <div className="avatar">
                            <Image src={avatar} alt="Avatar picture" id="avatar-image" />
                          </div>
                        </div>
                        <span>Jane Doe</span>
                        <p className="text-muted"> UX Designer</p>
                      </div>
                      <p className="card-text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Podcast  */}
          <div className="row border align-items-center text-center" id="podcast">
            <div className="col align-items-center p-5">
              <div className="p-1">
                <h2>Beela’s Talk Podcast</h2>
              </div>

              <div
                className="d-flex flex-row flex-wrap align-items-center justify-content-center flex-md-nowrap p-3"
                id="video"
              >
                <div className="col m-3">
                  <p>
                    Our podcast is filled with inspiring stories from Swedish immigrants who have
                    broken into tech. Catch up on all the buzz!
                  </p>
                </div>
                <div className="col d-flex justify-content-center">
                  <div className="rectangle"></div>
                </div>
              </div>

              <div className="container">
                <div className="p-3">
                  <button type="button" className="btn btn-dark" id="listen-button">
                    Start Listening
                  </button>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </main>
    </div>
  )
}

export default Home
