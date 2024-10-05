import React from "react";

import Home from "@/components/home-4";

import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title: "Home-4 || Novahome Care - Job Borad ReactJs Template",
  description: "Novahome Care - Job Borad ReactJs Template",
};

const HomePage4 = () => {
  return (
    <>
    <MetaComponent meta={metadata} />
      <Home />
    </>
  );
};

export default HomePage4;
