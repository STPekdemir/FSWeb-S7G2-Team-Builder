import React from "react";

function Form({ setTeamData, setInputData, inputData, teamData }) {
  const { isim, soyisim, meslek, email } = inputData;
  function handleOnChange(event) {
    setInputData({ ...inputData, [event.target.id]: event.target.value });
  }
  function handleSubmit(event) {
    event.preventDefault();
    setTeamData([...teamData, inputData]);
  }
  return (
    <>
      <form
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
        }}
        onSubmit={handleSubmit}
      >
        <label style={{ display: "block" }}>İsim: </label>
        <input
          style={{ display: "block" }}
          value={isim}
          id="isim"
          onChange={handleOnChange}
        />

        <label style={{ display: "block" }}>Soyisim: </label>
        <input
          style={{ display: "block" }}
          value={soyisim}
          id="soyisim"
          onChange={handleOnChange}
        />

        <label style={{ display: "block" }}>Meslek: </label>
        <input
          style={{ display: "block" }}
          value={meslek}
          id="meslek"
          onChange={handleOnChange}
        />

        <label style={{ display: "block" }}>Email: </label>
        <input
          style={{ display: "block" }}
          value={email}
          id="email"
          onChange={handleOnChange}
        />

        <button type="submit">Oluştur</button>
      </form>
    </>
  );
}

export default Form;
