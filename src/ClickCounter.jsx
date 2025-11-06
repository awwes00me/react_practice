import React, { useState } from "react";

function ClickCounter() {
  const [counter, setCounter] = useState(0);
  const [clicks, setClicks] = useState(0);

  const handleClick = () => {
    // Увеличиваем счётчик кликов
    setClicks((prev) => prev + 1);

    // Если это второй клик — сбрасываем clicks и увеличиваем counter
    setClicks((prev) => {
      if (prev + 1 === 2) {
        setCounter((c) => c + 1);
        return 0; // сбрасываем количество кликов
      }
      return prev + 1;
    });
  };

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h2>Счётчик: {counter}</h2>
      <button
        onClick={handleClick}
        style={{
          padding: "10px 20px",
          backgroundColor: "blue",
          color: "white",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
        }}
      >
        Кликни дважды
      </button>
    </div>
  );
}

export default ClickCounter;
