import { useForm } from "react-hook-form";
import api from "../../services/api";
import { useState } from "react";

function Contact() {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [clicked, setClicked] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setClicked(true);
    let res = await api({
      url: "/contact",
      headers: { "Content-Type": "application/json" },
      method: "POST",
      responseType: "JSON",
      data,
    });
    let response = JSON.parse(res);
    if (response.code === 200) {
      setSuccess(true);
      setClicked(false);
      reset();
    } else {
      setClicked(false);
      setError(true);
    }
  };
  return (
    <div className="contact-page">
      <h3>Contact</h3>
      <p className="contact-info my-3">
        You can reach out to me through various social media platforms such as
        GitHub, LinkedIn, Twitter, and Instagram for direct communication.
        Alternatively, you can use the contact form below to send me a message
        or inquire about any information you need.
      </p>
      <div className="contact-form">
        <p className="fw-medium">
          I am always open to discussing new projects, opportunities in tech
          world, partnerships and more so mentorship.{" "}
        </p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="C Lokesh Kumar Reddy"
              {...register("name", { required: true })}
            />
            {errors?.name && (
              <p className="error-message">Please, Enter your name</p>
            )}
          </div>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              placeholder="lokeshkumareddy.c@gmail.com"
              {...register("email", { required: true })}
            />
            {errors?.email && (
              <p className="error-message">Please, Enter your Email</p>
            )}
          </div>
          <div className="mb-3">
            <label className="form-label">Message</label>
            <textarea
              rows={"3"}
              type="email"
              className="form-control"
              placeholder=""
              {...register("message", { required: true })}
            />
            {errors?.message && (
              <p className="error-message">Please, Enter your message</p>
            )}
          </div>
          <button className="form-submit" type="submit" disabled={clicked}>
            {clicked ? (
              <>
                <span
                  className="spinner-grow spinner-grow-sm"
                  role="status"
                  aria-hidden="true"
                ></span>
                <span>submitting</span>
              </>
            ) : (
              "Submit"
            )}
          </button>
        </form>
        {success && (
          <p className="text-success">Your message reached &#x2713;</p>
        )}
        {error && <p className="error-message">Please Try again!</p>}
      </div>
    </div>
  );
}

export default Contact;
