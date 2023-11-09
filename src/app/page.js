import Slider from "@components/Home/slider.jsx"
import AboutUs from "@components/AboutUs/aboutUs.jsx"
import { Suspense } from 'react'
import ContactUs from "@components/Base/contactUs/contactUs"

export const metadata = {
  title: 'Promo Group',
  author: "Umar Latif",
  description: 'As multibusiness organization, PromoGroup operates in the real estate, construction, building material, agriculture, dairy and livestock sector. Since 2018, we have been categorically providing and meeting the demands of both domestic and global markets in the name of our products.',
  keyWords: "PromoGroup, RealEstate, Construction, Garlic, Bricks, Farms, Promo Garlic, Promo Farms, Promo Developers, Developers, Promo Bricks",
  openGraph: {
    title: "Promo Group",
    type: "website",
    site_name: "Promo Group",
    url: "https://promogroup.com.pk/",
    description: "As multibusiness organization, PromoGroup operates in the real estate, construction, building material, agriculture, dairy and livestock sector. Since 2018, we have been categorically providing and meeting the demands of both domestic and global markets in the name of our products.",
    image: "/image/nav_logo.png",
  }
}


export default function Home(props = {}) {
  return (
    <main className="">
      <Suspense fallback={<p>Loading ...</p>}>
        <Slider />
      </Suspense>
      <Suspense fallback={<p>Loading ...</p>}>
        <AboutUs />
      </Suspense>
      <Suspense fallback={<p>Loading ...</p>}>
        {/* <ContactUsPage /> */}
        <ContactUs />
      </Suspense>
    </main>
  )
}
