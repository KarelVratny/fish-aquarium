import "./App.css";
import rawData from "./fishData.json";
import { useEffect, useState } from "react";
import PageContainer from "./components/PageContainer/PageContainer";
import Toggler from "./components/Toggler/Toggler";
import FishList from "./components/FishList/FishList";
import FishForm from "./components/FishForm/FishForm";

function App() {
  // data ryb
  const [listOfFish, setListOfFish] = useState(rawData.fish);
  // nova ryba
  const [newFish, setNewFish] = useState({
    id:
      listOfFish.length > 0
        ? Math.max(...listOfFish.map((fish) => fish.id)) + 1
        : 1,
    name: "",
    breed: "",
  });
  // promena pro predani velikosti ryby
  let fishSize;

  const [valid, setValid] = useState(false);

  const validateData = (fish) => {
    if (fish.name.trim().length === 0) {
      setValid(false);
    }
    // else if (fish.breed.trim().length === 0) {
    //   setValid(false);
    // }
    else {
      setValid(true);
    }
  };

  const [activeTab, setActiveTab] = useState(1);

  // prepinani mezi okny
  const handleChoose = (source) => {
    switch (source) {
      case "list-of-fish": {
        setActiveTab(1);
        break;
      }
      case "fishbowl": {
        setActiveTab(2);
        break;
      }
      default:
        break;
    }
  };

  // mazani ryb
  const handleDelete = (idToDelete) => {
    setListOfFish(listOfFish.filter((fish) => fish.id !== idToDelete));
  };

  const handleChange = (event) => {
    const updatedFish = {
      ...newFish,
      [event.target.name]: event.target.value,
      breed: fishSize,
    };
    setNewFish(updatedFish);
    validateData(updatedFish);
  };

  // pridani ryby
  const handleAdd = () => {
    setListOfFish((listOfFish) => {
      return [...listOfFish, newFish];
    });
    const newFishId = newFish.id + 1;
    const updatedFish = {
      id: newFishId,
      name: "",
      breed: "",
    };
    setNewFish(updatedFish);
    validateData(updatedFish);
  };

  // velikost z RBtn
  const handleDataToParent = (size) => {
    fishSize = size;
  };

  return (
    <div className="App">
      <PageContainer>
        <Toggler active={activeTab} onChoose={handleChoose} />
        {activeTab === 1 && (
          <>
            <FishList data={listOfFish} onDelete={handleDelete} />
            <FishForm
              data={newFish}
              validation={valid}
              onChange={handleChange}
              onAdd={handleAdd}
              handleDataToParent={handleDataToParent}
            />
          </>
        )}
        {activeTab === 2 && (
          <>
            <h2>Fishbowl</h2>
          </>
        )}
      </PageContainer>
    </div>
  );
}

export default App;
