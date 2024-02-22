import React from "react";
import "./FishForm.css";

function FishForm({ data, onChange, validation, onAdd }) {
  return (
    <div className="fish-form">
      <input
        type="text"
        placeholder="jméno ryby"
        name="name"
        value={data.name}
        onChange={onChange}
      />
      <input
        type="text"
        placeholder="velikost ryby"
        name="breed"
        value={data.breed}
        onChange={onChange}
      />
      <button disabled={!validation} onClick={onAdd}>
        Přidat
      </button>
    </div>
  );
}

export default FishForm;
