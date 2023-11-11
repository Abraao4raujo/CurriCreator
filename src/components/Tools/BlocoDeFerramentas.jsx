import React from "react";

const BlocoDeFerramenta = ({ nameDiv, setDados }) => {
  return (
    <div>
      <label>{nameDiv}</label>
      <input
        type="text"
        onChange={(event) => {
          setDados(event.target.value);
        }}
      />
      {/* {nameDiv.startsWith("Experiencia") ? (
        <input
          type="text"
          onChange={(event) => {
            setDados(event.target.value);
          }}
        />
      ) : (
        ""
      )} */}
    </div>
  );
};

export default BlocoDeFerramenta;
