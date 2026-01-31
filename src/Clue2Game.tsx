import { useState } from "react";
import { JigsawPuzzle } from "react-jigsaw-puzzle/lib";
import "react-jigsaw-puzzle/lib/jigsaw-puzzle.css";
import { CLUE_2_CODE } from "./consts";

export default function Clue2Game() {
    const [solved, setSolved] = useState<boolean>(false);

    return (
        <>
            <div style={{ width: "400px", height: "400px", marginBottom: "150px" }}>
                <h2>Clue 2: Solve the puzzle!</h2>
                <JigsawPuzzle
                    imageSrc="/jackson-in-bin.jpeg"
                    rows={3}
                    columns={3}
                    onSolved={() => setSolved(true)}
                />
                {solved && (<><p>The code is: {CLUE_2_CODE}</p></>)}
            </div>
        </>
    )
}
