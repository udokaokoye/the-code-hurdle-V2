import "../styles/globals.css";
import Context from "../Context/Store";
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Context>
        <Component {...pageProps} />
      </Context>
    </>
  );
}

export default MyApp;
