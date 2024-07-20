import "../styles/HeaderSection.css";
const HeaderSection = () => {
  return (
    <div className="container headerbar ">
      <div className="row">
        <div className="col-6 d-flex align-items-center justify-content-left">
          <div className="d-flex flex-column">
            <span className="logo">accredian</span>
            <span className="caption">credentials that matter</span>
          </div>

          <button className="btn btn-primary">Courses</button>
        </div>
        <div className="col-6 d-flex align-items-center justify-content-between p-4">
          <a className="links" href="#">
            Refer & Earn
          </a>
          <a className="links" href="#">
            Resources
          </a>
          <a className="links" href="#">
            About Us
          </a>
          <button className="btn btn-secondary">Login</button>
          <button className="btn btn-primary">Try for free</button>
        </div>
      </div>
    </div>
  );
};

export default HeaderSection;
