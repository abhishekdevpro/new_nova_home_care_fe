
import JobList from "@/components/job-listing-pages/job-list-v7";

import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title: "Job List V7 || Novahome Care - Job Borad ReactJs Template",
  description: "Novahome Care - Job Borad ReactJs Template",
};

const JobListPage7 = () => {
  return (
    <>
    <MetaComponent meta={metadata} />
      <JobList />
    </>
  );
};

export default JobListPage7
