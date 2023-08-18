import './globals.css'
import { Nunito_Sans } from 'next/font/google'
import Navbar from '@components/Base/navbar.jsx'
import Footer from '@components/Base/footer.jsx'
import ContactPopUpBtn from '@components/Base/contactPopUpBtn'
import { ToastContainer } from 'react-toastify';


const nunito = Nunito_Sans({
  subsets: ['latin'],
  variable: '--font-roboto'
})

export const metadata = {
  author: "Umar Latif",
  title: 'Promo Group',
  description: 'As multibusiness organization, PromoGroup operates in the real estate, construction, building material, agriculture, dairy and livestock sector. Since 2018, we have been categorically providing and meeting the demands of both domestic and global markets in the name of our products.',
  keyWords: "PromoGroup, RealEstate, Construction, Garlic, Bricks, Farms, Promo Garlic, Promo Farms, Promo Developers, Developers, Promo Bricks",
  verification: {
    google: "r5nOt5aR0KpAbyVScqfWu95oG-P6QqFSuUCzQCOPFJk",
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
      <body className={`${nunito.variable} font-sans`}>
        <Navbar></Navbar>
        <ToastContainer></ToastContainer>
        <ContactPopUpBtn></ContactPopUpBtn>
        {children}
        <Footer></Footer>
      </body>
    </html>
  )
}
