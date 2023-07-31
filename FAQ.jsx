import { FAQData } from "./FAQData";
import Accordion from "./Accordion";
const FAQ = () => {
  return (
    <div className="px-10 md:px-40 py-10">
      <div className="py-20 px-28 rounded-lg bg-BrandPrimary bg-[url('../../assets/media/icons/Home/FAQ.png')]">
        <h1 className="py-10 font-ManropeExtraBold text-center text-white text-[25px] md:text-[35px]">
          Frequently Asked Questions
        </h1>

        {FAQData.map(({ title, content }) => (
          <Accordion title={title} content={content} />
        ))}
      </div>
    </div>
  );
};

export default FAQ;
