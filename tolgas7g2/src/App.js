import "./App.css";
import React, { useState } from "react";

import Team from "./Team";
import Form from "./Form";

function App() {
  const [teamData, setTeamData] = useState([
    {
      isim: "Tolga",
      soyisim: "Pekdemir",
      meslek: "İşsiz",
      email: "stp@gmail.com",
    },
  ]);
  const [inputData, setInputData] = useState({
    isim: "",
    soyisim: "",
    meslek: "",
    email: "",
  });
  return (
    <div>
      <Team teamData={teamData} />
      <Form
        setTeamData={setTeamData}
        inputData={inputData}
        setInputData={setInputData}
        teamData={teamData}
      />
    </div>
  );
}

export default App;
