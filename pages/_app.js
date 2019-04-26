import App, { Container } from 'next/app'
import React from 'react'
import Head from 'next/head'

import '../styles/main.scss';

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <Container>
        <Head>
          <title>CampChang</title>
        </Head>
        <Component {...pageProps} />
      </Container>
    )
  }
}

export default MyApp
