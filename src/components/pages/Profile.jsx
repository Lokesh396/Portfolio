import ContactCard from "./ContactCard";
import SocialMedia from "./SocialMedia";
import ProfilePhoto from "../../assets/images/profile.jpg";

function Profile() {
  return (
    <div className="mt-3 profile-width">
      <div className="d-flex align-items-center flex-column">
        <img
          style={{ width: "200px", height: "200px", borderRadius: "100px" }}
          src={ProfilePhoto}
          alt="Profile-Photo"
        />
        <h5 className="my-3">C Lokesh Kumar Reddy</h5>
        <h6 className="text-color mb-3">Full Stack Developer</h6>
      </div>

      <SocialMedia></SocialMedia>
      <ContactCard></ContactCard>
    </div>
  );
}

export default Profile;
