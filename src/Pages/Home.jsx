import React from 'react'
import Header from '../Components/Header/Header'
import Banner from '../Components/Banner/Banner'
import Services from '../Components/Service/Services'
import WhatWeDo from '../Components/WhatWeDo/WhatWe'
import Advantage from '../Components/Advantage/Advantage'
import BusinessServices from '../Components/HRmanagement/Hr'
import Supply from '../Components/Supply/Supply'
import Digital from '../Components/Digital/Digital'
import Footer from '../Components/Footer/Footer'

function Home() {
  return (
    <>
        <Header/>
        <Banner/>
        {/* <Services/> */}
        {/* <WhatWeDo/> */}
        <Advantage/>
        <BusinessServices/>
        <Supply/>
        <Digital/>
        <Footer/>
    </>
  )
}

export default Home
