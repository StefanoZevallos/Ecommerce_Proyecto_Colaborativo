"use client"
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'
import Footer from '../components/Footer'
import { RecoilRoot } from 'recoil'
import {Toaster} from 'react-hot-toast'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Technology Ecommerce',
  description: 'Generated by create next app',
}

export default function RootLayout({  children,}: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <RecoilRoot>        
      <body className={inter.className}>
        <Toaster position='bottom-center'/>
        <Header/>  
          <>
            {children}
          </>
        <Footer/>    
      </body>
      </RecoilRoot>
    </html>    
  )                                   
}