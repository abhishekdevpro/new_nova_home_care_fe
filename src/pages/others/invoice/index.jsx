

import Invoice from "@/components/pages-menu/invoice";

import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title: 'Invoice || Novahome Care - Job Borad ReactJs Template',
  description:
    'Novahome Care - Job Borad ReactJs Template',
  
}



const InvoicePage = () => {
  return (
    <>
    <MetaComponent meta={metadata} />
      
      <Invoice />
    </>
  );
};

export default InvoicePage
