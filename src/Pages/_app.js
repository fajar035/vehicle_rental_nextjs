import "../commons/styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// import { Provider } from "react-redux";
// import { store } from "src/redux/store";
// import { PersistGate } from "redux-persist/integration/react";
// import { persistor } from "src/redux/store";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ToastContainer />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
