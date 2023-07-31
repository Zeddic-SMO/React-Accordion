import { useState } from "react";
import arrowdown from "../../../assets/media/icons/Home/arrowdown.png";
import arrowup from "../../../assets/media/icons/Home/arrowup.png";

const Accordion = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="accordion-item mb-3 rounded-lg bg-white">
      <div
        className="accordion-title flex justify-between cursor-pointer p-4 bg-white rounded-lg"
        onClick={() => setIsActive(!isActive)}
      >
        <div>{title}</div>
        <div>
          {isActive ? (
            <img src={arrowup} alt="close" />
          ) : (
            <img src={arrowdown} alt="open" />
          )}
        </div>
      </div>
      {isActive && <div className="accordion-content p-4">{content}</div>}
    </div>
  );
};

export default Accordion;
