import React from 'react';
import ColorGame from './components/color_game/color_game'
import ColorMatch from './components/ColorMatch/ColorMatch'
import OrderClick from './components/OrderClick/OrderClick'

function App() {
  return (
    <div className="App">
      {/* Todo: Add routes here */}
      {/* {<ColorGame></ColorGame>} */}
      {/* <OrderClick> </OrderClick> */}
      <ColorMatch />
    </div>
  );
}

export default App;
