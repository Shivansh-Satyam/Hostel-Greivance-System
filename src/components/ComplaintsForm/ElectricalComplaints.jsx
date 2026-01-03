import { useState } from "react";
import "./Complaints.css";

export default function ElectricalComplaints({ goBack }) {
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
    setFormData((p) => ({ ...p, [name]: value }));
  };

   const handleSubmit = async (e) => {
  e.preventDefault();

  const complaintPayload = {
    studentName: formData.studentName,
    studentId: formData.rollNumber,
    contactNumber: formData.contactNumber,

    category: "Electrical",
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
            <h2>Electrical Complaint Form</h2>
        </div>
      

      <form className="form" onSubmit={handleSubmit}>
        <div className="form-row">
          <label>Student Name</label>
          <input 
            name="studentName"
            placeholder="Enter your full name"
            value={formData.studentName}
            id="studentName" 
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
          <label>Issue Type</label>
          <select
            id="issueType"
            name="issueType" 
            value={formData.issueType}
            onChange={handleInputChange} 
            required

        >
            <option value="">Select Issue type</option>
            <option value="fan-not-working">Fan Not Working</option>
            <option value="light-issue">Light Issue</option>
            <option value="switch-board-problem">Switch Board Problem</option>
            <option value="power-fluctuation">Power Fluctuation</option>
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
    <br />
        <div className="form-buttons">
          <button className="ui-btn submit-btn">Submit</button>
          <button type="button" className="ui-btn back-btn" onClick={goBack}>
            Back
          </button>
        </div>
      </form>
    </div>
  );
}
