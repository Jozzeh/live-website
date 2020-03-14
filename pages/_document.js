import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang="en">
        <Head />
        <body>
          <a className="skip-main" href="#content">Skip to Main Content</a>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument