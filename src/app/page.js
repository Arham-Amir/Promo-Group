import Slider from "@components/Home/slider.jsx"
import ProjectTeames from "@components/Home/projectTeames.jsx"
import ContactUsPage from "@components/ContactUs/contactUsPage.jsx"
import AboutUs from "@components/AboutUs/aboutUs.jsx"

export default function Home() {
  return (
    <main >
      <Slider />
      <ProjectTeames />
      <ContactUsPage />
      <AboutUs />
    </main>
  )
}
