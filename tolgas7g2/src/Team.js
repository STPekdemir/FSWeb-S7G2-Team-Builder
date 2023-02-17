import React from "react";

const Team = ({ teamData }) => {
  return (
    <div>
      <h1>Takım</h1>
      <div>
        {teamData.map((o) => (
          <div key={o.isim}>
            <h2>
              {o.isim} {o.soyisim}
            </h2>
            <h3>{o.meslek}</h3>
            <h3>{o.email}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
