import Slider from "@components/Home/slider.jsx"
import ProjectTeames from "@components/Home/projectTeames.jsx"
import ContactUsPage from "@components/ContactUs/contactUsPage.jsx"
import AboutUs from "@components/AboutUs/aboutUs.jsx"
import Head from "next/head"

export default function Home(props = {}) {
  return (
    <main >
      <Slider />
      <ProjectTeames />
      <AboutUs />
      <ContactUsPage />
    </main>
  )
}
