import './globals.css'
import { Nunito_Sans, Montserrat } from 'next/font/google'
import Navbar from '@components/Base/navbar.jsx'
import Footer from '@components/Base/footer/footer.jsx'
import ContactPopUpBtn from '@components/Base/contactPopUpBtn'
import { ToastContainer } from 'react-toastify';
import { ArticleJsonLd } from 'next-seo';
import UpComingEvent from '@components/Base/upComingEvent'
import ShowEvent from '@components/Base/showEvent'
import { Suspense } from 'react'
import ContactUs from "@components/Base/contactUs/contactUs"

const nunito = Nunito_Sans({
  subsets: ['latin'],
  variable: '--font-roboto'
})
const monts = Montserrat({
  subsets: ['latin'],
  variable: '--font-monts'
})

export const metadata = {
  title: 'Promo Group',
  author: "Umar Latif",
  description: 'As multibusiness organization, PromoGroup operates in the real estate, construction, building material, agriculture, dairy and livestock sector. Since 2018, we have been categorically providing and meeting the demands of both domestic and global markets in the name of our products.',
  keyWords: "PromoGroup, RealEstate, Construction, Garlic, Bricks, Farms, Promo Garlic, Promo Farms, Promo Developers, Developers, Promo Bricks",
  verification: {
    google: "google-site-verification=r5nOt5aR0KpAbyVScqfWu95oG-P6QqFSuUCzQCOPFJk",
  },
  openGraph: {
    title: "Promo Group",
    site_name: "Promo Group",
    url: "https://promogroup.com.pk/",
    description: "As multibusiness organization, PromoGroup operates in the real estate, construction, building material, agriculture, dairy and livestock sector. Since 2018, we have been categorically providing and meeting the demands of both domestic and global markets in the name of our products.",
    image: "/image/nav_logo.png",
  }
}

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body className={`${nunito.variable} ${monts.variable} font-sans w-screen overflow-x-hidden relative scrollbar`}>
        <Navbar></Navbar>
        <ToastContainer></ToastContainer>
        {/* <ShowEvent /> */}
        <ContactPopUpBtn />
        {/* <UpComingEvent /> */}
        {children}
        <Suspense fallback={<p>Loading ...</p>}>
          <ContactUs />
        </Suspense>
        <Footer/>
        <ArticleJsonLd
          useAppDir={true}
          type="website"
          url="https://promogroup.com.pk"
          title="Promo Group"
          authorName="Umar Latif"
          description="Promo Group is an organization that supports ..."
        />
      </body>
    </html>
  )
}
