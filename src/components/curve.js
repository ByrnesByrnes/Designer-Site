import React from 'react';

export default function Curve({image, extra=""}) {
  return (
    <img src={image} className={`curve ${extra}`} alt="Curve"/>
  )
}