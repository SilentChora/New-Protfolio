import React from 'react'

function Hero() {
  return (
    
    <div id="hero" className="hero">
      <div className="img-container">
        <img className="profile" src="/profile-pic.png" alt="profile-pic"/>
      </div>
      <h1 className="hero-heading">
        Silent Chora...
      </h1>
      <p className="hero-para">
        Myself Silent Chora from SRM institue of science and Technology. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
      </p>
      <p>
        <a className="hero-link">
          Take me to the magic land ↗
        </a>
      </p>
    </div>
  )
}

export default Hero