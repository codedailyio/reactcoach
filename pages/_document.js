import Document, { Head, Main, NextScript } from "next/document";
import { renderStatic } from "glamor/server";

export default class MyDocument extends Document {
  static async getInitialProps({ renderPage }) {
    const page = renderPage();
    const styles = renderStatic(() => page.html);
    return { ...page, ...styles };
  }

  constructor(props) {
    super(props);
    const { __NEXT_DATA__, ids } = props;
    if (ids) {
      __NEXT_DATA__.ids = this.props.ids;
    }
  }

  componentWillMount() {
    // Adds server generated styles to glamor cache.
    // Has to run before any `style()` calls
    // '__NEXT_DATA__.ids' is set in '_document.js'
    if (typeof window !== "undefined") {
      rehydrate(window.__NEXT_DATA__.ids);
    }
  }

  render() {
    return (
      <html>
        <Head>
          <title>React Coach</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
          <link rel="icon" href="/favicon.ico" type="image/x-icon" />
          <link rel="apple-touch-icon" sizes="57x57" href="/static/ico/apple-icon-57x57.png" />
          <link rel="apple-touch-icon" sizes="60x60" href="/static/ico/apple-icon-60x60.png" />
          <link rel="apple-touch-icon" sizes="72x72" href="/static/ico/apple-icon-72x72.png" />
          <link rel="apple-touch-icon" sizes="76x76" href="/static/ico/apple-icon-76x76.png" />
          <link rel="apple-touch-icon" sizes="114x114" href="/static/ico/apple-icon-114x114.png" />
          <link rel="apple-touch-icon" sizes="120x120" href="/static/ico/apple-icon-120x120.png" />
          <link rel="apple-touch-icon" sizes="144x144" href="/static/ico/apple-icon-144x144.png" />
          <link rel="apple-touch-icon" sizes="152x152" href="/static/ico/apple-icon-152x152.png" />
          <link rel="apple-touch-icon" sizes="180x180" href="/static/ico/apple-icon-180x180.png" />
          <link
            rel="icon"
            type="image/png"
            sizes="192x192"
            href="/static/ico/android-icon-192x192.png"
          />
          <link rel="icon" type="image/png" sizes="32x32" href="/static/ico/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="96x96" href="/static/ico/favicon-96x96.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/static/ico/favicon-16x16.png" />
          <link rel="manifest" href="/static/ico/manifest.json" />
          <meta name="msapplication-TileColor" content="#ffffff" />
          <meta name="msapplication-TileImage" content="/static/ico/ms-icon-144x144.png" />
          <meta name="theme-color" content="#ffffff" />
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/meyer-reset/2.0/reset.min.css"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Rubik:400,700|Work+Sans"
            rel="stylesheet"
          />
          <link href="/static/styles.css" rel="stylesheet" />

          <style dangerouslySetInnerHTML={{ __html: this.props.css }} />
        </Head>
        <body>
          <Main />

          <script src="https://checkout.stripe.com/checkout.js" />
          <NextScript />
        </body>
      </html>
    );
  }
}
