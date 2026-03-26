import React from 'react'

const HeroSection = () => {
  return (
    <section className='hero'>
        <div className="hero-overlay">
            <div className="hero-content">
                <p className="hero-subtitle">Welcome To</p>
                <h1>Hotel Just <span>Stay</span></h1>
                <h2>Rivers State Nigeria.</h2>

                <p className="hero-description">
                    Experience luxury at its finest with our world class amenities and breathtaking views
                </p>
                <div className='hero-btns'>
                    <button className='hero-btn-primary'>Book Now</button>
                    <button className='hero-btn-secondary'>Explore More</button>
                </div>
            </div>
        </div>
    </section>
  )
}

export default HeroSection