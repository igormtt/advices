import { useState } from "react";
import { Header } from "./components/Header";
import "./index.css";

interface IAdvice {
  slip: {
    id: number;
    advice: string;
  };
}

export function App() {
  const [advice, setAdvice] = useState<IAdvice | null>(null);

  async function generateAdvice(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();

    const response = await fetch("https://api.adviceslip.com/advice");
    const data = await response.json();

    setAdvice(data);
  }

  return (
      <div className="content">
        <Header />

        <div className="container">

          <div className="generate_advice">

            <div className="title">
              <h1>Generate your advice of the day</h1>
            </div>

            <div className="advice">
              {advice ? (
                <h2 id="adivice">"{advice.slip.advice}"</h2>
              ) : (
                <h2>Your advice will be generated here!</h2>
              )}
            </div>

            <div className="button">
              <button onClick={generateAdvice}>Generate advice</button>
            </div>
          </div>

        </div>
      </div>
  );
}
