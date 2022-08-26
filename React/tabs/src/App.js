import React, { useState } from "react";
import "./App.css";
import Tab from "./components/Tab";

function App() {
  const tabs = [
    {
      id: 1,
      label: "Home",
      content: "React Fans Club",
    },
    {
      id: 2,
      label: "become a Member",
      content: "Swear to the God for your Loyalty to React",
    },
    {
      id: 3,
      label: "about React",
      content: "Dude You DON't KNOW React !!!",
    },
  ];

  const [activeTab, setActiveTab] = useState(tabs[0]);

  const setActive = (id) => {
    setActiveTab(tabs.find((tab) => tab.id === id));
  };

  return (
    <div className="App">
      <Tab list={tabs} setActive={setActive} activeTab={activeTab} />
    </div>
  );
}

export default App;
