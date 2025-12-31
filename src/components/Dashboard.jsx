import { useState } from "react";
import MainPanel from "./mainPanel";
import LanComplaints from "./ComplaintsForm/LanComplaints";
import CivilComplaints from "./ComplaintsForm/CivilComplaints";
import ElectricalComplaints from "./ComplaintsForm/ElectricalComplaints";

export default function Dashboard() {
  const [page, setPage] = useState("dashboard");

  return (
    <>
      {page === "dashboard" && (
        <MainPanel
          openLan={() => setPage("lan")}
          openCivil={() => setPage("civil")}
          openElectrical={() => setPage("electrical")}
        />
      )}

      {page === "lan" && <LanComplaints goBack={() => setPage("dashboard")} />}
      {page === "civil" && <CivilComplaints goBack={() => setPage("dashboard")} />}
      {page === "electrical" && (
        <ElectricalComplaints goBack={() => setPage("dashboard")} />
      )}
    </>
  );
}
