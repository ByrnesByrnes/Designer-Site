import React from 'react';

export default function Service({title, description, image, subtitle="webdesign"}) {
  return (
    <div className="service">
      <div className="service__header">
        <h4 className="service__title"><span>{subtitle}</span>{title}</h4>
        <img className="service__image" src={image} alt="illustration of a clip board"/>
      </div>
      <p className="service__text">{description}</p>
      <button className="service__button">Discover</button>
    </div>
  )
}