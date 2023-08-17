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
  title: 'Promo Group',
  description: 'Generated by create next app',
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
