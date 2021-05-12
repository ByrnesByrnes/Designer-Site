import React from 'react';
import { Service } from '../components'

export function Services() {
  return (
    <section className="services">
      <div className="services__info">
        <h2 className="services__subtitle">From beginning to end</h2>
        <p className="services__text">In need of a custom site? No problem we can design, develop and implement everything you require.</p>
      </div>
      <div className="services__content">
        <Service 
          title="design"
          description="Our discovery sessions have evolved into a highly effective and streamlined process."
          image="./images/asset80.svg"
        />
        <Service 
          title="Develop"
          description="Your website has the potential to inform, enlighten and entertain. Your audience may know you well or may be discovering you for the first time."
          image="./images/asset90.svg"
        />
        <Service 
          subtitle="Digital"
          title="Marketing"
          description="Prospects are people too. Marketing should be scientific, but never robotic."
          image="./images/asset70.svg"
        />
      </div>
    </section>
  )
}