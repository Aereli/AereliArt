import React, { useRef, useEffect } from "react"
import { TweenMax, TimelineLite, Power3 } from "gsap"
import { Link } from "gatsby"

import Lithograph from "./nav-image-one"
import Lola from "./nav-image-two"
import "../styles/nav.scss"

const Nav = () => {
  let entry = useRef(null)
  let images = useRef(null)
  let content = useRef(null)

  let tl = new TimelineLite({ delay: 0.5 })

  useEffect(() => {
    //this calls the image div of litho and lola
    const imageOne = images.firstElementChild
    const imageTwo = images.lastElementChild

    //Content variables
    const headineFirst = content.children[0].children[0]
    //this is the same as: content.children[0].children[1]
    const headlineSecond = headineFirst.nextSibling
    const headlineThird = headlineSecond.nextSibling
    const contentParagraph = content.children[1]
    const contentButton = content.children[2]

    TweenMax.to(entry, 0, { css: { visibility: "visible" } })
    console.log(imageOne, imageTwo)

    //the Image Animations effect is here.
    // prettier-ignore
    tl.from(imageOne, 2, { y: 1280, ease: Power3.easeOut, }, 'Start')
      .from(imageOne.firstElementChild, 2, { scale: 1.3, ease: Power3.easeout, }, 0.2 )
      .from(imageTwo, 2,{ y: 900, ease: Power3.easeOut,},0.8)
      .from(imageTwo.firstElementChild, 2, { scale: 1.5,ease: Power3.easeout,}, 0.2 )

    //Content Animation
    // prettier-ignore
    tl.staggerFrom([headineFirst.children, headlineSecond.children, headlineThird.children], 1, {
       y: 40, 
       ease: Power3.easeout, 
       delay: .8
       //this .15 will create the staggering effect
    }, .15, 'Start')
      .from(contentParagraph,1, {opacity: .01, ease: Power3.easeOut},1.4)
      .from(contentButton,2, {opacity: .01, x: 250, ease: Power3.easeOut},1.4)
  }, [tl])

  return (
    <div className="hero" ref={el => (entry = el)}>
      <div className="container-hero">
        <div className="hero-inner">
          <div className="hero-content">
            <div className="hero-content-inner" ref={el => (content = el)}>
              <h1>
                <div className="hero-content-line">
                  <div className="hero-content-line-inner">my</div>
                </div>
                <div className="hero-content-line">
                  <div className="hero-content-line-inner">other name is</div>
                </div>
                <div className="hero-content-line">
                  <div className="hero-content-line-inner">Eric Oyanadel</div>
                </div>
              </h1>
              <p>Sculptures - Paintings - Drawings</p>
              <button className="content-button-container">
                <Link className="content-button" to="/page-2/">
                  Explore
                </Link>
              </button>
            </div>
          </div>
          <div className="hero-images">
            <div className="hero-images-inner" ref={el => (images = el)}>
              <div className="hero-image lithograph">
                <Lithograph />
              </div>
              <div className="hero-image lola">
                <Lola />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Nav
