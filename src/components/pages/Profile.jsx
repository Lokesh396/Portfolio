import ContactCard from "./ContactCard"
import SocialMedia from "./SocialMedia"
import ProfilePhoto from "../../assets/images/profile.jpg"

function Profile() {
  return (
    <div className='mt-3 profile-width'>
      <div className="d-flex align-items-center flex-column">
      <img style={{width:"200px", height:"200px", borderRadius:"20px"}} src={ProfilePhoto} alt="Profile-Photo" />
      <h3 className="my-3">C Lokesh Kumar Reddy</h3>
      <h5 className="text-color my-3">
        Full Stack Developer
      </h5>
      </div>
     
      <SocialMedia></SocialMedia>
      <ContactCard></ContactCard>
    </div>
  )
}

export default Profile