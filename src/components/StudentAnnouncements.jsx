import { useEffect, useState } from "react";

function StudentAnnouncements() {
  const [announcements, setAnnouncements] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/announcements")
      .then(res => res.json())
      .then(data => setAnnouncements(data));
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>📢 Announcements</h2>

      {announcements.length === 0 ? (
        <p>No announcements</p>
      ) : (
        <ul>
          {announcements.map(a => (
            <li key={a._id}>
              <b>{a.text}</b>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default StudentAnnouncements;