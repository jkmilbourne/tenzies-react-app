import react, { useState, useEffect } from "react";

export default function App() {
  return (
    <main className="app">
      <div className="container">
        <div className="playfield">
          <h1 className="title">Tenzies</h1>
          <p className="description">
            Roll until all dice are the same. Click each die to freeze it at its
            current value between rolls.
          </p>
          <div className="dice">
            <div className="die">1</div>
            <div className="die">1</div>
            <div className="die">1</div>
            <div className="die">1</div>
            <div className="die">1</div>
            <div className="die">1</div>
            <div className="die">1</div>
            <div className="die">1</div>
            <div className="die">1</div>
            <div className="die">1</div>
          </div>
          <button className="roll">Roll</button>
        </div>
      </div>
    </main>
  );
}
