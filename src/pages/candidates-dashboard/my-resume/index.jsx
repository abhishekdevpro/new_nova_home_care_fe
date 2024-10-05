
import MyResume from "@/components/dashboard-pages/candidates-dashboard/my-resume";

import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title: "My Resume || Novahome Care - Job Borad ReactJs Template",
  description: "Novahome Care - Job Borad ReactJs Template",
};

const MyResumePage = () => {
  return (
    <>
    <MetaComponent meta={metadata} />
      <MyResume />
    </>
  );
};

export default MyResumePage
