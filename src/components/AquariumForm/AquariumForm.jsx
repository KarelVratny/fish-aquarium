import React, { useEffect, useState } from "react";
import "./AquariumForm.css";

function AquariumForm({ data }) {
  // prvnotni nastaveni hodnot formulare
  const [tempAquarium, setTempAquarium] = useState({
    width: "",
    length: "",
    height: "",
  });

  const [disable, setDisable] = useState(true);

  // pocet ryb dle velikosti
  let small = 0;
  let big = 0;

  data.forEach((fish) => {
    if (fish.breed === "malá") {
      small++;
    } else if (fish.breed === "velká") {
      big++;
    }
  });

  // pozadovana velikost akvaria v l
  let requiredSize = small * 10 + big * 20;

  // zadana velikost akvaria v l
  let submittedSize =
    parseFloat(tempAquarium.width * tempAquarium.length * tempAquarium.height) /
    1000;

  // propsani rozmeru akvaria
  const handleAquariumSize = (event) => {
    setTempAquarium({
      ...tempAquarium,
      [event.target.name]: event.target.value,
    });
  };

  // useEffect(() => {
  //   console.log(tempAquarium);
  // }, [tempAquarium]);

  // BUTTON disable, pri nedostatecne velikosti akvaria
  useEffect(() => {
    const temp = submittedSize < requiredSize;
    setDisable(temp);
  }, [tempAquarium]);

  return (
    <div className="aquarium-form">
      <h3>Návrh velikosti akvária</h3>
      <p>Počet malých ryb: {small} ks</p>
      <p>Počet velkých ryb: {big} ks</p>
      <p>Požadovaný objem akvária: {requiredSize} l</p>
      <p>Zadaný objem akvária: {submittedSize} l</p>
      <input
        type="number"
        min="0"
        placeholder="šířka (cm)"
        name="width"
        value={tempAquarium.width}
        onChange={handleAquariumSize}
      />
      <input
        type="number"
        min="0"
        placeholder="délka (cm)"
        name="length"
        value={tempAquarium.length}
        onChange={handleAquariumSize}
      />
      <input
        type="number"
        min="0"
        placeholder="výška (cm)"
        name="height"
        value={tempAquarium.height}
        onChange={handleAquariumSize}
      />
      <button
        disabled={disable}
        style={{ backgroundColor: disable ? "red" : "green" }}
      >
        Schválit rozměry
      </button>
    </div>
  );
}

export default AquariumForm;
