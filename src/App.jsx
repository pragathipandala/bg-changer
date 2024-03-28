import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";

function App() {
  const [color, setColor] = useState("black");

  return (
    <>
      <div
        className="w-full h-screen duration-400"
        style={{ background: color }}
      >
        <h1 className=" text-center font-bold text-8xl text-zinc-500 opacity-30">
          I am {color}{" "}
        </h1>
        <div className="flex flex-wrap fixed bottom-10 justify-center inset-x-0 px-2 ">
          <div className="flex flex-wrap justify-center shadow-lg gap-3 rounded-3xl bg-slate-50 px-3 py-2">
            <button
              className="outline-none px-4 py-1 rounded-full shadow-xl"
              onClick={() => {
                setColor("pink");
              }}
            >
              Pink <FontAwesomeIcon icon={faCircle} color="pink" />
            </button>
            <button
              className="outline-none px-4 py-1 rounded-full shadow-xl"
              onClick={() => {
                setColor("yellow");
              }}
            >
              Yellow <FontAwesomeIcon icon={faCircle} color="yellow" />
            </button>
            <button
              className="outline-none px-4 py-1 rounded-full shadow-xl"
              onClick={() => {
                setColor("orange");
              }}
            >
              Orange <FontAwesomeIcon icon={faCircle} color="orange" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
