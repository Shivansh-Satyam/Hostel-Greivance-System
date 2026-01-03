import { useEffect, useState } from "react";

function ViewComplaints() {
  const [complaints, setComplaints] = useState([]);
  const studentId = localStorage.getItem("studentId"); // roll number

  useEffect(() => {
    fetch("http://localhost:5000/api/complaints")
      .then(res => res.json())
      .then(data => {
        const myComplaints = data.filter(
          c => c.studentId === studentId
        );
        setComplaints(myComplaints);
      })
      .catch(err => console.error(err));
  }, [studentId]);
  useEffect(() => {
  const studentId = localStorage.getItem("studentId");

  fetch(`http://localhost:5000/api/complaints/student/${studentId}`)
    .then(res => res.json())
    .then(data => setComplaints(data));
}, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>My Complaints</h2>

      {complaints.length === 0 ? (
        <p>No complaints submitted yet.</p>
      ) : (
        complaints.map(c => (
          <div
            key={c._id}
            style={{
              border: "1px solid #ccc",
              padding: "12px",
              marginBottom: "10px",
              borderRadius: "6px"
            }}
          >
            <p><b>Issue:</b> {c.issueType}</p>
            <p><b>Category:</b> {c.category}</p>
            <p><b>Status:</b> {c.status}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default ViewComplaints;