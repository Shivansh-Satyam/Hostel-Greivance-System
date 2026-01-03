import { useState } from "react";
import "./Complaints.css";

export default function LanComplaints({ goBack }) {
  const [formData, setFormData] = useState({
    studentName: "",
    rollNumber: "",
    hostel: "",
    roomNumber: "",
    issueType: "",
    description: "",
    contactNumber: ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

   const handleSubmit = async (e) => {
  e.preventDefault();

  const complaintPayload = {
    studentName: formData.studentName,
    studentId: formData.rollNumber,
    contactNumber: formData.contactNumber,

    category: "Lan",
    issueType: formData.issueType,
    description: formData.description,
    hostel: formData.hostel,
    room: formData.roomNumber,

    priority: "Normal"
  };

  try {
    const res = await fetch("http://localhost:5000/api/complaints", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(complaintPayload)
    });

    if (res.ok) {
      alert("Complaint submitted successfully");
      goBack();
    } else {
      alert("Failed to submit complaint");
    }
  } catch (err) {
    alert("Server error");
  }
};

  return (
    <div className="form-page">
      <div className="heading">
          <h2>LAN Complaint Form</h2>
      </div>
      <form className="form" onSubmit={handleSubmit}>
        
        <div className="form-row">
            <label htmlFor="studentName">Student Name</label>
            <input
            id="studentName"
            name="studentName"
            placeholder="Enter your full name"
            value={formData.studentName}
            onChange={handleInputChange}
            required
            />
        </div>

        <div className="form-row">
            <label htmlFor="rollNumber">Student Id</label>
            <input
            id="rollNumber"
            name="rollNumber"
            placeholder="Enter roll number"
            value={formData.rollNumber}
            onChange={handleInputChange}
            required
            />
        </div>

        <div className="form-row">
            <label htmlFor="hostel">Hostel Name</label>
            <input
            id="hostel"
            name="hostel"
            placeholder="Enter hostel name"
            value={formData.hostel}
            onChange={handleInputChange}
            required
            />
        </div>

        <div className="form-row">
            <label htmlFor="roomNumber">Room Number</label>
            <input
            id="roomNumber"
            name="roomNumber"
            placeholder="Enter room number"
            value={formData.roomNumber}
            onChange={handleInputChange}
            required
            />
        </div>

        <div className="form-row">
            <label htmlFor="issueType">Issue Type</label>
            <select
            id="issueType"
            name="issueType"
            value={formData.issueType}
            onChange={handleInputChange}
            required
            >
            <option value="">Select Issue Type</option>
            <option value="no-internet">No Internet</option>
            <option value="slow-speed">Slow Speed</option>
            <option value="frequent-disconnect">Frequent Disconnection</option>
            <option value="lan-port-dead">LAN Port Not Working</option>
            </select>
        </div>

        <div className="form-row">
            <label htmlFor="description">Issue Description</label>
            <textarea
            id="description"
            name="description"
            placeholder="Describe the issue in detail"
            value={formData.description}
            onChange={handleInputChange}
            rows={4}
            />
        </div>

        <div className="form-row">
            <label htmlFor="contactNumber">Contact Number</label>
            <input
            id="contactNumber"
            name="contactNumber"
            placeholder="Enter contact number"
            value={formData.contactNumber}
            onChange={handleInputChange}
            required
            />
        </div>


<br></br>
        <div className="form-buttons">
          <button type="submit" className="ui-btn submit-btn">
            Submit Complaint
          </button>

          <button
            type="button"
            className="ui-btn back-btn"
            onClick={goBack}
          >
            Back
          </button>
        </div>
      </form>
    </div>
  );
}
