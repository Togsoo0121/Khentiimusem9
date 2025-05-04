import React, { useState } from "react";
import "./AdminPanel.css";

function AdminPanel() {
  const [title, setTitle] = useState("Музейн танилцуулга");
  const [content, setContent] = useState("Энд танилцуулгын агуулга байрлана.");

  const handleSave = () => {
    alert("Өөрчлөлт хадгалагдлаа!");
    // Энд хадгалах логик нэмэх боломжтой
  };

  return (
    <div className="admin-panel">
      <h2>Удирдлага</h2>
      <label>
        Гарчиг:
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </label>
      <label>
        Агуулга:
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </label>
      <button onClick={handleSave}>Хадгалах</button>
    </div>
  );
}

export default AdminPanel;
