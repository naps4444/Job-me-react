import React from 'react'
import Hero from '../components/Hero'
import Layout from '../components/Layout'
import SelectBar from '../components/SelectBar'
import DiscoverMore from '../components/DiscoverMore'
import Hr from '../components/Hr'
import LatestJob from '../components/LatestJob'
import CV from '../components/CV'

const HomePage = () => {
  return (
    <div>
      <Layout>
        <Hero />
        <DiscoverMore />
        <Hr />
        <LatestJob />
        <CV />
      </Layout>
       
    </div>
  )
}

export default HomePage