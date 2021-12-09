import Head from 'next/head'
import { Fragment } from 'react'
import Script from 'next/script'
import Navbar from './Navbar'
import Footer from './Footer'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Fragment>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <title>Shop</title>
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Inter:wght@400;600&display=swap" />
        <link rel="stylesheet" href="/assets/css/vendor.min.css" />
        <link rel="stylesheet" href="/assets/vendor/bootstrap-icons/font/bootstrap-icons.css" />
        <link rel="stylesheet" href='/assets/vendor/aos/dist/aos.css' />
        <link rel="stylesheet" href="/assets/css/theme.min.css" />
        <link rel="stylesheet" href="/assets/css/style.css" />
      </Head>
      <Navbar />
      <Fragment>{children}</Fragment>
      <Footer />
      <Script src="/assets/js/vendor.min.js" strategy="beforeInteractive"></Script>
      <Script src="/assets/vendor/aos/dist/aos.js" strategy="beforeInteractive"></Script>
      <Script src="/assets/js/theme.min.js" strategy="beforeInteractive"></Script>
      <Script src="/assets/js/main.js" strategy="beforeInteractive"></Script>
    </Fragment>
  )
}
