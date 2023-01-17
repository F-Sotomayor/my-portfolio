import "../styles/global.scss";
import { Roboto } from "@next/font/google";
import { useState } from "react";
import Loading from "../components/stateless/Spinner/loading";

const roboto = Roboto({ subsets: ["latin"], weight: "400" });

export default function App({ Component, pageProps }) {
  const [loader, setLoader] = useState(true);

  setTimeout(() => {
    setLoader(false);
  }, ["1500"]);

  return (
    <>
      <style jsx global>
        {`
          html {
            font-family: ${roboto.style.fontFamily};
          }
        `}
      </style>
      {loader ? <Loading /> : <Component {...pageProps} />}
    </>
  );
}
