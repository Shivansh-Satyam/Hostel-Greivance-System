import "../styles/mainPanel.css";
import ImageSlider from "./imagelider";


// function MainPanel() {
//   return (
//     <div className="main-panel">
//       <div className="top-buttons">
//         <button className="ui-btn">Add Complaint</button>
//         <button className="ui-btn">View Complaints</button>
//         <button className="ui-btn">Upload Documents</button>
//       </div>

//       <div className="hostel-section">
//         <ImageSlider/>
//       </div>
//     </div>
//   );
// }

// export default MainPanel;



function MainPanel({ openLan, openCivil, openElectrical }) {
  return (
    <div className="main-panel">
      <div className="top-buttons">
        <button className="ui-btn" onClick={openLan}>
          LAN Complaint
        </button>

        <button className="ui-btn" onClick={openCivil}>
          Civil Complaint
        </button>
        <button className="ui-btn" onClick={openElectrical}>
          Electrical Complaint
        </button>
      </div>

      <div className="hostel-section">
        <ImageSlider/>
      </div>
    </div>
  );
}

export default MainPanel;
