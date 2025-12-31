import "../styles/sidebar.css"

export default function SideBar(){
    return(
        <div className="sidebar">
            <div className="vnitLogo">
                <img src=""></img>
            </div>
            <div className="profile-section">
                <img src="https://static.vecteezy.com/system/resources/previews/069/446/524/non_2x/avatar-gender-neutral-silhouette-illustration-profile-picture-no-image-for-social-media-profiles-flat-icons-no-photo-default-avatar-profile-icon-in-grayscale-user-profile-person-icon-vector.jpg"
                className="profile-pic"
                />
                <h3 className="username">Username</h3>
            </div>
            <div className="sidebar-button">
                <button className="ui-btn">view profile</button>
                <button className="ui-btn">Change Password</button>
                <button className="ui-btn">Updates</button>
                <button className="ui-btn">Logout</button>
            </div>
        </div>
    );
}