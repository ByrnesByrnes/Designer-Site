import React from 'react';
import {BiBriefcase} from 'react-icons/bi'

export default function Hero() {



  return (
    <section className="hero">
      <div className="hero__side-a">
        <h1 className="hero__title">We Make Your Business look Great</h1>
        <p className="hero__subtitle">from designs to animations</p>
        <button className="hero__cta"><BiBriefcase />Our Work</button>
      </div>
      <img className="hero__image" src="./images/monitor1.svg" alt="illustration monitor"/>
    </section>
  )
}