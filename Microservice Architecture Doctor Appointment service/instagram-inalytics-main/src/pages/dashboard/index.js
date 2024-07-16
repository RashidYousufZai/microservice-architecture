import React from "react";
import Head from "next/head";
import Header from "./header";
import Sidebar from "./sidebar";
import Main from "./main";


const index = () => {
  return (
    <>
      <Head>
        <title>Next.js App with CDN</title>
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.3.0/flowbite.min.css"
          rel="stylesheet"
        />

        <script
          src="https://code.jquery.com/jquery-3.5.1.slim.min.js"
          async // Change async
        ></script>
        <script
          src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.3.0/flowbite.min.js"
          async // Change async
        ></script>
        <script
          src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js"
          async // Change async
        ></script>
      </Head>
      <Header />
      <Sidebar />
      <Main />
    </>
  );
};

export default index;
