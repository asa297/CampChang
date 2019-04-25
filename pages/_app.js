import App, { Container } from 'next/app'
import React from 'react'
import Head from 'next/head'

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
