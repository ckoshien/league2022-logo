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
      name: "早大紺碧",
      backgroundColor: "#9B003F",
      id: 162,
    },
    {
      name: "横国ときわ",
      backgroundColor: "#1955A6",
      id: 57,
    },
    {
      name: "城東",
      backgroundColor: "#00007B",
      id: 232,
    },
    {
      name: "短冊",
      backgroundColor: "#DC143C",
      id: 58,
    },
    {
      name: "世田谷",
      backgroundColor: "#1D6D3F",
      id: 65,
    },
    {
      name: "東京大",
      backgroundColor: "#ADD8E6",
      id: 155,
    },
    {
      name: "目白",
      backgroundColor: "#79CAFF",
      id: 73,
    },
    {
      name: "青山学院大",
      backgroundColor: "#277559",
      id: 239,
    },
    
    {
      name: "早大臙脂",
      backgroundColor: "#9B003F",
      id: 162,
    },
    {
      name: "アルパコラ",
      backgroundColor: "#DC143C",
      id: 58,
    },
    {
      name: "横国みなと",
      backgroundColor: "#1955A6",
      id: 57,
    },
    {
      name: "横国みらい",
      backgroundColor: "#1955A6",
      id: 57,
    },
    {
      name: "生田農工大",
      backgroundColor: "#483698",
      id: 61,
    },
    {
      name: "三田",
      backgroundColor: "#001E62",
      id: 106,
    },
    {
      name: "Eintracht",
      backgroundColor: "#ED591A",
      id: 202,
    },
    {
      name: "上智大",
      backgroundColor: "#800000",
      id: 94,
    },
    {
      name: "千葉大",
      backgroundColor: "#C6002F",
      id: 111,
    },
    {
      name: "専修大",
      backgroundColor: "#000000",
      id: 251,
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
              @keyframes ribbon {
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
                  color: #FF66C4;
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
            position: 'relative'
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
                <CircleIcon
                  thumbnail_url={`https://cap-baseball.com/images/${team.id}.jpg`}
                  width={64}
                />
                <div
                  style={{
                    color: "white",
                    fontSize: 46,
                    width: 74,
                    marginTop: 20,
                    writingMode: "vertical-lr",
                    padding: "0 5px",
                    fontWeight: 'bold'
                  }}
                >
                  {team.name}
                </div>
              </div>
            </div>
          ))}
          <div
            style={{
              bottom:20,
              right: 160,
              position:'absolute',
              width: 77*2,
              height:10,
              backgroundColor: 'red',
              opacity:0,
              animation: `ribbon 2s ease-out ${teams.length * 0.5 + 1}s forwards`,
              transform: 'rotate(-5deg)'
            }}
          ></div>
          <div
            style={{
              bottom:20,
              right: 0,
              position:'absolute',
              width: 77*2,
              height:10,
              backgroundColor: 'red',
              opacity:0,
              animation: `ribbon 2s ease-out ${teams.length * 0.5 + 1}s forwards`,
              transform: 'rotate(-5deg)'
            }}
          ></div>
        </div>
      </div>
      <div style={{
        height:100,
        display: 'flex'
      }}>
        <div style={{
          width: 79*8 -5,
          fontSize:42,
          boxShadow: "gray 5px 5px 5px",
          textAlign: 'center',
          paddingTop: 15
        }}>Wind(春風)リーグ</div>
        <div style={{
          width: 79*10 - 5,
          fontSize:42,
          boxShadow: "gray 5px 5px 5px",
          textAlign: 'center',
          paddingTop: 15
        }}>Shine(春光)リーグ</div>
      </div>
      <div
        style={{
          animation: `string-fade 3s ease-out ${teams.length * 0.5 + 3}s forwards`,
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
            paddingTop: 60,
            textAlign: "center",
            fontWeight: 'bold',
            position: 'absolute'
          }}
        >
          仲間とつかめ、<span style={{
            animation: `spring 2s ease-out ${teams.length * 0.5 + 4}s forwards`,
            color: 'black'
          }}>春</span>の栄冠。
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
          関東キャップリーグ 2022 春季
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
          5/21[土]～8/20[土]
        </div>
      </div>
    </div>
  );
}

export default App;
