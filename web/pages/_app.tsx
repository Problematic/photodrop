import React from 'react'
import App, { Container, NextAppContext } from 'next/app'

import '../styles/normalize.css'
import '../styles/app.css'

export default class PhotoDropApp extends App {
  static async getInitialProps(context: NextAppContext) {
    let pageProps = {}

    if (context.Component.getInitialProps) {
      pageProps = await context.Component.getInitialProps(context.ctx)
    }

    return { pageProps }
  }

  render() {
    const { Component, pageProps } = this.props

    return (
      <Container>
        <Component {...pageProps} />
      </Container>
    )
  }
}
