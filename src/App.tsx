import { useState } from "react";
import "./App.css";
import Clue1Game from "./Clue1Game";
import { CLUE_1_CODE, CLUE_2_CODE, CLUE_3_CODE } from "./consts";
import Clue2Game from "./Clue2Game";

function App() {
  const [started, setStarted] = useState<boolean>(false);
  const [currClue, setCurrClue] = useState<number>(0)
  const [clue1CodeInput, setClue1CodeInput] = useState<string>("")
  const [clue2CodeInput, setClue2CodeInput] = useState<string>("")
  const [clue3CodeInput, setClue3CodeInput] = useState<string>("")

  return (
    <>
      <div className="container">
        {
          currClue < 4
          ? <h1>Welcome to a Scavenger Hunt!</h1>
          : <h1><a
            href="https://youtube.com/shorts/d-MkNJkbTaw?feature=share"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "#ffffffde",
              textDecoration: "none"
            }}
          >Welcome to a Scavenger Hunt!</a></h1>
        }
        <div style={{ marginLeft: "50px", marginRight: "50px"}}>
          <p>This is a fun scavenger hunt that will reveal a fun surprise when you
            figure out all the clues. Each clue is hidden behind some sort of code.
            Enter the correct code, and the clue will be revealed, which will help
            in figuring out the code for the next clue.
          </p>
        </div>
        {
          !started && (
            <>
              <p>Press the start button below when you're ready!</p>
              <button onClick={() => {
                setStarted(true);
                setCurrClue(1);
              }}>Start</button>
            </>
          )
        }
        {
          started && currClue === 1 && (
            <>
              <Clue1Game></Clue1Game>
              <input
                type="text"
                placeholder="Enter code"
                value={clue1CodeInput}
                onChange={(e) => {
                  setClue1CodeInput(e.target.value);
                  if (Number(e.target.value) == CLUE_1_CODE) {
                    setCurrClue(2);
                  }
                }}
              ></input>
            </>
          )
        }
        {
          started && currClue === 2 && (
            <>
              <Clue2Game></Clue2Game>
              <input
                type="text"
                placeholder="Enter code"
                value={clue2CodeInput}
                onChange={(e) => {
                  setClue2CodeInput(e.target.value);
                  if (Number(e.target.value) == CLUE_2_CODE) {
                    setCurrClue(3);
                  }
                }}
              ></input>
            </>
          )
        }
        {started && currClue === 3 && (
          <>
            <h2>Clue 3: Solve the riddle and find the code!</h2>
            <div>
              <p>Where the fridge light flickers late at night,</p>
              <p>I wait in glass, cool and tight.</p>
              <p>A metal crown you have to twist</p>
              <p>Releases a sharp and sour mist.</p>

              <p>Once green and growing on a vine,</p>
              <p>Now resting in a briny brine.</p>
              <p>I sit with sauces on the shelf.</p>
              <p>Open me and taste for yourself.</p>
              <input
                type="text"
                placeholder="Enter code"
                value={clue3CodeInput}
                onChange={(e) => {
                  setClue3CodeInput(e.target.value);
                  if (Number(e.target.value) == CLUE_3_CODE) {
                    setCurrClue(4);
                  }
                }}
              ></input>
            </div>
          </>
        )}
        {
          started && currClue == 4 && (
            <>
              <h2>Clue 4: There's no clue here...</h2>
              <p>or is there?</p>
            </>
          )
        }
      </div>
    </>
  )
}

export default App
