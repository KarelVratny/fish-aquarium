import "./App.css";
import rawData from "./fishData.json";
import { useEffect, useState } from "react";
import PageContainer from "./components/PageContainer/PageContainer";
import Toggler from "./components/Toggler/Toggler";

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

  const [valid, setValid] = useState(false);

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

  return (
    <div className="App">
      <PageContainer>
        <Toggler active={activeTab} onChoose={handleChoose} />
        {activeTab === 1 && (
          <>
            <h2>Fish list</h2>
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
