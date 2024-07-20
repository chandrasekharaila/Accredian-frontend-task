import "../styles/HeroSection.css";
import img1 from "../images/assignmentImage1.png";
import { Modal } from "react-bootstrap";
import { useState } from "react";
const HeroSection = () => {
  const [showModal, setShowModal] = useState(false);
  const [referrerName, setReferrerName] = useState("");
  const [referrerEmail, setReferrerEmail] = useState("");
  const [refereeName, setRefereeName] = useState("");
  const [refereeEmail, setRefereeEmail] = useState("");
  const handleShowModal = () => {
    setShowModal(!showModal);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!refererName || !referrerEmail || !refereeName || !refereeEmail) {
      alert("All fields are required!");
      return;
    }

    if (
      !/\S+@\S+\.\S+/.test(referrerEmail) ||
      !/\S+@\S+\.\S+/.test(refereeEmail)
    ) {
      alert("Please enter valid email addresses.");
      return;
    }

    try {
      const response = await fetch("http://localhost:3000/api/referrals", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          referrerName,
          referrerEmail,
          refereeName,
          refereeEmail,
        }),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || "Something went wrong");
      }

      alert("Referral submitted successfully!");
      setShowModal(false);
      setReferrerName("");
      setReferrerEmail("");
      setRefereeName("");
      setRefereeEmail("");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <>
      <div className="box">
        <a href="#">Refer</a>
        <a href="#">Benefits</a>
        <a href="#">FAQs</a>
        <a href="#">Support</a>
      </div>
      <div className="box2">
        <div className="d-flex flex-column justify-content-center p-3">
          <h1 style={{ fontWeight: "bold" }}>
            Let's Learn <br /> & Earn
          </h1>
          <p>
            Get a chance to win <br /> up to{" "}
            <span style={{ color: "#0d6efd" }}>Rs. 15,100</span>
          </p>
          <button className="heroBtn btn btn-primary" onClick={handleShowModal}>
            {" "}
            Refer Now
          </button>
        </div>
        <div className=" imgBox d-flex align-items-center justify-content-center">
          <img src={img1} />
        </div>
        <Modal show={showModal} onHide={handleShowModal}>
          <Modal.Header closeButton>
            <Modal.Title>Refer a Friend</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form onSubmit={handleSubmit}>
              <label htmlFor="refererName">Referrer Name : &nbsp;</label>
              <input
                type="text"
                id="refererName"
                value={referrerName}
                onChange={(e) => setReferrerName(e.target.value)}
              />
              <br />
              <br />
              <label htmlFor="refererMail">Referre email : &nbsp;</label>
              <input
                type="email"
                id="referrerMail"
                value={referrerEmail}
                onChange={(e) => setReferrerEmail(e.target.value)}
              />
              <br />
              <br />
              <label htmlFor="refereeName">Referee Name : &nbsp;</label>
              <input
                type="text"
                id="refereeName"
                value={refereeName}
                onChange={(e) => setRefereeName(e.target.value)}
              />
              <br />
              <br />
              <label htmlFor="refereeMail">Referee email : &nbsp;</label>
              <input
                type="email"
                id="refereeMail"
                value={refereeEmail}
                onChange={(e) => setRefereeEmail(e.target.value)}
              />
              <br />
              <br />
              <button className="btn btn-success">submit</button>
            </form>
          </Modal.Body>
        </Modal>
      </div>
    </>
  );
};
export default HeroSection;
