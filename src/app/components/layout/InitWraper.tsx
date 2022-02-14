import React from "react";
import Head from "next/head";
import { GlobalStyle } from "../../../styles/createGlobalStyles";
import BodyColorChange from "../BodyColorChange";
import { prefix } from "../../../pages/_app";

const HeaderFooterWraper = ({ children }) => {
  return (
    <div>
      <GlobalStyle />
      <BodyColorChange />
      <Head>
        <title>El Hector</title>
        <link rel="icon" href={prefix + "/favicon.ico"} />
      </Head>
      {children}
    </div>
  );
};

export default HeaderFooterWraper;
