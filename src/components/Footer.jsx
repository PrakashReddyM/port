import React from "react";

const Footer = () => {
  return (
    <footer>
      <div
        className="container-fluid text-center py-10 mt-5"
        style={{ backgroundColor: "black" }}
      >
        <div className="py-5">
          <h2 className="text-light">Interested in working with me?</h2>
          <button className="btn btn-outline-light btn-lg mt-2">
            Let`s Talk
          </button>
        </div>
        <div className="row pt-5">
          <div className="col-12 col-md-6">
            <h5 className="text-success">More Links</h5>

            <div className="d-flex justify-content-center">
              <a
                href="/"
                className="btn bg-white text-dark font-weight-bold h6 d-block text-decoration-none my-4 mx-5 "
              >
                PROJECTS
              </a>
              <a
                href="/"
                className="btn bg-white text-dark font-weight-bold h6 d-block text-decoration-none my-4 mx-5 "
              >
                Home
              </a>
              <a
                href="/"
                className="btn bg-white text-dark font-weight-bold h6 d-block text-decoration-none my-4 mx-5 "
              >
                Contact Me
              </a>
            </div>
          </div>

          <div className="col-12 col-md-6 p-3">
            <h5 className="text-success">Social</h5>
            <div className="d-flex justify-content-center">
              <a href={"https://www.linkedin.com/in/prakash-reddy-199b5b23a/?trk=opento_sprofile_goalscard"}>
                <i className="fab fa-linkedin text-light h1 d-block  mx-5 my-4"></i>
              </a>
              <a href="/">
                <i className="fab fa-github text-light h1 d-block mx-5 my-4"></i>
              </a>
              <a href={"https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSGLPnknTswpXNclBxwspnKBzpMrjbjVpgnJFxhSwpcgPPfmnHRQVCzDKlxZQJdLJXKbsMpr"}>
                <i
                  className="fa fa-envelope text-light h1 d-block  mx-5 my-4"
                  aria-hidden="true"
                ></i>
              </a>
            </div>
          </div>
        </div>
        <div className="text-muted py-4 pb-6">
          <h5>Copyright @ Prakash Reddy 2024</h5>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
