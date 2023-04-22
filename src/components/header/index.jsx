import "./style.css";
import { getItem } from "../../utils/storage";
import { Link } from "react-router-dom";
import Logout from "../../assets/logout.svg";

function Header() {
  const userNome = getItem("userNome");

  function handleLogout() {
    localStorage.clear();
  }

  return (
    <>
      <div className="container">
        <div className="header">
          <span className="user-name">
            Bem-vindo <strong>{userNome}</strong>
          </span>
          <Link to={"/"}>
            <button className="logout" onClick={handleLogout}>
              <img className="logout-img" src={Logout} alt="Logout" />
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Header;
