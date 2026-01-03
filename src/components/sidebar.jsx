import "../styles/sidebar.css";
import { Link, useNavigate } from "react-router-dom";

export default function SideBar() {
  const navigate = useNavigate();   // ✅ INSIDE component

  return (
    <div className="sidebar">
      <div className="vnitLogo">
        <img src="" alt="VNIT" />
      </div>

      <div className="profile-section">
        <img
          src="https://static.vecteezy.com/system/resources/previews/069/446/524/non_2x/avatar-gender-neutral-silhouette-illustration-profile-picture-no-image-for-social-media-profiles-flat-icons-no-photo-default-avatar-profile-icon-in-grayscale-user-profile-person-icon-vector.jpg"
          className="profile-pic"
        />
        <h3 className="username">Username</h3>
      </div>

      <div className="sidebar-button">
        <button className="ui-btn">View Profile</button>
        <button className="ui-btn">Change Password</button>

        <Link to="/view-complaints">
          <button className="ui-btn">View Complaints</button>
        </Link>

        {/* 🔔 Updates = Announcements */}
        <button
          className="ui-btn"
          onClick={() => navigate("/updates")}
        >
          Updates
        </button>

        <button className="ui-btn">Logout</button>
      </div>
    </div>
  );
}