import GithubIcon from "../../assets/socialmedia-icons/github.svg";
import InstaIcon from "../../assets/socialmedia-icons/instagram.svg";
import LinkedinIcon from "../../assets/socialmedia-icons/linkedin.svg";
import TwitterIcon from "../../assets/socialmedia-icons/twitter.svg";

function SocialMedia() {
  const handleSocialMedia = (link) => {
    window.open(link,'_blank');
  };
  return (
    <div className="d-flex gap-3 justify-content-center">
      <button
        className="social-icon"
        onClick={()=>handleSocialMedia("https://github.com/Lokesh396")}
      >
        <img src={GithubIcon} alt="Github" />
      </button>
      <button
        className="social-icon"
        onClick={()=>handleSocialMedia(
          "https://www.linkedin.com/in/c-lokesh-kumar-reddy-30a5681a1?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
        )}
      >
        <img src={LinkedinIcon} alt="Linkedin" />
      </button>
      <button
        className="social-icon"
        onClick={()=>handleSocialMedia(
          "https://x.com/Lokeshkr55?t=wxpWUSjo6hcUvt6Q0kxXYQ&s=09"
        )}
      >
        <img src={TwitterIcon} alt="Twitter" />
      </button>
      <button
        className="social-icon"
        onClick={()=>handleSocialMedia(
          "https://instagram.com/lokeshkumarreddy_5?igshid=OGQ5ZDc2ODk2ZA=="
        )}
      >
        <img src={InstaIcon} alt="Instagram" />
      </button>
    </div>
  );
}

export default SocialMedia;
