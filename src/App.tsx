function App() {
  const CircleIcon: React.FC<{ thumbnail_url: string; width: number }> = ({
    thumbnail_url,
    width,
  }) => {
    return (
      <div
        style={{
          width: width,
          height: width,
          border: "2px solid white",
          backgroundSize: `${width}px ${width}px`,
          backgroundImage: `url(${thumbnail_url}), url('/images/petbottle_cap.png')`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
          display: "inline-block",
          borderRadius: "50%",
          margin: 2,
        }}
      ></div>
    );
  };
  const teams = [
    {
      name: "賀茂別雷",
      backgroundColor: "#039",
      id: 162,
    },
    {
      name: "関西学院大学",
      backgroundColor: "#10069f",
      id: 162,
    },
    {
      name: "立命館大学",
      backgroundColor: "#990000",
      id: 162,
    },
    {
      name: "近畿大学",
      backgroundColor: "#014f7d",
      id: 162,
    },
    {
      name: "六神",
      backgroundColor: "#6666cc",
      id: 162,
    },
    {
      name: "学園都市",
      backgroundColor: "#18cba8",
      id: 162,
    },
    {
      name: "淀川",
      backgroundColor: "#03a9f4",
      id: 162,
    },
    {
      name: "大阪大",
      backgroundColor: "#2c287f",
      id: 162,
    },
    {
      name: "龍谷大",
      backgroundColor: "#ed0000",
      id: 162,
    },
    {
      name: "湯山台",
      backgroundColor: "#991d1d",
      id: 162,
    },
    {
      name: "大阪蓋暁",
      backgroundColor: "#000000",
      id: 162,
    },
    {
      name: "吉田",
      backgroundColor: "#00205b",
      id: 162,
    },
  ];
  return (
    <div>
      <style>
        {teams.map((team, idx) => (
          <>
            {`@keyframes move${idx} {
                0% {
                    transform: translateY(-405px);
                }
                100% {
                  transform: translateY(0px);
                }
              }
              @keyframes string-fade {
                0% {
                  opacity: 0;
                }
                100% {
                  opacity:1;
                }
              }
              @keyframes spring {
                0% {
                  color: black;
                }
                100% {
                  color: gold;
                }
              }
              `}
          </>
        ))}
      </style>
      <div
        style={{
          height: 400,
        }}
      >
        <div
          style={{
            display: "flex",
          }}
        >
          {teams.map((team, idx) => (
            <div>
              <div
                className="team"
                style={{
                  zIndex:10000,
                  width: 74,
                  height: 400,
                  marginRight: 5,
                  backgroundColor: team.backgroundColor,
                  boxShadow: "gray 5px 5px 5px",
                  transform: "translateY(-405px)",
                  animation: `move${idx} 1s ease-out ${idx * 0.5}s forwards`,
                }}
              >
                <div
                  style={{
                    color: "white",
                    fontSize: 46,
                    width: 74,
                    writingMode: "vertical-lr",
                    padding: '10px 5px',
                    fontWeight: 'bold'
                  }}
                >
                  {team.name}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div
        style={{
          animation: `string-fade 3s ease-out ${teams.length * 0.5}s forwards`,
          opacity: 0,
          position: 'relative'
        }}
      >
        <img
          width={1440}
          height={400}
          src={'/league2022-logo/sakurafubuki-bg-768x576.jpg'}
          style={{
            objectFit: 'cover',
            position: 'absolute',
            top:0,
            opacity: 0.4
          }}
        />
        <div
          style={{
            height: 140,
            width: teams.length*79,
            fontSize: 70,
            paddingTop: 15,
            textAlign: "left",
            fontWeight: 'bold',
            position: 'absolute'
          }}
        >
          今始まる、新たな歴史。
        </div>
        <div
          style={{
            height: 140,
            width: teams.length*79,
            fontSize: 70,
            paddingTop: 110,
            textAlign: "right",
            fontWeight: 'bold',
            position: 'absolute'
          }}
        >
        「初代<span style={{ animation: `spring 2s ease-out ${teams.length * 0.5 + 3}s forwards`,
            color: 'black' }}>王</span>者」は誰の手に。
        </div>
        <div
          style={{
            height: 140,
            fontSize: 44,
            textAlign: "center",
            width: teams.length*74,
            position: 'absolute',
            top:230
          }}
        >
          関西キャップリーグ 2022 春季
        </div>
        <div
          style={{
            height: 140,
            fontSize: 34,
            textAlign: "center",
            width: teams.length*79,
            position: 'absolute',
            top: 350
          }}
        >
          4/16[土]～7/31[土]
        </div>
      </div>
    </div>
  );
}

export default App;
