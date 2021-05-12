import React from 'react';
import { Header, Hero, Curve, SectionTwo, Footer } from '../components'
import { Services } from '../containers/services'

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Curve image="./images/curve1.svg" />
      <SectionTwo />
      <Curve image="/images/curve2.svg" extra="red-bottom"/>
      <Services />
      <Curve image="/images/curve3-blue.svg" extra="blue"/>
      <Footer />
    </>
  )
}