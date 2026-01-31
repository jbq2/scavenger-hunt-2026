import { useEffect, useRef, useState } from "react";

export default function Clue1Game() {
  const [position, setPosition] = useState(0); // 0–100
  const [direction, setDirection] = useState(1);
  const [isRunning, setIsRunning] = useState(true);
  const [success, setSuccess] = useState(false);

  const animationRef = useRef<number | null>(null);

  const speed = 1.5; // adjust for difficulty
  const targetStart = 47.5;
  const targetEnd = 52.5;

  useEffect(() => {
    if (!isRunning) return;

    const animate = () => {
      setPosition((prev) => {
        let next = prev + direction * speed;

        if (next >= 100) {
          next = 100;
          setDirection(-1);
        }

        if (next <= 0) {
          next = 0;
          setDirection(1);
        }

        return next;
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [direction, isRunning]);

  const handleStop = () => {
    setIsRunning(false);

    if (position >= targetStart && position <= targetEnd) {
      setSuccess(true);
    }
  };

  const handleRetry = () => {
    setSuccess(false);
    setPosition(0);
    setDirection(1);
    setIsRunning(true);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Clue 1: Stop the marker in the green zone!</h2>

      <div
        style={{
          position: "relative",
          width: "400px",
          height: "30px",
          border: "2px solid black",
          margin: "20px auto",
        }}
      >
        {/* Target Zone */}
        <div
          style={{
            position: "absolute",
            left: `${targetStart}%`,
            width: `${targetEnd - targetStart}%`,
            height: "100%",
            backgroundColor: "lightgreen",
          }}
        />

        {/* Moving Marker */}
        <div
          style={{
            position: "absolute",
            left: `${position}%`,
            transform: "translateX(-50%)",
            width: "10px",
            height: "100%",
            backgroundColor: "red",
          }}
        />
      </div>

      {isRunning && <button onClick={handleStop}>STOP</button>}

      {!isRunning && !success && (
        <div>
          <p>Missed! Try again.</p>
          <button onClick={handleRetry}>Retry</button>
        </div>
      )}

      {success && (
        <div>
          <h3>Success!</h3>
          <p>The code can be found <a href="https://www.youtube.com/watch?v=h35g2e9aIIk" target="_blank" rel="noopener noreferrer">here</a></p>
        </div>
      )}
    </div>
  );
}
