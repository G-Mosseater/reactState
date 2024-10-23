import { useState } from "react";
import "./App.css";

function App() {
  const [click, setClick] = useState(0);
  const [hovered, setHovered] = useState(false);
  const mouseEnter = () => {
    setHovered(true);
  };
  const mouseLeave = () => {
    setHovered(false);
  };
  const eatCheese = () => {
    setClick(click + 1);
    if (click >= 9) {
      setShowImage(true);
    }
  };
  const [showImage, setShowImage] = useState(false);

  const textColor = hovered ? "#ffbc42" : "whitesmoke";
  const textSize = hovered ? "3rem" : "2rem";
  const size = hovered ? "width: 20%" : "width:15%";

  return (
    <>
      <div className="main">
        <div className="button_container">
          <p
            onMouseEnter={mouseEnter}
            onMouseLeave={mouseLeave}
            style={{
              color: textColor,
              fontSize: textSize,
              transition: "all 0.8s ease",
            }}
          >
            You ate {click} pieces of cheesee
          </p>
          <button className="butt" onClick={eatCheese}>
            Eat cheese
          </button>
          <img
            style={{ width: size }}
            onMouseEnter={mouseEnter}
            onMouseLeave={mouseLeave}
            className="cheese"
            src="https://img.icons8.com/?size=100&id=80397&format=png&color=000000"
          />
          <img className = 'mouse'
            style={{ transition: "all 2s ease", opacity: showImage ? 1 : 0 }}
            src="https://img.icons8.com/?size=100&id=uA61rVCp4fyw&format=png&color=000000"
          />
        </div>
      </div>
    </>
  );
}

export default App;
