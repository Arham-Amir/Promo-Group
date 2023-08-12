import Slider from "@components/Home/slider"
import ProjectTeames from "@components/Home/projectTeames"
import ContactUsPage from "@components/ContactUs/contactUsPage"
import AboutUs from "@components/AboutUs/aboutUs"

export default function Home() {
  return (
    <main className="">
      <Slider />
      <ProjectTeames />
      <ContactUsPage />
      <AboutUs />
    </main>
  )
}
