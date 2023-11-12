import React from "react";
import { useState } from "react";

const BlocoDeFerramenta = ({ nameDiv, setDados }) => {
  return (
    <>
      <div style={{display:"none"}} className="input_changes">
        <label>{nameDiv}</label>
        <input
          type="text"
          onChange={(event) => {
            setDados(event.target.value);
          }}
        />
      </div>
    </>
  );
};

export default BlocoDeFerramenta;
