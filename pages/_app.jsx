// pages/_app.js
import React from 'react'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Anemia Poesias</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp