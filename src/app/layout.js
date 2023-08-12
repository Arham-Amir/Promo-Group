import './globals.css'
import { Roboto } from 'next/font/google'
import Head from 'next/head';
import Navbar from '@components/Base/navbar'
import Footer from '@components/Base/footer'
import ContactPopUpBtn from '@components/Base/contactPopUpBtn'
import { ToastContainer } from 'react-toastify';


const roboto = Roboto({ subsets: ['latin'], weight: ['100', '300', '400', '500', '700', '900'], })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
      </Head>
      <body className={roboto.className}>
        <Navbar></Navbar>
        <ToastContainer></ToastContainer>
        <ContactPopUpBtn></ContactPopUpBtn>
        {children}
        <Footer></Footer>
      </body>
    </html>
  )
}
