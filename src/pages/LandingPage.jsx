import Hambuger from "../components/Hambuger";
import Profile from "../components/Profile";
import "../styles/Landing-page.css";
export default function LandingPage() {
  const handleMenu = () => {
    const libraryUser = localStorage.getItem("library-user");
    libraryUser
      ? (window.location.href = "/home")
      : window.alert("Not Registered! 😒🫤🥱🫠😏😐");
  };
  const handleRegister = () => {
    window.location.href = "/register";
  };
  return (
    <div className="landing-page-container">
      <div className="header">
        <div className="menu-container">
          <div className="menu" onClick={handleMenu}>
            <Hambuger />
          </div>
        </div>
        {/* <div className="profile-settings">
          <div className="profile">
            <Profile />
          </div>
          <div className="theme">
            <Hambuger />
          </div>
          <div className="notification">
            <Hambuger />
          </div>
        </div> */}
      </div>
      <div className="hero-section">
        <h2 className="one">Online Library</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi,
          veniam adipisci cum veritatis doloremque dicta quisquam neque sed
          nulla vero dolor cumque corporis reiciendis optio maxime accusantium
          facere? Nesciunt, nemo.
        </p>

        <button onClick={handleRegister}>Get Started</button>
        {/* <h2 className="one">Learning Process</h2> */}
      </div>
      <div>
        <div className="hero-image">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam qui
          laboriosam, beatae et animi rem assumenda iusto ipsum eius aperiam,
          cum illum necessitatibus recusandae voluptatem. Fuga, saepe. Omnis,
          maiores dicta!
        </div>

        <section className="footer">
          <h1>Footer Section</h1>
        </section>
      </div>
    </div>
  );
}
