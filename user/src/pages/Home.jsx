import React from 'react'
import WebLayout from '../layout/WebLayout'
import Hero from '../components/Hero'
import Tours from './Tours'
import Benefits from '../components/Benefits'
import TravelDeals from '../components/TravelDeals'
import Reviews from '../components/Reviews'
import FAQ from '../components/FAQ'
import BookAdv from '../components/BookAdv'

const Home = () => {
  return (
    <WebLayout>
      <Hero />
      <Tours />
      <Benefits />
      <BookAdv />
      <TravelDeals />
      <Reviews />
      <FAQ />
    </WebLayout>
  )
}


export default Home
