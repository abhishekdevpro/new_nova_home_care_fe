import React from "react";

import Home from "@/components/home-17";

import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title: "Home-17 || Novahome Care - Job Borad ReactJs Template",
  description: "Novahome Care - Job Borad ReactJs Template",
};

const HomePage17 = () => {
  return (
    <>
    <MetaComponent meta={metadata} />
      <Home />
    </>
  );
};

export default HomePage17;
