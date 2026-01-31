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
            href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "#ffffffde",
              textDecoration: "none"
            }}
          >Welcome to a Scavenger Hunt!</a></h1>
        }
        <p>This is a fun scavenger hunt that will reveal a fun surprise when you
          figure out all the clues. Each clue is hidden behind some sort of code.
          Enter the correct code, and the clue will be revealed, which will help
          in figuring out the code for the next clue.
        </p>
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
              <p>In a corner I stand, sleek and bright,</p>
              <p>My belly is blue, my heart warms with light.</p>
              <p>I sip from pods, but never from lips,</p>
              <p>And brew your morning with magical sips.</p>

              <p>I hiss and I gurgle, a steamy ballet,</p>
              <p>Transforming cold water into liquid café.</p>
              <p>I wait on the counter, quiet and near,</p>
              <p>Guess who I am — the barista here?</p>
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
