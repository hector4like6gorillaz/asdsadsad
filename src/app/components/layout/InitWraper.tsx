import { NextPage } from "next";
import Head from "next/head";
import React from "react";
import { GlobalStyle } from "../../../styles/createGlobalStyles";
import BodyColorChange from "../BodyColorChange";

//Components

const HeaderFooterWraper: NextPage = ({ children }) => {
  return (
    <div>
      <GlobalStyle />
      <BodyColorChange />
      <Head>
        <title>El Hector</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {children}
    </div>
  );
};

export default HeaderFooterWraper;
