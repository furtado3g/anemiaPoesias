import Document, { Head, Main, NextScript } from "next/document";
// Import styled components ServerStyleSheet
import { ServerStyleSheet } from "styled-components";
import {Body}  from '../components/body'
class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    // Step 1: Create an instance of ServerStyleSheet
    const sheet = new ServerStyleSheet();
    // Step 2: Retrieve styles from components in the page
    const page = renderPage((App) => (props) =>
      sheet.collectStyles(<App {...props} />)
    );
    // Step 3: Extract the styles as <style> tags
    const styleTags = sheet.getStyleElement();
    // Step 4: Pass styleTags as a prop
    return { ...page, styleTags };
  }

  render() {
    return (
      <html lang="pt-br">
        <Head>
          <title>Anemia Poesias</title>
          <meta name="mobile-web-app-capable" content="yes"></meta>
          {/* Step 5: Output the styles in the head  */}
          {this.props.styleTags}
        </Head>
        <body >
          <Body>
            <Main />
            <NextScript />
          </Body>
          <script src="https://kit.fontawesome.com/c4c1b5ac48.js" crossorigin="anonymous"></script>
        </body>
      </html>
    );
  }
}
export default  MyDocument