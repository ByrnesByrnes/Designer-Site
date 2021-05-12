import React from 'react';

export default function SectionTwo() {
  return (
    <section className="section-two">
      <div className="section-two__image-container">
        <img src="./images/seoimage1.svg" alt="map illustration"/>
        <img src="./images/seoimage2.svg" alt="laptop illustration"/>
      </div>
      <div className="section-two__info">
        <h2 className="section-two__subtitle">SEO</h2>
        <p className="section-two__text">Finding an advantagous position on the web can be difficult, but it doesn’t have to be.</p>
        <button className="section-two white">Learn More</button>
      </div>
    </section>
  )
}