import * as Lucide from "lucide-react";
import GmailLogo from "../../assets/images/gmail-logo.png";
import LocationImg from "../../assets/images/location.png";
// import SmartPhoneImg from "../../assets/images/smartphone.png";
import { Link } from "react-router-dom";
function ContactCard() {
  return (
    <div className="contact-card mt-3 pb-2 ">
      {/* <div className="d-flex  align-items-center  gap-3  py-3 contact-icon">
        <img src={SmartPhoneImg} alt="SmartPhone" />
        <div>
          <p className="text-color">Phone</p>
          <p>+919502921597</p>
        </div>
      </div> */}
      <div className="d-flex  align-items-center  gap-3  py-3 contact-icon">
        <img src={GmailLogo} alt="Gmail" />
        <div>
          <p className="text-color">Email</p>
          <p>lokeshkumarreddy.c@gmail.com</p>
        </div>
      </div>
      <div className="d-flex  align-items-center  gap-3  py-3 contact-icon">
        <img src={LocationImg} alt="Location" />
        <div>
          <p className="text-color">Location</p>
          <p>Hyderabad, Telangana</p>
        </div>
      </div>
      <div className="py-3 d-flex justify-content-center">
        <Link
          to="/CLokeshKumarReddy_Resume.pdf"
          target="_blank"
          download
          className="btn btn-bg"
        >
          <div className="d-flex justify-content align-items gap-2">
            <Lucide.DownloadIcon></Lucide.DownloadIcon>
            Download Resume
          </div>
        </Link>
      </div>
    </div>
  );
}

export default ContactCard;
