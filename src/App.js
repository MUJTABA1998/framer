import { useState } from "react";
import C1 from "./comps/c1";
import C2 from "./comps/c2";

function App() {
  const [step, setStep] = useState(0);
  const [animate, setAnimate] = useState(true);

  function renderComps() {
    switch (step) {
      case 0:
        return <C1 animate={animate} />;

      case 1:
        return <C2 animate={animate} />;
      default:
        return null;
    }
  }

  return (
    <div className="px-24 py-8">
      <div className="flex w-full gap-10 py-2">
        <button
          onClick={() => {
            setAnimate(false);
            setTimeout(() => {
              setAnimate(true);
              setStep(0);
            }, 300);
          }}
        >
          Previous
        </button>
        <button
          onClick={() => {
            setAnimate(false);
            setTimeout(() => {
              setAnimate(true);
              setStep(1);
            }, 300);
          }}
        >
          Next
        </button>
      </div>
      <div className="mt-10">{renderComps()}</div>
    </div>
  );
}

export default App;
