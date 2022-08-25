import './App.css';
import React, { useState } from 'react'
import Form from './components/Form';
import BoxDisplay from "./components/Box"

function App() {
  const [color_sizeList, addColorSizeList] = useState([])

  const addBox = (color, size) => {
    addColorSizeList([...color_sizeList, { color: color, size: size }])
  }

  return (
    <div className="App">
      <Form addBox={addBox} />
      <div className="card mt-5">
        <div className="card-body">
          <BoxDisplay list={color_sizeList} />
        </div>
      </div>
    </div>
  );
}

export default App;
