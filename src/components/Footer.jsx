import React from "react";
import "../styles/footer.css"

const Footer = () => {
  return (
    <footer className="footer">
    <div className="one">
    <div >
      <h2 className="text-light">Interested in working with me?</h2>
          <button className="btn btn-outline-light btn-lg mt-2">
             Let`s Talk 
           </button>
      </div>
      <div>
      <h5 className="btn font-weight-bold btn-warning btn-block">SOCIAL</h5>
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
    <div className="two">
    <div class="text-muted py-4 pb-6">
          <h5>Copyright @ Prakash Reddy 2024</h5>
        </div>
    </div>
    </footer>

  );
};

export default Footer;
