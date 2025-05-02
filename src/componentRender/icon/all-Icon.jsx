import { FaLinkedin } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaPhoneSquare } from "react-icons/fa";
import { useState } from "react";

const LinkedInIcon = () => {
  return (
    <a
      href="http://www.linkedin.com/in/teerapat-futhep"
      target="_blank"
      rel="personal-linkedin"
    >
      <FaLinkedin className="text-black-100 w-[40px] h-[40px] mt-5" />
    </a>
  );
};

const EmailIcon = () => {
  return (
    <a
      href="mailto:futhepteerapat@gmail.com" 
      target="_self" 
      rel="noopener noreferrer"
    >
      <IoMdMail className="text-black-100 w-[44px] h-[43px] mt-5 ml-5" />
    </a>
  );
};

/// copy phone number to clipboard & show popup 
const PhoneIcon = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handleClick = () => {
    const phoneNumber = "+668-7516-1343"; 
    navigator.clipboard.writeText(phoneNumber).then(() => {
      setShowPopup(true);
    }).catch(err => {
      console.error("Failed to copy phone number: ", err);
    });
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <>
      <button onClick={handleClick}>
        <FaPhoneSquare className="text-black-100 w-[40px] h-[40px] mt-5 ml-5" />
      </button>
      {showPopup && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
          onClick={closePopup}
        >
          <div
            className="bg-white p-5 rounded shadow-lg max-w-xl w-full mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <p className="text-center">
              Phone number copied successfully.
              <br />
              Please, do not hesitate to contact me if you have any questions or inquiries.
            </p>
            <div className="flex justify-end mt-4">
              <button
                className="px-4 py-2 bg-blue-500 text-white rounded"
                onClick={closePopup}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export { LinkedInIcon, EmailIcon, PhoneIcon };
