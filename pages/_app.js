// import withError from 'next-with-error';
import App from 'next/app';
 
class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return <Component {...pageProps} />;
  }
}
 
// export default withEror()(MyApp);
export default MyApp;