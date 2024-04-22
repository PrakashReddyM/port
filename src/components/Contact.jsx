import "../styles/contact.css";

function Contact() {
  return (
    <div className="contact-container">
      <div className="contact-form">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <h2 className="text-center font-weight-bold  mb-4">CONTACT ME</h2>
            <form action="https://formspree.io/f/xbjnqavr" method="POST">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  className="form-control"
                  id="message"
                  rows="5"
                  name="message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="btn font-weight-bold btn-warning btn-block"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
