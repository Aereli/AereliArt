import React from "react"
import Lithograph from "./nav-image-one"
import Lola from "./nav-image-two"
import "../styles/nav.scss"

const Nav = () => (
  <div className="hero">
    <div className="container-hero">
      <div className="hero-inner">
        <div className="hero-content">
          <div className="hero-content-inner">
            <h1>
              <div className="hero-content-line">
                <div className="hero-content-line-inner">
                  Hero Content Line Inner line 1
                </div>
              </div>
              <div className="hero-content-line">
                <div className="hero-content-line-inner">
                  Hero Content Line Inner line 2
                </div>
              </div>
              <div className="hero-content-line">
                <div className="hero-content-line-inner">
                  Hero Content Line Inner line 3
                </div>
              </div>
            </h1>
            <p>This could be some extra text from the bottom</p>
            <button>Explore</button>
          </div>
        </div>
        <div className="hero-images">
          <div className="hero-images-inner">
            <div className="hero-image-lithograph">
              <Lithograph />
            </div>
            <div className="hero-image-lola">
              <Lola />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)
export default Nav
