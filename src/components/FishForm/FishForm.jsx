import React from "react";
import "./FishForm.css";

function FishForm({ fishSize, data, onChange, validation, onAdd }) {
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
          checked={fishSize === "malá"}
          onChange={onChange}
        />
        <label htmlFor="small">malá</label>
      </div>
      <div>
        <input
          type="radio"
          name="breed"
          id="big"
          value="velká"
          checked={fishSize === "velká"}
          onChange={onChange}
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
