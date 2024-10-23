import React from 'react'
import Header from "../../components/Header";
import Banner from "../../components/Banner";
import About from "../../components/About";
import SpeakerWrapper from "../../components/speaker";
import ScheduleWrap from "../../components/schedule";
import PartnerWrap from "../../components/partners";
import CallForPaper from "../../components/callForPaper";
import ContactUs from "../../components/contactUs";
import Footer from "../../components/footer";

const LandingPage = () => {
  return (
    <div>
       <Header />
      <Banner />
      <About />
      <SpeakerWrapper/>
      <ScheduleWrap/>
      <PartnerWrap/>
      <CallForPaper/>
      <ContactUs/>
      <Footer/>
    </div>
  )
}

export default LandingPage;
