import Document, { Head, Main, NextScript } from 'next/document'
import { renderStatic } from 'glamor/server'

export default class MyDocument extends Document {
  static async getInitialProps ({ renderPage }) {
    const page = renderPage()
    const styles = renderStatic(() => page.html)
    return { ...page, ...styles }
  }

  constructor (props) {
    super(props)
    const { __NEXT_DATA__, ids } = props
    if (ids) {
      __NEXT_DATA__.ids = this.props.ids
    }
  }
  
  componentWillMount() {
    // Adds server generated styles to glamor cache.
    // Has to run before any `style()` calls
    // '__NEXT_DATA__.ids' is set in '_document.js'
    if (typeof window !== 'undefined') {
      rehydrate(window.__NEXT_DATA__.ids)
    }
  }
  

  render () {
    return (
      <html>
        <Head>
          <title>React Coach</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/meyer-reset/2.0/reset.min.css"
          />

          <style dangerouslySetInnerHTML={{ __html: this.props.css }} />
        </Head>
        <body>
          <Main />

          <script src="https://checkout.stripe.com/checkout.js" />
          <NextScript />
        </body>
      </html>
    )
  }
}