// import { useState } from "react";
import FaceImg from "../../assets/images/face.png";
import movieImg from "../../assets/images/movie1.png";
import CloneImg from "../../assets/images/clone.png";
function Work() {
  // const [item, setItem] = useState("all");

  const handleNavigate = (url) => {
    window.open(url, "_blank");
  };

  return (
    <div className="work-page">
      <div className=" d-flex1 justify-content-between">
        <h3>Portfolio</h3>
        {/* <ul className="d-flex gap-3 fw-semibold">
          <li
            onClick={() => setItem("all")}
            className={item === "all" && "active-link"}
          >
            <a href="#">All</a>
          </li>
          <li
            onClick={() => setItem("web")}
            className={item === "web" && "active-link"}
          >
            <a href="#">Web Development</a>
          </li>
          <li
            onClick={() => setItem("python")}
            className={item === "python" && "active-link"}
          >
            <a href="#">Python</a>
          </li>
        </ul> */}
      </div>
      <div className="d-flex image-col gap-10 mx-auto">
        <div>
          <div className="work-image2 rounded">
            <img className="image2" src={FaceImg} alt="face-recogntion" />
            <p className="text-color my-1">Machine Learning</p>
            <h6>Face Recognition for Banking security</h6>
            <div className="d-flex justify-content-center">
              <button
                onClick={() =>
                  handleNavigate(
                    "https://github.com/Lokesh396/Face_Recognition"
                  )
                }
                className="src-button"
              >
                Source Code
              </button>
            </div>
          </div>
          <div className="work-image1 rounded my-3">
            <img className="image2" src={movieImg} alt="face-recogntion" />
            <p className="text-color my-1">Machine Learning</p>
            <h6>Movie Recommendation System</h6>
            <div className="d-flex justify-content-center">
              <button
                onClick={() =>
                  handleNavigate(
                    "https://github.com/Lokesh396/Movie_Recommendation_System"
                  )
                }
                className="src-button"
              >
                Source Code
              </button>
            </div>
          </div>
        </div>
        <div>
          <div className="work-image1 rounded">
            <img className="image2" src={CloneImg} alt="face-recogntion" />
            <p className="text-color my-1">Web Development</p>
            <h6>Youtube Clone</h6>
            <div className="d-flex justify-content-center">
              <button
                onClick={() =>
                  handleNavigate("https://github.com/Lokesh396/youtube-clone")
                }
                className="src-button"
              >
                Source Code
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Work;
