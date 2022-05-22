function App() {
  const RATIO = 1.5;
  const CAP = () => {
    return (
      <div
        className="loading"
      >
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(() => (
          <div className="rect"></div>
        ))}
        <div
          style={{
            position: "absolute",
            top: 80,
            left: 25,
            color: "white",
          }}
        ></div>
      </div>
    );
  };
  return (
    <div>
      <style>
      </style>
      <div
        style={{
          display: "flex",
        }}
      >
        <div
          style={{
            fontSize: 140 * RATIO,
            fontWeight: 700,
            fontStyle: "italic",
            height: 140 * RATIO,
          }}
        >
          J
        </div>
        <div>
          <div
            style={{
              position: "relative",
            }}
          >
            <div
              style={{
                paddingTop: 10 * RATIO,
                fontSize: 100 * RATIO,
                fontWeight: 700,
                fontStyle: "italic",
                height: 110 * RATIO,
              }}
            >
              CB
              <span
                style={{
                  fontSize: 65 * RATIO,
                  transform: "rotate(30deg)",
                  display: "inline-block",
                  animation: 'fadeIn 0.3s ease-out 7s forwards',
                  opacity:0
                }}
              >
                V
              </span>
            </div>
            <div
              style={{
                position: "absolute",
                top: 40,
                right: -50,
              }}
            >
              <img
                style={{
                  transform: "rotate(0deg)",
                  width: 150,
                  animation: 'batting 1s linear 6s forwards'
                }}
                src={"/league2022-logo/bat.png"}
              />
            </div>
            <div
              style={{
                position: "absolute",
                left: -100,
                bottom: -110,
                transform: "scale(0.7)",
                zIndex: 2,
                animation: 
                `move 5s linear 0s forwards,
                 hop 1s ease-out 5s forwards,
                 move3 1s linear 6s forwards
                `
              }}
            >
              <CAP />
            </div>
          </div>
          <div
            style={{
              position: "relative",
            }}
          >
            <div
              style={{
                fontWeight: 700,
                fontStyle: "italic",
                fontSize: 18,
                marginLeft: -10,
                paddingLeft: 5,
                paddingRight: 5,
                borderTop: "3px solid black",
                borderBottom: "3px solid black",
              }}
            >
              JAPAN CAP BASEBALL ASSOCIATION
            </div>
            <div
              style={{
                position: "absolute",
                top: 0,
                left:0,
                width: 318,
                height: 30,
                backgroundColor: "white",
                animation: 'move2 5s linear 0s forwards'
              }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
