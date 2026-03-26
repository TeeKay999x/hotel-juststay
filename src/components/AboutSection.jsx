import React from 'react'

const AboutSection = () => {
    return (
        <section id='about' className='about-section'>
            <div className='about-container'>
                <div about-image-wrapper>
                    <img src="https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop" alt="Hotel Exterior" className='main-about-img' />
                    <div className='since-badge'>Since 2018</div>
                </div>

                <div className='about-content'>
                    <span className='section-subtitle'>About Us</span>
                    <h2>History of Just <span>Stay</span></h2>
                    <h3>Rivers State, Nigeria</h3>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta odio rerum, aut earum, iusto dignissimos laboriosam dolor modi voluptates maxime laborum culpa alias, dicta eaque aliquid minus odit explicabo voluptas!</p>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero totam amet sunt voluptates magni, at aperiam ipsam optio hic rerum. Vel beatae sint eveniet sed, cumque eius numquam quod nesciunt?</p>

                    <button className='read-more-btn'>Read More</button>
                </div>
            </div>
        </section>
    )
}

export default AboutSection