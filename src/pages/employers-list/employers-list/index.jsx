
import EmployersList from "@/components/employers-listing-pages/employers-list";

import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title: "Employers List V2 || Novahome Care - Job Borad ReactJs Template",
  description: "Novahome Care - Job Borad ReactJs Template",
};

const EmployerList = () => {
  return (
    <>
    <MetaComponent meta={metadata} />
      <EmployersList />
    </>
  );
};

export default EmployerList
