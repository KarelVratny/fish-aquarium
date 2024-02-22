import React from "react";
import "./FishForm.css";
import { useState, useEffect } from "react";

function FishForm({ data, onChange, validation, onAdd, handleDataToParent }) {
  // velikost ryby
  const [sizeOfFish, setSizeOfFish] = useState("malá");

  // funkce pro prepinani radio buttonu
  const handleSize = (e) => {
    setSizeOfFish(e.target.value);
  };

  // handleDataToParent(sizeOfFish);

  // Use useEffect to call handleDataToParent when sizeOfFish changes
  useEffect(() => {
    handleDataToParent(sizeOfFish);
  }, [sizeOfFish, handleDataToParent]);

  return (
    <div className="fish-form">
      <input
        type="text"
        placeholder="jméno ryby"
        name="name"
        value={data.name}
        onChange={onChange}
      />
      <div>
        <input
          type="radio"
          name="breed"
          id="small"
          value="malá"
          checked={sizeOfFish === "malá"}
          onChange={handleSize}
        />
        <label htmlFor="small">malá</label>
      </div>
      <div>
        <input
          type="radio"
          name="breed"
          id="big"
          value="velká"
          checked={sizeOfFish === "velká"}
          onChange={handleSize}
        />
        <label htmlFor="big">velká</label>
      </div>
      <button disabled={!validation} onClick={onAdd}>
        Přidat
      </button>
    </div>
  );
}

export default FishForm;
