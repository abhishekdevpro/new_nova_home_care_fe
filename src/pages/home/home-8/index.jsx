import React from "react";

import Home from "@/components/home-8";

import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title: "Home-8 || Novahome Care - Job Borad ReactJs Template",
  description: "Novahome Care - Job Borad ReactJs Template",
};

const HomePage8 = () => {
  return (
    <>
    <MetaComponent meta={metadata} />
      <Home />
    </>
  );
};

export default HomePage8;
