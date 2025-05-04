import React, { useState } from "react";
import Header from "./components/Header";
import Tabs from "./components/Tabs";
import Introduction from "./components/Introduction";
import Heritage from "./components/Heritage";
import Reports from "./components/Reports";
import AdminPanel from "./components/AdminPanel";
import "./App.css";

function App() {
  const [activeTab, setActiveTab] = useState("introduction");

  const renderTab = () => {
    switch (activeTab) {
      case "introduction":
        return <Introduction />;
      case "heritage":
        return <Heritage />;
      case "reports":
        return <Reports />;
      case "admin":
        return <AdminPanel />;
      default:
        return <Introduction />;
    }
  };

  return (
    <div className="App">
      <Header />
      <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="tab-content">{renderTab()}</div>
    </div>
  );
}

export default App;
