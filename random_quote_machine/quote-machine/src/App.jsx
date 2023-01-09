import React from "react";
import Quote from './components/Quote'
import Navbar from './components/Navbar'
import { useState } from "react";

const colors = [
  '#77DD77',
  '#836953',
  '#89cff0',
  '#99c5c4',
  '#9adedb',
  '#aa9499',
  '#aaf0d1',
  '#b2fba5',
  '#b39eb5',
  '#bdb0d0',
  '#bee7a5',
  '#befd73',
  '#c1c6fc',
  '#c6a4a4',
  '#cb99c9',
  '#ff6961',
  '#ff694f',
  '#ff9899',
  '#ffb7ce',
  '#ca9bf7',
];


function App() {
	const [curColor, setColor] = useState(colors[Math.floor(Math.random() * colors.length)])

	const changeColor = () => { setColor(colors[Math.floor(Math.random() * colors.length)]) }

	return (
		<div className="App" style={{background: curColor, transition: '250ms'}}>
			<Navbar />
			<div id="flex" className="d-flex align-items-center justify-content-center" style={{height: '100vh'}}>
				<Quote color={curColor} changeColor={changeColor} />
			</div>
		</div>
	);
}

export default App;
